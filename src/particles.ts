
import * as THREE from 'three';
import { CONFIG } from './definitions';

interface Particle {
    position: THREE.Vector3;
    velocity: THREE.Vector3;
    life: number;
    maxLife: number;
    size: number;
    initialSize: number;
    color: THREE.Color;
}

export class BurstSystem {
    scene: THREE.Scene;
    particles: Particle[] = [];
    geometry: THREE.BufferGeometry;
    material: THREE.PointsMaterial;
    mesh: THREE.Points;
    
    // We use a fixed pool size to avoid garbage collection
    maxParticles = 500;
    
    constructor(scene: THREE.Scene) {
        this.scene = scene;
        
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.maxParticles * 3), 3));
        this.geometry.setAttribute('size', new THREE.BufferAttribute(new Float32Array(this.maxParticles), 1));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(this.maxParticles * 3), 3));
        
        // Custom shader material for sprites
        // A simple soft glowing billboard
        const spriteTexture = this.createParticleTexture();

        this.material = new THREE.PointsMaterial({
            size: 1.0,
            vertexColors: true,
            map: spriteTexture,
            transparent: true,
            depthWrite: false, // Additive blending usually looks better without depth write
            blending: THREE.AdditiveBlending
        });
        
        this.mesh = new THREE.Points(this.geometry, this.material);
        this.mesh.frustumCulled = false; // Always render
        this.scene.add(this.mesh);
    }
    
    // Procedurally create a soft glow texture
    createParticleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        if(!ctx) return null;
        
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);
        
        const tex = new THREE.CanvasTexture(canvas);
        tex.minFilter = THREE.LinearFilter;
        return tex;
    }
    
    emit(position: THREE.Vector3, count: number) {
        for (let i = 0; i < count; i++) {
            if (this.particles.length >= this.maxParticles) break;
            
            // Random direction in a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const speed = 2.0 + Math.random() * 4.0;
            
            const vx = speed * Math.sin(phi) * Math.cos(theta);
            const vy = speed * Math.sin(phi) * Math.sin(theta);
            const vz = speed * Math.cos(phi);
            
            const life = 1.0 + Math.random() * 0.5;
            const size = 0.5 + Math.random() * 0.5;
            
            this.particles.push({
                position: position.clone(),
                velocity: new THREE.Vector3(vx, vy, vz),
                life: life,
                maxLife: life,
                size: size,
                initialSize: size,
                color: new THREE.Color(CONFIG.COLORS.APPLE)
            });
        }
    }

    emitBubbles(position: THREE.Vector3, count: number) {
        for (let i = 0; i < count; i++) {
            if (this.particles.length >= this.maxParticles) break;
            
            // Bubbles rise upward with slight horizontal spread
            const angle = Math.random() * Math.PI * 2;
            const horizontalSpeed = 0.5 + Math.random() * 1.0;
            const verticalSpeed = 3.0 + Math.random() * 4.0; // Upward movement
            
            const vx = Math.cos(angle) * horizontalSpeed;
            const vy = verticalSpeed; // Always upward
            const vz = Math.sin(angle) * horizontalSpeed;
            
            const life = 2.0 + Math.random() * 1.0; // Longer life for bubbles
            const size = 0.3 + Math.random() * 0.4; // Smaller bubbles
            
            this.particles.push({
                position: position.clone().add(new THREE.Vector3(
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 2
                )),
                velocity: new THREE.Vector3(vx, vy, vz),
                life: life,
                maxLife: life,
                size: size,
                initialSize: size,
                color: new THREE.Color(0x88CCFF) // Light blue for bubbles
            });
        }
    }
    
    update(dt: number) {
        const positions = this.geometry.attributes.position.array as Float32Array;
        const colors = this.geometry.attributes.color.array as Float32Array;
        // const sizes = this.geometry.attributes.size.array as Float32Array; 
        
        let index = 0;
        
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            p.life -= dt;
            
            if (p.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }
            
            // Physics
            p.position.addScaledVector(p.velocity, dt);
            
            // Handle different particle types
            const particleColor = p.color.getHex();
            if (particleColor === 0x88CCFF) {
                // Bubbles - rise upward, no gravity
                // Already handled above
            } else if (particleColor === 0x4A90E2) {
                // Ripples - stay at water level, expand horizontally
                p.position.y = CONFIG.WATER_LEVEL + 0.1;
                p.velocity.y = 0;
                p.velocity.multiplyScalar(0.98); // Less drag for ripples
            } else if (particleColor === 0x5AA0F0) {
                // Water trail - slight gravity, more drag
                p.velocity.y += -2.0 * dt; // Light gravity
                p.velocity.multiplyScalar(0.92); // More drag for trail
            } else {
                // Regular particles
                if (p.velocity.y < 0) {
                    p.velocity.y += -5.0 * dt; // Gravity
                }
                p.velocity.multiplyScalar(0.95); // Drag
            }
            
            // Update Attribute Arrays
            positions[index * 3] = p.position.x;
            positions[index * 3 + 1] = p.position.y;
            positions[index * 3 + 2] = p.position.z;
            
            // Fade out
            const alpha = p.life / p.maxLife;
            colors[index * 3] = p.color.r * alpha;
            colors[index * 3 + 1] = p.color.g * alpha;
            colors[index * 3 + 2] = p.color.b * alpha;
            
            // We can't actually change per-vertex size easily in WebGL 1 without custom shader attributes 
            // easily in standard Three PointsMaterial unless we assume standard attenuation.
            // But we can just make them disappear by color fading above.
            
            index++;
        }
        
        // Clear remaining buffer to avoid ghosts (move them far away)
        for(let k = index; k < this.maxParticles; k++) {
             positions[k*3] = 99999;
             positions[k*3+1] = 99999;
             positions[k*3+2] = 99999;
        }
        
        this.geometry.setDrawRange(0, this.maxParticles);
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.color.needsUpdate = true;
    }
    
    emitRipples(position: THREE.Vector3, count: number) {
        for (let i = 0; i < count; i++) {
            if (this.particles.length >= this.maxParticles) break;
            
            // Ripples expand outward horizontally from the center
            const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
            const speed = 4.0 + Math.random() * 5.0; // Faster ripples
            
            const vx = Math.cos(angle) * speed;
            const vy = 0; // No vertical movement for ripples
            const vz = Math.sin(angle) * speed;
            
            const life = 2.5 + Math.random() * 1.5; // Longer life for better wave effect
            const size = 1.2 + Math.random() * 1.2; // Larger ripples
            
            this.particles.push({
                position: new THREE.Vector3(
                    position.x,
                    CONFIG.WATER_LEVEL + 0.1, // Position at water level
                    position.z
                ),
                velocity: new THREE.Vector3(vx, vy, vz),
                life: life,
                maxLife: life,
                size: size,
                initialSize: size,
                color: new THREE.Color(0x4A90E2) // Water blue for ripples
            });
        }
    }

    emitWaterTrail(position: THREE.Vector3, direction: THREE.Vector3, speed: number) {
        // Emit water trail particles behind the snake - more particles for better trail
        const trailCount = Math.floor(speed * 1.5) + 3;
        for (let i = 0; i < trailCount; i++) {
            if (this.particles.length >= this.maxParticles) break;
            
            // Trail particles move backward relative to snake direction
            const angle = Math.random() * Math.PI * 2;
            const spread = 0.2 + Math.random() * 0.4;
            const backwardSpeed = speed * 0.4;
            
            const vx = -direction.x * backwardSpeed + Math.cos(angle) * spread;
            const vy = 0.05 + Math.random() * 0.15;
            const vz = -direction.z * backwardSpeed + Math.sin(angle) * spread;
            
            const life = 1.2 + Math.random() * 0.6; // Longer life for smoother trail
            const size = 0.5 + Math.random() * 0.4; // Slightly larger for visibility
            
            this.particles.push({
                position: position.clone().add(new THREE.Vector3(
                    (Math.random() - 0.5) * 0.8,
                    (Math.random() - 0.5) * 0.6,
                    (Math.random() - 0.5) * 0.8
                )),
                velocity: new THREE.Vector3(vx, vy, vz),
                life: life,
                maxLife: life,
                size: size,
                initialSize: size,
                color: new THREE.Color(0x5AA0F0) // Lighter water blue for trail
            });
        }
    }

    reset() {
        this.particles = [];
        // Clear buffer
        const positions = this.geometry.attributes.position.array as Float32Array;
        positions.fill(0);
        this.geometry.attributes.position.needsUpdate = true;
    }
}
