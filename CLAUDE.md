# Yume Snake

A 3D snake game built with Three.js and TypeScript.

## Project Structure

- `src/definitions.ts` - Game constants and configuration (CONFIG object)
- `src/entities.ts` - Snake physics and entity logic
- `src/supabase.ts` - Supabase client (leaderboard API + Realtime for multiplayer)
- `src/ui.ts` - UI components (menu, lobby, game over, leaderboard, multiplayer results)
- `src/game.ts` - Main game loop, state management, multiplayer orchestration
- `src/net/protocol.ts` - Multiplayer network message types and payload interfaces
- `src/net/network.ts` - NetworkManager: Supabase Realtime Broadcast/Presence wrapper
- `src/net/lobby.ts` - LobbyManager: pre-game room coordination (create/join/start)
- `src/net/host.ts` - HostSimulation: authoritative physics, PvP collision, game end detection
- `src/net/client.ts` - ClientPredictor (client-side prediction) and InterpolationBuffer (remote smoothing)
- `src/` - Other game modules (terrain, rendering, particles, audio, etc.)

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

### Leaderboard

Public high score leaderboard using Supabase:

- **Backend**: Supabase project `wrlwpzxltkmuxaexnrym` (ap-southeast-2)
- **Table**: `public.leaderboard` with columns: `id`, `name`, `score`, `created_at`
- **RLS**: Public read/insert enabled (no auth required for casual game)
- **API**: `src/supabase.ts` exports `fetchLeaderboard(limit)` and `submitScore(name, score)`

**UX Flow**:
- Menu screen shows top 10 high scores
- Game over screen has optional name input (uppercase, 10 char max)
- Submission is optional - players can restart without submitting

### Other Mechanics
- Season changes every 250 echoes (apples)
- 3-second breath underwater, unless boosting or going fast (water skimming)
- Rocks knock out snake unless boosting (breaks rocks)
- Longer snake = faster base speed

### Multiplayer (WIP — Phase 3 complete)

Online multiplayer (2-4 players) using Supabase Realtime Broadcast with host-client architecture. The lobby creator is the host; other players are clients who send inputs and receive state.

**Network Transport**: Supabase Realtime Broadcast (WebSocket relay via `supabase.channel()`). Same Supabase project as the leaderboard (`wrlwpzxltkmuxaexnrym`).

**Terrain Determinism**: `seedTerrain(seed)` in `src/utils.ts` uses xorshift32 PRNG to shuffle the noise PERM table deterministically. Host generates a seed at game start, sends to all clients so everyone sees identical terrain.

**Game States**: `GameState.LOBBY` (pre-game room), `GameState.SPECTATING` (watching after death). Added in `src/definitions.ts` alongside existing MENU, PLAYING, GAME_OVER.

**Constants** (in `src/definitions.ts`):
- `MAX_PLAYERS: 4`
- `NET_INPUT_RATE: 50` (ms, ~20 Hz client input sends)
- `NET_STATE_RATE: 66` (ms, ~15 Hz host state broadcasts)
- `MULTIPLAYER_COLORS` — 4 palettes: Cyan, Pink, Green, Gold (each with head/body/emissive colors)

**Networking** (`src/net/network.ts`):
- `NetworkManager` wraps Supabase Realtime Broadcast + Presence
- `createRoom()` generates 4-char room code (unambiguous chars), subscribes to channel
- `joinRoom(code)` subscribes to channel
- Rate-limited `sendInput()` / `sendState()`, immediate lobby message sends
- Event emitter: `on(event, cb)` / `off(event, cb)`
- Presence tracking for disconnect detection

**Lobby** (`src/net/lobby.ts`):
- `LobbyManager` coordinates pre-game: player join/leave, color assignment, spawn generation
- Host-authoritative: only host processes join/leave, broadcasts lobby state to all
- `startGame()` generates terrain seed + spawn positions (safe terrain, 50+ units apart), sends `lobby:start`
- Presence-based disconnect detection removes players who close their tab

