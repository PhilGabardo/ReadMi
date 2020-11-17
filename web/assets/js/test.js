import VexFlow from 'vexflow';
import bar_computer from './bar_computer.js';
import SessionController from './session_controller';
import ScoreRenderer from './score_renderer'
import AudioStreamController from './audio_stream_controller'
import ScheduledMetronome from './metronome'
import SongPlayer from './song_player'
import NoteScheduler from './note_scheduler'
import TimingBar from './timing_bar'
import KeySignatures from './key_signatures'
import NoteFeedbackV2 from './note_feedback_v2'
import swal2 from 'sweetalert2';
import NoteHinter from './note_hinter'
import StaveUpdater from './non_piano_stave_updater'

window.onorientationchange = function() {
	var orientation = window.orientation;
	switch(orientation) {
		case 0:
		case 90:
		case -90: window.location.reload();
			break; }
};

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices.getUserMedia({audio: {
		echoCancellation: false,
		noiseSuppression: false,
		autoGainControl: false,
		sampleSize: 16,
		volume: 1.0,
		channelCount: 2,
		latency: 0,
	}})
		.then(function(stream) {
			startSession(getAudioStreamController(stream))
		})
		// Error callback
		.catch(function(err) {
			console.log(err);
			alert("ReadMi does not have access to your microphone.");
		})
} else if (navigator.getUserMedia) {
	navigator.getUserMedia({audio: {
		echoCancellation: false,
		noiseSuppression: false,
		autoGainControl: false,
		sampleSize: 16,
		volume: 1.0,
		channelCount: 2,
		latency: 0,
	}})
		.then(function(stream) {
			startSession(getAudioStreamController(stream))
		})
		// Error callback
		.catch(function(err) {
			console.log(err);
			alert("ReadMi does not have access to your microphone.");
		})
} else {
	alert("ReadMi is not supported on this browser.");
}


function getAudioStreamController(stream) {
	return new AudioStreamController(stream);
}

function startSession(audioStreamController) {
	let isPiano = instrument == 'piano';
	let beats_per_measure = beatsPerMeasure;
	let header = document.getElementById("header")
	header.innerHTML = '<h1 id="_header" align="center" itemprop="headline">' + name + '</h1>'
	let beat_value = beatValue;
	let vf_bars = bar_computer.getVFBars(bars);
	let keySigInfo = KeySignatures.getKeySignatureInfo(keySignature);
	let keySigNotesCount = Object.keys(keySigInfo.notes).length;
	let keySigStaffWidth = 80 + keySigNotesCount * 10;
	let boo = document.getElementById("boo");
	let renderer = new VexFlow.Flow.Renderer(boo, VexFlow.Flow.Renderer.Backends.SVG);
	let staveHeight = isPiano ? 300 * document.getElementById("boo").offsetWidth / 1280 : 150 * document.getElementById("boo").offsetWidth / 1280;
	renderer.resize(300, 300);
	let staveWidth = (boo.offsetWidth * 0.97 - keySigStaffWidth) / 3.0
	let renderer_context = renderer.getContext();
	let note_scheduler = new NoteScheduler(vf_bars, beat_value, beats_per_measure, 0);

	swal2.fire('Notes will move across the screen towards a rectangular box. Play the note when it reaches the box.' +
		'If you play the note correctly, it will turn green. Otherwise, it will turn red.').then((result) => {
		swal2.fire({
			html: '<label for="my-input">Enter BPM (Beats Per Minute)</label>',
			title: 'How fast do you want to play?',
			input: 'range',
			inputLabel: 'Your age',
			inputAttributes: {
				min: 10,
				max: 120,
				step: 1
			},
			inputValue: 60,
			confirmButtonText: 'Start!',
		}).then((result) => {
			//let bpm_slider = document.getElementById('bpm');
			let bpm_value = result.value;
			let metronome = new ScheduledMetronome(bpm_value, beats_per_measure * vf_bars.length)
			let stave_updater = new StaveUpdater(renderer_context, staveWidth, keySignature, bars, beats_per_measure, beat_value, name, note_scheduler.getScheduledNotes(), bpm_value)
			if (isPiano) {
				stave_updater.renderForPiano()
			} else {
				stave_updater.renderForNonPiano()
			}
			let songPlayer = new SongPlayer(note_scheduler.getScheduledNotes(), instrument, bpm_value, beats_per_measure);
			songPlayer.setController();
			let note_hinter = NoteHinter.getHinter(instrument, bpm_value, beats_per_measure, note_scheduler.getScheduledNotes(), keySignature);
			note_hinter.setController();
			let timing_bar = new TimingBar(renderer_context, staveWidth, staveHeight, beats_per_measure, bpm_value, keySigStaffWidth);
			let note_scheduler_2 = new NoteScheduler(vf_bars, beat_value, beats_per_measure, bpm_value);
			let note_feedback = new NoteFeedbackV2(renderer_context, note_scheduler_2, audioStreamController, beats_per_measure, bpm_value, instrument)
			let session_controller = new SessionController(note_feedback, metronome, songPlayer, timing_bar, beats_per_measure, bpm_value, bars.length, isDemo, songId, bpmRequirement, note_hinter, stave_updater);
			session_controller.start();
		})
	});
}
