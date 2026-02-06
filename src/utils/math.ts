/**
 * Math utilities for angle wrapping, distance calculations, and basic operations.
 */

/**
 * Wraps an angle to the range [-π, π].
 */
export function wrapAngle(angle: number): number {
  while (angle > Math.PI) angle -= Math.PI * 2;
  while (angle < -Math.PI) angle += Math.PI * 2;
  return angle;
}

/**
 * Calculates the shortest angular difference from angle a to angle b.
 * Result is in the range [-π, π].
 */
export function angleDifference(a: number, b: number): number {
  return wrapAngle(b - a);
}

/**
 * Clamps a value between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Calculates 2D distance between two points (ignoring Y axis).
 */
export function distance2D(x1: number, z1: number, x2: number, z2: number): number {
  const dx = x2 - x1;
  const dz = z2 - z1;
  return Math.sqrt(dx * dx + dz * dz);
}
