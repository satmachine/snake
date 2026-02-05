import { NetworkManager } from './network';
import { MAX_PLAYERS, MULTIPLAYER_COLORS } from '../definitions';
import { getTerrainHeight } from '../utils';
import type { PlayerId, PlayerInfo, LobbyStatePayload, LobbyStartPayload } from './protocol';

export class LobbyManager {
    network: NetworkManager;
    players: Map<PlayerId, PlayerInfo> = new Map();
    onPlayersChanged?: (players: PlayerInfo[]) => void;
    onGameStart?: (payload: LobbyStartPayload) => void;
    onPlayerLeft?: (playerId: PlayerId) => void;

    private localName: string = 'PLAYER';

    constructor(network: NetworkManager) {
        this.network = network;
        this.setupListeners();
    }

    private setupListeners(): void {
        this.network.on('lobby:join', (payload: any) => {
            if (this.network.isHost) {
                this.handleJoin(payload.playerId, payload.name);
            }
        });

        this.network.on('lobby:state', (payload: LobbyStatePayload) => {
            // Clients receive authoritative lobby state from host
            if (!this.network.isHost) {
                this.players.clear();
                for (const p of payload.players) {
                    this.players.set(p.id, p);
                }
                this.notifyPlayersChanged();
            }
        });

        this.network.on('lobby:start', (payload: LobbyStartPayload) => {
            if (this.onGameStart) this.onGameStart(payload);
        });

        this.network.on('lobby:leave', (payload: any) => {
            if (this.network.isHost) {
                this.handleLeave(payload.playerId);
            }
        });

        // Presence-based disconnect detection
        this.network.on('presence:leave', (data: any) => {
            if (this.network.isHost && data.presences) {
                for (const p of data.presences) {
                    if (p.playerId && p.playerId !== this.network.playerId) {
                        this.handleLeave(p.playerId);
                    }
                }
            }
        });
    }

    // --- Host creates room ---
    async createRoom(name: string): Promise<string> {
        this.localName = name.toUpperCase().slice(0, 10) || 'HOST';
        const code = await this.network.createRoom();

        // Add host as first player
        const hostInfo: PlayerInfo = {
            id: this.network.playerId,
            name: this.localName,
            colorIndex: 0,
            isHost: true,
            ready: true,
        };
        this.players.set(this.network.playerId, hostInfo);
        this.broadcastLobbyState();
        return code;
    }

    // --- Client joins room ---
    async joinRoom(code: string, name: string): Promise<boolean> {
        this.localName = name.toUpperCase().slice(0, 10) || 'PLAYER';
        const success = await this.network.joinRoom(code);
        if (!success) return false;

        // Send join request to host
        this.network.sendLobbyJoin({
            playerId: this.network.playerId,
            name: this.localName,
        });
        return true;
    }

    // --- Host handles join ---
    private handleJoin(playerId: PlayerId, name: string): void {
        if (this.players.size >= MAX_PLAYERS) return;
        if (this.players.has(playerId)) return;

        const colorIndex = this.getNextColorIndex();
        const info: PlayerInfo = {
            id: playerId,
            name: name || 'PLAYER',
            colorIndex,
            isHost: false,
            ready: false,
        };
        this.players.set(playerId, info);
        this.broadcastLobbyState();
    }

    // --- Host handles leave ---
    private handleLeave(playerId: PlayerId): void {
        if (!this.players.has(playerId)) return;
        this.players.delete(playerId);
        // Reassign color indices to keep them contiguous
        let idx = 0;
        for (const [, p] of this.players) {
            p.colorIndex = idx++;
        }
        this.broadcastLobbyState();
        if (this.onPlayerLeft) this.onPlayerLeft(playerId);
    }

    private getNextColorIndex(): number {
        const used = new Set<number>();
        for (const [, p] of this.players) {
            used.add(p.colorIndex);
        }
        for (let i = 0; i < MULTIPLAYER_COLORS.length; i++) {
            if (!used.has(i)) return i;
        }
        return 0;
    }

