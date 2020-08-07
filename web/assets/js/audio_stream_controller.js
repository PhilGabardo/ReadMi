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
				that.processor.onaudioprocess = function(e) {
					// Do something with the data, e.g. convert it to WAV
					console.log(e.inputBuffer.getChannelData(that.buffer));
				};
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
