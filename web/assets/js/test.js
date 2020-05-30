import VexFlow from 'vexflow';
import bar_computer from './bar_computer.js';
import SessionController from './session_controller';
import ScoreRenderer from './score_renderer'
import AudioStreamController from './audio_stream_controller'
import selectize from 'selectize';
import ScheduledMetronome from './metronome'
import SongPlayer from './song_player'
import NoteScheduler from './note_scheduler'
import TimingBar from './timing_bar'
import KeySignatures from './key_signatures'
import NoteFeedback from './note_feedback'
import ScoreScroller from './score_scroller'
var beats_per_measure = beatsPerMeasure;
var header = document.getElementById("header")
header.innerHTML = '<h1 id="header" align="center" itemprop="headline">' + name + '</h1>'
var beat_value = beatValue;
var vf_bars = bar_computer.getVFBars(bars);
var keySigInfo = KeySignatures.getKeySignatureInfo(keySignature);
var keySigNotesCount = Object.keys(keySigInfo.notes).length;
var keySigStaffWidth = 80 + keySigNotesCount * 10;
var renderer = new VexFlow.Flow.Renderer(document.getElementById("boo"), VexFlow.Flow.Renderer.Backends.SVG);
renderer.resize(window.innerWidth * 0.7, 3000);
var staveWidth = (window.innerWidth * 0.68 - keySigStaffWidth) / 3.0
var renderer_context = renderer.getContext();
var note_scheduler = new NoteScheduler(vf_bars, beat_value, beats_per_measure);
var score_renderer = new ScoreRenderer(renderer_context, staveWidth, keySignature, bars, beats_per_measure, beat_value, name, note_scheduler.getScheduledNotes());
score_renderer.render();
window.scrollTo(0, 0);
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
}
$('#instrument').selectize({'max_items': 1});
var prompt = new CustomPrompt();
prompt.render();
var start_song = document.getElementById('start_song');
start_song.onclick = function() {
	var AudioContext = (window.AudioContext ||
	window.webkitAudioContext ||
	window.mozAudioContext ||
	window.oAudioContext ||
	window.msAudioContext); // Safari and old versions of Chrome
	var audioContext = new AudioContext();
	var audioStreamController = new AudioStreamController(audioContext);
	audioStreamController.startStream();
	document.getElementById('dialogbox').style.display = "none";
	var bpm_slider = document.getElementById('bpm');
	var instrument = document.getElementById('instrument').value;
	var metronome = new ScheduledMetronome(bpm_slider.value, beats_per_measure * vf_bars.length)
	var songPlayer = new SongPlayer(note_scheduler.getScheduledNotes(), instrument, bpm_slider.value, beats_per_measure);
	var timing_bar = new TimingBar(renderer_context, staveWidth, beats_per_measure, bpm_slider.value, keySigStaffWidth);
	var note_feedback = new NoteFeedback(renderer_context, note_scheduler.getScheduledNotes(), audioStreamController, beats_per_measure, bpm_slider.value, instrument)
	var score_scroller = new ScoreScroller(beats_per_measure, bpm_slider.value)
	var session_controller = new SessionController(audioStreamController, note_feedback, metronome, songPlayer, timing_bar, score_scroller, beats_per_measure, bpm_slider.value, bars.length);
	session_controller.start();
	let pause_button = document.getElementById('pause');
	pause_button.onclick = function() {
		session_controller.invertState();
	}
};
var end_song = document.getElementById('cancel_song');
end_song.onclick = function() {
	window.location.href = "/";
}
