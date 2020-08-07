export default class AudioStreamController {
	constructor(audioContext) {
		this.audioContext = audioContext;
		this.sixteenthNoteSamples = [];
		this.sixteenthNoteSampleBufferSize =  4096;
		this.userMediaPromise =  navigator.mediaDevices.getUserMedia({ audio: true, video: false });
		this.analyzer = null;
		this.buffer = null;
	}

	startStream() {
		let that  = this;
		this.userMediaPromise.then(
			function(stream) {
				let source = that.audioContext.createMediaStreamSource(stream);
				that.analyser = that.audioContext.createAnalyser();
				that.analyser.fftSize = 4096;
				that.buffer = new Uint8Array(that.analyser.fftSize);
				source.connect(that.analyser);
			}
		)
	}

	getByteTimeDomainData() {
		this.analyser.getByteTimeDomainData(this.buffer);
		return this.buffer;
	}

	getSampleRate() {
		return this.audioContext.sampleRate;
	}

	getSamples() {
		console.log(this.sixteenthNoteSamples);
		return this.sixteenthNoteSamples;
	}

	getBufferSize() {
		return this.sixteenthNoteSampleBufferSize;
	}
}