**Protocol** (`src/net/protocol.ts`):
- All message types: `PlayerId`, `PlayerInfo`, `LobbyJoinPayload`, `LobbyStatePayload`, `LobbyStartPayload`
- Gameplay types: `InputPayload`, `SnakeNetState`, `StatePayload`, `GameEvent`, `RankingEntry`
- `MessageType` union of all event name strings

**Host Simulation** (`src/net/host.ts`):
- `HostSimulation` runs authoritative physics for all snakes on the host
- `addPlayer(id, snake, colorIndex)` / `removePlayer(id)` — manage player records
- `receiveInput(input)` — buffers inputs from clients (keeps latest 3)
- `simulate(dt, obstacles)` — applies inputs, runs EP drain/regen, calls `snake.update()` per player, then `checkPvPCollisions()`
- `handleEat(playerId, appleId, position)` — processes apple consumption (score, EP, growth, speed)
- `getStatePayload()` — serializes all snake states + flushes pending events; includes path keypoints every 5th tick
- Each player has independent EP, score, kills, alive status tracked in `PlayerRecord`
- **PvP Collision** (`checkPvPCollisions()`): head-to-body (skip first 3 segments, radius 0.75+0.5, height tolerance 3.0) and head-to-head (distance < 1.5, longer snake survives, equal = both die). Emits death events with `killerId` and `reason: 'pvp'`.
- **Game End** (`checkGameEnd()`): when ≤1 player alive, builds `RankingEntry[]` from `deathOrder` (first to die = worst placement). Returns `game_over` event with rankings (names filled by `game.ts` from lobby data).

**Client Prediction & Interpolation** (`src/net/client.ts`):
- `ClientPredictor`: runs local physics every frame for the client's own snake; on server state, discards acked inputs, measures divergence. Hard-snap if > 5 units, lerp correction (0.3 blend) if 0.1–5 units. Syncs segment count and boost state.
- `InterpolationBuffer`: buffers remote snake states with timestamps. Renders 100ms behind real time (INTERPOLATION_DELAY). Lerps position/angle between two bracketing states. Falls back to dead-reckoning extrapolation (max 200ms) if only one state available.
- Constants: `SNAP_THRESHOLD = 5.0`, `CORRECTION_LERP = 0.3`, `INTERPOLATION_DELAY = 100`, `MAX_EXTRAPOLATION = 200`, `BUFFER_SIZE = 20`

**Apple Manager** (`src/entities.ts` — `AppleManager`):
- Refactored to support multiple snakes: constructor takes `SnakeHeadProvider` callback instead of single `Snake`
- `isHost` flag: only checks eating in host mode; clients receive eat events from network
- Apple IDs: each apple gets a unique string ID for network sync
- `update(dt)` returns `EatResult[]` (playerId, appleId, position) instead of boolean
- `addAppleFromNet(id, x, y, z)` / `removeAppleFromNet(id)` — client-side network sync
- `getAppleById(id)` — lookup for event generation

**Snake Enhancements** (`src/entities.ts` — `Snake`):
- `isRemote: boolean` — marks remote-controlled snakes
- `setInput(turn, boost)` — single-call API for host simulation to apply inputs

