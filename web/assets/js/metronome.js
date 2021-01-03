import AudioContext from './audio_context'

/*
 * Scheduling is done by prescheduling all the audio events, and
 * letting the WebAudio scheduler actually do the scheduling.
 */
export default class ScheduledMetronome {
	constructor(tempo, ticks) {
		this.tempo = tempo;
		this.audioCtx = AudioContext.getAudioContext();
		this.tick = null;
		this.tickVolume = null;
		this.soundHz = 1000;
		this.scheduledTicks = ticks;
		this.playingState = true;
		this.initAudio();
		this.setController();
		this.initialization_time = Date.now();
	}

	reset(tempo, ticks){
		this.tempo = tempo;
		this.ticks = ticks;
		this.tickVolume.gain.cancelScheduledValues(0);
		this.resume();
	}

	initAudio() {
		this.tick = this.audioCtx.createOscillator();
		this.tickVolume = this.audioCtx.createGain();

		this.tick.type = 'sine';
		this.tick.frequency.value = this.soundHz;
		this.tickVolume.gain.value = 0;

		this.tick.connect(this.tickVolume);
		this.tickVolume.connect(this.audioCtx.destination);
		this.tick.start(0);  // No offset, start immediately.
	}

	click(metronome) {
		const time = (Date.now() - metronome.initialization_time) / 1000;
		metronome.clickAtTime(Math.floor(time));
	}

	start() {
		const timeoutDuration = (60 / this.tempo);

		let now = (Date.now() - this.initialization_time) / 1000;

		// Schedule all the clicks ahead.
		for (let i = 0; i < this.scheduledTicks; i++) {
			this.clickAtTime(Math.floor(now), i);
			now += timeoutDuration;
		}
	}

	setController() {
		document.getElementById('metronome-controller').addEventListener('change', (event) => {
			if (event.target.checked) {
				this.tickVolume.connect(this.audioCtx.destination);
			} else {
				this.tickVolume.disconnect(this.audioCtx.destination);
			}
		})
	}

	clickAtTime(time) {
		// Silence the click.
		this.tickVolume.gain.cancelScheduledValues(time);
		this.tickVolume.gain.setValueAtTime(0, time);

		// Audible click sound.
		this.tickVolume.gain.linearRampToValueAtTime(1, time + .001);
		this.tickVolume.gain.linearRampToValueAtTime(0, time + .001 + .01);
	}

	pause() {
		this.audioCtx.suspend();
	}

	resume() {
		this.audioCtx.resume();
	}
}
