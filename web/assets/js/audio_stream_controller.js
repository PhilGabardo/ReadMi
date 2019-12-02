export default class AudioStreamController {
	constructor(audioContext) {
		this.audioContext = audioContext;
		this.sixteenthNoteSamples = [];
		this.sixteenthNoteSampleBufferSize =  4096;
	}



	startStream() {
		var that  = this;
		navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(
			function(stream) {
				var source = that.audioContext.createMediaStreamSource(stream);
				var processor = that.audioContext.createScriptProcessor(4096, 1, 1);
				var leftoverSamples = [];

				source.connect(processor);
				processor.connect(that.audioContext.destination);
				processor.onaudioprocess = function(e) {
					for (var i = 0; i < leftoverSamples.length; i++) {
						that.sixteenthNoteSamples.push(leftoverSamples[i])
					}
					that.sixteenthNoteSamples = leftoverSamples;
					// Do something with the data, i.e Convert this to WAV
					var channelData = e.inputBuffer.getChannelData(0);
					for (var i = 0; i < channelData.length; i++) {
						that.sixteenthNoteSamples.push(channelData[i])
					}
					leftoverSamples = that.sixteenthNoteSamples.slice(that.sixteenthNoteSampleBufferSize)
					that.sixteenthNoteSamples = that.sixteenthNoteSamples.slice(0, that.sixteenthNoteSampleBufferSize)
				};
			}
		)
	}

	getSamples() {
		return this.sixteenthNoteSamples;
	}

	getBufferSize() {
		return this.sixteenthNoteSampleBufferSize;
	}
}
