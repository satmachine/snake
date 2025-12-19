


import * as THREE from 'three';
import { CONFIG, Vector2 } from './definitions';
import { randomInt, randomFloat, getTerrainHeight } from './utils';

export interface Obstacle {
    position: THREE.Vector3;
    radius: number;
}

// --- RESOURCE CACHE (Optimization) ---
const ASSETS = {
    matTree: new THREE.MeshStandardMaterial({ 
        color: CONFIG.COLORS.OBSTACLE_DARK, 
        roughness: 0.1, 
        flatShading: true 
    }),
    matRing: new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.UI_ACCENT }),
    matRock: new THREE.MeshStandardMaterial({ 
        color: CONFIG.COLORS.OBSTACLE_LIGHT,
        roughness: 0.6,
        flatShading: true
    }),
    matCrystal: new THREE.MeshStandardMaterial({ 
        color: CONFIG.COLORS.CRYSTAL,
        roughness: 0.0,
        metalness: 0.2,
        emissive: CONFIG.COLORS.CRYSTAL,
        emissiveIntensity: 0.4, 
        flatShading: true,
        transparent: true,
        opacity: 0.9
    }),
    geoRock: new THREE.DodecahedronGeometry(1.0, 0),
    geoCrystal: new THREE.CylinderGeometry(0, 0.3, 1, 5),
    geoApple: new THREE.IcosahedronGeometry(0.5, 0),
    matApple: new THREE.MeshStandardMaterial({ 
        color: CONFIG.COLORS.APPLE, 
        roughness: 0.1,
        emissive: CONFIG.COLORS.APPLE_EMISSIVE,
        emissiveIntensity: 1.5,
        flatShading: true
    })
};

// --- PROPS (Static World Objects) ---
export class Prop {
    mesh: THREE.Group;
    type: 'tree' | 'rock' | 'crystal';
    radius: number; 
    
    get position(): THREE.Vector3 { return this.mesh.position; }

    constructor(mesh: THREE.Group, type: 'tree' | 'rock' | 'crystal', radius: number) {
        this.mesh = mesh;
        this.type = type;
        this.radius = radius;
        this.mesh.matrixAutoUpdate = false;
        this.mesh.updateMatrix();
    }
}

export class PropFactory {
    static createTree(x: number, z: number): Prop {
        const height = getTerrainHeight(x, z);
        const group = new THREE.Group();
        group.position.set(x, height, z);

        const h = randomFloat(15.0, 30.0);
        const w = randomFloat(2.5, 5.0);
        
        const geo = new THREE.CylinderGeometry(0, w, h, 4, 1);
        const mesh = new THREE.Mesh(geo, ASSETS.matTree);
        mesh.position.y = h / 2;
        mesh.rotation.y = randomFloat(0, Math.PI);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.updateMatrix(); 
        group.add(mesh);

        const ringGeo = new THREE.TorusGeometry(w * 1.5, 0.2, 4, 12);
        const ring = new THREE.Mesh(ringGeo, ASSETS.matRing);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = h * 0.8;
        ring.rotation.z = randomFloat(0, Math.PI);
        ring.updateMatrix();
        group.add(ring);

        group.updateMatrix();

        return new Prop(group, 'tree', w * 0.75);
    }

    static createRock(x: number, z: number): Prop {
        const height = getTerrainHeight(x, z);
        const group = new THREE.Group();
        group.position.set(x, height, z);

        const scale = randomFloat(0.8, 1.4);
        const mesh = new THREE.Mesh(ASSETS.geoRock, ASSETS.matRock);
        mesh.scale.setScalar(scale);
        mesh.position.y = 1.0; 
        mesh.rotation.set(randomFloat(0,3), randomFloat(0,3), randomFloat(0,3));
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.updateMatrix();
        
        group.add(mesh);
        group.updateMatrix();

        return new Prop(group, 'rock', 1.0 * scale);
    }

