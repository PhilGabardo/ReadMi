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
import ScoreScroller from './score_scroller'
import swal2 from 'sweetalert2';


if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices.getUserMedia({audio: {
		echoCancellation: false,
		//noiseSuppression: true,
		autoGainControl: true,
		sampleRate: 48000,
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
		//noiseSuppression: true,
		autoGainControl: true,
		sampleRate: 48000,
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
	header.innerHTML = '<h1 id="header" align="center" itemprop="headline">' + name + '</h1>'
	let beat_value = beatValue;
	let vf_bars = bar_computer.getVFBars(bars);
	let keySigInfo = KeySignatures.getKeySignatureInfo(keySignature);
	let keySigNotesCount = Object.keys(keySigInfo.notes).length;
	let keySigStaffWidth = 80 + keySigNotesCount * 10;
	let boo = document.getElementById("boo");
	let renderer = new VexFlow.Flow.Renderer(boo, VexFlow.Flow.Renderer.Backends.SVG);
	let staveHeight = isPiano ? 300 * document.getElementById("boo").offsetWidth / 1280 : 150 * document.getElementById("boo").offsetWidth / 1280;
	renderer.resize(boo.offsetWidth, staveHeight * (vf_bars.length / 3 + 1));
	let staveWidth = (boo.offsetWidth * 0.97 - keySigStaffWidth) / 3.0
	let renderer_context = renderer.getContext();
	let note_scheduler = new NoteScheduler(vf_bars, beat_value, beats_per_measure, 0);
	let score_renderer = new ScoreRenderer(renderer_context, staveWidth, keySignature, bars, beats_per_measure, beat_value, name, note_scheduler.getScheduledNotes(), isPiano);
	if (isPiano) {
		score_renderer.renderForPiano();
	} else {
		score_renderer.render();
	}
	window.scrollTo(0, 0);

	swal2.fire({
		title: 'Select your BPM',
		html: `<input type="number" value="60" step="1" class="swal2-input" id="bpm">`,
		input: 'range',
		inputAttributes: {
			min: 10,
			max: 120,
			step: 1
		},
		confirmButtonText: 'Start!',
		onOpen: () => {
			const inputRange = swal2.getInput()
			const inputNumber = swal2.getContent().querySelector('#bpm')

			// remove default output
			inputRange.nextElementSibling.style.display = 'none'
			inputRange.style.width = '100%'

			// sync input[type=number] with input[type=range]
			inputRange.addEventListener('input', () => {
				inputNumber.value = inputRange.value
			})

			// sync input[type=range] with input[type=number]
			inputNumber.addEventListener('change', () => {
				inputRange.value = inputNumber.value
			})
		}
	}).then((result) => {
		audioStreamController.startStream();
		let bpm_slider = document.getElementById('bpm');
		let metronome = new ScheduledMetronome(bpm_slider.value, beats_per_measure * vf_bars.length)
		let songPlayer = new SongPlayer(note_scheduler.getScheduledNotes(), instrument, bpm_slider.value, beats_per_measure);
		songPlayer.setController();
		let timing_bar = new TimingBar(renderer_context, staveWidth, staveHeight, beats_per_measure, bpm_slider.value, keySigStaffWidth);
		let note_scheduler_2 = new NoteScheduler(vf_bars, beat_value, beats_per_measure, bpm_slider.value);
		let note_feedback = new NoteFeedbackV2(renderer_context, note_scheduler_2, audioStreamController, beats_per_measure, bpm_slider.value, instrument)
		let score_scroller = new ScoreScroller(beats_per_measure, bpm_slider.value, staveHeight, isPiano)
		let session_controller = new SessionController(audioStreamController, note_feedback, metronome, songPlayer, timing_bar, score_scroller, beats_per_measure, bpm_slider.value, bars.length, isDemo, songId, bpmRequirement);
		session_controller.start();
	})

}
