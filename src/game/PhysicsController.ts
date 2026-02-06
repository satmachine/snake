import * as THREE from 'three';
import { CONFIG } from '../definitions';
import type { Snake, AppleManager } from '../entities';
import type { World } from '../world';
import type { HostSimulation } from '../net/host';
import type { NetworkManager } from '../net/network';
import type { LobbyManager } from '../net/lobby';
import type { InputPayload } from '../net/protocol';
import type { ClientPredictor } from '../net/client';
import type { BurstSystem } from '../particles';
import type { PlayerRegistry } from './PlayerRegistry';

/**
 * Minimal interface for the Game properties the physics controller needs.
 * Avoids circular dependency with Game class.
 */
export interface PhysicsHost {
    snake: Snake;
    world: World;
    appleManager: AppleManager;
    burstSystem: BurstSystem;
    playerRegistry: PlayerRegistry;
    hostSimulation: HostSimulation | null;
    clientPredictor: ClientPredictor | null;
    networkManager: NetworkManager | null;
    lobbyManager: LobbyManager | null;
    sunLight: THREE.DirectionalLight;
    water: import('three/examples/jsm/objects/Water').Water;
    isHost: boolean;
    localPlayerId: string;
    dayTime: number;
    ep: number;
    maxEp: number;
    score: number;
    keys: { left: boolean; right: boolean; boost: boolean };
    countdownActive: boolean;
    countdownEndTime: number;
    inputSeq: number;
    visualPalette: { colors: { APPLE: number; GROUND_BASE: number } };
    ui: {
        updateEp(ep: number, maxEp: number): void;
        updateScore(score: number): void;
    };
    audio: {
        playEat(): void;
        playCrash(): void;
    };
    gameOver(): void;
    handleStateUpdate(payload: any): void;
}

/**
 * Extracts physics logic from Game class. Handles singleplayer, multiplayer,
 * and spectating physics updates with shared helper methods to reduce duplication.
 */
export class PhysicsController {
    /**
     * Update world, lighting, and water based on a focus position.
     * Shared across all 3 physics modes.
     */
    updateWorldAndLighting(host: PhysicsHost, dt: number, focusX: number, focusZ: number): void {
        host.dayTime += dt * 0.05;
        host.sunLight.position.x = focusX + 50;
        host.sunLight.position.z = focusZ + 50;

        host.world.update(focusX, focusZ);

        if (host.water) {
            host.water.material.uniforms['sunDirection'].value.copy(host.sunLight.position).normalize();
        }
    }

    /**
     * Run host-authoritative simulation loop: process apples, check game end, broadcast state.
     * Shared between updatePhysicsMultiplayer (PLAYING) and updatePhysicsSpectating (SPECTATING).
     */
    runHostLoop(host: PhysicsHost, dt: number, localInput: InputPayload): void {
        if (!host.hostSimulation) return;

        // Feed local input into simulation
        host.hostSimulation.receiveInput(localInput);

        // Run simulation
        const obstacles = host.world.getObstacles();
        host.hostSimulation.simulate(dt, obstacles);

        // Apple eating
        const eatResults = host.appleManager.update(dt);
        for (const eat of eatResults) {
            host.hostSimulation.handleEat(eat.playerId, eat.appleId, {
                x: eat.position.x,
                y: eat.position.y,
                z: eat.position.z,
            });
        }

        // Apple spawning
        if (host.appleManager.activeApples.length < CONFIG.MAX_APPLES && Math.random() < CONFIG.SPAWN_CHANCE) {
            const tree = host.world.getRandomTree();
            if (tree) {
                const appleId = host.appleManager.spawnApple(tree);
                if (appleId) {
                    const apple = host.appleManager.getAppleById(appleId);
                    if (apple) {
                        host.hostSimulation.pendingEvents.push({
                            type: 'apple_spawn',
                            appleId,
                            x: apple.mesh.position.x,
                            y: apple.mesh.position.y,
                            z: apple.mesh.position.z,
                        });
                    }
                }
            }
        }

        // Check for game end
        const gameEndEvent = host.hostSimulation.checkGameEnd();
        if (gameEndEvent && gameEndEvent.type === 'game_over') {
            const lobbyPlayers = host.lobbyManager?.getPlayerList() || [];
            for (const ranking of gameEndEvent.rankings) {
                const player = lobbyPlayers.find((p: any) => p.id === ranking.playerId);
                ranking.name = player?.name || 'UNKNOWN';
            }
            host.hostSimulation.pendingEvents.push(gameEndEvent);
        }

        // Broadcast state
        const statePayload = host.hostSimulation.getStatePayload();
        host.networkManager?.sendState(statePayload);
    }

    /**
     * Tick interpolation buffers for all remote snakes.
     * Used by non-host clients in both PLAYING and SPECTATING states.
     */
    tickRemoteInterpolators(host: PhysicsHost): void {
        const now = performance.now();
        host.playerRegistry.forEach((player) => {
            if (!player.interpolator) return;
            if (!player.snake.mesh.visible) return;
            const interpState = player.interpolator.getInterpolatedState(now);
            if (interpState) {
                player.snake.applyNetState(interpState);
            }
        });
    }