    static createCrystal(x: number, z: number): Prop {
        const height = getTerrainHeight(x, z);
        const group = new THREE.Group();
        group.position.set(x, height, z);

        const count = 3;
        for(let i=0; i<count; i++) {
            const h = randomFloat(1.0, 3.0);
            const mesh = new THREE.Mesh(ASSETS.geoCrystal, ASSETS.matCrystal);
            
            mesh.scale.set(1, h, 1);
            mesh.position.x = randomFloat(-0.5, 0.5);
            mesh.position.z = randomFloat(-0.5, 0.5);
            const angle = Math.atan2(mesh.position.z, mesh.position.x);
            mesh.rotation.z = Math.PI / 8;
            mesh.rotation.y = angle;
            mesh.position.y = h/2;
            mesh.updateMatrix();
            
            group.add(mesh);
        }
        
        group.updateMatrix();
        return new Prop(group, 'crystal', 1.2);
    }
}

// --- SNAKE ---
export class Snake {
  mesh: THREE.Group;
  bodyMeshes: THREE.Mesh[] = [];
  path: THREE.Vector3[] = []; // Changed to Vector3 for full 3D history
  
  // Position is now 3D but we still use Vector2 for some convenient 2D math
  position: THREE.Vector3 = new THREE.Vector3(0, 0, 0); 
  
  angle: number = 0; 
  turnFactor: number = 0; 
  
  // Physics
  targetBaseSpeed: number = CONFIG.BASE_SNAKE_SPEED;
  actualSpeed: number = CONFIG.BASE_SNAKE_SPEED;
  verticalVelocity: number = 0; // True physics Y velocity
  isAirborne: boolean = false;
  
  growPending: number = 0;
  
  isBoosting: boolean = false;
  boostTimer: number = 0;
  
  invulnerableTimer: number = 0;
  isStalled: boolean = false;

  onBoostStart?: () => void;
  onCrash?: () => void;
  onLand?: (impactSpeed: number) => void;
  
  playerLight: THREE.PointLight;

  headGeo: THREE.OctahedronGeometry;
  bodyGeo: THREE.IcosahedronGeometry;
  headMat: THREE.MeshStandardMaterial;
  bodyMat: THREE.MeshStandardMaterial;

  constructor(scene: THREE.Scene) {
    this.mesh = new THREE.Group();
    scene.add(this.mesh);
    
    // Init Shared Resources
    const r = CONFIG.SEGMENT_RADIUS;
    this.headGeo = new THREE.OctahedronGeometry(r * 1.2, 0);
    this.bodyGeo = new THREE.IcosahedronGeometry(r, 0);
    
    this.headMat = new THREE.MeshStandardMaterial({ 
        color: CONFIG.COLORS.SNAKE_HEAD,
        emissive: CONFIG.COLORS.SNAKE_HEAD,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        flatShading: true
    });
    
    this.bodyMat = new THREE.MeshStandardMaterial({ 
        color: CONFIG.COLORS.SNAKE_BODY,
        emissive: CONFIG.COLORS.SNAKE_BODY,
        emissiveIntensity: 0.3,
        roughness: 0.3,
        flatShading: true
    });

    this.playerLight = new THREE.PointLight(CONFIG.COLORS.SNAKE_EMISSIVE, 0.8, 15);
    this.playerLight.position.y = 2;
    this.mesh.add(this.playerLight);

    this.reset(CONFIG.BASE_SNAKE_SPEED);
  }

