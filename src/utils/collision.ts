/**
 * Collision detection utilities for sphere-sphere, sphere-cylinder, and sphere-segment tests.
 */

export interface Sphere {
  x: number;
  y: number;
  z: number;
  radius: number;
}

export interface Cylinder {
  x: number;
  z: number;
  minY: number;
  maxY: number;
  radius: number;
}

/**
 * Tests collision between two spheres.
 */
export function sphereVsSphere(a: Sphere, b: Sphere): boolean {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dz = b.z - a.z;
  const distSq = dx * dx + dy * dy + dz * dz;
  const radiusSum = a.radius + b.radius;
  return distSq < radiusSum * radiusSum;
}

/**
 * Tests collision between a sphere and a cylinder.
 * Only checks upper Y bound to preserve uphill collision behavior.
 * The sphere can collide from below (important for slopes).
 */
export function sphereVsCylinder(s: Sphere, c: Cylinder): boolean {
  // Only check upper bound - snake can hit from below on slopes
  if (s.y > c.maxY) return false;

  const dx = s.x - c.x;
  const dz = s.z - c.z;
  const distSq = dx * dx + dz * dz;
  const radiusSum = s.radius + c.radius;
  return distSq < radiusSum * radiusSum;
}

/**
 * Tests collision between a sphere (head) and an array of segment points.
 * Returns the index of the first colliding segment, or -1 if no collision.
 *
 * @param head - The sphere to test
 * @param segments - Array of segment positions
 * @param segmentRadius - Radius of each segment
 * @param skipFirst - Number of segments to skip from the start (for grace period)
 * @param heightTolerance - Maximum Y-axis distance to consider a collision
 */
export function sphereVsSegments(
  head: Sphere,
  segments: Array<{ x: number; y: number; z: number }>,
  segmentRadius: number,
  skipFirst: number = 0,
  heightTolerance: number = 3.0
): number {
  for (let i = skipFirst; i < segments.length; i++) {
    const seg = segments[i];

    // Height check first (cheap)
    if (Math.abs(head.y - seg.y) > heightTolerance) continue;

    const dx = head.x - seg.x;
    const dz = head.z - seg.z;
    const distSq = dx * dx + dz * dz;
    const radiusSum = head.radius + segmentRadius;

    if (distSq < radiusSum * radiusSum) return i;
  }

  return -1;
}
