import { Snake, Obstacle } from '../entities';
import type { InputPayload, SnakeNetState } from './protocol';

// --- Client-Side Prediction ---

const CORRECTION_LERP = 0.3;

function getSnapThreshold(speed: number): number {
    // Scale threshold with speed: 5 units at rest, 30 units at max speed (200)
    return Math.max(5.0, Math.min(30.0, speed * 0.15));
}

export class ClientPredictor {
    snake: Snake;
    pendingInputs: InputPayload[] = [];

    constructor(snake: Snake) {
        this.snake = snake;
    }

    addInput(input: InputPayload): void {
        this.pendingInputs.push(input);
    }

    predict(dt: number, obstacles: Obstacle[]): void {
        this.snake.update(dt, obstacles);
    }

    reconcile(serverState: SnakeNetState): void {
        // Discard inputs already processed by server
        this.pendingInputs = this.pendingInputs.filter(
            inp => inp.seq > serverState.lastProcessedSeq
        );

        // Measure divergence
        const dx = this.snake.position.x - serverState.x;
        const dz = this.snake.position.z - serverState.z;
        const divergence = Math.sqrt(dx * dx + dz * dz);

        const threshold = getSnapThreshold(serverState.speed);
        if (divergence > threshold) {
            // Hard snap
            this.snake.position.set(serverState.x, serverState.y, serverState.z);
            this.snake.angle = serverState.angle;
            this.snake.actualSpeed = serverState.speed;
            this.snake.verticalVelocity = serverState.vy;
        } else if (divergence > 0.1) {
            // Smooth correction
            const t = CORRECTION_LERP;
            this.snake.position.x += (serverState.x - this.snake.position.x) * t;
            this.snake.position.y += (serverState.y - this.snake.position.y) * t;
            this.snake.position.z += (serverState.z - this.snake.position.z) * t;

            // Lerp angle
            let angleDiff = serverState.angle - this.snake.angle;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            this.snake.angle += angleDiff * t;

            this.snake.actualSpeed += (serverState.speed - this.snake.actualSpeed) * t;
            this.snake.verticalVelocity += (serverState.vy - this.snake.verticalVelocity) * t;
        }

        // Sync segment count from server
        while (this.snake.bodyMeshes.length < serverState.segmentCount) {
            this.snake.addSegment(false);
        }

        // Sync boost state
        this.snake.isBoosting = serverState.isBoosting;

        // Record path for body interpolation
        const PATH_POINT_SPACING = 0.2;
        if (this.snake.path.length === 0 ||
            this.snake.position.distanceTo(this.snake.path[0]) >= PATH_POINT_SPACING) {
            this.snake.path.unshift(this.snake.position.clone());
        }
        const approxLimit = 50 + (this.snake.bodyMeshes.length * 20);
        if (this.snake.path.length > approxLimit) {
            this.snake.path.length = approxLimit;
        }
    }

    reset(): void {
        this.pendingInputs = [];
    }
}

// --- Remote Snake Interpolation ---

const INTERPOLATION_DELAY = 100; // ms behind real time
const MAX_EXTRAPOLATION = 500;   // ms of dead reckoning (increased for better resilience)
const BUFFER_SIZE = 20;

interface BufferedState {
    state: SnakeNetState;
    timestamp: number; // time of receipt (ms)
}

export class InterpolationBuffer {
    private buffer: BufferedState[] = [];

    pushState(state: SnakeNetState, timestamp: number): void {
        this.buffer.push({ state, timestamp });
        // Keep buffer bounded
        if (this.buffer.length > BUFFER_SIZE) {
            this.buffer.shift();
        }
    }

    getInterpolatedState(currentTime: number): SnakeNetState | null {
        if (this.buffer.length === 0) return null;

        const renderTime = currentTime - INTERPOLATION_DELAY;

        // Find bracketing states
        let older: BufferedState | null = null;
        let newer: BufferedState | null = null;

        for (let i = 0; i < this.buffer.length; i++) {
            if (this.buffer[i].timestamp <= renderTime) {
                older = this.buffer[i];
            } else {
                newer = this.buffer[i];
                break;
            }
        }

        if (older && newer) {
            // Interpolate between the two
            const range = newer.timestamp - older.timestamp;
            const t = range > 0 ? (renderTime - older.timestamp) / range : 0;
            return this.lerpState(older.state, newer.state, Math.max(0, Math.min(1, t)));
        }

        if (older && !newer) {
            // Extrapolate from last known state (dead reckoning)
            const elapsed = renderTime - older.timestamp;
            if (elapsed > MAX_EXTRAPOLATION) {
                // Too far, just return latest
                return older.state;
            }
            return this.extrapolate(older.state, elapsed / 1000);
        }

        if (!older && newer) {
            // Only future state available, use it directly
            return newer.state;
        }

        return null;
    }

    private lerpState(a: SnakeNetState, b: SnakeNetState, t: number): SnakeNetState {
        // Lerp angle properly
        let angleDiff = b.angle - a.angle;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;

        return {
            ...b,
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t,
            z: a.z + (b.z - a.z) * t,
            angle: a.angle + angleDiff * t,
            speed: a.speed + (b.speed - a.speed) * t,
            vy: a.vy + (b.vy - a.vy) * t,
        };
    }

    private extrapolate(state: SnakeNetState, dt: number): SnakeNetState {
        return {
            ...state,
            x: state.x + Math.cos(state.angle) * state.speed * dt,
            y: state.y + state.vy * dt, // Add vertical motion prediction
            z: state.z + Math.sin(state.angle) * state.speed * dt,
        };
    }

    reset(): void {
        this.buffer = [];
    }
}
