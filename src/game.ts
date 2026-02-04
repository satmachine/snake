
import * as THREE from 'three';
import { CONFIG, GameState, PALETTE_SPRING, PALETTE_SUMMER, PALETTE_AUTUMN, PALETTE_WINTER, Palette } from './definitions';
import { Snake, AppleManager, updateAssetMaterials } from './entities';
import { World } from './world';
import { UI } from './ui';
import { AudioManager } from './audio';
import { getTerrainHeight, clearTerrainCache, seedTerrain } from './utils';
import { BurstSystem } from './particles';
import { fetchLeaderboard, submitScore } from './supabase';
import { NetworkManager } from './net/network';
import { LobbyManager } from './net/lobby';
import type { PlayerId, LobbyStartPayload } from './net/protocol';

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
    networkManager: NetworkManager | null = null;
    lobbyManager: LobbyManager | null = null;
    multiplayerSnakes: Map<PlayerId, Snake> = new Map();
    localPlayerId: PlayerId = '';
    pendingStartPayload: LobbyStartPayload | null = null;

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

        this.appleManager = new AppleManager(this.scene, this.snake);

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

        this.world.update(this.snake.position.x, this.snake.position.z);

        for (let i = 0; i < 5; i++) {
            const tree = this.world.getRandomTree();
            if (tree) this.appleManager.spawnApple(tree);
        }

        const headPos = this.snake.bodyMeshes[0].position.clone();
        this.cameraLookAtCurrent.copy(headPos);
        this.cameraAngle = this.snake.angle;
    }

    handleKey(e: KeyboardEvent, pressed: boolean) {
        if (this.state !== GameState.PLAYING) return;
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

        if (this.state === GameState.PLAYING) {
            // Update physics once per frame with variable dt for maximum smoothness
            this.updatePhysics(dt);
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
        this.dayTime += dt * 0.05;
        this.sunLight.position.x = this.snake.position.x + 50;
        this.sunLight.position.z = this.snake.position.z + 50;

        const turn = (this.keys.right ? 1 : 0) - (this.keys.left ? 1 : 0);
        this.snake.setTurn(turn);

        // --- BOOST LOGIC (Continuous) ---
        if (this.keys.boost && this.ep > 0) {
            this.snake.setBoosting(true);
            this.ep = Math.max(0, this.ep - CONFIG.EP_DRAIN_PER_SEC * dt);
        } else {
            this.snake.setBoosting(false);
            // Regenerate EP ONLY when not holding the boost key and not stalled
            if (!this.keys.boost && !this.snake.isStalled) {
                this.ep = Math.min(this.maxEp, this.ep + dt * 2.0);
            }
        }
        this.ui.updateEp(this.ep, this.maxEp);

        this.world.update(this.snake.position.x, this.snake.position.z);

        if (this.water) {
            this.water.material.uniforms['sunDirection'].value.copy(this.sunLight.position).normalize();
        }

        const obstacles = this.world.getObstacles();
        const alive = this.snake.update(dt, obstacles);

        if (!alive) this.gameOver();

        const ate = this.appleManager.update(dt);
        if (ate) {
            this.score += 10;
            this.ui.updateScore(this.score);
            this.ep = Math.min(this.maxEp, this.ep + CONFIG.EP_PER_APPLE);
            this.ui.updateEp(this.ep, this.maxEp);

            const newSpeed = Math.min(CONFIG.MAX_SPEED, this.snake.targetBaseSpeed + CONFIG.SPEED_INCREMENT_PER_APPLE);
            this.snake.setBaseSpeed(newSpeed);
        }

        if (this.appleManager.activeApples.length < CONFIG.MAX_APPLES && Math.random() < CONFIG.SPAWN_CHANCE) {
            const tree = this.world.getRandomTree();
            if (tree) this.appleManager.spawnApple(tree);
        }

        this.burstSystem.update(dt);
    }

    updateVisuals(dt: number) {
        this.updateSeason(dt);
        this.snake.updateBodyVisuals();
        this.updateCamera(dt);
        this.dust.update(this.camera.position);

        this.updateUnderwaterEffects();
        this.ui.updateAir(this.snake.airTimer, CONFIG.MAX_AIR_TIME, this.snake.isUnderwater);

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

        // Boost visual effects - emit trail while boosting
        if (this.snake.isBoosting) {
            // Get direction vector
            this._tempVec3.set(
                Math.cos(this.snake.angle),
                0,
                Math.sin(this.snake.angle)
            );
            // Emit boost trail every frame (particles are short-lived)
            // Reduce particle count on mobile
            if (!this.isMobile || Math.random() < 0.5) {
                this.burstSystem.emitBoostTrail(
                    this.snake.position,
                    this._tempVec3,
                    this.snake.actualSpeed,
                    this.lastTime / 1000 // time in seconds for spiral rotation
                );
            }
        }
    }

    updateCamera(dt: number) {
        if (!this.snake.bodyMeshes.length) return;

        const head = this.snake.bodyMeshes[0];
        const headPos = head.position; // Already interpolated in updateBodyVisuals
        const snakeAngle = this.snake.angle;

        let diff = snakeAngle - this.cameraAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;

        if (isNaN(diff)) diff = 0;
        this.cameraAngle += diff * (1.2 * dt);
        if (isNaN(this.cameraAngle)) this.cameraAngle = 0;

        // Dynamic camera distance based on speed vs base speed
        const speedRatio = this.snake.actualSpeed / this.snake.targetBaseSpeed;
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

        // Update Snake
        this.snake.updatePalette(palette);

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

    // --- MULTIPLAYER METHODS ---

    async createMultiplayerRoom(name: string) {
        this.mode = 'multiplayer';
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
        if (this.lobbyManager) {
            this.lobbyManager.leaveRoom();
            this.lobbyManager.cleanup();
            this.lobbyManager = null;
        }
        if (this.networkManager) {
            this.networkManager.disconnect();
            this.networkManager = null;
        }
        this.mode = 'singleplayer';
        this.state = GameState.MENU;
        this.ui.hideLobby();
        this.ui.showMenu();
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
        this.keys = { left: false, right: false, boost: false };

        this.ui.updateScore(0);
        this.ui.updateEp(this.ep, this.maxEp);

        this.world.reset();
        this.appleManager.reset();
        this.burstSystem.reset();

        // Clean up any existing multiplayer snakes
        for (const [, s] of this.multiplayerSnakes) {
            s.mesh.parent?.remove(s.mesh);
        }
        this.multiplayerSnakes.clear();

        // Create snakes for all players
        const players = this.lobbyManager?.getPlayerList() || [];
        for (const pid of payload.playerOrder) {
            const spawn = payload.spawns[pid];
            const player = players.find(p => p.id === pid);
            const snake = pid === this.localPlayerId ? this.snake : new Snake(this.scene);

            snake.resetAt(spawn.x, spawn.z, spawn.angle, CONFIG.BASE_SNAKE_SPEED);
            if (player) {
                snake.setMultiplayerColor(player.colorIndex);
            }

            this.multiplayerSnakes.set(pid, snake);
        }

        // Update world around local snake
        this.world.update(this.snake.position.x, this.snake.position.z);

        // Spawn initial apples
        for (let i = 0; i < 5; i++) {
            const tree = this.world.getRandomTree();
            if (tree) this.appleManager.spawnApple(tree);
        }

        // Camera setup
        const headPos = this.snake.bodyMeshes[0].position.clone();
        this.cameraLookAtCurrent.copy(headPos);
        this.cameraAngle = this.snake.angle;

        this.audio.startMusic();
    }
}
