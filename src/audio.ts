

export class AudioManager {
    ctx: AudioContext | null = null;
    masterGain: GainNode | null = null;

    // Music state
    musicNodes: AudioNode[] = [];
    isMusicPlaying: boolean = false;
    nextNoteTime: number = 0;
    beatIndex: number = 0;

    // Slower, Ambient Tempo
    tempo: number = 70;
    lookahead: number = 25.0;
    scheduleAheadTime: number = 0.1;

    // Dream Pop Chord Progression (Maj7 / Add9 feels)
    // Key: D Major / B Minor relative
    progression = [
        [146.83, 220.00, 277.18, 329.63], // Dmaj7 (D3, A3, C#4, E4)
        [164.81, 246.94, 293.66, 369.99], // Eadd9 (E3, B3, D4, F#4)
        [123.47, 185.00, 220.00, 277.18], // Bm9 (B2, F#3, A3, C#4)
        [110.00, 164.81, 220.00, 277.18], // Amaj7 (A2, E3, A3, C#4)
    ];

    // Sparkly high notes
    melodyNotes = [
        554.37, 0, 0, 659.25, 0, 0, 0, 0,
        587.33, 0, 0, 0, 0, 739.99, 0, 0,
        0, 0, 659.25, 0, 0, 0, 554.37, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ];

    constructor() {
        try {
            // @ts-ignore
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.value = 0.3;
            this.masterGain.connect(this.ctx.destination);
        } catch (e) {
            console.error("Web Audio API not supported", e);
        }
    }

    async resumeContext() {
        if (this.ctx && this.ctx.state === 'suspended') {
            await this.ctx.resume();
        }
    }

    // --- SFX (Revised for Dreamscape) ---

    playBoostStart() {
        if (!this.ctx || !this.masterGain) return;
        const t = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Rising sine "charge"
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, t);
        osc.frequency.exponentialRampToValueAtTime(880, t + 0.6);

