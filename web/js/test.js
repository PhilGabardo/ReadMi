var beats_per_measure = beatsPerMeasure;
var header = document.getElementById("header")
var correctNotes = 0;
var totalNotes = 0;
header.innerHTML = '<h1 id="header" align="center" itemprop="headline">' + name + '</h1>'
var beat_value = beatValue;
var vf_bars = getVFBars(bars);
// Configure the rendering context.
createStaff(keySignature, vf_bars);
window.scrollTo(0, 0);
//var beats_per_minute = prompt("Please enter a beats per minute", 60);
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
};


navigator.mediaDevices.getUserMedia({ audio: true, video: false })
	.then(readStart);


function CustomPrompt(){
	this.render = function(){
		var dialogbox = document.getElementById('dialogbox');
		dialogbox.style.display = "block";
		var bpm_slider = document.getElementById('bpm');
		var bpm_label = document.getElementById('bpm_label');
		bpm_label.innerHTML = bpm_slider.value + " BPM";
		bpm_slider.oninput = function() {
			bpm_label.innerHTML = this.value + " BPM";
		};
	}
	this.cancel = function(){
		window.location.href = "/";
	}
	this.ok = function(){
		document.getElementById('dialogbox').style.display = "none";
		var bpm_slider = document.getElementById('bpm');
		var step_offset_select = document.getElementById('step_offset');
		playSound(audioContext, parseInt(bpm_slider.value), 1, beats_per_measure * vf_bars.length, parseInt(step_offset_select.value));
	}
}
var prompt = new CustomPrompt();
prompt.render();
