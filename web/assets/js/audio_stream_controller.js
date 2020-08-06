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
				console.log(source);
				let processor = that.audioContext.createScriptProcessor(4096, 1, 1);
				console.log(processor)
				that.analyser = that.audioContext.createAnalyser();
				console.log(that.analyser)
				that.analyser.fftSize = 2048;
				that.buffer = new Uint8Array(that.analyser.fftSize);

				source.connect(processor);
				source.connect(that.analyser);
				console.log(that.audioContext.destination);
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
		console.log(this.sixteenthNoteSamples);
		return this.sixteenthNoteSamples;
	}

	getBufferSize() {
		return this.sixteenthNoteSampleBufferSize;
	}
}