  reset(speed: number) {
    this.bodyMeshes.forEach(m => this.mesh.remove(m));
    this.bodyMeshes = [];
    this.path = [];
    
    // Safe start
    let safe = false;
    let r = 0;
    while (!safe && r < 100) {
        const tx = randomFloat(-100, 100);
        const tz = randomFloat(-100, 100);
        const h = getTerrainHeight(tx, tz);
        
        // Ensure not in water and not on a peak
        if (h > CONFIG.WATER_LEVEL + 3 && h < CONFIG.TERRAIN_HEIGHT * 0.5) {
            this.position.set(tx, h, tz);
            safe = true;
        }
        r++;
    }

    this.angle = 0; 
    this.turnFactor = 0;
    this.growPending = 0;
    
    this.targetBaseSpeed = speed;
    this.actualSpeed = speed;
    this.verticalVelocity = 0;
    this.isAirborne = false;

    this.isBoosting = false;
    this.boostTimer = 0;
    this.invulnerableTimer = 2.0; 
    this.isStalled = false;

    // Pre-fill path to avoid initial jitter
    const startLen = CONFIG.SNAKE_START_LENGTH;
    for (let i = 0; i <= startLen * 20; i++) {
        // Trace backwards flat to avoid height glitches on spawn
        const dist = i * (CONFIG.SEGMENT_SPACING / 10); 
        this.path.push(new THREE.Vector3(
            this.position.x - dist, 
            this.position.y,
            this.position.z 
        ));
    }

    for (let i = 0; i < startLen; i++) {
        this.addSegment(i === 0);
    }
    
    this.updateBodyVisuals();
  }

  setBaseSpeed(speed: number) { this.targetBaseSpeed = speed; }
  setTurn(turn: number) { this.turnFactor = turn; }

  triggerBoost() {
      if (this.isBoosting) {
          this.boostTimer = CONFIG.BOOST_DURATION; 
      } else {
          this.isBoosting = true;
          this.boostTimer = CONFIG.BOOST_DURATION;
          if (this.onBoostStart) this.onBoostStart();
      }
  }

