
import * as THREE from 'three';
import {
    CONFIG,
    GameState,
    PALETTE_SPRING,
    PALETTE_SUMMER,
    PALETTE_AUTUMN,
    PALETTE_WINTER,
    Palette,
    MULTIPLAYER_COLORS,
    NAME_LABEL_FADE_START,
    NAME_LABEL_FADE_END,
} from './definitions';
import { Snake, AppleManager, updateAssetMaterials } from './entities';
import { World } from './world';
import { UI, NameLabelManager } from './ui';
import { AudioManager } from './audio';
import { getTerrainHeight, clearTerrainCache, seedTerrain } from './utils';
import { wrapAngle } from './utils/math';
import { BurstSystem } from './particles';
import { fetchLeaderboard, submitScore } from './supabase';
import { NetworkManager } from './net/network';
import { LobbyManager } from './net/lobby';
import { HostSimulation } from './net/host';
import { ClientPredictor, InterpolationBuffer } from './net/client';
import type { PlayerId, LobbyStartPayload, InputPayload, StatePayload, GameEvent } from './net/protocol';
import { PlayerRegistry } from './game/PlayerRegistry';
import { PhysicsController, type PhysicsHost } from './game/PhysicsController';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass';
import { Water } from 'three/examples/jsm/objects/Water';

function copyPalette(p: Palette): Palette {
    return {
        name: p.name,
        colors: { ...p.colors },
        bloom: { ...p.bloom },
        fog: { ...p.fog }
    };
}

// Floating dust motes class
class DustSystem {
    particles: THREE.Points;

    constructor(scene: THREE.Scene) {
        const count = 300;
        const geo = new THREE.BufferGeometry();
        const pos = [];
        for (let i = 0; i < count; i++) {
            pos.push(
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 60,
                (Math.random() - 0.5) * 60
            );
        }
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        const mat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.15,
            transparent: true,
            opacity: 0.6
        });
        this.particles = new THREE.Points(geo, mat);
        scene.add(this.particles);
    }

    update(center: THREE.Vector3) {
        this.particles.position.copy(center);
        this.particles.rotation.y += 0.0005;
        this.particles.rotation.z += 0.0002;
    }
}

export class Game {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    composer: EffectComposer;

    snake: Snake;
    world: World;
    appleManager: AppleManager;
    ui: UI;
    audio: AudioManager;
    dust: DustSystem;
    burstSystem: BurstSystem;

    hemiLight!: THREE.HemisphereLight;
    bloomPass?: UnrealBloomPass; // Optional - disabled on mobile for performance

    targetPalette!: Palette;
    visualPalette!: Palette;

    state: GameState = GameState.MENU;
    score: number = 0;

    ep: number = 0;
    maxEp: number = CONFIG.MAX_EP;

    lastTime: number = 0;

    keys = { left: false, right: false, boost: false };

    cameraLookAtCurrent = new THREE.Vector3();
    cameraAngle: number = 0;
    cameraHeightOffset: number = 18.0;

    // Pre-allocated reusable objects to avoid GC pressure
    private _tempVec3 = new THREE.Vector3();
    private _tempColor1 = new THREE.Color();
    private _tempColor2 = new THREE.Color();
    private _underwaterClearColor = new THREE.Color(0x001122);
    private _defaultClearColor = new THREE.Color(0x000000);

    sunLight!: THREE.DirectionalLight;
    water!: Water;
    skyMesh!: THREE.Mesh;
    underwaterOverlay!: HTMLDivElement;
    lastRippleTime: number = 0;
    lastTrailPosition: THREE.Vector3 = new THREE.Vector3();

    dayTime: number = 0;

    // Mobile detection for performance optimizations
    isMobile: boolean = false;

    // Leaderboard state
    scoreSubmitted: boolean = false;

    // Multiplayer
    mode: 'singleplayer' | 'multiplayer' = 'singleplayer';
    isHost: boolean = false;
    networkManager: NetworkManager | null = null;
    lobbyManager: LobbyManager | null = null;
    hostSimulation: HostSimulation | null = null;
    playerRegistry: PlayerRegistry = new PlayerRegistry();
    localPlayerId: PlayerId = '';
    pendingStartPayload: LobbyStartPayload | null = null;
    inputSeq: number = 0;
    clientPredictor: ClientPredictor | null = null;
    private physicsController = new PhysicsController();
    nameLabelManager: NameLabelManager | null = null;
    countdownActive: boolean = false;
    countdownEndTime: number = 0;
    private deathAnimations: Map<Snake, { startTime: number }> = new Map();

    constructor() {
        // Detect mobile devices
        this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
                        window.matchMedia('(max-width: 768px)').matches;
        this.audio = new AudioManager();
        this.targetPalette = PALETTE_SPRING;
        this.visualPalette = copyPalette(PALETTE_SPRING);

        this.scene = new THREE.Scene();

        this.createSky();
        this.createWater();

        this.scene.fog = new THREE.Fog(PALETTE_SPRING.colors.FOG, PALETTE_SPRING.fog.near, PALETTE_SPRING.fog.far);

        this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);

        const pixelRatio = window.devicePixelRatio;
        const safePixelRatio = Math.min(pixelRatio, 1.5);