    /**
     * Singleplayer physics: input, boost/EP, world update, snake physics, apples.
     */
    updateSingleplayer(host: PhysicsHost, dt: number): void {
        this.updateWorldAndLighting(host, dt, host.snake.position.x, host.snake.position.z);

        const turn = (host.keys.right ? 1 : 0) - (host.keys.left ? 1 : 0);
        host.snake.setTurn(turn);

        // Boost logic
        if (host.keys.boost && host.ep > 0) {
            host.snake.setBoosting(true);
            host.ep = Math.max(0, host.ep - CONFIG.EP_DRAIN_PER_SEC * dt);
        } else {
            host.snake.setBoosting(false);
            if (!host.keys.boost && !host.snake.isStalled) {
                host.ep = Math.min(host.maxEp, host.ep + dt * 2.0);
            }
        }
        host.ui.updateEp(host.ep, host.maxEp);

        const obstacles = host.world.getObstacles();
        const alive = host.snake.update(dt, obstacles);

        if (!alive) {
            host.gameOver();
            return;
        }

        const eatResults = host.appleManager.update(dt);
        for (const eat of eatResults) {
            host.score += 10;
            host.ui.updateScore(host.score);
            host.ep = Math.min(host.maxEp, host.ep + CONFIG.EP_PER_APPLE);
            host.ui.updateEp(host.ep, host.maxEp);

            host.snake.growPending += CONFIG.GROWTH_PER_APPLE;
            const newSpeed = Math.min(CONFIG.MAX_SPEED, host.snake.targetBaseSpeed + CONFIG.SPEED_INCREMENT_PER_APPLE);
            host.snake.setBaseSpeed(newSpeed);
        }

        if (host.appleManager.activeApples.length < CONFIG.MAX_APPLES && Math.random() < CONFIG.SPAWN_CHANCE) {
            const tree = host.world.getRandomTree();
            if (tree) host.appleManager.spawnApple(tree);
        }

        host.burstSystem.update(dt);
    }

    /**
     * Multiplayer physics: input sending, host sim or client prediction, interpolation.
     */
    updateMultiplayer(host: PhysicsHost, dt: number): void {
        this.updateWorldAndLighting(host, dt, host.snake.position.x, host.snake.position.z);

        // Countdown: skip input + physics until countdown ends
        if (host.countdownActive) {
            if (Date.now() >= host.countdownEndTime) {
                host.countdownActive = false;
            } else {
                host.burstSystem.update(dt);
                return;
            }
        }

        // Build local input from keys
        const turn = ((host.keys.right ? 1 : 0) - (host.keys.left ? 1 : 0)) as -1 | 0 | 1;
        const boost = host.keys.boost;
        const localInput: InputPayload = {
            playerId: host.localPlayerId,
            seq: host.inputSeq++,
            turn,
            boost,
        };

        // Send local input over network
        host.networkManager?.sendInput(localInput);

        // Client-side prediction
        if (!host.isHost && host.clientPredictor) {
            host.clientPredictor.addInput(localInput);
            host.snake.setInput(turn, boost);
            const obstacles = host.world.getObstacles();
            host.clientPredictor.predict(dt, obstacles);
        }

        // Tick remote interpolators (client only)
        if (!host.isHost) {
            this.tickRemoteInterpolators(host);
        }

        // Host: run authoritative simulation
        if (host.isHost) {
            this.runHostLoop(host, dt, localInput);

            // Update local EP bar from host simulation
            const localEp = host.hostSimulation!.getPlayerEp(host.localPlayerId);
            if (localEp) {
                host.ep = localEp.ep;
                host.maxEp = localEp.maxEp;
            }
            host.ui.updateEp(host.ep, host.maxEp);

            // Update local score
            host.score = host.hostSimulation!.getPlayerScore(host.localPlayerId);
            host.ui.updateScore(host.score);
        }

        host.burstSystem.update(dt);
    }

    /**
     * Spectating physics: keep world running after local death.
     */
    updateSpectating(host: PhysicsHost, dt: number): void {
        const spectatedSnake = host.playerRegistry.spectatingPlayerId
            ? host.playerRegistry.getSnake(host.playerRegistry.spectatingPlayerId)
            : null;
        const focusSnake = spectatedSnake && host.playerRegistry.spectatingPlayerId
            && host.playerRegistry.isAlive(host.playerRegistry.spectatingPlayerId)
            ? spectatedSnake
            : host.snake;

        this.updateWorldAndLighting(host, dt, focusSnake.position.x, focusSnake.position.z);

        if (host.isHost) {
            // Host must keep authoritative sim running even while spectating
            const localInput: InputPayload = {
                playerId: host.localPlayerId,
                seq: host.inputSeq++,
                turn: 0,
                boost: false,
            };
            this.runHostLoop(host, dt, localInput);
        } else {
            // Client: tick remote interpolators
            this.tickRemoteInterpolators(host);
        }

        host.burstSystem.update(dt);
    }
}
