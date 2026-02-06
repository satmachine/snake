import type { PlayerId } from '../net/protocol';
import type { Snake } from '../entities';
import { InterpolationBuffer } from '../net/client';

export interface PlayerData {
    id: PlayerId;
    name: string;
    colorIndex: number;
    snake: Snake;
    interpolator: InterpolationBuffer | null; // null for local player and host players
    isHost: boolean;
    isLocal: boolean;
    isAlive: boolean;
}

/**
 * Unified player state management for multiplayer.
 * Consolidates multiplayerSnakes, playerNames, remoteInterpolators,
 * alivePlayers, hostPlayerId, and localPlayerId into a single registry.
 */
export class PlayerRegistry {
    private players = new Map<PlayerId, PlayerData>();
    private _localPlayerId: PlayerId | null = null;
    private _hostPlayerId: PlayerId | null = null;
    spectatingPlayerId: PlayerId | null = null;

    get localPlayerId(): PlayerId {
        return this._localPlayerId ?? '';
    }

    get hostPlayerId(): PlayerId {
        return this._hostPlayerId ?? '';
    }

    addPlayer(
        id: PlayerId,
        name: string,
        colorIndex: number,
        snake: Snake,
        isHost: boolean,
        isLocal: boolean,
    ): PlayerData {
        const data: PlayerData = {
            id,
            name,
            colorIndex,
            snake,
            interpolator: null,
            isHost,
            isLocal,
            isAlive: true,
        };
        this.players.set(id, data);
        if (isLocal) this._localPlayerId = id;
        if (isHost) this._hostPlayerId = id;
        return data;
    }

    removePlayer(id: PlayerId): void {
        this.players.delete(id);
    }

    getPlayer(id: PlayerId): PlayerData | undefined {
        return this.players.get(id);
    }

    getSnake(id: PlayerId): Snake | undefined {
        return this.players.get(id)?.snake;
    }

    getName(id: PlayerId): string {
        return this.players.get(id)?.name || 'UNKNOWN';
    }

    getInterpolator(id: PlayerId): InterpolationBuffer | null {
        return this.players.get(id)?.interpolator ?? null;
    }

    setInterpolator(id: PlayerId, interp: InterpolationBuffer): void {
        const player = this.players.get(id);
        if (player) player.interpolator = interp;
    }

    getLocalPlayer(): PlayerData | null {
        return this._localPlayerId ? this.players.get(this._localPlayerId) ?? null : null;
    }

    getAlivePlayers(): PlayerData[] {
        return Array.from(this.players.values()).filter(p => p.isAlive);
    }

    getAliveRemoteIds(): PlayerId[] {
        const ids: PlayerId[] = [];
        for (const [pid, p] of this.players) {
            if (pid !== this._localPlayerId && p.isAlive) {
                ids.push(pid);
            }
        }
        return ids;
    }

    isAlive(id: PlayerId): boolean {
        return this.players.get(id)?.isAlive ?? false;
    }

    markDead(id: PlayerId): void {
        const player = this.players.get(id);
        if (player) player.isAlive = false;
    }

    markAlive(id: PlayerId): void {
        const player = this.players.get(id);
        if (player) player.isAlive = true;
    }

    setAliveFromList(playerIds: PlayerId[]): void {
        const aliveSet = new Set(playerIds);
        for (const [pid, p] of this.players) {
            p.isAlive = aliveSet.has(pid);
        }
    }

    /** Iterate all players (for visual updates, etc.) */
    forEach(fn: (player: PlayerData, id: PlayerId) => void): void {
        for (const [id, player] of this.players) {
            fn(player, id);
        }
    }

    /** Get all player entries for iteration */
    entries(): IterableIterator<[PlayerId, PlayerData]> {
        return this.players.entries();
    }

    /** Iterate as [PlayerId, Snake] pairs (backward-compatible with Map<PlayerId, Snake>) */
    *snakeEntries(): IterableIterator<[PlayerId, Snake]> {
        for (const [id, player] of this.players) {
            yield [id, player.snake];
        }
    }

    /** Number of registered players */
    get size(): number {
        return this.players.size;
    }

    /** Remove all remote snake meshes from the scene and clear state */
    cleanupAndClear(): void {
        for (const [pid, p] of this.players) {
            if (pid !== this._localPlayerId) {
                p.snake.mesh.parent?.remove(p.snake.mesh);
            }
        }
        this.players.clear();
        this._localPlayerId = null;
        this._hostPlayerId = null;
        this.spectatingPlayerId = null;
    }

    /** Clear all state without removing meshes (used before re-population) */
    clear(): void {
        this.players.clear();
        this._localPlayerId = null;
        this._hostPlayerId = null;
        this.spectatingPlayerId = null;
    }
}
