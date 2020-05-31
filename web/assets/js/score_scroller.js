import Timing from './timing'

export default class ScoreScoller {
	constructor(beats_per_measure, beats_per_minute) {
		this.beats_per_measure = beats_per_measure;
		this.beats_per_minute = beats_per_minute;
		this.enabled = true
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
		scrollToNiceSpot(stavesPassed, percentageThroughStave)
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

function scrollToNiceSpot(stavesPassed, percentageThroughStave) {
	if (stavesPassed < 3) {
		window.scrollTo(0, 0);
		return
	}
	let stave_height = getStaveHeight();
	let height = Math.floor(stavesPassed / 3) * stave_height;
	let penalty = stave_height - (((stavesPassed % 3) + percentageThroughStave) / 3) * stave_height
	window.scrollTo(0, height - penalty)
}


function getScalingFactor() {
	return window.innerWidth / 1280;
}

function getStaveHeight() {
	return 150 * getScalingFactor();
}


