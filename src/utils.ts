

import * as THREE from 'three';
import { CONFIG } from './definitions';

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function randomNormal(mean: number, stdDev: number): number {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0 * stdDev + mean;
}

// --- SIMPLEX-LIKE NOISE (2D) ---
// Using a slightly more complex permutation table for better variation
const PERM = new Uint8Array(512);
const GRAD3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
[1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
[0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];

// xorshift32 PRNG for deterministic terrain generation
function xorshift32(state: { s: number }): number {
    let x = state.s;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    state.s = x;
    return (x >>> 0) / 4294967296; // normalize to [0, 1)
}

// Seed the PERM table for deterministic terrain across clients
export function seedTerrain(seed: number) {
    terrainSeed = seed | 0 || 1;
    const state = { s: terrainSeed }; // Ensure non-zero integer
    for (let i = 0; i < 256; i++) PERM[i] = i;
    // Seeded Fisher-Yates shuffle
    for (let i = 255; i > 0; i--) {
        const j = Math.floor(xorshift32(state) * (i + 1));
        const tmp = PERM[i];
        PERM[i] = PERM[j];
        PERM[j] = tmp;
    }
    for (let i = 0; i < 256; i++) PERM[i + 256] = PERM[i];
    regenerateSecondaryIslands();
    clearTerrainCache();
}

// Initialize with random seed on first load
for (let i = 0; i < 256; i++) PERM[i] = i;
for (let i = 0; i < 256; i++) {
    const j = Math.floor(Math.random() * 256);
    const tmp = PERM[i];
    PERM[i] = PERM[j];
    PERM[j] = tmp;
    PERM[i + 256] = PERM[i];
}

function dot(g: number[], x: number, y: number) {
    return g[0] * x + g[1] * y;
}

interface SecondaryIsland {
    x: number;
    z: number;
    radius: number;
}

let terrainSeed = 1;
let secondaryIslands: SecondaryIsland[] = [];

function smoothstep(edge0: number, edge1: number, x: number): number {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
}

function regenerateSecondaryIslands() {
    const state = { s: terrainSeed | 0 || 1 };
    secondaryIslands = [];

    for (let i = 0; i < CONFIG.ISLAND_SECONDARY_COUNT; i++) {
        const angle = xorshift32(state) * Math.PI * 2;
        const ring = CONFIG.ISLAND_SECONDARY_RING_MIN +
            xorshift32(state) * (CONFIG.ISLAND_SECONDARY_RING_MAX - CONFIG.ISLAND_SECONDARY_RING_MIN);
        const radius = CONFIG.ISLAND_SECONDARY_RADIUS_MIN +
            xorshift32(state) * (CONFIG.ISLAND_SECONDARY_RADIUS_MAX - CONFIG.ISLAND_SECONDARY_RADIUS_MIN);

        secondaryIslands.push({
            x: Math.cos(angle) * ring,
            z: Math.sin(angle) * ring,
            radius,
        });
    }
}

function getIslandMask(x: number, z: number): number {
    const dist = Math.hypot(x, z);
    const mainStart = CONFIG.ISLAND_MAIN_RADIUS;
    const mainEnd = CONFIG.ISLAND_MAIN_RADIUS + CONFIG.ISLAND_SHORE_FADE;

    let mask = 1.0 - smoothstep(mainStart, mainEnd, dist);

    for (let i = 0; i < secondaryIslands.length; i++) {
        const island = secondaryIslands[i];
        const d = Math.hypot(x - island.x, z - island.z);
        const start = island.radius;
        const end = island.radius + CONFIG.ISLAND_SHORE_FADE * 0.55;
        const satelliteMask = 1.0 - smoothstep(start, end, d);
        mask = Math.max(mask, satelliteMask * 0.9);
    }

    return Math.max(0, Math.min(1, mask));
}

regenerateSecondaryIslands();

// --- TERRAIN HEIGHT CACHE ---
const terrainCache = new Map<string, number>();
const CACHE_RESOLUTION = 0.5;
const MAX_CACHE_SIZE = 5000;

function quantize(v: number): number {
    return Math.round(v / CACHE_RESOLUTION) * CACHE_RESOLUTION;
}

export function clearTerrainCache() {
    terrainCache.clear();
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
    const gi0 = PERM[ii + PERM[jj]] % 12;
    const gi1 = PERM[ii + i1 + PERM[jj + j1]] % 12;
    const gi2 = PERM[ii + 1 + PERM[jj + 1]] % 12;

    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 < 0) n0 = 0.0;
    else {
        t0 *= t0;
        n0 = t0 * t0 * dot(GRAD3[gi0], x0, y0);
    }

    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 < 0) n1 = 0.0;
    else {
        t1 *= t1;
        n1 = t1 * t1 * dot(GRAD3[gi1], x1, y1);
    }

    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 < 0) n2 = 0.0;
    else {
        t2 *= t2;
        n2 = t2 * t2 * dot(GRAD3[gi2], x2, y2);
    }

    return 70.0 * (n0 + n1 + n2);
}

// Enhanced Procedural Terrain with caching
export function getTerrainHeight(x: number, z: number): number {
    // Check cache first
    const qx = quantize(x);
    const qz = quantize(z);
    const key = `${qx},${qz}`;

    const cached = terrainCache.get(key);
    if (cached !== undefined) return cached;

    // Calculate terrain height
    const scale = CONFIG.TERRAIN_SCALE;
    const islandMask = getIslandMask(x, z);

    // Layer 1: Base Rolling Hills
    const n1 = noise2D(x * scale, z * scale);

    // Layer 2: Micro Detail (Roughness) - Reduced for smoother terrain
    const n2 = noise2D(x * scale * 4, z * scale * 4) * 0.05;

    // Layer 3: Large Mountains impact
    const n3 = noise2D(x * scale * 0.3, z * scale * 0.3);
    const mtn = Math.max(0, n3) * 2.0;

    // Layer 4: Valleys/Lakes - Create more low-lying areas for water
    const valleyNoise = noise2D(x * scale * 0.15, z * scale * 0.15);
    const valleys = Math.min(0, valleyNoise) * 1.5; // Only negative values, creates depressions

    const terrainShape = (n1 + n2 + mtn + valleys) * CONFIG.TERRAIN_HEIGHT;

    // Keep lots of playable terrain in the island center, but force distant areas underwater.
    const baseLift = CONFIG.TERRAIN_HEIGHT * 0.9;
    const oceanDepth = (1.0 - islandMask) * CONFIG.ISLAND_WATER_DEPTH_BIAS;

    let h = terrainShape * islandMask + baseLift * islandMask - oceanDepth;

    // Preserve some local depressions for lakes/shallows on islands.
    h -= CONFIG.TERRAIN_HEIGHT * 0.08;

    // Cache the result with simple eviction when full
    if (terrainCache.size >= MAX_CACHE_SIZE) {
        terrainCache.clear();
    }
    terrainCache.set(key, h);

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
    // Increased threshold for water detection to create more lakes
    if (h <= CONFIG.WATER_LEVEL + 2.0) return 'water';

    const n = getTerrainNormal(x, z);
    const slope = 1.0 - n.y;

    if (slope > 0.45) return 'rock';

    // Use low frequency noise for flowery patches
    const patch = noise2D(x * 0.02, z * 0.02);
    if (patch > 0.6) return 'flower';

    return 'grass';
}

