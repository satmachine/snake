

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
      if (!this.ctx || !this.masterGain) return;
      const t = this.ctx.currentTime;
      
      // Crystal chime
      const freqs = [1108.73, 1318.51]; // C#6, E6
      
      freqs.forEach((f, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          
          osc.type = 'sine';
          osc.frequency.value = f;
          
          gain.gain.setValueAtTime(0.0, t);
          gain.gain.linearRampToValueAtTime(0.15, t + 0.05 + i*0.05);
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
            if(n.stop) n.stop(); 
            n.disconnect(); 
          } catch(e) {}
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
      try { node.disconnect(); } catch(e) {} 
  }
}