        this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance", stencil: false, depth: true });
        this.renderer.setPixelRatio(safePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // Disable shadows on mobile for better performance
        this.renderer.shadowMap.enabled = !this.isMobile;
        this.renderer.shadowMap.type = THREE.PCFShadowMap; // Cheaper than PCFSoftShadowMap
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 0.6; // Was 0.9, drastically reduced
        document.body.appendChild(this.renderer.domElement);

        // --- POST PROCESSING ---
        this.composer = new EffectComposer(this.renderer);

        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        // Only add bloom on desktop for performance
        if (!this.isMobile) {
            // Resolution, strength, radius, threshold
            this.bloomPass = new UnrealBloomPass(
                new THREE.Vector2(window.innerWidth, window.innerHeight),
                PALETTE_SPRING.bloom.strength,
                PALETTE_SPRING.bloom.radius,
                PALETTE_SPRING.bloom.threshold
            );
            this.composer.addPass(this.bloomPass);
        }

        const outputPass = new OutputPass();
        this.composer.addPass(outputPass);
        // -----------------------

        this.ui = new UI();
        this.ui.onStartClick = () => {
            this.audio.resumeContext().then(() => {
                this.audio.startMusic();
                this.startGame();
            });
        };
        this.ui.onRestartClick = () => {
            this.audio.startMusic();
            this.startGame();
        };
        this.ui.onScoreSubmit = async (name: string) => {
            if (this.scoreSubmitted) return;
            this.ui.setSubmitButtonState(true);
            const success = await submitScore(name, this.score);
            if (success) {
                this.scoreSubmitted = true;
                this.ui.hideSubmitForm();
                await this.loadLeaderboard();
            }
            this.ui.setSubmitButtonState(false);
        };

        // --- MULTIPLAYER UI CALLBACKS ---
        this.ui.onCreateGame = (name: string) => {
            this.audio.resumeContext();
            this.createMultiplayerRoom(name);
        };
        this.ui.onJoinGame = (code: string, name: string) => {
            this.audio.resumeContext();
            this.joinMultiplayerRoom(code, name);
        };
        this.ui.onLobbyStart = () => {
            if (this.lobbyManager) {
                this.lobbyManager.startGame();
            }
        };
        this.ui.onLobbyLeave = () => {
            this.leaveMultiplayerRoom();
        };
        this.ui.onMpPlayAgain = () => {
            this.ui.hideMpResults();
            this.ui.hideSpectator();
            this.ui.clearKillFeed();

            // Reset multiplayer state
            this.hostSimulation = null;
            this.clientPredictor = null;
            this.nameLabelManager?.destroy();
            this.nameLabelManager = null;
            this.playerRegistry.cleanupAndClear();

            // Return to lobby if still connected, otherwise menu
            if (this.networkManager?.connected && this.lobbyManager) {
                this.state = GameState.LOBBY;
                this.ui.showLobby(this.networkManager.roomCode, this.networkManager.isHost);
                this.ui.updateLobbyPlayers(this.lobbyManager.getPlayerList());
            } else {
                this.state = GameState.MENU;
                this.ui.showMenu();
            }
        };

        this.ui.onSpectateNext = () => {
            this.spectateNextPlayer();
        };
        this.ui.onHostDisconnectReturn = () => {
            this.leaveMultiplayerRoom();
        };

        this.loadLeaderboard();

        this.hemiLight = new THREE.HemisphereLight(this.visualPalette.colors.SKY_TOP, this.visualPalette.colors.GROUND_BASE, 0.4);
        this.scene.add(this.hemiLight);

        this.sunLight = new THREE.DirectionalLight(0xFFE0B2, 0.7);
        this.sunLight.position.set(50, 100, 50);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.width = 1024; // Reduced from 2048
        this.sunLight.shadow.mapSize.height = 1024;
        this.sunLight.shadow.bias = -0.0005;
        const d = 80;
        this.sunLight.shadow.camera.left = -d;
        this.sunLight.shadow.camera.right = d;
        this.sunLight.shadow.camera.top = d;
        this.sunLight.shadow.camera.bottom = -d;
        this.scene.add(this.sunLight);

        this.world = new World(this.scene, this.isMobile);
        this.burstSystem = new BurstSystem(this.scene, this.isMobile ? 200 : 500);
        this.snake = new Snake(this.scene);

        this.snake.onBoostStart = () => {
            this.audio.playBoostStart();
            // Emit boost burst - reduced count on mobile
            const burstCount = this.isMobile ? 15 : 30;
            this.burstSystem.emitBoostBurst(this.snake.position, burstCount);
        };
        this.snake.onCrash = () => this.gameOver();
        this.snake.onLand = (speed) => {
            // Emit dust on landing
            this.burstSystem.emit(this.snake.position, Math.floor(speed * 0.5), this.visualPalette.colors.GROUND_BASE);
        };
        this.snake.onEnterWater = () => {
            // Emit bubbles when entering water
            this.burstSystem.emitBubbles(this.snake.position, 40);
            // Play splash sound
            this.audio.playWaterSplash();
            // Start continuous water sound
            this.audio.startWaterSound();
        };
        this.snake.onExitWater = () => {
            // Emit splash particles when exiting water
            this.burstSystem.emit(this.snake.position, 20, 0xFFFFFF);
            // Play exit splash sound
            this.audio.playWaterSplash();
            // Stop continuous water sound
            this.audio.stopWaterSound();
        };
        this.snake.onBreak = (pos) => {
            // Emit rock pieces
            this.burstSystem.emitRockPieces(pos, 30);
            // Play impact sound
            this.audio.playImpact();
        };

        this.appleManager = new AppleManager(
            this.scene,
            () => [{ id: 'local', position: this.snake.bodyMeshes[0].position }],
            true
        );

        this.appleManager.onEat = (pos: THREE.Vector3) => {
            this.audio.playEat();
            this.burstSystem.emit(pos, 15, this.visualPalette.colors.APPLE);
        };

        this.dust = new DustSystem(this.scene);

        // Create underwater overlay
        this.createUnderwaterOverlay();

        window.addEventListener('keydown', (e) => this.handleKey(e, true));
        window.addEventListener('keyup', (e) => this.handleKey(e, false));
        window.addEventListener('resize', () => this.onWindowResize());

        // --- TOUCH CONTROLS ---
        // Passive: false allows us to call preventDefault() to stop scrolling
        const canvas = this.renderer.domElement;
        canvas.addEventListener('touchstart', (e) => this.handleTouch(e), { passive: false });
        canvas.addEventListener('touchmove', (e) => this.handleTouch(e), { passive: false });
        canvas.addEventListener('touchend', (e) => this.handleTouch(e), { passive: false });
        canvas.addEventListener('pointerdown', (e) => this.handleSpectatorPointer(e));

        this.renderer.setAnimationLoop((time) => this.animate(time));
    }