  addSegment(isHead: boolean) {
    const mesh = new THREE.Mesh(
        isHead ? this.headGeo : this.bodyGeo,
        isHead ? this.headMat : this.bodyMat
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.mesh.add(mesh);
    this.bodyMeshes.push(mesh);
  }

  update(dt: number, nearbyObstacles: Obstacle[] = []): boolean {
    if (this.invulnerableTimer > 0) this.invulnerableTimer -= dt;

    // --- 1. HORIZONTAL VELOCITY ---
    let engineSpeed = this.targetBaseSpeed;
    if (this.isBoosting) {
        this.boostTimer -= dt;
        engineSpeed *= CONFIG.BOOST_SPEED_MULTIPLIER;
        if (this.boostTimer <= 0) this.isBoosting = false;
    }

    // Look ahead logic for slope forces (only applies when on ground)
    const lookAheadDist = 2.0;
    const nextXSample = this.position.x + Math.cos(this.angle) * lookAheadDist;
    const nextZSample = this.position.z + Math.sin(this.angle) * lookAheadDist;
    
    // We get the Terrain height directly here for physics check
    const currentGroundH = getTerrainHeight(this.position.x, this.position.z);
    const nextGroundH = getTerrainHeight(nextXSample, nextZSample);
    
    const slope = (nextGroundH - currentGroundH) / lookAheadDist;
    
    // Gravity influence on speed (Accellerate downhill, Decelerate uphill)
    // Only apply if grounded or very close to ground
    if (!this.isAirborne) {
        const gravityForce = -slope * CONFIG.GRAVITY_ACCEL * CONFIG.SLOPE_SENSITIVITY;
        this.actualSpeed += gravityForce * dt;
        
        // Friction
        const speedDiff = engineSpeed - this.actualSpeed;
        const frictionCoeff = this.actualSpeed > engineSpeed ? CONFIG.FRICTION * 0.5 : CONFIG.FRICTION * 2.0;
        this.actualSpeed += speedDiff * frictionCoeff * dt;
    } else {
        // Air resistance
        this.actualSpeed *= (1.0 - 0.1 * dt);
    }

    // Clamp Speed
    if (this.actualSpeed > CONFIG.MAX_DOWNHILL_SPEED) this.actualSpeed = CONFIG.MAX_DOWNHILL_SPEED;
    
    // Stall Check
    if (this.actualSpeed < CONFIG.MIN_STALL_SPEED && !this.isAirborne) {
        this.isStalled = true;
        if (this.actualSpeed < 0) this.actualSpeed = 0; 
    } else {
        this.isStalled = false;
    }

    // --- 2. STEERING ---
    let turnRate = CONFIG.SNAKE_TURN_SPEED;
    if (this.isAirborne) turnRate *= CONFIG.AIR_CONTROL; // Harder to turn in air
    else if (this.isStalled) turnRate *= 0.2; 
    
    if (this.turnFactor !== 0) {
        this.angle += this.turnFactor * turnRate * dt;
    }

    // --- 3. MOVEMENT INTEGRATION ---
    const moveDist = this.actualSpeed * dt;
    const nextX = this.position.x + Math.cos(this.angle) * moveDist;
    const nextZ = this.position.z + Math.sin(this.angle) * moveDist; 
    
    // Vertical Integration (Physics Gravity)
    this.verticalVelocity -= CONFIG.PHYSICS_GRAVITY * dt;
    const predictedY = this.position.y + this.verticalVelocity * dt;
    const predictedGroundH = getTerrainHeight(nextX, nextZ);

    // --- 4. GROUND COLLISION & AIR LOGIC ---
    const collisionThreshold = 0.5; // Tolerance

    if (predictedY <= predictedGroundH + CONFIG.SEGMENT_RADIUS) {
        // WE HIT THE GROUND / STAY ON GROUND
        const prevAirborne = this.isAirborne;
        const impactVel = this.verticalVelocity;

        this.isAirborne = false;
        this.position.y = predictedGroundH + CONFIG.SEGMENT_RADIUS;
        
        if (prevAirborne) {
            // Landing Event
            if (this.onLand && impactVel < -10) this.onLand(Math.abs(impactVel));
        }

        // Calculate slope velocity to see if we should launch next frame
        // "slopeVel" is how fast the ground is rising/falling underneath us
        // v = dist/time -> (heightDiff) / dt is wrong because we moved X distance.
        // It's slope * horizontalSpeed.
        // slope = dy/dx. speed = dx/dt.  slope * speed = dy/dt.
        const currentSlope = (predictedGroundH - currentGroundH) / moveDist; 
        const terrainVerticalVel = currentSlope * this.actualSpeed;

        if (terrainVerticalVel > this.verticalVelocity) {
            // The ground is pushing us up (or we are falling slower than the slope drops? no)
            // If the ground rises faster than our current V-vel, we climb.
            // If the ground drops (negative), and we have downward V-vel, we stick unless the drop is steep.
            
            // STICK TO GROUND
            this.verticalVelocity = terrainVerticalVel;
            
            // --- JUMP LOGIC ---
            // If we are moving fast up a slope, add a tiny bit of "pop" so if the slope ends, we fly.
            if (terrainVerticalVel > 5 && this.actualSpeed > 20) {
                 this.verticalVelocity += CONFIG.JUMP_ASSIST * dt; 
            }
        } 
        // Else: If terrainVerticalVel is WAY less than verticalVelocity (cliff drops away), 
        // and we were already moving up? Wait.
        // If we have momentum (yVel > 0) and ground drops, we naturally enter 'if predictedY > predictedGroundH' block next frame?
        // No, we are in 'Hit Ground' block. 
        // This implies we *fell* into the ground or stayed on it.
        
    } else {
        // WE ARE AIRBORNE
        this.isAirborne = true;
        this.position.y = predictedY;
    }
    
    // --- 5. OBSTACLE COLLISION ---
    if (slope > CONFIG.MAX_CLIMBABLE_SLOPE && this.invulnerableTimer <= 0 && !this.isAirborne) {
        // Only crash on walls if on ground
        if (this.onCrash) this.onCrash();
        return false;
    }

    if (this.invulnerableTimer <= 0) {
        // Check props
        const headRadius = CONFIG.SEGMENT_RADIUS * 1.5;
        // Optimization check
        for (const obs of nearbyObstacles) {
             const dx = nextX - obs.position.x;
             const dz = nextZ - obs.position.z;
             if (Math.abs(dx) > 10 || Math.abs(dz) > 10) continue;
             
             // Check 2D distance first
             const distSq = dx*dx + dz*dz;
             const minDist = headRadius + obs.radius;
             if (distSq < minDist * minDist) {
                 // Check height - allows jumping over small rocks?
                 // Obstacles are usually tall trees or big rocks.
                 // Let's assume infinite height collision for simplicity or check Y relative to prop
                 if (this.position.y < obs.position.y + 5) {
                    if (this.onCrash) this.onCrash();
                    return false;
                 }
             }
        }
    }

    // Apply Position
    this.position.x = nextX;
    this.position.z = nextZ;
    // Y already applied

    // Record Path (3D)
    this.path.unshift(this.position.clone()); // Store full 3D vector
    
    const approximateSegLimit = 50 + (this.bodyMeshes.length * 20); 
    if (this.path.length > approximateSegLimit) {
        this.path.length = approximateSegLimit; 
    }

    this.updateBodyVisuals();

    if (this.growPending > 0) {
        this.addSegment(false);
        this.growPending--;
    }

    // 6. SELF COLLISION
    if (this.invulnerableTimer <= 0) {
        const grace = 20; 
        const hitDist = CONFIG.SEGMENT_RADIUS * 1.5;
        for (let i = grace; i < this.bodyMeshes.length; i++) {
            const segWorldPos = this.bodyMeshes[i].position;
            if (Math.abs(this.position.x - segWorldPos.x) > 2) continue;
            if (Math.abs(this.position.z - segWorldPos.z) > 2) continue; // Note Z check

            const dx = this.position.x - segWorldPos.x;
            const dz = this.position.z - segWorldPos.z; 
            
            if (dx*dx + dz*dz < hitDist * hitDist) {
                // Ignore Z height for self collision? Prefer lenient.
                // If I am jumping OVER my tail, I should be safe.
                if (Math.abs(this.position.y - segWorldPos.y) < 2.0) {
                    if (this.onCrash) this.onCrash();
                    return false;
                }
            }
        }
    }

    return true;
  }

  updateBodyVisuals() {
      let currentPathIndex = 0;
      let distAccumulator = 0;
      
      const head = this.bodyMeshes[0];
      // Head connects directly to physical position
      head.position.copy(this.position);
      
      const time = Date.now() * 0.002;

      // Tilt head based on movement
      // Pitch: look down if falling, look up if climbing
      // We can approximate pitch from vertical velocity
      const pitch = Math.max(-0.8, Math.min(0.8, this.verticalVelocity * 0.05));
      
      head.rotation.set(0, 0, 0);
      head.rotation.y = -this.angle; // Yaw
      head.rotation.z = this.isStalled ? 0.5 : (this.turnFactor * -0.2); // Bank in turns
      head.rotateX(pitch);
      
      this.playerLight.position.copy(this.position);
      this.playerLight.position.y += 3;
      
      if (this.isStalled) {
          const warnPulse = (Math.sin(time * 10) + 1) * 0.5; 
          this.headMat.emissiveIntensity = 0.6 + warnPulse * 1.0;
          this.headMat.color.setHex(CONFIG.COLORS.APPLE); 
      } else {
          this.headMat.emissiveIntensity = 0.6;
          this.headMat.color.setHex(CONFIG.COLORS.SNAKE_HEAD);
      }

      // Update Body Segments
      for (let i = 1; i < this.bodyMeshes.length; i++) {
          const mesh = this.bodyMeshes[i];
          const targetDist = i * CONFIG.SEGMENT_SPACING;
          
          while (currentPathIndex < this.path.length - 1) {
              const p1 = this.path[currentPathIndex];
              const p2 = this.path[currentPathIndex + 1];
              // 3D Distance for air handling
              const d = p1.distanceTo(p2);
              
              if (distAccumulator + d >= targetDist) {
                  const alpha = (targetDist - distAccumulator) / d;
                  
                  // Interpolate 3D position
                  mesh.position.lerpVectors(p1, p2, alpha);
                  
                  // Gentle generic wobble
                  if (!this.isAirborne) {
                     const wave = Math.sin(time - i * 0.5) * 0.2;
                     mesh.position.y += wave;
                  }
                  
                  mesh.rotation.x = time * 0.5;
                  mesh.rotation.y = time * 0.3;
                  mesh.updateMatrix();
                  
                  break;
              }
              distAccumulator += d;
              currentPathIndex++;
          }
      }
  }
}

// --- APPLE MANAGER ---
interface Apple {
    mesh: THREE.Mesh;
    velocity: THREE.Vector3;
    isFalling: boolean;
    landed: boolean;
    time: number;
    baseY?: number; 
}

export class AppleManager {
  scene: THREE.Scene;
  snake: Snake;
  activeApples: Apple[] = [];
  
