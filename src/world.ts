
import * as THREE from 'three';
import { CONFIG } from './definitions';
import { getTerrainHeight, getBiome, randomFloat } from './utils';
import { Prop, PropFactory } from './entities';

class Chunk {
  mesh: THREE.Mesh;
  props: Prop[] = [];
  x: number;
  z: number;
  
  constructor(xIdx: number, zIdx: number, group: THREE.Group) {
      this.x = xIdx;
      this.z = zIdx;
      
      const size = CONFIG.CHUNK_SIZE;
      // Optimization: Reduced segments from 48 to 32. 
      // 32*32*2 tris is significantly lighter on draw calls and vertex processing
      // while preserving 'low poly' look.
      const segs = 32; 
      
      const geo = new THREE.PlaneGeometry(size, size, segs, segs);
      
      const posAttr = geo.attributes.position;
      const colors = [];
      const cBase = new THREE.Color(CONFIG.COLORS.GROUND_BASE);
      const cHigh = new THREE.Color(CONFIG.COLORS.GROUND_HIGH);
      const cLow = new THREE.Color(CONFIG.COLORS.GROUND_LOW);
      
      for(let i=0; i<posAttr.count; i++){
          const lx = posAttr.getX(i);
          const ly = posAttr.getY(i); 
          
          // Use chunk offset to get world coords
          const worldX = xIdx * size + lx;
          const worldZ = zIdx * size - ly; // PlaneGeometry is created X, Y (but we rotate it)
          
          const h = getTerrainHeight(worldX, worldZ);
          posAttr.setZ(i, h); 
          
          let col = cBase.clone();
          const t = (h - CONFIG.WATER_LEVEL) / CONFIG.TERRAIN_HEIGHT;
          
          if (t < 0.2) col.lerp(cLow, 0.8);
          else if (t > 0.6) col.lerp(cHigh, (t - 0.6) * 2.0);
          
          // Reduced noise calculation for colors
          if (Math.random() > 0.5) col.offsetHSL(0, 0, (Math.random() - 0.5) * 0.04);

          colors.push(col.r, col.g, col.b);
      }
      
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geo.computeVertexNormals();
      
      const mat = new THREE.MeshStandardMaterial({ 
         vertexColors: true,
         roughness: 0.9, 
         flatShading: true,
         side: THREE.FrontSide
      });
      
      this.mesh = new THREE.Mesh(geo, mat);
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
      const count = 3 + Math.floor(Math.random() * 3); // Reduced prop count slightly
      
      for(let i=0; i<count; i++) {
          const dx = randomFloat(-size/2, size/2);
          const dz = randomFloat(-size/2, size/2);
          const wx = this.x * size + dx;
          const wz = this.z * size + dz;
          
          const biome = getBiome(wx, wz);
          
          if (biome === 'water') continue;
          
          let prop: Prop | null = null;
          
          if (biome === 'rock') { 
             prop = PropFactory.createRock(wx, wz);
          } else if (biome === 'flower') {
             prop = PropFactory.createCrystal(wx, wz);
          } else {
             const rng = Math.random();
             if (rng < 0.7) prop = PropFactory.createTree(wx, wz);
             else prop = PropFactory.createRock(wx, wz);
          }
          
          if (prop) {
              this.props.push(prop);
              group.add(prop.mesh);
          }
      }
  }
  
  dispose(group: THREE.Group) {
      group.remove(this.mesh);
      this.mesh.geometry.dispose();
      // @ts-ignore
      this.mesh.material.dispose();
      
      this.props.forEach(p => {
          group.remove(p.mesh);
          // Geometries and materials are shared now, so do NOT dispose them here
      });
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
            // Filter only collidable types
            c.props.forEach(p => {
                if(p.type !== 'crystal' && p.radius > 0) obstacles.push(p);
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
