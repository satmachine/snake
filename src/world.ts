
import * as THREE from 'three';
import { CONFIG } from './definitions';
import { getTerrainHeight, getBiome, randomFloat } from './utils';
import { Prop, PropFactory, ASSETS } from './entities';

class Chunk {
    mesh: THREE.Mesh;
    instancedMeshes: THREE.InstancedMesh[] = [];
    props: Prop[] = [];
    x: number;
    z: number;

    constructor(xIdx: number, zIdx: number, group: THREE.Group) {
        this.x = xIdx;
        this.z = zIdx;

        const size = CONFIG.CHUNK_SIZE;
        // Increased segments for smoother terrain
        const segs = 64;

        const geo = new THREE.PlaneGeometry(size, size, segs, segs);

        const posAttr = geo.attributes.position;

        // RESTORED: Height deformation for physics matching
        for (let i = 0; i < posAttr.count; i++) {
            const lx = posAttr.getX(i);
            const ly = posAttr.getY(i);

            // Use chunk offset to get world coords
            const worldX = xIdx * size + lx;
            const worldZ = zIdx * size - ly;

            const h = getTerrainHeight(worldX, worldZ);
            posAttr.setZ(i, h);
        }

        geo.computeVertexNormals();

        this.mesh = new THREE.Mesh(geo, ASSETS.matGround);
        this.mesh.rotation.x = -Math.PI / 2;
        this.mesh.position.set(xIdx * size, 0, zIdx * size);
        this.mesh.receiveShadow = true;
        this.mesh.matrixAutoUpdate = false;
        this.mesh.updateMatrix();

        group.add(this.mesh);

        this.populate(group);
    }

    populate(group: THREE.Group) {
        const size = CONFIG.CHUNK_SIZE;

        // Data accumulation containers
        const matrixMap: Record<string, THREE.Matrix4[]> = {
            trunk: [],
            ring: [],
            rock: [],
            crystal: [],
            grass: []
        };

        // Increased prop count for more vegetation
        const mainCount = 4 + Math.floor(Math.random() * 4);

        // Main props (trees, rocks, crystals)
        for (let i = 0; i < mainCount; i++) {
            const dx = randomFloat(-size / 2, size / 2);
            const dz = randomFloat(-size / 2, size / 2);
            const wx = this.x * size + dx;
            const wz = this.z * size + dz;

            const biome = getBiome(wx, wz);

            if (biome === 'water') continue;

            let result: { prop: Prop, matrices: any } | null = null;

            if (biome === 'rock') {
                result = PropFactory.generateRock(wx, wz);
                if (result) matrixMap.rock.push(result.matrices.rock);
            } else if (biome === 'flower') {
                result = PropFactory.generateCrystal(wx, wz);
                if (result) {
                    // Crystals return array of matrices (cluster)
                    (result.matrices.crystal as THREE.Matrix4[]).forEach(m => matrixMap.crystal.push(m));
                }
            } else {
                const rng = Math.random();
                if (rng < 0.7) {
                    result = PropFactory.generateTree(wx, wz);
                    if (result) {
                        matrixMap.trunk.push(result.matrices.trunk);
                        matrixMap.ring.push(result.matrices.ring);
                    }
                }
                else {
                    result = PropFactory.generateRock(wx, wz);
                    if (result) matrixMap.rock.push(result.matrices.rock);
                }
            }

            if (result) {
                this.props.push(result.prop);
            }
        }

        // Add lots of small grass scattered around
        const grassCount = 15 + Math.floor(Math.random() * 20);
        for (let i = 0; i < grassCount; i++) {
            const dx = randomFloat(-size / 2, size / 2);
            const dz = randomFloat(-size / 2, size / 2);
            const wx = this.x * size + dx;
            const wz = this.z * size + dz;

            const biome = getBiome(wx, wz);

            // Only place grass on grass biome (not water, rock, or flower)
            if (biome === 'grass') {
                const result = PropFactory.generateGrass(wx, wz);
                if (result) {
                    (result.matrices.grass as THREE.Matrix4[]).forEach(m => matrixMap.grass.push(m));
                    this.props.push(result.prop);
                }
            }
        }

        // Create Instanced Meshes
        this.createInstancedMesh(group, matrixMap.trunk, ASSETS.geoTreeTrunk, ASSETS.matTree, true);
        this.createInstancedMesh(group, matrixMap.ring, ASSETS.geoTreeRing, ASSETS.matRing, true, true);
        this.createInstancedMesh(group, matrixMap.rock, ASSETS.geoRock, ASSETS.matRock, true);
        this.createInstancedMesh(group, matrixMap.crystal, ASSETS.geoCrystal, ASSETS.matCrystal, false);
        this.createInstancedMesh(group, matrixMap.grass, ASSETS.geoGrass, ASSETS.matGrass, false);
    }

