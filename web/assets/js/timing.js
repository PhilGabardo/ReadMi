import AudioContext from './audio_context'

export default class Timing {
	startTiming() {
		this.audioCtx = AudioContext.getAudioContext()
		this.startTime = this.audioCtx.currentTime;
		this.pauseDelay = 0;
	}

	pause() {
		this.pauseStart = this.audioCtx.currentTime
	}

	resume() {
		this.pauseDelay += this.audioCtx.currentTime - this.pauseStart
	}

	getPauseDelay() {
		return this.pauseDelay * 1000;
	}

	getTimeSinceStart() {
		return (this.audioCtx.currentTime - this.startTime - this.pauseDelay) * 1000
	}
}
