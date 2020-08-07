export default class AudioStreamController {
	constructor(audioContext) {
		this.audioContext = audioContext;
		this.sixteenthNoteSamples = [];
		this.sixteenthNoteSampleBufferSize =  2048;
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
				that.analyser.fftSize = 2048;
				that.buffer = new Uint8Array(that.analyser.fftSize);
				source.connect(that.analyser);
			}
		)
	}

	getByteTimeDomainData() {
		var t0 = performance.now()
		this.analyser.getByteTimeDomainData(this.buffer);
		console.log(performance.now() - t0);
		return this.buffer;
	}

	getSampleRate() {
		return this.audioContext.sampleRate;
	}
}
