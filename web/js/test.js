var beats_per_minute = prompt("Please enter a beats per minute", 60);
var beats_per_measure = beatsPerMeasure;
var header = document.getElementById("header")
header.innerHTML = '<h1 id="header" align="center" itemprop="headline">' + name + '</h1>'
var beat_value = beatValue;
var keySig = keySignature;
var bars = getBars(notes);
var audioContext = new AudioContext();
// Configure the rendering context.
createStaff(keySig, bars);
var currentNote = [];

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