    private broadcastLobbyState(): void {
        const payload: LobbyStatePayload = {
            players: Array.from(this.players.values()),
            roomCode: this.network.roomCode,
            hostId: this.network.playerId,
        };
        this.network.sendLobbyState(payload);
        this.notifyPlayersChanged();
    }

    private notifyPlayersChanged(): void {
        if (this.onPlayersChanged) {
            this.onPlayersChanged(Array.from(this.players.values()));
        }
    }

    // --- Host starts game ---
    startGame(): void {
        if (!this.network.isHost) return;
        if (this.players.size < 2) return;

        const terrainSeed = Math.floor(Math.random() * 2147483647) + 1;
        const playerOrder = Array.from(this.players.keys());
        const spawns = this.generateSpawns(playerOrder, terrainSeed);

        const payload: LobbyStartPayload = {
            terrainSeed,
            spawns,
            playerOrder,
            countdownEndTime: Date.now() + 3500,
        };
        this.network.sendLobbyStart(payload);
        // Also trigger locally
        if (this.onGameStart) this.onGameStart(payload);
    }

    private generateSpawns(
        playerIds: PlayerId[],
        _seed: number
    ): Record<PlayerId, { x: number; z: number; angle: number }> {
        const spawns: Record<PlayerId, { x: number; z: number; angle: number }> = {};
        const minDistance = 50;
        const minObstacleDistance = 20; // Minimum distance from any obstacle
        const usedPositions: { x: number; z: number }[] = [];

        for (const pid of playerIds) {
            let found = false;
            let attempts = 0;
            while (!found && attempts < 300) { // Increased from 200 to 300
                const tx = (Math.random() - 0.5) * 200;
                const tz = (Math.random() - 0.5) * 200;
                const h = getTerrainHeight(tx, tz);

                // Must be on land, not too high
                if (h > -18 && h < 10) {
                    // Check distance from other players
                    let tooClose = false;
                    for (const used of usedPositions) {
                        const dx = tx - used.x;
                        const dz = tz - used.z;
                        if (dx * dx + dz * dz < minDistance * minDistance) {
                            tooClose = true;
                            break;
                        }
                    }

                    // Check obstacles (approximate - sample grid around spawn)
                    if (!tooClose) {
                        let hasObstacle = false;
                        for (let ox = -minObstacleDistance; ox <= minObstacleDistance; ox += 5) {
                            for (let oz = -minObstacleDistance; oz <= minObstacleDistance; oz += 5) {
                                const checkX = tx + ox;
                                const checkZ = tz + oz;
                                const checkH = getTerrainHeight(checkX, checkZ);

                                // Detect steep slopes (likely obstacle or cliff)
                                const slope = Math.abs(checkH - h);
                                if (slope > 5.0) {
                                    hasObstacle = true;
                                    break;
                                }
                            }
                            if (hasObstacle) break;
                        }

                        if (!hasObstacle) {
                            const angle = Math.random() * Math.PI * 2;
                            spawns[pid] = { x: tx, z: tz, angle };
                            usedPositions.push({ x: tx, z: tz });
                            found = true;
                        }
                    }
                }
                attempts++;
            }
            // Fallback if no safe position found
            if (!found) {
                console.warn(`Could not find safe spawn for player ${pid}, using fallback`);
                const angle = (playerIds.indexOf(pid) / playerIds.length) * Math.PI * 2;
                const dist = 60;
                spawns[pid] = {
                    x: Math.cos(angle) * dist,
                    z: Math.sin(angle) * dist,
                    angle,
                };
            }
        }
        return spawns;
    }

    leaveRoom(): void {
        this.network.sendLobbyLeave();
        this.players.clear();
    }

    getLocalPlayer(): PlayerInfo | undefined {
        return this.players.get(this.network.playerId);
    }

    getPlayerList(): PlayerInfo[] {
        return Array.from(this.players.values());
    }

    cleanup(): void {
        this.players.clear();
        this.onPlayersChanged = undefined;
        this.onGameStart = undefined;
        this.onPlayerLeft = undefined;
    }
}
