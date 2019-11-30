var beats_per_measure = beatsPerMeasure;
var header = document.getElementById("header")
var correctNotes = 0;
var totalNotes = 0;
header.innerHTML = '<h1 id="header" align="center" itemprop="headline">' + name + '</h1>'
var beat_value = beatValue;
var keySig = keySignature;
var stepOffset = 9;
var vf_bars = getVFBars(bars);
// Configure the rendering context.
createStaff(keySig, vf_bars);
var beats_per_minute = prompt("Please enter a beats per minute", 60);
var AudioContext = window.AudioContext          // Default
	|| window.webkitAudioContext;  // Safari and old versions of Chrome
var audioContext = new AudioContext();
var sixteenthNoteSamples = [];
var sixteenthNoteSampleBufferSize =  4096;

var readStart = function(stream) {
	var source = audioContext.createMediaStreamSource(stream);
	var processor = audioContext.createScriptProcessor(4096, 1, 1);
	var leftoverSamples = [];

	source.connect(processor);
	processor.connect(audioContext.destination);
	processor.onaudioprocess = function(e) {
		for (var i = 0; i < leftoverSamples.length; i++) {
			sixteenthNoteSamples.push(leftoverSamples[i])
		}
		sixteenthNoteSamples = leftoverSamples;
		// Do something with the data, i.e Convert this to WAV
		var channelData = e.inputBuffer.getChannelData(0);
		for (var i = 0; i < channelData.length; i++) {
			sixteenthNoteSamples.push(channelData[i])
		}
		leftoverSamples = sixteenthNoteSamples.slice(sixteenthNoteSampleBufferSize)
		sixteenthNoteSamples = sixteenthNoteSamples.slice(0, sixteenthNoteSampleBufferSize)
	};
	window.scrollTo(0, 0);
	playSound(audioContext, beats_per_minute, 1, beats_per_measure * vf_bars.length);
};

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
	.then(readStart);
