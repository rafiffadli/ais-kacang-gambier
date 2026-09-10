// Web Audio API Procedural Soundscape & Interactive FX Engine
// Fully self-contained, zero external asset dependencies, zero network latency.

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private riverGain: GainNode | null = null;
  private cricketsGain: GainNode | null = null;
  private isMuted: boolean = true;
  private isAmbientPlaying: boolean = false;
  private riverNode: AudioNode | null = null;
  private cricketInterval: ReturnType<typeof setInterval> | null = null;

  private initContext(): boolean {
    if (typeof window === "undefined") return false;
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return false;
      this.ctx = new AudioContextClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Sub-busses
      this.riverGain = this.ctx.createGain();
      this.riverGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      this.riverGain.connect(this.masterGain);

      this.cricketsGain = this.ctx.createGain();
      this.cricketsGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.cricketsGain.connect(this.masterGain);
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return true;
  }

  // --- Ambient Sarawak River Wave Generator ---
  private startRiverSynth() {
    if (!this.ctx || !this.riverGain) return;

    // Pink noise buffer for gentle flowing river water
    const bufferSize = this.ctx.sampleRate * 3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
      b6 = white * 0.115926;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    // Resonant low-pass filter to simulate water body
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(380, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.8, this.ctx.currentTime);

    // LFO to simulate gentle river waves lapping against the Kuching waterfront
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.22, this.ctx.currentTime); // ~4.5 second swell

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(160, this.ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    noise.connect(filter);
    filter.connect(this.riverGain);

    noise.start();
    lfo.start();
    this.riverNode = noise;
  }

  // --- Ambient Tropical Evening Crickets ---
  private startCricketsSynth() {
    if (!this.ctx || !this.cricketsGain) return;

    const chirp = () => {
      if (!this.ctx || !this.cricketsGain || this.isMuted) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      // High frequency cricket harmonic around 4800Hz
      osc.frequency.setValueAtTime(4600 + Math.random() * 400, now);

      gain.gain.setValueAtTime(0, now);
      // Staccato micro-pulses
      for (let j = 0; j < 3; j++) {
        const t = now + j * 0.045;
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.035);
      }

      osc.connect(gain);
      gain.connect(this.cricketsGain);

      osc.start(now);
      osc.stop(now + 0.2);
    };

    // Random natural chirp rhythm
    this.cricketInterval = setInterval(() => {
      if (Math.random() > 0.4) {
        chirp();
      }
    }, 1800);
  }

  // --- Public Controls ---
  public toggleAmbient(): boolean {
    if (!this.initContext() || !this.ctx || !this.masterGain) return false;

    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      if (!this.isAmbientPlaying) {
        this.startRiverSynth();
        this.startCricketsSynth();
        this.isAmbientPlaying = true;
      }
      this.masterGain.gain.setTargetAtTime(0.4, this.ctx.currentTime, 0.4);
    } else {
      this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.4);
    }

    return !this.isMuted;
  }

  public getIsPlaying(): boolean {
    return !this.isMuted && this.isAmbientPlaying;
  }

  public setVolume(val: number) {
    if (!this.masterGain || !this.ctx) return;
    const clamped = Math.max(0, Math.min(1, val));
    this.masterGain.gain.setTargetAtTime(clamped * 0.5, this.ctx.currentTime, 0.1);
  }

  // --- Interactive Sound Effects ---

  // 1. Viscous Gula Apong Syrup Drizzle Sound
  public playSyrupDrizzle() {
    if (!this.initContext() || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    // Slide down from 880Hz to 440Hz with smooth viscous envelope
    osc.frequency.setValueAtTime(740, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.35);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.36);
  }

  // 2. Ice Razor Shaving Rasp (feather-light crystal snow scraping)
  public playIceShave() {
    if (!this.initContext() || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.28);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.12;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.setValueAtTime(2400, now);
    bandpass.frequency.exponentialRampToValueAtTime(3600, now + 0.28);
    bandpass.Q.setValueAtTime(3.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    noise.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  // Quick river lap swell for timeline triggers
  public playRiverWater() {
    if (!this.initContext() || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.8);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.08;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, now);
    filter.frequency.linearRampToValueAtTime(580, now + 0.4);
    filter.frequency.linearRampToValueAtTime(280, now + 0.8);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);
  }

  // 3. Topping Plop / Bounce (Adzuki beans, attap chee, grass jelly)
  public playToppingDrop(type: "squishy" | "crunch" | "sweet" | "durian") {
    if (!this.initContext() || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    if (type === "crunch") {
      // Peanut / Biscoff crunch sound
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.13);
    } else if (type === "durian") {
      // Rich deep creamy plop
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(95, now + 0.22);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.23);
    } else {
      // Jelly / Red bean plop
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.16);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.17);
    }
  }

  // 4. Vintage Vinyl Crackle (for Bourdain's Corner)
  public playVintageClick() {
    if (!this.initContext() || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(120, now);
    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.06);
  }
}

export const soundscape = new SoundscapeEngine();
