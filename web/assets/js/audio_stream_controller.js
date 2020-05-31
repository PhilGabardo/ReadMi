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
				let processor = that.audioContext.createScriptProcessor(4096, 1, 1);
				that.analyser = that.audioContext.createAnalyser();
				that.analyser.fftSize = 2048;
				that.buffer = new Uint8Array(that.analyser.fftSize);

				source.connect(processor);
				source.connect(that.analyser);
				processor.connect(that.audioContext.destination);
			}
		)
	}

	getByteTimeDomainData() {
		this.analyser.getByteTimeDomainData(this.buffer);
		console.log(this.buffer);
		return this.buffer;
	}

	getSampleRate() {
		return this.audioContext.sampleRate;
	}

	getSamples() {
		return this.sixteenthNoteSamples;
	}

	getBufferSize() {
		return this.sixteenthNoteSampleBufferSize;
	}
}
