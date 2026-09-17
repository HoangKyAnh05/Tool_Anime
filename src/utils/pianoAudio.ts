// High-Fidelity Polyphonic Acoustic Grand Piano Synthesizer & Speech Engine

class PianoAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isTtsEnabled: boolean = true;
  private ttsRate: number = 0.95;
  private ttsVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    // Lazy init on first user interaction
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.initVoice();
      };
      this.initVoice();
    }
  }

  private getAudioContext(): AudioContext {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private initVoice() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prefer natural English voices
    const enVoice = voices.find(v => 
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Victoria') || v.name.includes('Daniel')) &&
      v.lang.startsWith('en')
    ) || voices.find(v => v.lang.startsWith('en-US')) || voices.find(v => v.lang.startsWith('en'));
    
    if (enVoice) {
      this.ttsVoice = enVoice;
    }
  }

  /**
   * Convert standard note name (e.g. 'C4', 'D#4', 'A5') to frequency in Hz
   */
  public noteToFreq(note: string): number {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const regex = /^([A-G]#?)([0-8])$/;
    const match = note.match(regex);
    if (!match) return 440; // Default A4
    const noteName = match[1];
    const octave = parseInt(match[2], 10);
    const semitone = notes.indexOf(noteName);
    // A4 is octave 4, semitone 9 -> 440 Hz
    const midiNumber = (octave + 1) * 12 + semitone;
    return 440 * Math.pow(2, (midiNumber - 69) / 12);
  }

  /**
   * Play realistic Acoustic Grand Piano note with harmonic overtones and stereo panning
   */
  public playPianoNote(noteOrFreq: string | number, duration: number = 1.8, velocity: number = 0.85) {
    if (this.isMuted) return;

    try {
      const ctx = this.getAudioContext();
      const now = ctx.currentTime;
      const freq = typeof noteOrFreq === 'number' ? noteOrFreq : this.noteToFreq(noteOrFreq);

      // Stereo panning based on frequency (low note = left, high note = right)
      const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      if (panner) {
        // Map 100Hz - 2000Hz to -0.6 to +0.6
        const panValue = Math.max(-0.6, Math.min(0.6, (freq - 440) / 1000));
        panner.pan.setValueAtTime(panValue, now);
        panner.connect(ctx.destination);
      }

      const masterNode = panner || ctx.destination;

      // Harmonic structure for Grand Piano (Fundamental + 2nd, 3rd, 4th, 5th, 6th harmonics)
      const harmonics = [
        { mult: 1.0, gain: 1.0 * velocity, decay: duration },
        { mult: 2.0, gain: 0.55 * velocity, decay: duration * 0.75 },
        { mult: 3.0, gain: 0.28 * velocity, decay: duration * 0.55 },
        { mult: 4.0, gain: 0.15 * velocity, decay: duration * 0.4 },
        { mult: 5.0, gain: 0.08 * velocity, decay: duration * 0.3 },
        { mult: 6.0, gain: 0.04 * velocity, decay: duration * 0.2 }
      ];

      harmonics.forEach(({ mult, gain: hGain, decay: hDecay }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // Fundamental uses sine, higher harmonics use blend with triangle for warmth
        osc.type = mult === 1 ? 'sine' : mult % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq * mult, now);

        // Attack & Exponential Decay (Acoustic Piano envelope)
        const attackTime = 0.003;
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.linearRampToValueAtTime(hGain * 0.4, now + attackTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + hDecay);

        osc.connect(gainNode);
        gainNode.connect(masterNode);

        osc.start(now);
        osc.stop(now + hDecay);
      });

      // Subtle hammer strike impulse for authentic touch
      const hammerOsc = ctx.createOscillator();
      const hammerGain = ctx.createGain();
      hammerOsc.type = 'triangle';
      hammerOsc.frequency.setValueAtTime(freq * 0.5, now);
      hammerGain.gain.setValueAtTime(0.2 * velocity, now);
      hammerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      hammerOsc.connect(hammerGain);
      hammerGain.connect(masterNode);

      hammerOsc.start(now);
      hammerOsc.stop(now + 0.04);

    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  /**
   * Speak English text using Web Speech API
   */
  public speakEnglish(text: string, onEnd?: () => void) {
    if (!this.isTtsEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    try {
      // Clean text from symbols or brackets
      const cleanText = text.replace(/\[.*?\]|\(.*?\)/g, '').trim();
      if (!cleanText) return;

      window.speechSynthesis.cancel(); // Cancel any ongoing speech

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = this.ttsRate;
      utterance.pitch = 1.05;
      utterance.volume = 0.9;

      if (this.ttsVoice) {
        utterance.voice = this.ttsVoice;
      }

      if (onEnd) {
        utterance.onend = onEnd;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }

  /**
   * Play a celebratory victory chord / chime
   */
  public playSuccessChime() {
    if (this.isMuted) return;
    const chords = ['C5', 'E5', 'G5', 'C6'];
    chords.forEach((note, idx) => {
      setTimeout(() => {
        this.playPianoNote(note, 2.2, 0.9);
      }, idx * 100);
    });
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setTtsEnabled(enabled: boolean) {
    this.isTtsEnabled = enabled;
  }

  public getTtsEnabled(): boolean {
    return this.isTtsEnabled;
  }

  public setTtsRate(rate: number) {
    this.ttsRate = Math.max(0.6, Math.min(1.5, rate));
  }
}

export const pianoAudio = new PianoAudioEngine();
