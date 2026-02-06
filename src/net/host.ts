import {
    CONFIG,
    PVP_HEAD_BODY_RADIUS,
    PVP_BODY_SEGMENT_RADIUS,
    PVP_HEIGHT_TOLERANCE,
    PVP_HEAD_HEAD_DISTANCE,
    PVP_SKIP_SEGMENTS,
} from '../definitions';
import { Snake, Obstacle } from '../entities';
import { sphereVsSegments } from '../utils/collision';
import type { PlayerId, InputPayload, SnakeNetState, StatePayload, GameEvent } from './protocol';

interface PlayerRecord {
    snake: Snake;
    colorIndex: number;
    ep: number;
    maxEp: number;
    score: number;
    kills: number;
    alive: boolean;
    lastInput: InputPayload | null;
    inputBuffer: InputPayload[];
    lastAckedSeq: number;
}

export class HostSimulation {
    players: Map<PlayerId, PlayerRecord> = new Map();
    tick: number = 0;
    pendingEvents: GameEvent[] = [];
    deathOrder: PlayerId[] = [];
    gameOver: boolean = false;

    addPlayer(id: PlayerId, snake: Snake, colorIndex: number): void {
        this.players.set(id, {
            snake,
            colorIndex,
            ep: CONFIG.MAX_EP,
            maxEp: CONFIG.MAX_EP,
            score: 0,
            kills: 0,
            alive: true,
            lastInput: null,
            inputBuffer: [],
            lastAckedSeq: 0,
        });
    }

    removePlayer(id: PlayerId): void {
        const record = this.players.get(id);
        if (!record) return;
        record.alive = false;
        this.deathOrder.push(id);
        this.pendingEvents.push({
            type: 'death',
            playerId: id,
            reason: 'disconnect',
        });
    }

    receiveInput(input: InputPayload): void {
        const record = this.players.get(input.playerId);
        if (!record || !record.alive) return;

        record.inputBuffer.push(input);
        // Keep only the latest 3 inputs
        if (record.inputBuffer.length > 3) {
            record.inputBuffer.shift();
        }
    }

    simulate(dt: number, obstacles: Obstacle[]): void {
        for (const [pid, record] of this.players) {
            if (!record.alive) continue;

            // Pop latest input from buffer (or reuse last known)
            if (record.inputBuffer.length > 0) {
                record.lastInput = record.inputBuffer.pop()!;
                record.inputBuffer.length = 0; // consume all, use latest
            }

            // Apply input
            if (record.lastInput) {
                const turn = record.lastInput.turn as -1 | 0 | 1;
                const boost = record.lastInput.boost && record.ep > 0;
                record.snake.setInput(turn, boost);
                record.lastAckedSeq = record.lastInput.seq;
            }

            // EP drain/regen
            if (record.snake.isBoosting) {
                record.ep = Math.max(0, record.ep - CONFIG.EP_DRAIN_PER_SEC * dt);
                if (record.ep <= 0) {
                    record.snake.setBoosting(false);
                }
            } else {
                if (!record.snake.isStalled) {
                    record.ep = Math.min(record.maxEp, record.ep + dt * 2.0);
                }
            }

            // Run physics
            const alive = record.snake.update(dt, obstacles);
            if (!alive) {
                record.alive = false;
                this.deathOrder.push(pid);
                this.pendingEvents.push({
                    type: 'death',
                    playerId: pid,
                    reason: 'obstacle',
                });
            }
        }

        // PvP collision detection
        this.checkPvPCollisions();

        this.tick++;
    }

    private checkPvPCollisions(): void {
        const aliveEntries: [PlayerId, PlayerRecord][] = [];
        for (const [pid, record] of this.players) {
            if (record.alive) aliveEntries.push([pid, record]);
        }

        const deadThisTick = new Set<PlayerId>();

        // Head-to-body: For each alive snake A, check head against every other alive snake B's body
        for (const [pidA, recA] of aliveEntries) {
            if (deadThisTick.has(pidA)) continue;
            const headA = recA.snake.position;

            for (const [pidB, recB] of aliveEntries) {
                if (pidA === pidB) continue;
                if (deadThisTick.has(pidB)) continue;

                const bodyMeshes = recB.snake.bodyMeshes;
                const segments = bodyMeshes.map((m) => m.position);

                const hitIndex = sphereVsSegments(
                    { x: headA.x, y: headA.y, z: headA.z, radius: PVP_HEAD_BODY_RADIUS },
                    segments,
                    PVP_BODY_SEGMENT_RADIUS,
                    PVP_SKIP_SEGMENTS,
                    PVP_HEIGHT_TOLERANCE
                );

                if (hitIndex >= 0) {
                    // A dies, B gets kill credit
                    recA.alive = false;
                    recB.kills++;
                    deadThisTick.add(pidA);
                    this.deathOrder.push(pidA);
                    this.pendingEvents.push({
                        type: 'death',
                        playerId: pidA,
                        killerId: pidB,
                        reason: 'pvp',
                    });
                    break;
                }
            }
        }

        // Head-to-head: All alive pairs
        for (let i = 0; i < aliveEntries.length; i++) {
            const [pidA, recA] = aliveEntries[i];
            if (deadThisTick.has(pidA)) continue;

            for (let j = i + 1; j < aliveEntries.length; j++) {
                const [pidB, recB] = aliveEntries[j];
                if (deadThisTick.has(pidB)) continue;

                const headA = recA.snake.position;
                const headB = recB.snake.position;

                // Check 2D distance (X/Z only), then apply Y tolerance separately
                // This preserves the original behavior where heads can be vertically
                // separated but still collide if horizontally close
                const dx = headA.x - headB.x;
                const dz = headA.z - headB.z;
                const distSq = dx * dx + dz * dz;

                if (distSq < PVP_HEAD_HEAD_DISTANCE * PVP_HEAD_HEAD_DISTANCE) {
                    if (Math.abs(headA.y - headB.y) < PVP_HEIGHT_TOLERANCE) {
                        const lenA = recA.snake.bodyMeshes.length;
                        const lenB = recB.snake.bodyMeshes.length;

                        if (lenA > lenB) {
                            // B dies, A gets kill
                            recB.alive = false;
                            recA.kills++;
                            deadThisTick.add(pidB);
                            this.deathOrder.push(pidB);
                            this.pendingEvents.push({
                                type: 'death',
                                playerId: pidB,
                                killerId: pidA,
                                reason: 'pvp',
                            });
                        } else if (lenB > lenA) {
                            // A dies, B gets kill
                            recA.alive = false;
                            recB.kills++;
                            deadThisTick.add(pidA);
                            this.deathOrder.push(pidA);
                            this.pendingEvents.push({
                                type: 'death',
                                playerId: pidA,
                                killerId: pidB,
                                reason: 'pvp',
                            });
                        } else {
                            // Equal length: both die
                            recA.alive = false;
                            recB.alive = false;
                            deadThisTick.add(pidA);
                            deadThisTick.add(pidB);
                            this.deathOrder.push(pidA);
                            this.deathOrder.push(pidB);
                            this.pendingEvents.push({
                                type: 'death',
                                playerId: pidA,
                                killerId: pidB,
                                reason: 'pvp',
                            });
                            this.pendingEvents.push({
                                type: 'death',
                                playerId: pidB,
                                killerId: pidA,
                                reason: 'pvp',
                            });
                        }
                    }
                }
            }
        }
    }