    createSky() {
        const vertexShader = `
        varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `;
        const fragmentShader = `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
            float h = normalize( vWorldPosition + offset ).y;
            float val = max( pow( max( h , 0.0), exponent ), 0.0 );
            vec3 col;
            if (val < 0.5) {
                col = mix(bottomColor, midColor, val * 2.0);
            } else {
                col = mix(midColor, topColor, (val - 0.5) * 2.0);
            }
            gl_FragColor = vec4( col, 1.0 );
        }
      `;
        const uniforms = {
            topColor: { value: new THREE.Color(this.visualPalette.colors.SKY_TOP) },
            midColor: { value: new THREE.Color(this.visualPalette.colors.SKY_MID) },
            bottomColor: { value: new THREE.Color(this.visualPalette.colors.SKY_BOTTOM) },
            offset: { value: 20 },
            exponent: { value: 0.6 }
        };

        const skyGeo = new THREE.SphereGeometry(600, 32, 15);
        const skyMat = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: uniforms,
            side: THREE.BackSide,
            fog: false
        });
        this.skyMesh = new THREE.Mesh(skyGeo, skyMat);
        this.skyMesh.matrixAutoUpdate = false;
        this.skyMesh.updateMatrix();
        this.scene.add(this.skyMesh);
    }

    async loadLeaderboard() {
        const entries = await fetchLeaderboard(10);
        this.ui.updateLeaderboard(entries);
    }

    startGame() {
        this.keys = { left: false, right: false, boost: false };

        this.score = 0;
        this.ep = CONFIG.MAX_EP;
        this.dayTime = 0;
        this.scoreSubmitted = false;
        this.ui.resetNameInput();
        this.ui.showSubmitForm();

        // Clear terrain cache for fresh game
        clearTerrainCache();

        // Stop any water sounds from previous game
        this.audio.stopWaterSound();

        this.ui.updateScore(0);
        this.ui.updateEp(this.ep, this.maxEp);

        this.state = GameState.PLAYING;
        this.ui.hideMenu();
        this.ui.hideGameOver();

        this.world.reset();
        this.snake.reset(CONFIG.BASE_SNAKE_SPEED);
        this.appleManager.reset();
        this.burstSystem.reset();

        this.world.ensureInitialChunks(this.snake.position.x, this.snake.position.z);

        for (let i = 0; i < 5; i++) {
            const tree = this.world.getRandomTree();
            if (tree) this.appleManager.spawnApple(tree);
        }

        const headPos = this.snake.bodyMeshes[0].position.clone();
        this.cameraLookAtCurrent.copy(headPos);
        this.cameraAngle = this.snake.angle;
    }

    handleKey(e: KeyboardEvent, pressed: boolean) {
        if (this.state === GameState.SPECTATING && pressed) {
            switch (e.key) {
                case 'Tab':
                case 'ArrowRight':
                case 'd':
                case 'D':
                    e.preventDefault();
                    this.spectateNextPlayer(1);
                    return;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    e.preventDefault();
                    this.spectateNextPlayer(-1);
                    return;
            }
        }

        if (this.state !== GameState.PLAYING) return;
        if (this.countdownActive) return;
        switch (e.key) {
            case 'ArrowLeft': case 'a': case 'A': this.keys.left = pressed; break;
            case 'ArrowRight': case 'd': case 'D': this.keys.right = pressed; break;
            case ' ': case 'Spacebar':
                e.preventDefault(); // Prevent browser scrolling
                this.keys.boost = pressed;
                break;
            case '1': if (pressed) this.setSeason(PALETTE_SPRING); break;
            case '2': if (pressed) this.setSeason(PALETTE_SUMMER); break;
            case '3': if (pressed) this.setSeason(PALETTE_AUTUMN); break;
            case '4': if (pressed) this.setSeason(PALETTE_WINTER); break;
        }
    }

    setSeason(palette: Palette) {
        this.targetPalette = palette;
    }

    // --- TOUCH HANDLER ---
    handleTouch(e: TouchEvent) {
        if (this.state !== GameState.PLAYING) return;
        if (this.countdownActive) return;

        // Prevent browser default behaviors like scrolling or zoom
        e.preventDefault();

        // Reset keys first, then rebuild based on active fingers
        this.keys.left = false;
        this.keys.right = false;
        this.keys.boost = false;

        const halfWidth = window.innerWidth / 2;

        // Check all active fingers
        for (let i = 0; i < e.touches.length; i++) {
            const t = e.touches[i];

            if (t.clientX < halfWidth) {
                this.keys.left = true;
            } else {
                this.keys.right = true;
            }
        }

        // 2 Finger Boost Logic
        if (e.touches.length >= 2) {
            this.keys.boost = true;
        }
    }

    private handleSpectatorPointer(e: PointerEvent): void {
        if (this.state !== GameState.SPECTATING) return;

        const halfWidth = window.innerWidth / 2;
        if (e.clientX < halfWidth) {
            this.spectateNextPlayer(-1);
        } else {
            this.spectateNextPlayer(1);
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    animate(time: number) {
        // time is in milliseconds from requestAnimationFrame
        const dt = Math.min((time - this.lastTime) / 1000, 0.1);
        this.lastTime = time;

        if (this.state === GameState.PLAYING || this.state === GameState.SPECTATING) {
            // Update physics once per frame with variable dt for maximum smoothness
            if (this.state === GameState.PLAYING) {
                this.updatePhysics(dt);
            } else {
                // Spectating: still run multiplayer physics for remote state updates
                this.physicsController.updateSpectating(this as unknown as PhysicsHost, dt);
            }
            this.updateVisuals(dt);

            if (this.water) {
                this.water.material.uniforms['time'].value += dt * 0.5;
            }
        }
        else if (this.state === GameState.GAME_OVER || this.state === GameState.MENU || this.state === GameState.LOBBY) {
            const t = (time || 0) * 0.0001;
            this.camera.position.x = Math.cos(t) * 60;
            this.camera.position.z = Math.sin(t) * 60;
            this.camera.position.y = 40;
            this.camera.lookAt(0, 0, 0);
        }

        try {
            this.composer.render();
        } catch (e) {
            // If composer fails, fallback to standard render
            this.renderer.render(this.scene, this.camera);
        }
    }

    updatePhysics(dt: number) {
        if (this.mode === 'multiplayer') {
            this.physicsController.updateMultiplayer(this as unknown as PhysicsHost, dt);
        } else {
            this.physicsController.updateSingleplayer(this as unknown as PhysicsHost, dt);
        }
    }

    handleStateUpdate(payload: StatePayload): void {
        const now = performance.now();

        // Apply snake states
        for (const snakeState of payload.snakes) {
            const snake = this.playerRegistry.getSnake(snakeState.playerId);
            if (!snake) continue;

            if (snakeState.playerId === this.localPlayerId) {
                // Use client predictor for smooth reconciliation (client only)
                if (this.clientPredictor) {
                    this.clientPredictor.reconcile(snakeState);
                } else {
                    // Host path: apply directly
                    snake.applyNetState(snakeState);
                }

                // Re-enable snake if server says we're alive (override local prediction)
                if (snakeState.alive && !snake.isAlive()) {
                    snake.revive();
                }

                this.score = snakeState.score;
                this.ui.updateScore(this.score);
            } else {
                // Push to interpolation buffer for remote snakes
                const interp = this.playerRegistry.getInterpolator(snakeState.playerId);
                if (interp) {
                    interp.pushState(snakeState, now);
                } else {
                    // Fallback: apply directly
                    snake.applyNetState(snakeState);
                }
            }

            if (snakeState.alive) {
                this.playerRegistry.markAlive(snakeState.playerId);
            } else {
                this.playerRegistry.markDead(snakeState.playerId);
                snake.hide();
                if (snakeState.playerId === this.localPlayerId) {
                    this.audio.playCrash();
                    this.burstSystem.emit(snake.position, 30, 0xFF4081);
                }
            }
        }

        // Apply path keypoints for smoother remote rendering
        if (payload.paths) {
            for (const [pid, keypoints] of Object.entries(payload.paths)) {
                if (pid === this.localPlayerId) continue;
                const snake = this.playerRegistry.getSnake(pid);
                if (snake) {
                    snake.applyPathKeypoints(keypoints);
                }
            }
        }

        // Process game events
        for (const event of payload.events) {
            this.handleGameEvent(event);
        }
    }

    private handleGameEvent(event: GameEvent): void {
        switch (event.type) {
            case 'eat': {
                // Remove eaten apple visually
                this.appleManager.removeAppleFromNet(event.appleId);
                // Play eat sound + particles at position
                const pos = new THREE.Vector3(event.position.x, event.position.y, event.position.z);
                this.audio.playEat();
                this.burstSystem.emit(pos, 15, this.visualPalette.colors.APPLE);
                break;
            }
            case 'apple_spawn': {
                this.appleManager.addAppleFromNet(event.appleId, event.x, event.y, event.z);
                break;
            }
            case 'apple_despawn': {
                this.appleManager.removeAppleFromNet(event.appleId);
                break;
            }
            case 'death': {
                const dsnake = this.playerRegistry.getSnake(event.playerId);
                if (dsnake) {
                    this.audio.playCrash();
                    this.burstSystem.emit(dsnake.position, 30, 0xFF4081);
                    // Animate death over 1 second instead of instant hide
                    this.animateSnakeDeath(dsnake);
                }
                // Get player name for kill feed
                const victimName = this.playerRegistry.getName(event.playerId) || 'UNKNOWN';
                if (event.reason === 'disconnect') {
                    this.ui.addKillFeedEntry(`${victimName} DISCONNECTED`, '#888888');
                } else if (event.killerId) {
                    const killerName = this.playerRegistry.getName(event.killerId) || 'UNKNOWN';
                    this.ui.addKillFeedEntry(`${killerName} SEVERED ${victimName}`);
                } else {
                    this.ui.addKillFeedEntry(`${victimName} SEVERED (${event.reason})`);
                }
                // Remove name label for dead player
                this.nameLabelManager?.removeLabel(event.playerId);
                this.playerRegistry.markDead(event.playerId);
                // Enter spectator mode if local player died in multiplayer
                if (event.playerId === this.localPlayerId && this.mode === 'multiplayer') {
                    this.enterSpectatorMode();
                }
                // If spectating the player who just died, switch to next
                if (this.state === GameState.SPECTATING && this.playerRegistry.spectatingPlayerId === event.playerId) {
                    this.spectateNextPlayer();
                }
                break;
            }
            case 'game_over': {
                this.state = GameState.GAME_OVER;
                this.audio.stopMusic();
                this.audio.stopWaterSound();
                this.ui.hideSpectator();
                this.nameLabelManager?.hide();
                this.ui.showMpResults(event.rankings);
                break;
            }
        }
    }

    private animateSnakeDeath(snake: Snake): void {
        this.deathAnimations.set(snake, { startTime: Date.now() });
    }

    updateVisuals(dt: number) {
        this.updateSeason(dt);

        // Update body visuals for all snakes in multiplayer, or just local in singleplayer
        if (this.mode === 'multiplayer') {
            this.playerRegistry.forEach(p => p.snake.updateBodyVisuals());
        } else {
            this.snake.updateBodyVisuals();
        }

        // Show invulnerability countdown
        if (this.snake.invulnerableTimer > 0) {
            this.ui.showInvulnerabilityCountdown(this.snake.invulnerableTimer);
        } else {
            this.ui.showInvulnerabilityCountdown(0);
        }

        // Process death animations
        for (const [snake, anim] of this.deathAnimations) {
            const elapsed = (Date.now() - anim.startTime) / 1000;
            if (elapsed < 1.0) {
                // Fade out + sink into ground
                snake.mesh.position.y -= 2.0 * dt; // Sink at 2 units/sec
                const opacity = 1.0 - elapsed;
                snake.mesh.traverse((obj) => {
                    if (obj instanceof THREE.Mesh && obj.material) {
                        const mat = obj.material as THREE.MeshStandardMaterial;
                        mat.transparent = true;
                        mat.opacity = opacity;
                    }
                });
            } else {
                // Animation complete, hide
                snake.mesh.visible = false;
                this.deathAnimations.delete(snake);
            }
        }

        this.updateCamera(dt);
        this.dust.update(this.camera.position);

        if (this.state === GameState.PLAYING) {
            this.updateUnderwaterEffects();
            this.ui.updateAir(this.snake.airTimer, CONFIG.MAX_AIR_TIME, this.snake.isUnderwater);
        } else if (this.state === GameState.SPECTATING) {
            // Hide underwater effects when spectating
            this.underwaterOverlay.style.opacity = '0';
            this.renderer.setClearColor(this._defaultClearColor, 1.0);
            this.ui.updateAir(CONFIG.MAX_AIR_TIME, CONFIG.MAX_AIR_TIME, false);
        }

        // Water trail and ripple effects when interacting with water
        if (this.snake.isUnderwater || this.snake.isSkimming) {
            // Update water sound based on speed
            this.audio.updateWaterSound(this.snake.actualSpeed);

            // Reduced bubble particles - only occasional
            if (Math.random() < 0.1) {
                this.burstSystem.emitBubbles(
                    this.snake.position.clone().add(new THREE.Vector3(
                        (Math.random() - 0.5) * 2,
                        (Math.random() - 0.5) * 1,
                        (Math.random() - 0.5) * 2
                    )),
                    1
                );
            }

            // Enhanced water trail behind the snake - reuse temp vector
            this._tempVec3.set(
                Math.cos(this.snake.angle),
                0,
                Math.sin(this.snake.angle)
            );
            // Emit trail less frequently for performance (was 0.8)
            if (Math.random() < 0.4) {
                this.burstSystem.emitWaterTrail(
                    this.snake.position,
                    this._tempVec3,
                    this.snake.actualSpeed
                );
            }

            // More frequent ripples for better wave effect
            const currentTime = this.lastTime / 1000;
            if (currentTime - this.lastRippleTime > 0.15) {
                this.burstSystem.emitRipples(this.snake.position, 16);
                this.lastRippleTime = currentTime;
            }
        } else {
            // Stop water sound if not underwater
            if (this.audio.isWaterSoundPlaying) {
                this.audio.stopWaterSound();
            }
        }

        // Boost visual effects for local snake
        if (this.snake.isBoosting) {
            this._tempVec3.set(
                Math.cos(this.snake.angle),
                0,
                Math.sin(this.snake.angle)
            );
            if (!this.isMobile || Math.random() < 0.5) {
                this.burstSystem.emitBoostTrail(
                    this.snake.position,
                    this._tempVec3,
                    this.snake.actualSpeed,
                    this.lastTime / 1000
                );
            }
        }

        // Boost particles for remote snakes in multiplayer
        if (this.mode === 'multiplayer') {
            for (const [pid, s] of this.playerRegistry.snakeEntries()) {
                if (pid === this.localPlayerId) continue;
                if (s.isBoosting) {
                    this._tempVec3.set(Math.cos(s.angle), 0, Math.sin(s.angle));
                    if (Math.random() < 0.3) {
                        this.burstSystem.emitBoostTrail(
                            s.position,
                            this._tempVec3,
                            s.actualSpeed,
                            this.lastTime / 1000
                        );
                    }
                }
            }

            // Update name labels
            if (this.nameLabelManager) {
                const entries: Array<{ playerId: string; screenX: number; screenY: number; visible: boolean; distance: number }> = [];
                const halfW = window.innerWidth / 2;
                const halfH = window.innerHeight / 2;

                for (const [pid, s] of this.playerRegistry.snakeEntries()) {
                    if (!s.mesh.visible || s.bodyMeshes.length === 0) {
                        entries.push({ playerId: pid, screenX: 0, screenY: 0, visible: false, distance: 0 });
                        continue;
                    }

                    // Project head position (+3Y offset) to screen
                    this._tempVec3.copy(s.bodyMeshes[0].position);
                    this._tempVec3.y += 3;
                    this._tempVec3.project(this.camera);

                    // Behind camera check
                    if (this._tempVec3.z > 1) {
                        entries.push({ playerId: pid, screenX: 0, screenY: 0, visible: false, distance: 0 });
                        continue;
                    }

                    const screenX = (this._tempVec3.x * halfW) + halfW;
                    const screenY = -(this._tempVec3.y * halfH) + halfH;
                    const distance = this.camera.position.distanceTo(s.bodyMeshes[0].position);

                    entries.push({
                        playerId: pid,
                        screenX,
                        screenY,
                        visible: true,
                        distance,
                    });
                }

                this.nameLabelManager.update(entries, dt);
            }
        }
    }

    updateCamera(dt: number) {
        // Determine which snake the camera should follow
        let targetSnake = this.snake;
        if (this.state === GameState.SPECTATING && this.playerRegistry.spectatingPlayerId) {
            const spectated = this.playerRegistry.getSnake(this.playerRegistry.spectatingPlayerId);
            if (spectated && spectated.mesh.visible) {
                targetSnake = spectated;
            }
        }

        if (!targetSnake.bodyMeshes.length) return;

        const head = targetSnake.bodyMeshes[0];
        const headPos = head.position;
        const snakeAngle = targetSnake.angle;

        const diff = wrapAngle(snakeAngle - this.cameraAngle);

        if (isNaN(diff)) this.cameraAngle = snakeAngle;
        else this.cameraAngle += diff * (1.2 * dt);
        if (isNaN(this.cameraAngle)) this.cameraAngle = 0;

        // Dynamic camera distance based on speed vs base speed
        const speedRatio = targetSnake.actualSpeed / targetSnake.targetBaseSpeed;
        const fovMultiplier = Math.max(1.0, Math.min(1.4, speedRatio * 0.8));

        const dist = 28.0 * fovMultiplier;

        // DYNAMIC HEIGHT: If snake goes super high, camera should tilt up/raise
        // If snake goes off cliff, camera stays higher for a moment?
        // Just track Y with easing.

        const desiredHeight = 18.0 + Math.max(0, (headPos.y - CONFIG.WATER_LEVEL) * 0.2);
        this.cameraHeightOffset += (desiredHeight - this.cameraHeightOffset) * dt * 2.0;

        const idealX = headPos.x - Math.cos(this.cameraAngle) * dist;
        const idealZ = headPos.z - Math.sin(this.cameraAngle) * dist;

        // Camera shouldn't clip into tall mountains if possible, but simple height track is usually okay
        // We clamp camera Y to be at least ground + 5
        const groundH = getTerrainHeight(idealX, idealZ);
        const idealY = Math.max(groundH + 5, headPos.y + this.cameraHeightOffset);

        this._tempVec3.set(idealX, idealY, idealZ);

        this.camera.position.lerp(this._tempVec3, 3.0 * dt);

        // Look slightly ahead of the snake
        const lookDist = 12.0;
        const lookX = headPos.x + Math.cos(this.cameraAngle) * lookDist;
        const lookZ = headPos.z + Math.sin(this.cameraAngle) * lookDist;
        // Look at head Y, smoothed - reuse _tempVec3 since we're done with idealPos
        this._tempVec3.set(lookX, headPos.y, lookZ);

        this.cameraLookAtCurrent.lerp(this._tempVec3, 4.0 * dt);

        this.camera.lookAt(this.cameraLookAtCurrent);

        this.sunLight.target.position.copy(headPos);
        this.skyMesh.position.copy(headPos);
        if (this.water) {
            this.water.position.x = headPos.x;
            this.water.position.z = headPos.z;
        }
    }

    createUnderwaterOverlay() {
        this.underwaterOverlay = document.createElement('div');
        this.underwaterOverlay.style.position = 'fixed';
        this.underwaterOverlay.style.top = '0';
        this.underwaterOverlay.style.left = '0';
        this.underwaterOverlay.style.width = '100%';
        this.underwaterOverlay.style.height = '100%';
        this.underwaterOverlay.style.pointerEvents = 'none';
        this.underwaterOverlay.style.zIndex = '1000';
        this.underwaterOverlay.style.background = 'linear-gradient(to bottom, rgba(0, 100, 200, 0.3) 0%, rgba(0, 150, 255, 0.4) 50%, rgba(0, 100, 200, 0.3) 100%)';
        this.underwaterOverlay.style.opacity = '0';
        this.underwaterOverlay.style.transition = 'opacity 0.3s ease';
        document.body.appendChild(this.underwaterOverlay);
    }

    updateUnderwaterEffects() {
        if (this.snake.isUnderwater) {
            // Show underwater overlay with depth-based intensity
            const depth = Math.max(0, CONFIG.WATER_LEVEL - this.snake.position.y);
            const intensity = Math.min(0.7, depth * 0.05);
            this.underwaterOverlay.style.opacity = intensity.toString();

            // Add slight blue tint to renderer - use pre-allocated color
            this.renderer.setClearColor(this._underwaterClearColor, 1.0);
        } else {
            // Hide overlay
            this.underwaterOverlay.style.opacity = '0';
            // Reset clear color - use pre-allocated color
            this.renderer.setClearColor(this._defaultClearColor, 1.0);
        }
    }

    gameOver() {
        if (this.state === GameState.GAME_OVER) return;
        this.audio.playCrash();
        this.audio.stopMusic();
        this.audio.stopWaterSound();
        this.state = GameState.GAME_OVER;
        this.ui.showGameOver(this.score);
    }

    updateSeason(dt: number) {
        // 1. Determine target palette based on score
        if (this.score <= 250) {
            this.targetPalette = PALETTE_SPRING;
        } else if (this.score <= 500) {
            this.targetPalette = PALETTE_SUMMER;
        } else if (this.score <= 750) {
            this.targetPalette = PALETTE_AUTUMN;
        } else {
            this.targetPalette = PALETTE_WINTER;
        }

        // 2. Smoothly lerp visualPalette toward targetPalette
        const p = this.visualPalette;
        const t = this.targetPalette;
        if (!p || !t) return;

        const alpha = Math.min(1.0, dt * 1.5); // Transition speed factor
        if (isNaN(alpha)) return;

        // Reuse pre-allocated Color objects to avoid GC pressure
        const lerpColor = (c1: number, c2: number) => {
            this._tempColor1.setHex(c1);
            this._tempColor2.setHex(c2);
            this._tempColor1.lerp(this._tempColor2, alpha);
            return this._tempColor1.getHex();
        };

        const lerpValue = (v1: number, v2: number) => v1 + (v2 - v1) * alpha;

        // Iterate through all colors in palette
        for (const key in p.colors) {
            const k = key as keyof typeof p.colors;
            p.colors[k] = lerpColor(p.colors[k], t.colors[k]);
        }

        p.bloom.strength = lerpValue(p.bloom.strength, t.bloom.strength);
        p.bloom.radius = lerpValue(p.bloom.radius, t.bloom.radius);
        p.bloom.threshold = lerpValue(p.bloom.threshold, t.bloom.threshold);

        p.fog.near = lerpValue(p.fog.near, t.fog.near);
        p.fog.far = lerpValue(p.fog.far, t.fog.far);

        // 3. Apply interpolated palette to scene
        this.applyPalette(p);
    }

    applyPalette(palette: Palette) {
        // Update Shared Materials
        updateAssetMaterials(palette);

        // Update Snake (only in singleplayer — multiplayer uses fixed player colors)
        if (this.mode === 'singleplayer') {
            this.snake.updatePalette(palette);
        }

        // Update Sky Shader
        if (this.skyMesh) {
            const mat = this.skyMesh.material as THREE.ShaderMaterial;
            mat.uniforms.topColor.value.setHex(palette.colors.SKY_TOP);
            mat.uniforms.midColor.value.setHex(palette.colors.SKY_MID);
            mat.uniforms.bottomColor.value.setHex(palette.colors.SKY_BOTTOM);
        }

        // Update Lights
        this.hemiLight.color.setHex(palette.colors.SKY_TOP);
        this.hemiLight.groundColor.setHex(palette.colors.GROUND_BASE);

        // Update Fog
        if (this.scene.fog instanceof THREE.Fog) {
            this.scene.fog.color.setHex(palette.colors.FOG);
            this.scene.fog.near = palette.fog.near;
            this.scene.fog.far = palette.fog.far;
        }

        // Update Post Processing (only if bloom is enabled)
        if (this.bloomPass) {
            this.bloomPass.strength = palette.bloom.strength;
            this.bloomPass.radius = palette.bloom.radius;
            this.bloomPass.threshold = palette.bloom.threshold;
        }

        // Update Water
        if (this.water) {
            this.water.material.uniforms['waterColor'].value.setHex(palette.colors.WATER);
        }

        // Update UI
        this.ui.updateAccentColor(palette.colors.UI_ACCENT);
        document.documentElement.style.setProperty('--primary-color', '#' + new THREE.Color(palette.colors.UI_ACCENT).getHexString());
    }

    createWater() {
        // Large plane for infinite feel
        const waterGeometry = new THREE.PlaneGeometry(1000, 1000);

        // Generate a procedural normal map for ripples
        // We'll use a canvas to draw some noise/waves
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = '#8080ff'; // Neutral normal pointing up
            ctx.fillRect(0, 0, 256, 256);

            // Add soft procedural waves
            for (let i = 0; i < 20; i++) {
                const x = Math.random() * 256;
                const y = Math.random() * 256;
                const radius = 20 + Math.random() * 50;
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                gradient.addColorStop(0, 'rgba(140, 140, 255, 0.2)');
                gradient.addColorStop(1, 'rgba(128, 128, 255, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 256, 256);
            }
        }

        const waterNormals = new THREE.CanvasTexture(canvas);
        waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

        this.water = new Water(
            waterGeometry,
            {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: waterNormals,
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: this.visualPalette.colors.WATER,
                distortionScale: 3.7,
                fog: this.scene.fog !== undefined
            }
        );

        this.water.rotation.x = -Math.PI / 2;
        this.water.position.y = CONFIG.WATER_LEVEL;

        // --- CUSTOM TRANSPARENCY PATCH ---
        this.water.material.transparent = true;
        this.water.material.fragmentShader = this.water.material.fragmentShader.replace(
            'gl_FragColor = vec4( color, 1.0 );',
            'gl_FragColor = vec4( color, 0.75 );' // 75% opacity
        );

        this.scene.add(this.water);
    }

    // --- DISCONNECT HANDLING ---

    private handleHostDisconnected(): void {
        this.state = GameState.GAME_OVER;
        this.audio.stopMusic();
        this.audio.stopWaterSound();
        this.ui.hideSpectator();
        this.nameLabelManager?.hide();
        this.ui.showHostDisconnected();
    }

    private async attemptReconnect(): Promise<void> {
        if (!this.networkManager || !this.lobbyManager) return;

        const roomCode = this.networkManager.roomCode;
        const wasHost = this.networkManager.isHost;

        // Clean disconnect
        await this.networkManager.disconnect();

        // Wait 1 second
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Attempt rejoin
        if (wasHost) {
            this.ui.hideConnectionLost();
            this.ui.showMessage('Cannot reconnect as host. Returning to menu.');
            setTimeout(() => this.leaveMultiplayerRoom(), 2000);
        } else {
            const success = await this.networkManager.joinRoom(roomCode);
            if (success) {
                this.ui.hideConnectionLost();
            } else {
                this.ui.hideConnectionLost();
                this.ui.showMessage('Reconnect failed. Returning to menu.');
                setTimeout(() => this.leaveMultiplayerRoom(), 2000);
            }
        }
    }

    // --- SPECTATOR METHODS ---

    enterSpectatorMode(): void {
        this.state = GameState.SPECTATING;
        this.keys = { left: false, right: false, boost: false };
        this.spectateNextPlayer();
    }

    spectateNextPlayer(direction: 1 | -1 = 1): void {
        // Find alive remote snakes
        const aliveIds = this.playerRegistry.getAliveRemoteIds();

        if (aliveIds.length === 0) {
            // No one to spectate
            this.playerRegistry.spectatingPlayerId = null;
            this.ui.hideSpectator();
            return;
        }

        // Cycle to next alive player
        const currentIdx = this.playerRegistry.spectatingPlayerId ? aliveIds.indexOf(this.playerRegistry.spectatingPlayerId) : -1;
        const nextIdx = (currentIdx + direction + aliveIds.length) % aliveIds.length;
        this.playerRegistry.spectatingPlayerId = aliveIds[nextIdx];

        // Show spectator banner with player name
        const name = this.playerRegistry.getName(this.playerRegistry.spectatingPlayerId) || 'UNKNOWN';
        this.ui.showSpectator(name);
    }

    // --- MULTIPLAYER METHODS ---

    addSnake(playerId: PlayerId, x: number, z: number, angle: number, colorIndex: number): Snake {
        const isLocal = playerId === this.localPlayerId;
        const snake = isLocal ? this.snake : new Snake(this.scene);

        snake.resetAt(x, z, angle, CONFIG.BASE_SNAKE_SPEED);
        snake.setMultiplayerColor(colorIndex);
        snake.isRemote = !isLocal;

        if (!isLocal) {
            // Minimal callbacks for remote snakes (visual effects only)
            snake.onLand = (speed) => {
                this.burstSystem.emit(snake.position, Math.floor(speed * 0.3), this.visualPalette.colors.GROUND_BASE);
            };
            snake.onBreak = (pos) => {
                this.burstSystem.emitRockPieces(pos, 20);
            };
        }

        // Registration into playerRegistry is done in startMultiplayerGame after names are known
        return snake;
    }

    removeSnake(playerId: PlayerId): void {
        const snake = this.playerRegistry.getSnake(playerId);
        if (!snake) return;
        snake.mesh.parent?.remove(snake.mesh);
        this.playerRegistry.removePlayer(playerId);
    }

    async createMultiplayerRoom(name: string) {
        this.mode = 'multiplayer';
        this.isHost = true;
        this.networkManager = new NetworkManager();
        this.lobbyManager = new LobbyManager(this.networkManager);
        this.localPlayerId = this.networkManager.playerId;

        // Handle lobby state updates
        this.lobbyManager.onPlayersChanged = (players) => {
            this.ui.updateLobbyPlayers(players);
        };

        // Handle game start
        this.lobbyManager.onGameStart = (payload) => {
            this.pendingStartPayload = payload;
            this.startMultiplayerGame(payload);
        };

        const code = await this.lobbyManager.createRoom(name);
        this.state = GameState.LOBBY;
        this.ui.showLobby(code, true);
        this.ui.updateLobbyPlayers(this.lobbyManager.getPlayerList());
    }

    async joinMultiplayerRoom(code: string, name: string) {
        this.mode = 'multiplayer';
        this.isHost = false;
        this.networkManager = new NetworkManager();
        this.lobbyManager = new LobbyManager(this.networkManager);
        this.localPlayerId = this.networkManager.playerId;

        // Handle lobby state updates
        this.lobbyManager.onPlayersChanged = (players) => {
            this.ui.updateLobbyPlayers(players);
        };

        // Handle game start
        this.lobbyManager.onGameStart = (payload) => {
            this.pendingStartPayload = payload;
            this.startMultiplayerGame(payload);
        };

        const success = await this.lobbyManager.joinRoom(code, name);
        if (success) {
            this.state = GameState.LOBBY;
            this.ui.showLobby(code, false);
        } else {
            // Failed to join - reset
            this.mode = 'singleplayer';
            this.networkManager = null;
            this.lobbyManager = null;
        }
    }

    leaveMultiplayerRoom() {
        this.hostSimulation = null;
        this.clientPredictor = null;
        this.nameLabelManager?.destroy();
        this.nameLabelManager = null;
        if (this.lobbyManager) {
            this.lobbyManager.leaveRoom();
            this.lobbyManager.cleanup();
            this.lobbyManager = null;
        }
        if (this.networkManager) {
            this.networkManager.disconnect();
            this.networkManager = null;
        }
        this.playerRegistry.cleanupAndClear();
        this.isHost = false;
        this.mode = 'singleplayer';
        this.state = GameState.MENU;
        this.ui.hideLobby();
        this.ui.showMenu();

        // Reset AppleManager to single-player mode
        this.appleManager = new AppleManager(
            this.scene,
            () => [{ id: 'local', position: this.snake.bodyMeshes[0].position }],
            true
        );
        this.appleManager.onEat = (pos: THREE.Vector3) => {
            this.audio.playEat();
            this.burstSystem.emit(pos, 15, this.visualPalette.colors.APPLE);
        };
    }

    startMultiplayerGame(payload: LobbyStartPayload) {
        // Seed terrain so all clients generate the same world
        seedTerrain(payload.terrainSeed);
        clearTerrainCache();

        this.state = GameState.PLAYING;
        this.ui.hideLobby();
        this.ui.hideMenu();
        this.ui.hideGameOver();

        this.score = 0;
        this.ep = CONFIG.MAX_EP;
        this.dayTime = 0;
        this.inputSeq = 0;
        this.keys = { left: false, right: false, boost: false };

        this.ui.updateScore(0);
        this.ui.updateEp(this.ep, this.maxEp);

        this.world.reset();
        this.burstSystem.reset();

        // Stop any water sounds from previous game
        this.audio.stopWaterSound();

        // Clean up any existing multiplayer state
        this.playerRegistry.cleanupAndClear();
        this.hostSimulation = null;
        this.clientPredictor = null;

        // Create snakes for all players and register in PlayerRegistry
        const players = this.lobbyManager?.getPlayerList() || [];

        for (const pid of payload.playerOrder) {
            const spawn = payload.spawns[pid];
            const player = players.find(p => p.id === pid);
            const colorIndex = player?.colorIndex ?? 0;
            const snake = this.addSnake(pid, spawn.x, spawn.z, spawn.angle, colorIndex);
            const isLocal = pid === this.localPlayerId;
            const isHost = player?.isHost ?? false;
            this.playerRegistry.addPlayer(pid, player?.name || 'UNKNOWN', colorIndex, snake, isHost, isLocal);
        }

        // Create name labels for all players
        this.nameLabelManager?.destroy();
        this.nameLabelManager = new NameLabelManager();
        for (const p of players) {
            const color = MULTIPLAYER_COLORS[p.colorIndex] || MULTIPLAYER_COLORS[0];
            const colorHex = '#' + new THREE.Color(color.head).getHexString();
            this.nameLabelManager.addLabel(p.id, p.name, colorHex);
        }

        // Create AppleManager with multi-snake head provider
        if (this.isHost) {
            // Host mode: AppleManager checks all alive snakes for eating
            this.appleManager = new AppleManager(
                this.scene,
                () => {
                    const heads: Array<{ id: string; position: THREE.Vector3 }> = [];
                    for (const [pid, s] of this.playerRegistry.snakeEntries()) {
                        if (s.bodyMeshes.length > 0 && this.playerRegistry.isAlive(pid)) {
                            heads.push({ id: pid, position: s.bodyMeshes[0].position });
                        }
                    }
                    return heads;
                },
                true
            );
            this.appleManager.onEat = (pos: THREE.Vector3) => {
                this.audio.playEat();
                this.burstSystem.emit(pos, 15, this.visualPalette.colors.APPLE);
            };

            // Create HostSimulation and register all players
            this.hostSimulation = new HostSimulation();
            for (const pid of payload.playerOrder) {
                const snake = this.playerRegistry.getSnake(pid)!;
                const player = players.find(p => p.id === pid);
                const colorIndex = player?.colorIndex ?? 0;
                this.hostSimulation.addPlayer(pid, snake, colorIndex);
            }

            // Listen for remote inputs
            this.networkManager?.on('input', (input: InputPayload) => {
                if (input.playerId !== this.localPlayerId && this.hostSimulation) {
                    this.hostSimulation.receiveInput(input);
                }
            });

            // Host-side disconnect detection: remove player when their presence leaves
            this.networkManager?.on('presence:leave', (data: any) => {
                if (data.presences) {
                    for (const p of data.presences) {
                        if (p.playerId && p.playerId !== this.localPlayerId && this.hostSimulation) {
                            this.hostSimulation.removePlayer(p.playerId);
                        }
                    }
                }
            });
        } else {
            // Client mode: AppleManager does not check eating (receives events from host)
            this.appleManager = new AppleManager(
                this.scene,
                () => {
                    if (this.snake.bodyMeshes.length > 0) {
                        return [{ id: this.localPlayerId, position: this.snake.bodyMeshes[0].position }];
                    }
                    return [];
                },
                false
            );

            // Listen for state updates from host
            this.networkManager?.on('state', (payload: StatePayload) => {
                this.handleStateUpdate(payload);
            });

            // Client-side disconnect detection: detect host leaving
            this.networkManager?.on('presence:leave', (data: any) => {
                if (data.presences) {
                    for (const p of data.presences) {
                        if (p.playerId && p.playerId === this.playerRegistry.hostPlayerId) {
                            this.handleHostDisconnected();
                        }
                    }
                }
            });

            // Connection timeout handler
            this.networkManager?.on('connection:timeout', () => {
                if (this.mode === 'multiplayer' && this.state === GameState.PLAYING) {
                    this.ui.showConnectionLost();
                    this.attemptReconnect();
                }
            });

            // Create client predictor for local snake
            this.clientPredictor = new ClientPredictor(this.snake);

            // Create interpolation buffers for remote snakes
            for (const pid of payload.playerOrder) {
                if (pid !== this.localPlayerId) {
                    this.playerRegistry.setInterpolator(pid, new InterpolationBuffer());
                }
            }
        }
        this.appleManager.reset();

        // Update world around local snake
        this.world.ensureInitialChunks(this.snake.position.x, this.snake.position.z);

        // Spawn initial apples (host only)
        if (this.isHost) {
            for (let i = 0; i < 5; i++) {
                const tree = this.world.getRandomTree();
                if (tree) this.appleManager.spawnApple(tree);
            }
        }

        // Camera setup
        const headPos = this.snake.bodyMeshes[0].position.clone();
        this.cameraLookAtCurrent.copy(headPos);
        this.cameraAngle = this.snake.angle;

        // Countdown: freeze physics until countdown ends
        this.countdownActive = true;
        this.countdownEndTime = payload.countdownEndTime;
        this.ui.startCountdown(3000);

        this.audio.startMusic();
    }
}
