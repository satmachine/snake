


import * as THREE from 'three';
import { CONFIG, Vector2, PALETTE_SPRING, Palette } from './definitions';
import { randomInt, randomFloat, randomNormal, getTerrainHeight } from './utils';

// --- TEXTURE HELPERS ---
function createGrassTexture() {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Fill base
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);

    // Add noise/grass blades pattern
    for (let i = 0; i < 5000; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const gray = Math.random() * 50 + 205;
        ctx.fillStyle = `rgb(${gray},${gray},${gray})`;
        ctx.fillRect(x, y, 1, 3); // Small blades
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(20, 20); // Tile it
    return tex;
}

const grassMap = createGrassTexture();

export interface Obstacle {
    position: THREE.Vector3;
    radius: number;
}

// --- RESOURCE CACHE (Optimization) ---
// --- RESOURCE CACHE (Optimization) ---
export const ASSETS = {
    matTree: new THREE.MeshStandardMaterial({
        color: PALETTE_SPRING.colors.OBSTACLE_DARK,
        roughness: 0.1,
        flatShading: true
    }),
    matRing: (() => {
        const mat = new THREE.MeshStandardMaterial({
            color: PALETTE_SPRING.colors.UI_ACCENT,
            emissive: PALETTE_SPRING.colors.UI_ACCENT,
            emissiveIntensity: 1.5,
            roughness: 0.0,
            flatShading: true
        });
        mat.onBeforeCompile = (shader) => {
            shader.fragmentShader = shader.fragmentShader.replace(
                'vec3 totalEmissiveRadiance = emissive;',
                `vec3 totalEmissiveRadiance = emissive;
                 #ifdef USE_INSTANCING_COLOR
                    totalEmissiveRadiance *= vInstanceColor.rgb;
                 #endif`
            );
        };
        return mat;
    })(),
    matRock: new THREE.MeshStandardMaterial({
        color: PALETTE_SPRING.colors.OBSTACLE_LIGHT,
        roughness: 0.6,
        flatShading: true,
        emissiveIntensity: 0.8,
    }),
    matCrystal: new THREE.MeshStandardMaterial({
        color: PALETTE_SPRING.colors.CRYSTAL,
        roughness: 0.0,
        metalness: 0.2,
        emissive: PALETTE_SPRING.colors.CRYSTAL,
        emissiveIntensity: 0.8,
        flatShading: true,
        transparent: true,
        opacity: 0.9
    }),
    geoRock: new THREE.DodecahedronGeometry(1.0, 0),
    geoCrystal: new THREE.CylinderGeometry(0, 0.3, 1, 5),
    geoApple: new THREE.IcosahedronGeometry(0.5, 0),
    geoGrass: new THREE.ConeGeometry(0.2, 1.5, 4),
    // Tree Geometries
    geoTreeTrunk: new THREE.CylinderGeometry(0, 1, 1, 4, 1), // Normalized, will scale
    geoTreeRing: new THREE.TorusGeometry(1.5, 0.2, 4, 12),

    matGrass: new THREE.MeshStandardMaterial({
        color: PALETTE_SPRING.colors.GRASS,
        roughness: 0.8,
        flatShading: true
    }),
    matApple: new THREE.MeshStandardMaterial({
        color: PALETTE_SPRING.colors.APPLE,
        roughness: 0.0,
        emissive: PALETTE_SPRING.colors.APPLE_EMISSIVE,
        emissiveIntensity: 6.0,
        flatShading: true
    }),
    matHumanLandmark: new THREE.MeshStandardMaterial({
        color: 0xFFFFFF,
        roughness: 0.2,
        metalness: 0.1,
        flatShading: true
    }),
    matRedRock: new THREE.MeshStandardMaterial({
        color: 0xB71C1C, // Deep red ochre
        roughness: 0.9,
        flatShading: true
    }),
    matGround: new THREE.MeshStandardMaterial({
        color: PALETTE_SPRING.colors.GROUND_BASE,
        map: grassMap,
        roughnessMap: grassMap,
        roughness: 0.8,
        metalness: 0.1,
        flatShading: false,
        side: THREE.FrontSide
    }),
    // Landmark Geometries
    geoDome: new THREE.SphereGeometry(1, 4, 8, 0, Math.PI), // Half shell for Opera House
    geoArch: new THREE.TorusGeometry(1, 0.1, 4, 12, Math.PI), // Bridge Arch
    geoCylinder: new THREE.CylinderGeometry(1, 1, 1, 8), // Generic cylinder for Tower/Pillars
    geoBox: new THREE.BoxGeometry(1, 1, 1) // For Uluru
};

