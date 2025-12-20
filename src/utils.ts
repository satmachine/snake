

import * as THREE from 'three';
import { CONFIG } from './definitions';

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// --- SIMPLEX-LIKE NOISE (2D) ---
// Using a slightly more complex permutation table for better variation
const PERM = new Uint8Array(512);
const GRAD3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0], 
               [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1], 
               [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];

for(let i=0; i<256; i++) PERM[i] = i;
for(let i=0; i<256; i++) {
    const j = Math.floor(Math.random() * 256);
    const tmp = PERM[i];
    PERM[i] = PERM[j];
    PERM[j] = tmp;
    PERM[i+256] = PERM[i];
}

function dot(g: number[], x: number, y: number) {
    return g[0]*x + g[1]*y;
}

export function noise2D(xin: number, yin: number): number {
    let n0, n1, n2; 
    const F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    const s = (xin + yin) * F2; 
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    const t = (i + j) * G2;
    const X0 = i - t; 
    const Y0 = j - t;
    
    // --- FIX: Calculate unskewed relative x,y coordinates ---
    const x0 = xin - X0;
    const y0 = yin - Y0;
    
    let i1, j1; 
    if (x0 > y0) { i1 = 1; j1 = 0; } 
    else { i1 = 0; j1 = 1; }      
    
    const x1 = x0 - i1 + G2; 
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1.0 + 2.0 * G2; 
    const y2 = y0 - 1.0 + 2.0 * G2;
    
    const ii = i & 255;
    const jj = j & 255;
    const gi0 = PERM[ii+PERM[jj]] % 12;
    const gi1 = PERM[ii+i1+PERM[jj+j1]] % 12;
    const gi2 = PERM[ii+1+PERM[jj+1]] % 12;
    
    let t0 = 0.5 - x0*x0 - y0*y0;
    if (t0 < 0) n0 = 0.0;
    else {
        t0 *= t0;
        n0 = t0 * t0 * dot(GRAD3[gi0], x0, y0);
    }
    
    let t1 = 0.5 - x1*x1 - y1*y1;
    if (t1 < 0) n1 = 0.0;
    else {
        t1 *= t1;
        n1 = t1 * t1 * dot(GRAD3[gi1], x1, y1);
    }
    
    let t2 = 0.5 - x2*x2 - y2*y2;
    if (t2 < 0) n2 = 0.0;
    else {
        t2 *= t2;
        n2 = t2 * t2 * dot(GRAD3[gi2], x2, y2);
    }
    
    return 70.0 * (n0 + n1 + n2);
}

// Enhanced Procedural Terrain
export function getTerrainHeight(x: number, z: number): number {
    const scale = CONFIG.TERRAIN_SCALE;
    
    // Layer 1: Base Rolling Hills
    const n1 = noise2D(x * scale, z * scale);
    
    // Layer 2: Micro Detail (Roughness) - Reduced for smoother terrain
    const n2 = noise2D(x * scale * 4, z * scale * 4) * 0.05;
    
    // Layer 3: Large Mountains impact
    const n3 = noise2D(x * scale * 0.3, z * scale * 0.3);
    const mtn = Math.max(0, n3) * 2.0;

    let h = (n1 + n2 + mtn) * CONFIG.TERRAIN_HEIGHT; 
    
    // Water floor clamping
    if (h < CONFIG.WATER_LEVEL) h = CONFIG.WATER_LEVEL; 
    
    return h;
}

export function getTerrainNormal(x: number, z: number): THREE.Vector3 {
    // Smaller epsilon for higher precision normals at high resolution
    const epsilon = 0.05;
    const h = getTerrainHeight(x, z);
    const hx = getTerrainHeight(x + epsilon, z);
    const hz = getTerrainHeight(x, z + epsilon);
    
    const vec1 = new THREE.Vector3(epsilon, hx - h, 0);
    const vec2 = new THREE.Vector3(0, hz - h, epsilon);
    
    return new THREE.Vector3().crossVectors(vec2, vec1).normalize();
}

// Biome Calculation
export function getBiome(x: number, z: number): 'grass' | 'rock' | 'flower' | 'water' {
    const h = getTerrainHeight(x, z);
    if (h <= CONFIG.WATER_LEVEL + 0.2) return 'water';

    const n = getTerrainNormal(x, z);
    const slope = 1.0 - n.y;
    
    if (slope > 0.45) return 'rock';
    
    // Use low frequency noise for flowery patches
    const patch = noise2D(x * 0.02, z * 0.02);
    if (patch > 0.6) return 'flower';
    
    return 'grass';
}