        gain.gain.setValueAtTime(0.1, t);
        gain.gain.linearRampToValueAtTime(0.2, t + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 0.6);
    }

    playEat() {
        const ctx = this.ctx;
        if (!ctx || !this.masterGain) return;
        const t = ctx.currentTime;

        // Crystal chime
        const freqs = [1108.73, 1318.51]; // C#6, E6

        freqs.forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.value = f;

            gain.gain.setValueAtTime(0.0, t);
            gain.gain.linearRampToValueAtTime(0.15, t + 0.05 + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

            osc.connect(gain);
            gain.connect(this.masterGain!);

            osc.start(t);
            osc.stop(t + 1.2);
        });
    }

    playCrash() {
        if (!this.ctx || !this.masterGain) return;
        const t = this.ctx.currentTime;

        // Dissonant low drone fade out
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(80, t);
        osc.frequency.linearRampToValueAtTime(40, t + 1.0);

        gain.gain.setValueAtTime(0.3, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 2.0);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 2.0);
    }

    playImpact() {
        if (!this.ctx || !this.masterGain) return;
        const t = this.ctx.currentTime;

        // Crunchy impact (noise burst)
        const bufferSize = this.ctx.sampleRate * 0.2;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.2;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, t);
        filter.frequency.exponentialRampToValueAtTime(200, t + 0.2);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        noise.start(t);
        noise.stop(t + 0.2);

        // Low thud
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(120, t);
        osc.frequency.exponentialRampToValueAtTime(60, t + 0.15);
        oscGain.gain.setValueAtTime(0.3, t);
        oscGain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
        osc.connect(oscGain);
        oscGain.connect(this.masterGain);
        osc.start(t);
        osc.stop(t + 0.15);
    }

    // Water sound effects
    waterNoiseNode: AudioBufferSourceNode | null = null;
    waterGainNode: GainNode | null = null;
    isWaterSoundPlaying: boolean = false;

    playWaterSplash() {
        if (!this.ctx || !this.masterGain) return;
        const t = this.ctx.currentTime;

        // Create a splash sound with noise and filtered frequencies
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.3, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 800;
        filter.Q.value = 2;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        noise.start(t);
        noise.stop(t + 0.3);

        // Add a low "plop" tone
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, t);
        osc.frequency.exponentialRampToValueAtTime(80, t + 0.2);

        oscGain.gain.setValueAtTime(0.1, t);
        oscGain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);

        osc.connect(oscGain);
        oscGain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 0.2);
    }

    startWaterSound() {
        if (!this.ctx || !this.masterGain || this.isWaterSoundPlaying) return;
        this.isWaterSoundPlaying = true;

        const t = this.ctx.currentTime;

        // Create continuous water noise
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.5, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.3;
        }

        this.waterNoiseNode = this.ctx.createBufferSource();
        this.waterNoiseNode.buffer = buffer;
        this.waterNoiseNode.loop = true;

        // Filter to make it sound like water
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 600;
        filter.Q.value = 1.5;

        this.waterGainNode = this.ctx.createGain();
        this.waterGainNode.gain.value = 0.08;

        this.waterNoiseNode.connect(filter);
        filter.connect(this.waterGainNode);
        this.waterGainNode.connect(this.masterGain);

        this.waterNoiseNode.start(t);
    }

    stopWaterSound() {
        if (this.waterNoiseNode && this.isWaterSoundPlaying) {
            const t = this.ctx?.currentTime || 0;
            if (this.waterGainNode) {
                this.waterGainNode.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
            }
            setTimeout(() => {
                try {
                    this.waterNoiseNode?.stop();
                    this.waterNoiseNode?.disconnect();
                    this.waterGainNode?.disconnect();
                } catch (e) { }
                this.waterNoiseNode = null;
                this.waterGainNode = null;
                this.isWaterSoundPlaying = false;
            }, 200);
        }
    }

    updateWaterSound(speed: number) {
        if (this.waterGainNode && this.isWaterSoundPlaying) {
            // Adjust volume and filter based on speed
            const t = this.ctx?.currentTime || 0;
            const targetGain = 0.08 + (speed / 50) * 0.05; // Louder when moving faster
            this.waterGainNode.gain.linearRampToValueAtTime(targetGain, t + 0.1);
        }
    }

    // --- AMBIENT ENGINE ---

    startMusic() {
        if (this.isMusicPlaying) return;
        this.isMusicPlaying = true;
        this.beatIndex = 0;
        this.nextNoteTime = this.ctx?.currentTime || 0;
        this.scheduleMusic();
    }

    stopMusic() {
        this.isMusicPlaying = false;
        this.musicNodes.forEach(n => {
            try {
                // @ts-ignore
                if (n.stop) n.stop();
                n.disconnect();
            } catch (e) { }
        });
        this.musicNodes = [];
    }

    scheduleMusic() {
        if (!this.isMusicPlaying || !this.ctx || !this.masterGain) return;

        const timer = setInterval(() => {
            if (!this.isMusicPlaying) {
                clearInterval(timer);
                return;
            }
            // @ts-ignore
            while (this.nextNoteTime < this.ctx.currentTime + this.scheduleAheadTime) {
                this.playMeasureBeat();
            }
        }, this.lookahead);
    }

    playMeasureBeat() {
        if (!this.ctx || !this.masterGain) return;

        const secondsPerBeat = 60.0 / this.tempo;
        const noteDuration = 0.25 * secondsPerBeat; // 16th notes

        const measureIdx = Math.floor(this.beatIndex / 16) % this.progression.length;
        const noteInMeasure = this.beatIndex % 16;

        const chord = this.progression[measureIdx];

        // 1. Fluid Pads (Play on Beat 1 of every 4 beats i.e. Quarter notes, but sustain long)
        if (noteInMeasure % 4 === 0) {
            // Play a random note from the chord as a swell
            const noteData = chord[Math.floor(Math.random() * 4)];
            // Play slower, longer
            this.playPad(noteData, this.nextNoteTime, secondsPerBeat * 2);
        }

        // 2. Deep Bass (Root note)
        if (noteInMeasure === 0) {
            this.playBass(chord[0] / 2, this.nextNoteTime, secondsPerBeat * 4);
        }

        // 3. Glitch/Sparkle melody
        const melodyFreq = this.melodyNotes[Math.floor(this.beatIndex) % this.melodyNotes.length];
        if (melodyFreq > 0) {
            this.playSparkle(melodyFreq, this.nextNoteTime);
        }

        this.nextNoteTime += noteDuration;
        this.beatIndex++;
    }

    playPad(freq: number, time: number, duration: number) {
        if (!this.ctx || !this.masterGain) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Triangle = softer than saw, warmer than sine
        osc.type = 'triangle';
        osc.frequency.value = freq;

        // Slow attack/release (Pad envelope)
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.08, time + duration * 0.4);
        gain.gain.linearRampToValueAtTime(0, time + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(time);
        osc.stop(time + duration + 1.0);

        this.musicNodes.push(osc);
        this.musicNodes.push(gain);

        setTimeout(() => {
            this.cleanupNode(osc);
            this.cleanupNode(gain);
        }, (duration + 1.0) * 1000);
    }

    playBass(freq: number, time: number, duration: number) {
        if (!this.ctx || !this.masterGain) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.value = freq;

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(200, time);
        filter.frequency.linearRampToValueAtTime(100, time + duration); // Filter closes

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.15, time + 0.2);
        gain.gain.linearRampToValueAtTime(0, time + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(time);
        osc.stop(time + duration + 1.0);

        this.musicNodes.push(osc);
        this.musicNodes.push(gain);

        setTimeout(() => {
            this.cleanupNode(osc);
            this.cleanupNode(gain);
            this.cleanupNode(filter);
        }, (duration + 1.0) * 1000);
    }

    playSparkle(freq: number, time: number) {
        if (!this.ctx || !this.masterGain) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine'; // Pure tone
        osc.frequency.value = freq;

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.05, time + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(time);
        osc.stop(time + 0.5);

        this.musicNodes.push(osc);
        this.musicNodes.push(gain);

        setTimeout(() => {
            this.cleanupNode(osc);
            this.cleanupNode(gain);
        }, 600);
    }

    cleanupNode(node: AudioNode) {
        const idx = this.musicNodes.indexOf(node);
        if (idx > -1) this.musicNodes.splice(idx, 1);
        try { node.disconnect(); } catch (e) { }
    }
}