// Fix geometries center/rotation for easier instancing
ASSETS.geoTreeTrunk.translate(0, 0.5, 0); // Pivot at bottom

// --- PROPS (Logical World Objects) ---
export class Prop {
    type: 'tree' | 'rock' | 'crystal' | 'grass' | 'landmark';
    position: THREE.Vector3;
    radius: number;

    constructor(type: 'tree' | 'rock' | 'crystal' | 'grass' | 'landmark', position: THREE.Vector3, radius: number) {
        this.type = type;
        this.position = position;
        this.radius = radius;
    }
}

export class PropFactory {
    // --- LANDMARKS ---
    static generateOperaHouse(x: number, z: number) {
        const height = getTerrainHeight(x, z);
        const pos = new THREE.Vector3(x, height - 2, z); // Sunk in sand
        const matrices: THREE.Matrix4[] = [];

        // 3 Sails
        const dummy = new THREE.Object3D();

        // Sail 1 (Big)
        dummy.position.copy(pos);
        dummy.rotation.x = -Math.PI / 2; // Face up
        dummy.rotation.z = 0.5;
        dummy.scale.set(15, 15, 25);
        dummy.updateMatrix();
        matrices.push(dummy.matrix.clone());

        // Sail 2 (Med)
        dummy.position.copy(pos).add(new THREE.Vector3(12, 0, 5));
        dummy.rotation.z = 0.3;
        dummy.scale.set(12, 12, 20);
        dummy.updateMatrix();
        matrices.push(dummy.matrix.clone());

        // Sail 3 (Small)
        dummy.position.copy(pos).add(new THREE.Vector3(22, 0, 8));
        dummy.rotation.z = 0.1;
        dummy.scale.set(8, 8, 15);
        dummy.updateMatrix();
        matrices.push(dummy.matrix.clone());

        return {
            prop: new Prop('landmark', pos, 30),
            matrices: { opera: matrices }
        };
    }

    static generateHarbourBridge(x: number, z: number) {
        const height = getTerrainHeight(x, z);
        const pos = new THREE.Vector3(x, height - 5, z); // Sunk
        const matrices: THREE.Matrix4[] = [];

        const dummy = new THREE.Object3D();
        dummy.position.copy(pos);
        dummy.rotation.z = 0.2; // Tilted slightly as if collapsed
        dummy.scale.set(60, 60, 60); // Huge
        dummy.updateMatrix();
        matrices.push(dummy.matrix.clone());

        return {
            prop: new Prop('landmark', pos, 60),
            matrices: { bridge: matrices }
        };
    }

    static generateSydneyTower(x: number, z: number) {
        const height = getTerrainHeight(x, z);
        const pos = new THREE.Vector3(x, height + 2, z);
        const matrices: THREE.Matrix4[] = [];

        const dummy = new THREE.Object3D();
        // Lying on its side
        dummy.position.copy(pos);
        dummy.rotation.z = Math.PI / 2 + 0.1;
        dummy.rotation.x = 0.5;

        // Shaft
        dummy.scale.set(2, 60, 2);
        dummy.updateMatrix();
        matrices.push(dummy.matrix.clone());

        // Turret (Bucket)
        const turretPos = pos.clone().add(new THREE.Vector3(50, 0, 0)); // Roughly where top is
        dummy.position.copy(turretPos);
        dummy.rotation.z = Math.PI / 2 + 0.1;
        dummy.scale.set(8, 6, 8);
        dummy.updateMatrix();
        matrices.push(dummy.matrix.clone());

        return {
            prop: new Prop('landmark', pos, 50),
            matrices: { tower: matrices }
        };
    }

    static generateUluru(x: number, z: number) {
        const height = getTerrainHeight(x, z);
        const pos = new THREE.Vector3(x, height, z);
        const matrices: THREE.Matrix4[] = [];

        const dummy = new THREE.Object3D();
        dummy.position.copy(pos);
        dummy.scale.set(60, 20, 40); // Wide and flat-ish
        dummy.updateMatrix();
        matrices.push(dummy.matrix.clone());

        return {
            prop: new Prop('landmark', pos, 40),
            matrices: { uluru: matrices }
        };
    }

