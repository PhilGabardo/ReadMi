import AudioContext from './audio_context'

export default class AudioStreamController {
	constructor(stream) {
		this.stream = stream;
		this.analyser = null;
		this.processor = null;
		this.buffer = null;
		this.audio_context = null;
		this.audio_context_initialization_time = null;
	}

	startStream() {
		let that  = this;
		let audioContext = AudioContext.getAudioContext();
		this.audio_context_initialization_time = Date.now()
		this.audio_context = audioContext;
		let source = audioContext.createMediaStreamSource(this.stream);
		that.analyser = audioContext.createAnalyser();
		that.analyser.fftSize = 2048;
		that.buffer = new Uint8Array(that.analyser.fftSize);
		source.connect(that.analyser);
	}

	getPerformanceTime() {
		return this.audio_context.getOutputTimestamp().performanceTime;
	}

	getContextTime() {
		return this.audio_context.getOutputTimestamp().contextTime;
	}

	getTimeSinceInit() {
		return Date.now() - this.audio_context_initialization_time;
	}


	getByteTimeDomainData() {
		this.analyser.getByteTimeDomainData(this.buffer);
		return this.buffer;
	}

	getSampleRate() {
		return AudioContext.getAudioContext().sampleRate;
	}
}
