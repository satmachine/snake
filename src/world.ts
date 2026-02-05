
import * as THREE from 'three';
import { CONFIG } from './definitions';
import { getTerrainHeight, getBiome, randomFloat } from './utils';
import { Prop, PropFactory, ASSETS } from './entities';

interface ChunkRequest {
    x: number;
    z: number;
}

class ChunkGenerator {
    private queue: ChunkRequest[] = [];
    private generating: boolean = false;

    request(x: number, z: number): void {
        // Avoid duplicates
        if (this.queue.some(r => r.x === x && r.z === z)) return;
        this.queue.push({ x, z });
    }

    async generateNext(group: THREE.Group, isMobile: boolean): Promise<{ key: string; chunk: Chunk } | null> {
        if (this.queue.length === 0 || this.generating) return null;

        this.generating = true;
        const req = this.queue.shift()!;

        // Yield to event loop before heavy work
        await new Promise(resolve => setTimeout(resolve, 0));

        const chunk = new Chunk(req.x, req.z, group, isMobile);
        this.generating = false;

        return { key: `${req.x},${req.z}`, chunk };
    }
}

class Chunk {
    mesh: THREE.Mesh;
    instancedMeshes: THREE.InstancedMesh[] = [];
    props: Prop[] = [];
    x: number;
    z: number;

    constructor(xIdx: number, zIdx: number, group: THREE.Group, isMobile: boolean = false) {
        this.x = xIdx;
        this.z = zIdx;

        const size = CONFIG.CHUNK_SIZE;
        // Reduce segments on mobile for better performance
        const segs = isMobile ? 32 : 64;

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

        // Track category data for batch instancing
        const categories: Record<string, { props: Prop[], matrices: THREE.Matrix4[] }> = {
            trunk: { props: [], matrices: [] },
            ring: { props: [], matrices: [] },
            rock: { props: [], matrices: [] },
            crystal: { props: [], matrices: [] },
            grass: { props: [], matrices: [] }
        };

        const mainCount = 4 + Math.floor(Math.random() * 4);

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
                if (result) {
                    categories.rock.props.push(result.prop);
                    categories.rock.matrices.push(result.matrices.rock);
                }
            } else if (biome === 'flower') {
                result = PropFactory.generateCrystal(wx, wz);
                if (result) {
                    (result.matrices.crystal as THREE.Matrix4[]).forEach(m => {
                        categories.crystal.props.push(result!.prop);
                        categories.crystal.matrices.push(m);
                    });
                }
            } else {
                const rng = Math.random();
                if (rng < 0.7) {
                    result = PropFactory.generateTree(wx, wz);
                    if (result) {
                        categories.trunk.props.push(result.prop);
                        categories.trunk.matrices.push(result.matrices.trunk);
                        categories.ring.props.push(result.prop);
                        categories.ring.matrices.push(result.matrices.ring);
                    }
                } else {
                    result = PropFactory.generateRock(wx, wz);
                    if (result) {
                        categories.rock.props.push(result.prop);
                        categories.rock.matrices.push(result.matrices.rock);
                    }
                }
            }

            if (result) {
                this.props.push(result.prop);
            }
        }

        const grassCount = 15 + Math.floor(Math.random() * 20);
        for (let i = 0; i < grassCount; i++) {
            const dx = randomFloat(-size / 2, size / 2);
            const dz = randomFloat(-size / 2, size / 2);
            const wx = this.x * size + dx;
            const wz = this.z * size + dz;
            const biome = getBiome(wx, wz);

            if (biome === 'grass') {
                const result = PropFactory.generateGrass(wx, wz);
                if (result) {
                    (result.matrices.grass as THREE.Matrix4[]).forEach(m => {
                        categories.grass.props.push(result.prop);
                        categories.grass.matrices.push(m);
                    });
                    this.props.push(result.prop);
                }
            }
        }

        // Create Instanced Meshes and link props
        this.createInstancedMesh(group, categories.trunk.props, categories.trunk.matrices, ASSETS.geoTreeTrunk, ASSETS.matTree, true);
        this.createInstancedMesh(group, categories.ring.props, categories.ring.matrices, ASSETS.geoTreeRing, ASSETS.matRing, true, true);
        this.createInstancedMesh(group, categories.rock.props, categories.rock.matrices, ASSETS.geoRock, ASSETS.matRock, true);
        this.createInstancedMesh(group, categories.crystal.props, categories.crystal.matrices, ASSETS.geoCrystal, ASSETS.matCrystal, false);
        this.createInstancedMesh(group, categories.grass.props, categories.grass.matrices, ASSETS.geoGrass, ASSETS.matGrass, false);
    }

    createInstancedMesh(group: THREE.Group, props: Prop[], matrices: THREE.Matrix4[], geo: THREE.BufferGeometry, mat: THREE.Material, shadows: boolean, randomizeBrightness: boolean = false) {
        if (matrices.length === 0) return;

        const mesh = new THREE.InstancedMesh(geo, mat, matrices.length);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

        const color = new THREE.Color();
        for (let i = 0; i < matrices.length; i++) {
            mesh.setMatrixAt(i, matrices[i]);

            // Link prop to this mesh instance for breaking/hiding
            if (props[i]) {
                props[i].visuals.push({ mesh, index: i });
            }

            if (randomizeBrightness) {
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
    isMobile: boolean;
    private chunkGenerator = new ChunkGenerator();

    // Throttle Updates
    lastUpdateX: number = -9999;
    lastUpdateZ: number = -9999;

    constructor(scene: THREE.Scene, isMobile: boolean = false) {
        this.scene = scene;
        this.isMobile = isMobile;
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
                    // Queue for async generation
                    this.chunkGenerator.request(nx, nz);
                }
            }
        }

        // Process one chunk per frame
        this.chunkGenerator.generateNext(this.group, this.isMobile).then(result => {
            if (result) {
                this.chunks.set(result.key, result.chunk);
            }
        });

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
