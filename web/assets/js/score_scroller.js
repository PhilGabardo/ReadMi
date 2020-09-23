import Timing from './timing'

export default class ScoreScoller {
	constructor(beats_per_measure, beats_per_minute, stave_height, is_piano) {
		this.beats_per_measure = beats_per_measure;
		this.beats_per_minute = beats_per_minute;
		this.enabled = true
		this.stave_height = stave_height;
		this.is_piano = is_piano;
		this.setController();
	}

	start() {
		this.func = setInterval(this.scroll, 300, this);
	}

	pause() {
		window.clearInterval(this.func);
	}

	scroll(scroller) {
		if (!scroller.enabled) {
			return;
		}
		let timeInMs = Timing.getTimeSinceStart();
		let bps = scroller.beats_per_minute / 60;
		let beatsPassed = (timeInMs * bps) / (1000);
		let stavesPassed = Math.floor(beatsPassed / scroller.beats_per_measure);
		let percentageThroughStave = (beatsPassed % scroller.beats_per_measure) / scroller.beats_per_measure;
		scrollToNiceSpot(stavesPassed, percentageThroughStave, scroller.stave_height, scroller.is_piano)
	}

	resume() {
		this.start();
	}

	setController() {
		document.getElementById('scroller-controller').addEventListener('change', (event) => {
			if (event.target.checked) {
				this.enabled = true
			} else {
				this.enabled = false
			}
		})
	}
}

function scrollToNiceSpot(stavesPassed, percentageThroughStave, staveHeight, is_piano) {
	let stave_height = staveHeight;
	let height = Math.floor(stavesPassed / 3) * stave_height;
	let penalty = stave_height - (((stavesPassed % 3) + percentageThroughStave) / 3) * stave_height
	if (stavesPassed > 1) {
		penalty -= stave_height / 2;
	}
	window.scrollTo(0, height - penalty - 50)
}