    checkGameEnd(): GameEvent | null {
        if (this.gameOver) return null;

        let aliveCount = 0;
        let lastAlive: PlayerId | null = null;
        for (const [pid, record] of this.players) {
            if (record.alive) {
                aliveCount++;
                lastAlive = pid;
            }
        }

        // Need at least 2 players to have started for game end to matter
        if (this.players.size < 2 || aliveCount > 1) return null;

        this.gameOver = true;

        // Build rankings: first to die = worst placement, survivor = 1st
        const rankings: import('./protocol').RankingEntry[] = [];
        const totalPlayers = this.players.size;

        // If someone survived, they're 1st
        if (lastAlive) {
            const rec = this.players.get(lastAlive)!;
            rankings.push({
                playerId: lastAlive,
                name: '', // Filled by game.ts
                score: rec.score,
                kills: rec.kills,
                placement: 1,
            });
        }

        // Death order: first to die = worst placement
        // Walk deathOrder in reverse to assign placements
        let placement = lastAlive ? 2 : 1;
        for (let i = this.deathOrder.length - 1; i >= 0; i--) {
            const pid = this.deathOrder[i];
            if (pid === lastAlive) continue; // Already handled
            // Skip duplicates (shouldn't happen but just in case)
            if (rankings.find(r => r.playerId === pid)) continue;
            const rec = this.players.get(pid);
            rankings.push({
                playerId: pid,
                name: '', // Filled by game.ts
                score: rec?.score ?? 0,
                kills: rec?.kills ?? 0,
                placement,
            });
            placement++;
        }

        return {
            type: 'game_over',
            rankings,
        };
    }

    getPlayerKills(playerId: PlayerId): number {
        return this.players.get(playerId)?.kills ?? 0;
    }

    handleEat(playerId: PlayerId, appleId: string, position: { x: number; y: number; z: number }): void {
        const record = this.players.get(playerId);
        if (!record || !record.alive) return;

        record.score += 10;
        record.ep = Math.min(record.maxEp, record.ep + CONFIG.EP_PER_APPLE);
        record.snake.growPending += CONFIG.GROWTH_PER_APPLE;

        const newSpeed = Math.min(CONFIG.MAX_SPEED, record.snake.targetBaseSpeed + CONFIG.SPEED_INCREMENT_PER_APPLE);
        record.snake.setBaseSpeed(newSpeed);

        this.pendingEvents.push({
            type: 'eat',
            playerId,
            appleId,
            position,
        });
    }

    getStatePayload(): StatePayload {
        const snakes: SnakeNetState[] = [];

        for (const [pid, record] of this.players) {
            const state = record.snake.serialize(pid, record.lastAckedSeq);
            state.alive = record.alive;
            state.score = record.score;
            snakes.push(state);
        }

        const events = this.pendingEvents.splice(0);

        const payload: StatePayload = {
            tick: this.tick,
            snakes,
            events,
        };

        // Include path keypoints every 5th tick for smoother remote rendering
        if (this.tick % 5 === 0) {
            const paths: Record<PlayerId, { x: number; y: number; z: number }[]> = {};
            for (const [pid, record] of this.players) {
                if (record.alive) {
                    paths[pid] = record.snake.getPathKeypoints(5);
                }
            }
            payload.paths = paths;
        }

        return payload;
    }

    getAliveCount(): number {
        let count = 0;
        for (const [, record] of this.players) {
            if (record.alive) count++;
        }
        return count;
    }

    getPlayerEp(playerId: PlayerId): { ep: number; maxEp: number } | null {
        const record = this.players.get(playerId);
        if (!record) return null;
        return { ep: record.ep, maxEp: record.maxEp };
    }

    getPlayerScore(playerId: PlayerId): number {
        return this.players.get(playerId)?.score ?? 0;
    }
}
