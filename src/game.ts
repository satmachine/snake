
import * as THREE from 'three';
import { CONFIG, GameState } from './definitions';
import { Snake, AppleManager } from './entities';
import { World } from './world';
import { UI } from './ui';
import { AudioManager } from './audio';
import { getTerrainHeight } from './utils';
import { BurstSystem } from './particles';

// Floating dust motes class
class DustSystem {
    particles: THREE.Points;
    
    constructor(scene: THREE.Scene) {
        const count = 300;
        const geo = new THREE.BufferGeometry();
        const pos = [];
        for(let i=0; i<count; i++) {
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
  
  snake: Snake;
  world: World;
  appleManager: AppleManager;
  ui: UI;
  audio: AudioManager;
  dust: DustSystem;
  burstSystem: BurstSystem;
  
  state: GameState = GameState.MENU;
  score: number = 0;
  
  ep: number = 0;
  maxEp: number = CONFIG.MAX_EP;
  
  lastTime: number = 0;
  
  keys = { left: false, right: false, boost: false };
  
  cameraLookAtCurrent = new THREE.Vector3();
  cameraAngle: number = 0; 
  cameraHeightOffset: number = 18.0;

  sunLight!: THREE.DirectionalLight;
  skyMesh!: THREE.Mesh;
  underwaterOverlay!: HTMLDivElement;
  lastRippleTime: number = 0;
  lastTrailPosition: THREE.Vector3 = new THREE.Vector3();

  dayTime: number = 0; 

  constructor() {
    this.audio = new AudioManager();

    this.scene = new THREE.Scene();
    
    this.createSky();

    this.scene.fog = new THREE.Fog(CONFIG.COLORS.FOG, 40, CONFIG.FOG_DIST);

    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);

    const pixelRatio = window.devicePixelRatio; 
    const safePixelRatio = Math.min(pixelRatio, 1.5); 

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(safePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.3; 
    document.body.appendChild(this.renderer.domElement);
    
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

    const hemiLight = new THREE.HemisphereLight(CONFIG.COLORS.SKY_TOP, CONFIG.COLORS.GROUND_BASE, 0.4);
    this.scene.add(hemiLight);

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

    this.world = new World(this.scene);
    this.burstSystem = new BurstSystem(this.scene);
    this.snake = new Snake(this.scene);
    
    this.snake.onBoostStart = () => this.audio.playBoostStart();
    this.snake.onCrash = () => this.gameOver();
    this.snake.onLand = (speed) => {
        // Emit dust on landing
        this.burstSystem.emit(this.snake.position, Math.floor(speed * 0.5));
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
        this.burstSystem.emit(this.snake.position, 20);
        // Play exit splash sound
        this.audio.playWaterSplash();
        // Stop continuous water sound
        this.audio.stopWaterSound();
    };

    this.appleManager = new AppleManager(this.scene, this.snake);
    
    this.appleManager.onEat = (pos: THREE.Vector3) => {
        this.audio.playEat();
        this.burstSystem.emit(pos, 15);
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
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
            float h = normalize( vWorldPosition + offset ).y;
            gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );
        }
      `;
      const uniforms = {
          topColor: { value: new THREE.Color(CONFIG.COLORS.SKY_TOP) },
          bottomColor: { value: new THREE.Color(CONFIG.COLORS.SKY_BOTTOM) },
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

  startGame() {
    this.keys = { left: false, right: false, boost: false };
      
    this.score = 0;
    this.ep = CONFIG.MAX_EP;
    this.dayTime = 0;
    
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
    
    for(let i=0; i<5; i++) {
        const tree = this.world.getRandomTree();
        if (tree) this.appleManager.spawnApple(tree);
    }
    
    const headPos = this.snake.bodyMeshes[0].position.clone();
    this.cameraLookAtCurrent.copy(headPos);
    this.cameraAngle = this.snake.angle; 
  }

  handleKey(e: KeyboardEvent, pressed: boolean) {
    if (this.state !== GameState.PLAYING) return;
    switch(e.key) {
        case 'ArrowLeft': case 'a': case 'A': this.keys.left = pressed; break;
        case 'ArrowRight': case 'd': case 'D': this.keys.right = pressed; break;
        case ' ': case 'Spacebar': this.keys.boost = pressed; break;
    }
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
  }

  animate(time: number) {
    const dt = Math.min((time - this.lastTime) / 1000, 0.1); 
    this.lastTime = time;

    if (this.state === GameState.PLAYING) {
        this.dayTime += dt * 0.05;
        this.sunLight.position.x = this.snake.position.x + 50; 
        this.sunLight.position.z = this.snake.position.z + 50;
        
        // Input processing
        let turn = 0;
        if (this.keys.left) turn -= 1;
        if (this.keys.right) turn += 1;
        this.snake.setTurn(turn);
        
        if (this.keys.boost && !this.snake.isBoosting && this.ep >= CONFIG.EP_COST_BOOST) {
            this.ep -= CONFIG.EP_COST_BOOST;
            this.snake.triggerBoost();
            this.ui.updateEp(this.ep, this.maxEp);
        }

        this.world.update(this.snake.position.x, this.snake.position.z);
        
        const obstacles = this.world.getObstacles();
        const alive = this.snake.update(dt, obstacles);
        
        // Slow EP regeneration, but stalling halts it
        if (!this.snake.isStalled) {
             this.ep = Math.min(this.maxEp, this.ep + dt * 2.0);
             this.ui.updateEp(this.ep, this.maxEp);
        }

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
        
        this.updateCamera(dt);
        this.dust.update(this.camera.position);
        
        // Update underwater visual effects
        this.updateUnderwaterEffects();
        
        // Water trail and ripple effects when underwater
        if (this.snake.isUnderwater) {
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
            
            // Enhanced water trail behind the snake
            const snakeDirection = new THREE.Vector3(
                Math.cos(this.snake.angle),
                0,
                Math.sin(this.snake.angle)
            );
            // Emit trail more frequently for smoother effect
            if (Math.random() < 0.8) {
                this.burstSystem.emitWaterTrail(
                    this.snake.position,
                    snakeDirection,
                    this.snake.actualSpeed
                );
            }
            
            // More frequent ripples for better wave effect
            const currentTime = time / 1000;
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
    } 
    else if (this.state === GameState.GAME_OVER || this.state === GameState.MENU) {
        const t = time * 0.0001;
        this.camera.position.x = Math.cos(t) * 60; 
        this.camera.position.z = Math.sin(t) * 60;
        this.camera.position.y = 40;
        this.camera.lookAt(0, 0, 0);
    }

    this.renderer.render(this.scene, this.camera);
  }

  updateCamera(dt: number) {
      if (!this.snake.bodyMeshes.length) return;
      
      const head = this.snake.bodyMeshes[0];
      const headPos = head.position.clone();
      const snakeAngle = this.snake.angle;
      
      let diff = snakeAngle - this.cameraAngle;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      
      this.cameraAngle += diff * (1.2 * dt);
      
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
      
      const idealPos = new THREE.Vector3(idealX, idealY, idealZ);
      
      this.camera.position.lerp(idealPos, 3.0 * dt);
      
      // Look slightly ahead of the snake
      const lookDist = 12.0;
      const lookX = headPos.x + Math.cos(this.cameraAngle) * lookDist;
      const lookZ = headPos.z + Math.sin(this.cameraAngle) * lookDist;
      // Look at head Y, smoothed
      const desiredLookAt = new THREE.Vector3(lookX, headPos.y, lookZ);
      
      this.cameraLookAtCurrent.lerp(desiredLookAt, 4.0 * dt);
      
      this.camera.lookAt(this.cameraLookAtCurrent);
      
      this.sunLight.target.position.copy(headPos);
      this.skyMesh.position.copy(headPos); 
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
          
          // Add slight blue tint to renderer
          this.renderer.setClearColor(new THREE.Color(0x001122), 1.0);
      } else {
          // Hide overlay
          this.underwaterOverlay.style.opacity = '0';
          // Reset clear color
          this.renderer.setClearColor(new THREE.Color(0x000000), 1.0);
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
}
