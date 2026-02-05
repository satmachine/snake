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
        // Pick a random 4-letter word — easier to share verbally than random chars
        const words = [
            'ACID', 'AGED', 'ARCH', 'AVID',
            'BAKE', 'BAND', 'BARK', 'BARN', 'BASE', 'BATH', 'BEAD', 'BEAM',
            'BEAN', 'BEAR', 'BEAT', 'BEEF', 'BELL', 'BELT', 'BEND', 'BIKE',
            'BIRD', 'BITE', 'BLOW', 'BLUE', 'BLUR', 'BOAT', 'BOLD', 'BOLT',
            'BOMB', 'BOND', 'BONE', 'BOOK', 'BOOM', 'BOOT', 'BOWL', 'BULK',
            'BUMP', 'BURN', 'BURP', 'BUSY', 'BUZZ',
            'CAFE', 'CAGE', 'CAKE', 'CALM', 'CAME', 'CAMP', 'CAPE', 'CARD',
            'CART', 'CASH', 'CAST', 'CAVE', 'CHAP', 'CHEF', 'CHIP', 'CHOP',
            'CITY', 'CLAM', 'CLAP', 'CLAW', 'CLAY', 'CLIP', 'CLUB', 'CLUE',
            'COAL', 'COAT', 'CODE', 'COIL', 'COIN', 'COLD', 'CONE', 'COOK',
            'COOL', 'COPY', 'CORD', 'CORE', 'CORK', 'CORN', 'COZY', 'CRAB',
            'CREW', 'CROP', 'CROW', 'CUBE', 'CURL', 'CUTE',
            'DARE', 'DARK', 'DART', 'DASH', 'DAWN', 'DEAL', 'DEAR', 'DECK',
            'DEEP', 'DEER', 'DEMO', 'DESK', 'DICE', 'DIME', 'DINE', 'DIRT',
            'DISH', 'DISK', 'DIVE', 'DOCK', 'DOME', 'DONE', 'DOOR', 'DOSE',
            'DOVE', 'DOWN', 'DRAW', 'DRIP', 'DROP', 'DRUM', 'DUAL', 'DUCK',
            'DUKE', 'DUNE', 'DUSK', 'DUST',
            'EACH', 'EARN', 'EASE', 'EAST', 'EASY', 'ECHO', 'EDGE', 'EDIT',
            'EPIC', 'EVEN', 'EVER', 'EXIT',
            'FACE', 'FACT', 'FADE', 'FAIR', 'FAKE', 'FAME', 'FANG', 'FARM',
            'FAST', 'FATE', 'FAWN', 'FERN', 'FILM', 'FIND', 'FINE', 'FIRE',
            'FIRM', 'FISH', 'FIST', 'FLAG', 'FLAP', 'FLAT', 'FLAW',
            'FLED', 'FLEW', 'FLIP', 'FLOW', 'FOAM', 'FOLD', 'FOLK', 'FOND',
            'FONT', 'FOOD', 'FOOL', 'FORK', 'FORM', 'FORT', 'FOUL', 'FOUR',
            'FREE', 'FROG', 'FROM', 'FUEL', 'FULL', 'FUND', 'FURY', 'FUSE',
            'GAIN', 'GALE', 'GAME', 'GANG', 'GATE', 'GAVE', 'GAZE', 'GEAR',
            'GIFT', 'GILD', 'GLAD', 'GLOW', 'GLUE', 'GOAT', 'GOLD', 'GOLF',
            'GONE', 'GOOD', 'GRAB', 'GRAY', 'GREW', 'GRID', 'GRIM', 'GRIN',
            'GRIP', 'GRIT', 'GROW', 'GULF', 'GUST',
            'HACK', 'HAIL', 'HAIR', 'HALF', 'HALL', 'HALT', 'HAND', 'HANG',
            'HARD', 'HARE', 'HARM', 'HARP', 'HASH', 'HAZE', 'HEAD', 'HEAL',
            'HEAP', 'HEAT', 'HELD', 'HELM', 'HELP', 'HERB', 'HERD', 'HERE',
            'HERO', 'HIGH', 'HIKE', 'HILL', 'HINT', 'HIVE', 'HOLD', 'HOLE',
            'HOME', 'HOOD', 'HOOK', 'HOPE', 'HORN', 'HOST', 'HOWL', 'HUGE',
            'HULL', 'HUNT', 'HYMN',
            'ICON', 'IDEA', 'IDLE', 'INCH', 'INTO', 'IRON', 'ISLE', 'ITEM',
            'JADE', 'JAIL', 'JAVA', 'JAZZ', 'JEDI', 'JEST', 'JIVE', 'JOIN',
            'JOKE', 'JOLT', 'JUMP', 'JUNE', 'JURY', 'JUST',
            'KEEN', 'KELP', 'KEPT', 'KICK', 'KIDS', 'KIND', 'KING', 'KITE',
            'KNOB', 'KNOT', 'KNOW',
            'LACE', 'LAID', 'LAKE', 'LAMB', 'LAMP', 'LAND', 'LANE', 'LARK',
            'LAST', 'LATE', 'LAVA', 'LAWN', 'LEAD', 'LEAF', 'LEAN', 'LEAP',
            'LEFT', 'LEND', 'LENS', 'LESS', 'LIFE', 'LIFT', 'LIKE', 'LIME',
            'LIMP', 'LINE', 'LINK', 'LION', 'LIST', 'LIVE', 'LOAD', 'LOAF',
            'LOAN', 'LOCK', 'LOFT', 'LOGO', 'LONG', 'LOOK', 'LOOP', 'LORD',
            'LORE', 'LOST', 'LOUD', 'LOVE', 'LUCK', 'LUMP', 'LUNG', 'LURE',
            'LYNX',
            'MACE', 'MADE', 'MAIL', 'MAIN', 'MAKE', 'MALT', 'MANE', 'MANY',
            'MAPS', 'MARE', 'MARK', 'MARS', 'MASH', 'MASK', 'MASS', 'MAST',
            'MATE', 'MAZE', 'MEAL', 'MEAN', 'MEAT', 'MELD', 'MELT', 'MEMO',
            'MENU', 'MESH', 'MILD', 'MILE', 'MILK', 'MILL', 'MIME', 'MIND',
            'MINE', 'MINT', 'MIST', 'MOAT', 'MODE', 'MOLD', 'MOLE', 'MOOD',
            'MOON', 'MOOR', 'MORE', 'MOSS', 'MOST', 'MOTH', 'MOVE', 'MUCH',
            'MULE', 'MUSE', 'MUST', 'MYTH',
            'NAIL', 'NAME', 'NAVY', 'NEAR', 'NEAT', 'NECK', 'NEED', 'NEST',
            'NEWS', 'NEXT', 'NICE', 'NINE', 'NODE', 'NONE', 'NOON', 'NORM',
            'NOSE', 'NOTE', 'NOUN',
            'OAKS', 'OATH', 'ODDS', 'OMEN', 'ONCE', 'ONLY', 'ONTO', 'OPEN',
            'ORCA', 'OVEN', 'OVER', 'OWLS',
            'PACE', 'PACK', 'PAGE', 'PAID', 'PAIL', 'PAIR', 'PALE', 'PALM',
            'PANE', 'PARK', 'PART', 'PASS', 'PAST', 'PATH', 'PAVE', 'PEAK',
            'PEAR', 'PEEL', 'PIER', 'PIKE', 'PILE', 'PINE', 'PINK', 'PIPE',
            'PLAN', 'PLAY', 'PLOT', 'PLOW', 'PLUM', 'PLUS', 'POEM', 'POET',
            'POKE', 'POLE', 'POLO', 'POND', 'POOL', 'POPE', 'PORK', 'PORT',
            'POSE', 'POST', 'POUR', 'PRAY', 'PROP', 'PULL', 'PULP', 'PUMP',
            'PUNK', 'PURE', 'PUSH',
            'QUIZ',
            'RACE', 'RACK', 'RAFT', 'RAGE', 'RAID', 'RAIL', 'RAIN', 'RAKE',
            'RAMP', 'RANG', 'RANK', 'RARE', 'RASH', 'RATE', 'RAVE', 'READ',
            'REAL', 'REEF', 'REEL', 'RENT', 'REST', 'RICE', 'RICH', 'RIDE',
            'RIFT', 'RIND', 'RING', 'RISE', 'RISK', 'ROAD', 'ROAM', 'ROAR',
            'ROBE', 'ROCK', 'RODE', 'ROLE', 'ROLL', 'ROOF', 'ROOM', 'ROOT',
            'ROPE', 'ROSE', 'RUIN', 'RULE', 'RUSH', 'RUST',
            'SAFE', 'SAGE', 'SAID', 'SAIL', 'SAKE', 'SALE', 'SALT', 'SAME',
            'SAND', 'SANE', 'SAVE', 'SEAL', 'SEAM', 'SEAT', 'SEED', 'SELF',
            'SEND', 'SHED', 'SHIP', 'SHOP', 'SHOW', 'SHUT', 'SIDE', 'SIFT',
            'SIGN', 'SILK', 'SINK', 'SITE', 'SIZE', 'SKIP', 'SLAM', 'SLAP',
            'SLED', 'SLID', 'SLIM', 'SLIP', 'SLOT', 'SLOW', 'SLUG', 'SNAP',
            'SNOW', 'SOAK', 'SOAR', 'SOCK', 'SOFT', 'SOIL', 'SOLD', 'SOLE',
            'SOME', 'SONG', 'SOON', 'SORT', 'SOUL', 'SOUR', 'SPAN', 'SPAR',
            'SPIN', 'SPIT', 'SPOT', 'STAR', 'STAY', 'STEM', 'STEP', 'STEW',
            'STIR', 'STOP', 'STUD', 'SUCH', 'SUIT', 'SULK', 'SURE', 'SURF',
            'SWAN', 'SWAP', 'SWIM',
            'TABS', 'TACK', 'TAIL', 'TAKE', 'TALE', 'TALK', 'TALL', 'TAME',
            'TANK', 'TAPE', 'TART', 'TASK', 'TAXI', 'TEAM', 'TEAR', 'TELL',
            'TEND', 'TENT', 'TERM', 'TEST', 'TEXT', 'THAN', 'THAT', 'THEM',
            'THEN', 'THEY', 'THIN', 'THIS', 'TICK', 'TIDE', 'TIDY', 'TIED',
            'TIER', 'TILE', 'TILT', 'TIME', 'TINY', 'TIRE', 'TOAD', 'TOLL',
            'TOMB', 'TONE', 'TOOK', 'TOOL', 'TOPS', 'TORE', 'TORN', 'TOUR',
            'TOWN', 'TRAP', 'TRAY', 'TREE', 'TREK', 'TRIM', 'TRIP', 'TROT',
            'TRUE', 'TUBE', 'TUCK', 'TUNA', 'TUNE', 'TURN', 'TUSK', 'TWIN',
            'UNIT', 'UPON', 'URGE', 'USED',
            'VALE', 'VANE', 'VARY', 'VASE', 'VAST', 'VEIL', 'VEIN', 'VENT',
            'VERB', 'VERY', 'VEST', 'VIBE', 'VINE', 'VOID', 'VOLT',
            'VOTE', 'VOWS',
            'WADE', 'WAGE', 'WAIT', 'WAKE', 'WALK', 'WALL', 'WAND', 'WARD',
            'WARM', 'WARN', 'WARP', 'WASH', 'WAVE', 'WAVY', 'WAXY', 'WEAK',
            'WEAR', 'WEED', 'WEEK', 'WELL', 'WENT', 'WERE', 'WEST', 'WHAT',
            'WHEN', 'WHOM', 'WIDE', 'WIFE', 'WILD', 'WILL', 'WILT', 'WIMP',
            'WIND', 'WINE', 'WING', 'WINK', 'WIRE', 'WISE', 'WISH', 'WITH',
            'WOKE', 'WOLF', 'WOOD', 'WOOL', 'WORD', 'WORE', 'WORK', 'WORM',
            'WORN', 'WRAP', 'WREN',
            'YARD', 'YARN', 'YEAR', 'YELL', 'YOUR', 'YURT',
            'ZEAL', 'ZERO', 'ZEST', 'ZINC', 'ZONE', 'ZOOM',
        ];
        return words[Math.floor(Math.random() * words.length)];
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