    createInstancedMesh(group: THREE.Group, matrices: THREE.Matrix4[], geo: THREE.BufferGeometry, mat: THREE.Material, shadows: boolean, randomizeBrightness: boolean = false) {
        if (matrices.length === 0) return;

        const mesh = new THREE.InstancedMesh(geo, mat, matrices.length);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // Assuming static mostly but cleaner API

        const color = new THREE.Color();
        for (let i = 0; i < matrices.length; i++) {
            mesh.setMatrixAt(i, matrices[i]);
            if (randomizeBrightness) {
                // Vary brightness by 20% (0.8 to 1.0)
                const v = 0.8 + Math.random() * 0.2;
                color.setRGB(v, v, v);
                mesh.setColorAt(i, color);
            }
        }

        mesh.instanceMatrix.needsUpdate = true;
        if (shadows) {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        }

        group.add(mesh);
        this.instancedMeshes.push(mesh);
    }

    dispose(group: THREE.Group) {
        group.remove(this.mesh);
        this.mesh.geometry.dispose();
        // @ts-ignore
        this.mesh.material.dispose();

        this.instancedMeshes.forEach(mesh => {
            group.remove(mesh);
            mesh.dispose();
        });
        this.instancedMeshes = [];
        this.props = [];
    }
}

export class World {
    scene: THREE.Scene;
    group: THREE.Group;
    chunks: Map<string, Chunk> = new Map();

    // Throttle Updates
    lastUpdateX: number = -9999;
    lastUpdateZ: number = -9999;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.group = new THREE.Group();
        this.scene.add(this.group);
    }

    update(playerX: number, playerZ: number) {
        // Optimization: Only try to update chunks if player moved significantly
        const dist = Math.abs(playerX - this.lastUpdateX) + Math.abs(playerZ - this.lastUpdateZ);
        if (dist < 20) return; // Wait until moved 20 units

        this.lastUpdateX = playerX;
        this.lastUpdateZ = playerZ;

        const cz = CONFIG.CHUNK_SIZE;
        const cx = Math.round(playerX / cz);
        const czIdx = Math.round(playerZ / cz);

        const activeKeys = new Set<string>();
        const rad = CONFIG.RENDER_DISTANCE;

        for (let i = -rad; i <= rad; i++) {
            for (let j = -rad; j <= rad; j++) {
                const nx = cx + i;
                const nz = czIdx + j;
                const key = `${nx},${nz}`;
                activeKeys.add(key);

                if (!this.chunks.has(key)) {
                    // Create max 1 chunk per frame ideally, but for now just create it
                    this.chunks.set(key, new Chunk(nx, nz, this.group));
                }
            }
        }

        for (const [key, chunk] of this.chunks) {
            if (!activeKeys.has(key)) {
                chunk.dispose(this.group);
                this.chunks.delete(key);
            }
        }
    }

    getObstacles(): Prop[] {
        const obstacles: Prop[] = [];
        this.chunks.forEach(c => {
            // Filter only collidable types - exclude grass and crystals
            c.props.forEach(p => {
                if (p.type !== 'crystal' && p.type !== 'grass' && p.radius > 0.5) obstacles.push(p);
            });
        });
        return obstacles;
    }

    getRandomTree(): Prop | null {
        const trees: Prop[] = [];
        this.chunks.forEach(c => {
            c.props.forEach(p => {
                if (p.type === 'tree') trees.push(p);
            });
        });

        if (trees.length === 0) return null;
        return trees[Math.floor(Math.random() * trees.length)];
    }

    reset() {
        this.chunks.forEach(c => c.dispose(this.group));
        this.chunks.clear();
        this.lastUpdateX = -9999;
    }
}
