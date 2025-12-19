
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
            p.velocity.y += -5.0 * dt; // Gravity
            p.velocity.multiplyScalar(0.95); // Drag
            
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
    
    reset() {
        this.particles = [];
        // Clear buffer
        const positions = this.geometry.attributes.position.array as Float32Array;
        positions.fill(0);
        this.geometry.attributes.position.needsUpdate = true;
    }
}
