export default class AudioStreamController {
	constructor(audioContext) {
		this.audioContext = audioContext;
		this.userMediaPromise =  navigator.mediaDevices.getUserMedia({ audio: true, video: false });
		this.analyzer = null;
		this.processor = null;
		this.buffer = null;
	}

	startStream() {
		let that  = this;
		this.userMediaPromise.then(
			function(stream) {
				let source = that.audioContext.createMediaStreamSource(stream);
				that.processor = that.audioContext.createScriptProcessor(1024, 1, 1);
				source.connect(that.processor);
				that.processor.connect(that.audioContext.destination);
				that.analyser = that.audioContext.createAnalyser();
				that.analyser.fftSize = 2048;
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
}
