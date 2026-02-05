import { supabase } from '../supabase';
import { RealtimeChannel } from '@supabase/supabase-js';
import type { PlayerId, NetMessage, MessageType, InputPayload, StatePayload, LobbyJoinPayload, LobbyStatePayload, LobbyStartPayload } from './protocol';
import { NET_INPUT_RATE, NET_STATE_RATE } from '../definitions';

type EventCallback = (payload: any) => void;

export class NetworkManager {
    private channel: RealtimeChannel | null = null;
    private listeners: Map<string, EventCallback[]> = new Map();
    private lastInputSend: number = 0;
    private lastStateSend: number = 0;
    private lastStateReceived: number = Date.now();
    private connectionTimeout: number = 5000; // 5 seconds
    private pingInterval: NodeJS.Timeout | null = null;

    playerId: PlayerId;
    roomCode: string = '';
    isHost: boolean = false;
    connected: boolean = false;

    constructor() {
        this.playerId = this.generatePlayerId();
    }

    private generatePlayerId(): PlayerId {
        return 'p_' + Math.random().toString(36).substring(2, 10);
    }

    private generateRoomCode(): string {
        // 4-char code using unambiguous characters
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code = '';
        for (let i = 0; i < 4; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        return code;
    }

    async createRoom(): Promise<string> {
        this.roomCode = this.generateRoomCode();
        this.isHost = true;
        await this.connectToChannel();
        return this.roomCode;
    }

    async joinRoom(code: string): Promise<boolean> {
        this.roomCode = code.toUpperCase();
        this.isHost = false;
        await this.connectToChannel();
        return this.connected;
    }

    private async connectToChannel(): Promise<void> {
        const channelName = `snake-mp-${this.roomCode}`;

        this.channel = supabase.channel(channelName, {
            config: {
                broadcast: { self: true },
                presence: { key: this.playerId },
            },
        });

        // Listen for broadcast messages
        this.channel
            .on('broadcast', { event: 'lobby:join' }, (msg) => this.emit('lobby:join', msg.payload))
            .on('broadcast', { event: 'lobby:state' }, (msg) => this.emit('lobby:state', msg.payload))
            .on('broadcast', { event: 'lobby:start' }, (msg) => this.emit('lobby:start', msg.payload))
            .on('broadcast', { event: 'lobby:leave' }, (msg) => this.emit('lobby:leave', msg.payload))
            .on('broadcast', { event: 'input' }, (msg) => this.emit('input', msg.payload))
            .on('broadcast', { event: 'state' }, (msg) => {
                this.lastStateReceived = Date.now(); // Update last received time
                this.emit('state', msg.payload);
            });

        // Listen for presence events
        this.channel
            .on('presence', { event: 'sync' }, () => {
                const state = this.channel!.presenceState();
                this.emit('presence:sync', state);
            })
            .on('presence', { event: 'join' }, ({ key, newPresences }) => {
                this.emit('presence:join', { key, presences: newPresences });
            })
            .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
                this.emit('presence:leave', { key, presences: leftPresences });
            });

        return new Promise<void>((resolve) => {
            this.channel!.subscribe(async (status) => {
                if (status === 'SUBSCRIBED') {
                    this.connected = true;
                    await this.channel!.track({
                        playerId: this.playerId,
                        joinedAt: Date.now(),
                    });

                    // Start ping monitoring
                    this.pingInterval = setInterval(() => {
                        const elapsed = Date.now() - this.lastStateReceived;
                        if (elapsed > this.connectionTimeout && this.connected) {
                            console.warn('Connection timeout detected');
                            this.emit('connection:timeout', {});
                        }
                    }, 1000);

                    resolve();
                }
            });
        });
    }

    // --- Send methods with rate limiting ---

    sendBroadcast(event: MessageType, payload: any): void {
        if (!this.channel || !this.connected) return;
        this.channel.send({
            type: 'broadcast',
            event,
            payload,
        });
    }

    sendInput(input: InputPayload): void {
        const now = Date.now();
        if (now - this.lastInputSend < NET_INPUT_RATE) return;
        this.lastInputSend = now;
        this.sendBroadcast('input', input);
    }

    sendState(state: StatePayload): void {
        const now = Date.now();
        if (now - this.lastStateSend < NET_STATE_RATE) return;
        this.lastStateSend = now;
        this.sendBroadcast('state', state);
    }

    sendLobbyJoin(payload: LobbyJoinPayload): void {
        this.sendBroadcast('lobby:join', payload);
    }

    sendLobbyState(payload: LobbyStatePayload): void {
        this.sendBroadcast('lobby:state', payload);
    }

    sendLobbyStart(payload: LobbyStartPayload): void {
        this.sendBroadcast('lobby:start', payload);
    }

    sendLobbyLeave(): void {
        this.sendBroadcast('lobby:leave', { playerId: this.playerId });
    }

    // --- Event emitter ---

    on(event: string, callback: EventCallback): void {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event)!.push(callback);
    }

    off(event: string, callback: EventCallback): void {
        const cbs = this.listeners.get(event);
        if (cbs) {
            const idx = cbs.indexOf(callback);
            if (idx >= 0) cbs.splice(idx, 1);
        }
    }

    private emit(event: string, payload: any): void {
        const cbs = this.listeners.get(event);
        if (cbs) {
            for (const cb of cbs) {
                cb(payload);
            }
        }
    }

    // --- Presence helpers ---

    getPresenceState(): Record<string, any[]> {
        if (!this.channel) return {};
        return this.channel.presenceState();
    }

    // --- Cleanup ---

    async disconnect(): Promise<void> {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
        if (this.channel) {
            await this.channel.untrack();
            supabase.removeChannel(this.channel);
            this.channel = null;
        }
        this.connected = false;
        this.listeners.clear();
    }
}