**Game Integration** (`src/game.ts`):
- `mode: 'singleplayer' | 'multiplayer'` + `isHost: boolean` properties
- `hostSimulation: HostSimulation | null` — created on game start for host
- `clientPredictor: ClientPredictor | null` — created for non-host clients
- `remoteInterpolators: Map<PlayerId, InterpolationBuffer>` — one per remote snake on clients
- `spectatingPlayerId: PlayerId | null` — which player the camera follows after local death
- `addSnake(playerId, x, z, angle, colorIndex)` / `removeSnake(playerId)` — multi-snake management
- `updatePhysics` branches: `updatePhysicsSingleplayer` (unchanged) vs `updatePhysicsMultiplayer`
- **Host loop**: reads local input → feeds to HostSimulation + sends via network; receives remote inputs via `'input'` listener; runs `hostSimulation.simulate(dt)`; handles apple eating/spawning; calls `checkGameEnd()` → broadcasts game_over with player names; rate-limited `sendState()`
- **Client loop**: sends local input via network; runs `clientPredictor.predict()` locally each frame; on state arrival, `clientPredictor.reconcile()` corrects local snake, `InterpolationBuffer.pushState()` buffers remote states; tick interpolators each frame for smooth remote rendering
- `handleGameEvent` death case: shows kill feed with killer name for PvP (`"KILLER SEVERED VICTIM"`) or reason for other deaths. Enters spectator mode if local player dies.
- **Spectator mode**: `enterSpectatorMode()` transitions to `GameState.SPECTATING`; `spectateNextPlayer()` cycles alive remote snakes; TAB key bound during SPECTATING; camera follows spectated snake; `updatePhysicsSpectating()` keeps world/interpolation ticking
- `updateVisuals` calls `updateBodyVisuals()` on ALL snakes in multiplayer; emits boost particles for remote snakes
- Season palette changes don't override multiplayer player colors
- `GameState.LOBBY` renders orbiting camera while in lobby
- Single-player flow is unaffected

**Phase 2 Milestone**: Host runs authoritative simulation, clients receive and render state. Apples sync across tabs. Multiple snakes visible and moving.

**Phase 3 Milestone**: PvP collision kills snakes on contact. Clients run local prediction and smooth reconciliation. Remote snakes interpolated 100ms behind. Dead players spectate alive ones with TAB cycling. Game ends when ≤1 alive, results screen shows placements/scores/kills.

**Remaining Phases** (tracked on [Linear — Multi-Snake project](https://linear.app/iplus1/project/multi-snake-d9d7d3893af2)):
- Phase 4: Disconnect handling, name labels, kill feed, countdown, performance testing

## Development Workflow

### Linear Issue Tracking

All multiplayer work is tracked on the [Multi-Snake Linear project](https://linear.app/iplus1/project/multi-snake-d9d7d3893af2). Follow these practices:

- **Before starting work**: check the Linear project for the next issue to pick up. Issues have dependencies (`blockedBy`) — don't start an issue until its blockers are Done.
- **When finishing an issue**: mark it as **Done** on Linear immediately after the code is written and the build passes (`npx tsc --noEmit && npx vite build`). Don't batch status updates — update each issue as it's completed.
- **If an issue is partially done** (e.g. code written but not wired up): leave it In Progress, not Done. Done means the acceptance criteria in the issue description are met.
- **Phase milestones**: each phase has a milestone gate described in its Linear milestone. Verify the gate before moving to the next phase.

### Keeping CLAUDE.md Current

This file must reflect what actually exists in the codebase — not what's planned.

- **After completing a phase**: update the Project Structure section if new files were added. Update or add Key Systems subsections for new functionality.
- **Only document implemented code**: if a feature is planned but not built, don't document it here. Reference the Linear project for planned work instead.
- **Include file paths**: reference specific files (e.g. `src/net/network.ts`) so readers can find the code.
- **Include constants and config values**: document actual values (e.g. `MAX_PLAYERS: 4`, `NET_INPUT_RATE: 50`) so they're easy to find without reading source.
- **Keep it concise**: match the existing style. Bullet points over paragraphs. No need to explain every method — focus on architecture, key APIs, and non-obvious behavior.
- **Verify single-player is unaffected**: after any multiplayer change, confirm single-player still works. Note this as a development guideline if it's ever broken.

### Git Commits

Commit often with descriptive messages. Each logical unit of work should be its own commit — don't batch unrelated changes together. Commit messages should explain **what** changed and **why**, with enough context for a future reader. Always verify the build passes before committing.

### Build Verification

Always verify after making changes:
```bash
npx tsc --noEmit     # Type checking
npx vite build       # Production build
```

## Running
```bash
npm install
npm run dev
```