    static generateTree(x: number, z: number) {
        const height = getTerrainHeight(x, z);
        const pos = new THREE.Vector3(x, height, z);

        // Randomize dimensions
        const rand = Math.random();
        let h, w;
        if (rand < 0.7) { h = randomFloat(15.0, 30.0); w = randomFloat(2.5, 5.0); }
        else if (rand < 0.9) { h = randomFloat(30.0, 50.0); w = randomFloat(5.0, 8.0); }
        else { h = randomFloat(50.0, 80.0); w = randomFloat(8.0, 12.0); }

        // Apply normal distribution scale factor (range 0.5x to 3.0x)
        const scaleMultiplier = Math.min(3.0, Math.max(0.5, randomNormal(1.0, 0.7)));
        h *= scaleMultiplier;
        w *= scaleMultiplier;

        const rotY = randomFloat(0, Math.PI);

        // Matrix for Trunk
        const dummy = new THREE.Object3D();
        dummy.position.copy(pos);
        dummy.rotation.y = rotY;
        dummy.scale.set(w, h, w); // Geo is height 1, so scale Y is height
        dummy.updateMatrix();
        const trunkMat = dummy.matrix.clone();

        // Matrix for Ring
        dummy.position.y = height + h * 0.8;
        dummy.rotation.set(Math.PI / 2, 0, 0); // Force strictly horizontal (XZ plane)
        dummy.scale.set(w, w, w); // Uniform scale for the ring torus? 
        // Original was: TorusGeometry(w * 1.5, ...)
        // My new geo is fixed size TorusGeometry(1.5, ...). 
        // If I scale by w/something? 
        // Logic check: Old: Ring radius w*1.5. New Geo: 1.5. So scalling by w should work roughly.
        dummy.updateMatrix();
        const ringMat = dummy.matrix.clone();

        return {
            prop: new Prop('tree', pos, w * 0.75),
            matrices: { trunk: trunkMat, ring: ringMat }
        };
    }

    static generateRock(x: number, z: number) {
        const height = getTerrainHeight(x, z);
        const pos = new THREE.Vector3(x, height, z);

        const scale = randomFloat(0.8, 1.4);

        const dummy = new THREE.Object3D();
        dummy.position.copy(pos);
        dummy.position.y += 1.0;
        dummy.rotation.set(randomFloat(0, 3), randomFloat(0, 3), randomFloat(0, 3));
        dummy.scale.setScalar(scale);
        dummy.updateMatrix();

        return {
            prop: new Prop('rock', pos, 1.0 * scale),
            matrices: { rock: dummy.matrix.clone() }
        };
    }

    static generateCrystal(x: number, z: number) {
        const height = getTerrainHeight(x, z);
        const pos = new THREE.Vector3(x, height, z);
        const matrices: THREE.Matrix4[] = [];

        const count = 3;
        for (let i = 0; i < count; i++) {
            const h = randomFloat(1.0, 3.0);

            const dummy = new THREE.Object3D();
            dummy.position.set(
                pos.x + randomFloat(-0.5, 0.5),
                pos.y + h / 2,
                pos.z + randomFloat(-0.5, 0.5)
            );

            const angle = Math.atan2(dummy.position.z - pos.z, dummy.position.x - pos.x);
            dummy.rotation.z = Math.PI / 8;
            dummy.rotation.y = angle;
            dummy.scale.set(1, h, 1);
            dummy.updateMatrix();
            matrices.push(dummy.matrix.clone());
        }

        return {
            prop: new Prop('crystal', pos, 1.2),
            matrices: { crystal: matrices }
        };
    }

    static generateGrass(x: number, z: number) {
        const height = getTerrainHeight(x, z);
        const pos = new THREE.Vector3(x, height, z);
        const matrices: THREE.Matrix4[] = [];

        const count = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
            const scale = 0.6 + Math.random() * 0.4;

            const dummy = new THREE.Object3D();
            dummy.position.set(
                pos.x + randomFloat(-0.3, 0.3),
                pos.y + scale * 0.75,
                pos.z + randomFloat(-0.3, 0.3)
            );
            dummy.rotation.y = randomFloat(0, Math.PI * 2);
            dummy.scale.setScalar(scale);
            dummy.updateMatrix();
            matrices.push(dummy.matrix.clone());
        }

        return {
            prop: new Prop('grass', pos, 0.3),
            matrices: { grass: matrices }
        };
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

    currentHeadColor: number = PALETTE_SPRING.colors.SNAKE_HEAD;

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
    isUnderwater: boolean = false;
    wasUnderwater: boolean = false;
    isSkimming: boolean = false;
    airTimer: number = CONFIG.MAX_AIR_TIME;

