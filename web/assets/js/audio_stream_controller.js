export default class AudioStreamController {
	constructor(audioContext) {
		this.audioContext = audioContext;
		this.userMediaPromise =  navigator.mediaDevices.getUserMedia({ audio: true, video: false });
		this.processor = null;
		this.buffer = null;
	}

	startStream() {
		let that  = this;
		this.userMediaPromise.then(
			function(stream) {
				let source = that.audioContext.createMediaStreamSource(stream);
				that.processor = that.audioContext.createScriptProcessor(4096, 1, 1);
				source.connect(that.processor);
				that.processor.connect(that.audioContext.destination);
				that.processor.onaudioprocess = function(e) {
					// Do something with the data, i.e Convert this to WAV
					that.buffer = e.inputBuffer.getChannelData(0)
				};
			}
		)
	}

	getAudioStream() {
		return this.buffer;
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


/*
var readStart = function(stream) {
	var source = audioContext.createMediaStreamSource(stream);
	var processor = audioContext.createScriptProcessor(4096, 1, 1);
	var count = 0;
	var sixteenthNoteSampleBufferSize =  4096;
	var sixteenthNoteSamples = [];
	var leftoverSamples = [];

	source.connect(processor);
	processor.connect(audioContext.destination);
	processor.onaudioprocess = function(e) {
		count += 4096;
		count = count % 44100;
		// Do something with the data, i.e Convert this to WAV
		var channelData = e.inputBuffer.getChannelData(0);
		for (var i = 0; i < channelData.length; i++) {
			sixteenthNoteSamples.push(channelData[i])
		}
		if (sixteenthNoteSamples.length < sixteenthNoteSampleBufferSize) {
			currentNote = [];
			return;
		}
		leftoverSamples = sixteenthNoteSamples.slice(sixteenthNoteSampleBufferSize)
		sixteenthNoteSamples = sixteenthNoteSamples.slice(0, sixteenthNoteSampleBufferSize)
		var max = 0;
		for (var i = 0; i < sixteenthNoteSamples.length; i++) {
			max = Math.max(max, Math.abs(sixteenthNoteSamples[i]))
		}
		if (max > 0.1) {
			freq = estimateFrequency(sixteenthNoteSamples);
			if (freq != -1) {
				currentNote = estimateNote(freq);
			} else {
				currentNote = [];
			}
		} else {
			currentNote = [];
		}
		sixteenthNoteSamples = leftoverSamples;
	};
	playSound(audioContext, beats_per_minute, 1);
};

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
	.then(readStart);
*/
