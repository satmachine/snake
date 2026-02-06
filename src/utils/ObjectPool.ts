/**
 * Generic object pool for reducing allocations and GC pressure.
 * Useful for frequently created/destroyed objects like Vector3, particles, etc.
 */

export class ObjectPool<T> {
  private pool: T[] = [];
  private factory: () => T;
  private reset: (obj: T) => void;

  constructor(factory: () => T, reset: (obj: T) => void, initialSize = 100) {
    this.factory = factory;
    this.reset = reset;

    // Pre-populate pool
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(factory());
    }
  }

  /**
   * Acquire an object from the pool. If pool is empty, creates a new one.
   */
  acquire(): T {
    return this.pool.pop() ?? this.factory();
  }

  /**
   * Return an object to the pool after use. Resets the object to default state.
   */
  release(obj: T): void {
    this.reset(obj);
    this.pool.push(obj);
  }

  /**
   * Get current pool size (for debugging/monitoring).
   */
  size(): number {
    return this.pool.length;
  }
}
