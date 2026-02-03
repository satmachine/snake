# Yume Snake

A 3D snake game built with Three.js and TypeScript.

## Project Structure

- `src/definitions.ts` - Game constants and configuration (CONFIG object)
- `src/entities.ts` - Snake physics and entity logic
- `src/` - Other game modules (terrain, rendering, etc.)

## Key Systems

### Slope Physics & Gravity

The game features an asymmetric gravity system with non-linear acceleration:

**Constants** (in `src/definitions.ts`):
- `GRAVITY_ACCEL: 45.0` - Base slope force
- `SLOPE_SENSITIVITY: 2.5` - Terrain angle multiplier
- `FRICTION_DOWNHILL: 0.5` - Very low friction lets momentum build
- `FRICTION_UPHILL: 3.5` - High friction makes uphill a struggle
- `MAX_DOWNHILL_SPEED: 200.0` - Maximum speed cap
- `DOWNHILL_ACCEL_EXPONENT: 1.3` - Non-linear "snowball" effect

**Behavior**:
- **Downhill**: Speed builds exponentially with a "faster and faster" snowball effect
- **Uphill**: Snake struggles and may stall on steep slopes
- **Physics code**: `src/entities.ts` lines 573-604

### Other Mechanics
- Season changes every 250 echoes (apples)
- 3-second breath underwater, unless boosting or going fast (water skimming)
- Rocks knock out snake unless boosting (breaks rocks)
- Longer snake = faster base speed

## Running
```bash
npm install
npm run dev
```
