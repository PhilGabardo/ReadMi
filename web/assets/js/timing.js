export default class Timing {
	startTiming() {
		this.startTime = Date.now();
		this.pauseDelay = 0;
	}

	pause() {
		this.pauseStart = Date.now()
	}

	resume() {
		this.pauseDelay += Date.now() - this.pauseStart
	}

	getPauseDelay() {
		return this.pauseDelay;
	}

	getTimeSinceStart() {
		return Date.now() - this.startTime - this.pauseDelay
	}
}