    onBoostStart?: () => void;
    onCrash?: () => void;
    onLand?: (impactSpeed: number) => void;
    onEnterWater?: () => void;
    onExitWater?: () => void;

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
            color: PALETTE_SPRING.colors.SNAKE_HEAD,
            emissive: PALETTE_SPRING.colors.SNAKE_HEAD,
            emissiveIntensity: 1.2,
            roughness: 0.0,
            flatShading: true
        });

        this.bodyMat = new THREE.MeshStandardMaterial({
            color: PALETTE_SPRING.colors.SNAKE_BODY,
            emissive: PALETTE_SPRING.colors.SNAKE_BODY,
            emissiveIntensity: 0.3,
            roughness: 0.3,
            flatShading: true
        });

        this.playerLight = new THREE.PointLight(PALETTE_SPRING.colors.SNAKE_EMISSIVE, 2.0, 20);
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
        this.isSkimming = false;
        this.airTimer = CONFIG.MAX_AIR_TIME;
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

    updatePalette(palette: Palette) {
        this.currentHeadColor = palette.colors.SNAKE_HEAD;
        this.headMat.color.setHex(palette.colors.SNAKE_HEAD);
        this.headMat.emissive.setHex(palette.colors.SNAKE_HEAD);

        this.bodyMat.color.setHex(palette.colors.SNAKE_BODY);
        this.bodyMat.emissive.setHex(palette.colors.SNAKE_BODY);

        this.playerLight.color.setHex(palette.colors.SNAKE_EMISSIVE);
    }

    setBoosting(val: boolean) {
        if (val && !this.isBoosting) {
            if (this.onBoostStart) this.onBoostStart();
        }
        this.isBoosting = val;
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
            engineSpeed *= CONFIG.BOOST_SPEED_MULTIPLIER;
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
        // WATER SKIMMING: If boosting or moving fast enough, the water surface acts like a floor
        let effectiveGroundH = predictedGroundH;
        let onWater = false;
        if ((this.isBoosting || this.actualSpeed >= CONFIG.SKIM_SPEED_THRESHOLD) && CONFIG.WATER_LEVEL > predictedGroundH) {
            effectiveGroundH = CONFIG.WATER_LEVEL;
            onWater = true;
        }

        const collisionThreshold = 0.5; // Tolerance

        if (predictedY <= effectiveGroundH + CONFIG.SEGMENT_RADIUS) {
            // WE HIT THE GROUND / STAY ON GROUND (or Water Surface)
            const prevAirborne = this.isAirborne;
            const impactVel = this.verticalVelocity;

            this.isAirborne = false;
            this.isSkimming = onWater;
            this.position.y = effectiveGroundH + CONFIG.SEGMENT_RADIUS;

            if (prevAirborne) {
                // Landing Event
                if (this.onLand && impactVel < -10) this.onLand(Math.abs(impactVel));
            }

            // Calculate slope velocity to see if we should launch next frame
            // "slopeVel" is how fast the ground is rising/falling underneath us
            // v = dist/time -> (heightDiff) / dt is wrong because we moved X distance.
            // It's slope * horizontalSpeed.
            // slope = dy/dx. speed = dx/dt.  slope * speed = dy/dt.
            // slope = dy/dx. speed = dx/dt.  slope * speed = dy/dt.
            const currentGroundH = getTerrainHeight(this.position.x, this.position.z);
            const currentEffectiveGroundH = ((this.isBoosting || this.actualSpeed >= CONFIG.SKIM_SPEED_THRESHOLD) && CONFIG.WATER_LEVEL > currentGroundH) ? CONFIG.WATER_LEVEL : currentGroundH;

            const currentSlope = (effectiveGroundH - currentEffectiveGroundH) / moveDist;
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
            this.isSkimming = false;
            this.position.y = predictedY;
        }

        // --- 5. OBSTACLE COLLISION ---
        // Only crash on very steep slopes, and give some tolerance
        if (slope > CONFIG.MAX_CLIMBABLE_SLOPE * 1.2 && this.invulnerableTimer <= 0 && !this.isAirborne && this.actualSpeed > 5) {
            // Only crash on walls if on ground and moving fast enough
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
                const distSq = dx * dx + dz * dz;
                const minDist = headRadius + obs.radius;
                if (distSq < minDist * minDist) {
                    // Check height - allow jumping over obstacles if snake is high enough
                    // Use radius to estimate obstacle height (trees have larger radius)
                    const obstacleHeight = obs.radius > 3 ? obs.radius * 2 : obs.radius; // Trees have larger radius
                    const clearance = obs.radius > 3 ? 8.0 : 2.0; // More clearance for larger obstacles (trees)
                    if (this.position.y < obs.position.y + obstacleHeight + clearance) {
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

        // Check if underwater (Deep enough to be submerged)
        this.wasUnderwater = this.isUnderwater;
        // If skimming, we are technically on high water, not underwater
        this.isUnderwater = !this.isSkimming && this.position.y < CONFIG.WATER_LEVEL;

        // Breath mechanic
        if (this.isUnderwater) {
            this.airTimer -= dt;
            if (this.airTimer <= 0) {
                if (this.onCrash) this.onCrash();
                return false;
            }
        } else {
            this.airTimer = CONFIG.MAX_AIR_TIME;
        }

        // Trigger water entry/exit events
        if (this.isUnderwater && !this.wasUnderwater && this.onEnterWater) {
            this.onEnterWater();
        }
        if (!this.isUnderwater && this.wasUnderwater && this.onExitWater) {
            this.onExitWater();
        }

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

        // 6. SELF COLLISION - Optimized with early exit
        if (this.invulnerableTimer <= 0 && this.bodyMeshes.length > 25) {
            const grace = 25; // Increased grace period
            const hitDist = CONFIG.SEGMENT_RADIUS * 1.8; // Slightly more lenient
            // Only check every 3rd segment for performance
            for (let i = grace; i < this.bodyMeshes.length; i += 3) {
                const segWorldPos = this.bodyMeshes[i].position;
                const dx = Math.abs(this.position.x - segWorldPos.x);
                const dz = Math.abs(this.position.z - segWorldPos.z);

                // Early exit optimization
                if (dx > 3 || dz > 3) continue;

                const distSq = dx * dx + dz * dz;
                if (distSq < hitDist * hitDist) {
                    // More lenient height check - allow jumping over tail
                    if (Math.abs(this.position.y - segWorldPos.y) < 3.0) {
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
            this.headMat.emissiveIntensity = 1.2 + warnPulse * 1.0;
            this.headMat.color.setHex(0xFF0000);
        } else {
            this.headMat.emissiveIntensity = 1.2;
            this.headMat.color.setHex(this.currentHeadColor);
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
    light?: THREE.PointLight;
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

        // FIX: Access position directly from Prop, no mesh access
        const treePos = treeProp.position;
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
        const lightDistSq = 50 * 50; // Only add lights to apples within 50 units

        for (let i = this.activeApples.length - 1; i >= 0; i--) {
            const apple = this.activeApples[i];
            const distSqToHead = headPos.distanceToSquared(apple.mesh.position);

            if (distSqToHead > cullDistSq) {
                if (apple.light) {
                    apple.mesh.remove(apple.light);
                }
                this.scene.remove(apple.mesh);
                this.activeApples.splice(i, 1);
                continue;
            }

            // Only add lights to nearby apples for performance
            if (distSqToHead < lightDistSq) {
                if (!apple.light) {
                    const appleLight = new THREE.PointLight(ASSETS.matApple.emissive, 1.2, 8);
                    appleLight.position.set(0, 0, 0);
                    apple.mesh.add(appleLight);
                    apple.light = appleLight;
                }
                // Ensure light matches current palette (which updates ASSETS)
                apple.light.color.copy(ASSETS.matApple.emissive);
            } else if (distSqToHead >= lightDistSq && apple.light) {
                apple.mesh.remove(apple.light);
                apple.light = undefined;
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
                        apple.velocity.set(0, 0, 0);
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
                if (apple.light) {
                    apple.mesh.remove(apple.light);
                }
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
        for (const a of this.activeApples) {
            if (a.light) {
                a.mesh.remove(a.light);
            }
            this.scene.remove(a.mesh);
        }
        this.activeApples = [];
    }
}

export function updateAssetMaterials(palette: Palette) {
    ASSETS.matTree.color.setHex(palette.colors.OBSTACLE_DARK);

    ASSETS.matRing.color.setHex(palette.colors.UI_ACCENT);
    ASSETS.matRing.emissive.setHex(palette.colors.UI_ACCENT);

    ASSETS.matRock.color.setHex(palette.colors.OBSTACLE_LIGHT);

    ASSETS.matCrystal.color.setHex(palette.colors.CRYSTAL);
    ASSETS.matCrystal.emissive.setHex(palette.colors.CRYSTAL);

    ASSETS.matGrass.color.setHex(palette.colors.GRASS);

    ASSETS.matApple.color.setHex(palette.colors.APPLE);
    ASSETS.matApple.emissive.setHex(palette.colors.APPLE_EMISSIVE);

    ASSETS.matGround.color.setHex(palette.colors.GROUND_BASE);
}
