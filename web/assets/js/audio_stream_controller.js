import AudioContext from './audio_context'

export default class AudioStreamController {
	constructor(stream) {
		this.stream = stream;
		this.analyser = null;
		this.processor = null;
		this.buffer = null;
	}

	startStream() {
		let that  = this;
		let audioContext = AudioContext.getAudioContext();
		let source = audioContext.createMediaStreamSource(this.stream);
		that.analyser = audioContext.createAnalyser();
		that.analyser.fftSize = 2048;
		that.buffer = new Uint8Array(that.analyser.fftSize);
		source.connect(that.analyser);
	}

	getByteTimeDomainData() {
		this.analyser.getByteTimeDomainData(this.buffer);
		return this.buffer;
	}

	getSampleRate() {
		return AudioContext.getAudioContext().sampleRate;
	}
}
