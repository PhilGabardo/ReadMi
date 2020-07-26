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

if (navigator.userAgent.indexOf("Chrome") != -1) {
	navigator.permissions.query({name:'microphone'}).then(function(result) {
		if (result.state == 'granted') {
			startSession(getAudioStreamController())
		} else if (result.state == 'prompt') {
			getAudioStreamController();
		} else if (result.state == 'denied') {
			alert("ReadMiMusic does have permission to access your microphone. Please visit https://support.google.com/chrome/answer/2693767 to " +
				"determine how to give ReadMiMusic microphone access, and then refresh the page.");
		}
		result.onchange = function() {
			if (result.state == 'granted') {
				startSession(getAudioStreamController())
			} else if (result.state == 'denied') {
				alert("ReadMiMusic does have permission to access your microphone. Please visit https://support.google.com/chrome/answer/2693767 to " +
					"determine how to give ReadMiMusic microphone access, and then refresh the page.");
			}
		};
	});
} else {
	alert("ReadMiMusic is only currently supported on Google Chrome.");
}

function getAudioStreamController() {
	let AudioContext = (window.AudioContext ||
	window.webkitAudioContext ||
	window.mozAudioContext ||
	window.oAudioContext ||
	window.msAudioContext); // Safari and old versions of Chrome
	let audioContext = new AudioContext();
	return new AudioStreamController(audioContext);
}

function startSession(audioStreamController) {
	let beats_per_measure = beatsPerMeasure;
	let header = document.getElementById("header")
	header.innerHTML = '<h1 id="header" align="center" itemprop="headline">' + name + '</h1>'
	let beat_value = beatValue;
	let vf_bars = bar_computer.getVFBars(bars);
	let keySigInfo = KeySignatures.getKeySignatureInfo(keySignature);
	let keySigNotesCount = Object.keys(keySigInfo.notes).length;
	let keySigStaffWidth = 80 + keySigNotesCount * 10;
	let boo = document.getElementById("boo");
	let renderer = new VexFlow.Flow.Renderer(boo, VexFlow.Flow.Renderer.Backends.SVG);
	renderer.resize(boo.offsetWidth, (150 * boo.offsetWidth / 1280) * (vf_bars.length / 3 + 1));
	let staveWidth = (boo.offsetWidth * 0.97 - keySigStaffWidth) / 3.0
	let renderer_context = renderer.getContext();
	let note_scheduler = new NoteScheduler(vf_bars, beat_value, beats_per_measure);
	let score_renderer = new ScoreRenderer(renderer_context, staveWidth, keySignature, bars, beats_per_measure, beat_value, name, note_scheduler.getScheduledNotes());
	score_renderer.render();
	window.scrollTo(0, 0);
	function CustomPrompt(){
		this.render = function(){
			let dialogbox = document.getElementById('dialogbox');
			dialogbox.style.display = "block";
			let bpm_slider = document.getElementById('bpm');
			let bpm_label = document.getElementById('bpm_label');
			bpm_label.innerHTML = bpm_slider.value + " BPM";
			bpm_slider.oninput = function() {
				bpm_label.innerHTML = this.value + " BPM";
			}
		}
	}
	$('#instrument').selectize({'max_items': 1});
	let prompt = new CustomPrompt();
	prompt.render();
	let start_song = document.getElementById('start_song');
	start_song.onclick = function() {
		audioStreamController.startStream();
		document.getElementById('dialogbox').style.display = "none";
		let bpm_slider = document.getElementById('bpm');
		let instrument = document.getElementById('instrument').value;
		let metronome = new ScheduledMetronome(bpm_slider.value, beats_per_measure * vf_bars.length)
		let songPlayer = new SongPlayer(note_scheduler.getScheduledNotes(), instrument, bpm_slider.value, beats_per_measure);
		let timing_bar = new TimingBar(renderer_context, staveWidth, beats_per_measure, bpm_slider.value, keySigStaffWidth);
		let note_feedback = new NoteFeedback(renderer_context, note_scheduler.getScheduledNotes(), audioStreamController, beats_per_measure, bpm_slider.value, instrument)
		let score_scroller = new ScoreScroller(beats_per_measure, bpm_slider.value)
		let session_controller = new SessionController(audioStreamController, note_feedback, metronome, songPlayer, timing_bar, score_scroller, beats_per_measure, bpm_slider.value, bars.length);
		session_controller.start();
	};

}