  onEat?: (position: THREE.Vector3) => void;
  
  constructor(scene: THREE.Scene, snake: Snake) {
      this.scene = scene;
      this.snake = snake;
  }
  
  spawnApple(treeProp: Prop) {
      if (treeProp.type !== 'tree') return;
      
      const mesh = new THREE.Mesh(ASSETS.geoApple, ASSETS.matApple);
      
      const treePos = treeProp.mesh.position;
      const angle = Math.random() * Math.PI * 2;
      
      const dist = randomFloat(4.0, 10.0); 
      
      const x = treePos.x + Math.cos(angle) * dist;
      const z = treePos.z + Math.sin(angle) * dist;
      const groundH = getTerrainHeight(x, z);
      const spawnH = groundH + randomFloat(15.0, 25.0);
      
      mesh.position.set(x, spawnH, z);

      this.scene.add(mesh);
      
      this.activeApples.push({ 
          mesh, 
          velocity: new THREE.Vector3(0, 0, 0),
          isFalling: true,
          landed: false,
          time: Math.random() * 100 
      });
  }
  
  update(dt: number): boolean {
      let ate = false;
      const eatDist = 2.5; // Slightly larger eat radius for air grabs
      const headPos = this.snake.bodyMeshes[0].position;
      const cullDistSq = CONFIG.APPLE_CULL_DIST * CONFIG.APPLE_CULL_DIST;
      
      for (let i = this.activeApples.length - 1; i >= 0; i--) {
          const apple = this.activeApples[i];

          if (headPos.distanceToSquared(apple.mesh.position) > cullDistSq) {
              this.scene.remove(apple.mesh);
              this.activeApples.splice(i, 1);
              continue; 
          }

          if (apple.isFalling) {
              apple.velocity.y -= 25.0 * dt; 
              apple.mesh.position.addScaledVector(apple.velocity, dt);
              const groundH = getTerrainHeight(apple.mesh.position.x, apple.mesh.position.z);
              
              if (apple.mesh.position.y <= groundH + 0.5) {
                  apple.mesh.position.y = groundH + 0.5;
                  if (Math.abs(apple.velocity.y) > 2.0) {
                       apple.velocity.y *= -0.4;
                       apple.velocity.x *= 0.8;
                       apple.velocity.z *= 0.8;
                  } else {
                      apple.isFalling = false;
                      apple.landed = true;
                      apple.velocity.set(0,0,0);
                      apple.baseY = groundH; 
                  }
              }
          } else {
              apple.time += dt * 2;
              const groundH = apple.baseY ?? getTerrainHeight(apple.mesh.position.x, apple.mesh.position.z);
              apple.mesh.position.y = groundH + 0.5 + Math.sin(apple.time) * 0.2;
              apple.mesh.rotation.y += dt;
              apple.mesh.rotation.z += dt * 0.5;
          }

          const distSq = headPos.distanceToSquared(apple.mesh.position);
          
          if (distSq < eatDist * eatDist) {
              const pos = apple.mesh.position.clone();
              this.scene.remove(apple.mesh);
              this.activeApples.splice(i, 1);
              
              if (this.onEat) this.onEat(pos);
              
              this.snake.growPending++;
              ate = true;
          }
      }
      
      return ate;
  }
  
  reset() {
      for(const a of this.activeApples) {
          this.scene.remove(a.mesh);
      }
      this.activeApples = [];
  }
}
