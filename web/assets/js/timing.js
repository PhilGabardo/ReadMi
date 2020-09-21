export default class Timing {
	static startTiming() {
		Timing.startTime = Date.now();
		Timing.pauseDelay = 0;
	}

	static pause() {
		Timing.pauseStart = Date.now()
	}

	static resume() {
		Timing.pauseDelay += Date.now() - Timing.pauseStart
	}

	static getPauseDelay() {
		return Timing.pauseDelay;
	}

	static getTimeSinceStart() {
		return Date.now() - Timing.startTime - this.pauseDelay
	}
}
