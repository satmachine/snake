// Network protocol types for multiplayer snake

export type PlayerId = string;

// --- Lobby Messages ---

export interface LobbyJoinPayload {
    playerId: PlayerId;
    name: string;
}

export interface PlayerInfo {
    id: PlayerId;
    name: string;
    colorIndex: number;
    isHost: boolean;
    ready: boolean;
}

export interface LobbyStatePayload {
    players: PlayerInfo[];
    roomCode: string;
    hostId: PlayerId;
}

export interface LobbyStartPayload {
    terrainSeed: number;
    spawns: Record<PlayerId, { x: number; z: number; angle: number }>;
    playerOrder: PlayerId[]; // for consistent ordering
}

// --- Gameplay Messages ---

export interface InputPayload {
    playerId: PlayerId;
    seq: number; // sequence number for reconciliation
    turn: number; // -1, 0, 1
    boost: boolean;
}

export interface SnakeNetState {
    playerId: PlayerId;
    x: number;
    y: number;
    z: number;
    angle: number;
    speed: number;
    vy: number;
    alive: boolean;
    score: number;
    segmentCount: number;
    isBoosting: boolean;
    lastProcessedSeq: number; // for client reconciliation
}

export interface PathKeypoint {
    x: number;
    y: number;
    z: number;
}

export interface StatePayload {
    tick: number;
    snakes: SnakeNetState[];
    events: GameEvent[];
    paths?: Record<PlayerId, PathKeypoint[]>; // sent every ~5th tick
}

// --- Game Events ---

export type GameEvent =
    | { type: 'death'; playerId: PlayerId; killerId?: PlayerId; reason: 'pvp' | 'obstacle' | 'self' | 'drown' | 'disconnect' }
    | { type: 'eat'; playerId: PlayerId; appleId: string; position: { x: number; y: number; z: number } }
    | { type: 'apple_spawn'; appleId: string; x: number; y: number; z: number }
    | { type: 'apple_despawn'; appleId: string }
    | { type: 'game_over'; rankings: RankingEntry[] };

export interface RankingEntry {
    playerId: PlayerId;
    name: string;
    score: number;
    kills: number;
    placement: number;
}

// --- Message wrapper ---

export type MessageType =
    | 'lobby:join'
    | 'lobby:state'
    | 'lobby:start'
    | 'lobby:leave'
    | 'input'
    | 'state';

export interface NetMessage {
    type: MessageType;
    payload: LobbyJoinPayload | LobbyStatePayload | LobbyStartPayload | InputPayload | StatePayload;
}
