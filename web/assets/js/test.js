import bar_computer from './bar_computer.js';
import metronome from './metronome';
import ScoreRenderer from './score_renderer'
var beats_per_measure = beatsPerMeasure;
var header = document.getElementById("header")
header.innerHTML = '<h1 id="header" align="center" itemprop="headline">' + name + '</h1>'
var beat_value = beatValue;
var vf_bars = bar_computer.getVFBars(bars);
// Configure the rendering context.
var score_renderer = new ScoreRenderer(keySignature, bars, beats_per_measure, beat_value, name);
score_renderer.render();
//staff_rendering.createStaff(keySignature, vf_bars, beats_per_measure, beat_value);
window.scrollTo(0, 0);
//var beats_per_minute = prompt("Please enter a beats per minute", 60);;
function CustomPrompt(){
	this.render = function(){
		var dialogbox = document.getElementById('dialogbox');
		dialogbox.style.display = "block";
		var bpm_slider = document.getElementById('bpm');
		var bpm_label = document.getElementById('bpm_label');
		bpm_label.innerHTML = bpm_slider.value + " BPM";
		bpm_slider.oninput = function() {
			bpm_label.innerHTML = this.value + " BPM";
		}
	}
	this.cancel = function(){
		window.location.href = "/";
	}
	this.ok = function(){

	}
}
var prompt = new CustomPrompt();
prompt.render();
var start_song = document.getElementById('start_song');
start_song.onclick = function() {
	document.getElementById('dialogbox').style.display = "none";
	var bpm_slider = document.getElementById('bpm');
	var step_offset_select = document.getElementById('step_offset');
	var AudioContext = window.AudioContext          // Default
		|| window.webkitAudioContext;  // Safari and old versions of Chrome
	var audioContext = new AudioContext();
	metronome.playSound(audioContext, score_renderer, parseInt(bpm_slider.value), parseInt(step_offset_select.value), beats_per_measure, beats_per_measure * vf_bars.length, 1);
};
