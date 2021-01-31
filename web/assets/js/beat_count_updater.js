import Timing from './timing'

export default class BeatCountUpdater {
	constructor(total_beats, bpm) {
		this.total_beats = total_beats;
		this.bpm = bpm;
		this.timing = new Timing();
		this.text_div = document.getElementById('beat_count')
	}

	start() {
		this.timing.startTiming();
		this.func = setInterval(this.updateCount, 100, this);
	}

	updateCount(beatCountUpdater) {
		let timeInMs = beatCountUpdater.timing.getTimeSinceStart();
		let bps = beatCountUpdater.bpm / 60;
		let beatsPassed = Math.floor((timeInMs * bps) / (1000));
		let beatsRemaining = beatCountUpdater.total_beats - beatsPassed;
		beatCountUpdater.text_div.innerHTML = beatsRemaining + ' beats remaining';

	}

	pause() {
		this.timing.pause();
		window.clearInterval(this.func);
	}

	resume() {
		this.timing.resume();
		this.func = setInterval(this.updateCount, 100, this);
	}
}
