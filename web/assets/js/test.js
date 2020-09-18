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
import NoteFeedback from './note_feedback'
import ScoreScroller from './score_scroller'

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices.getUserMedia({audio: {
		echoCancellation: false,
		//noiseSuppression: false,
		autoGainControl: true,
		sampleRate: 48000,
		 sampleSize: 16,
		 volume: 1.0,
		 channelCount: 2,
		 latency: 0,
	}})
		.then(function(stream) {
			console.log(stream);
			let localPeerConnection = new RTCPeerConnection();
			window.localPeerConnection = localPeerConnection;
			stream.getTracks().forEach(track => localPeerConnection.addTrack(track, stream));
			localPeerConnection.onnegotiationneeded = function() {
				try {
					console.log("TEST");
					localPeerConnection.createOffer({offerToReceiveAudio: 1})
						.then(function (offer) {
							console.log(offer.sdp);
							return offer.sdp.replace('\na=fmtp:111 minptime=10;useinbandfec=1', '');
						}).then(function (sdp) {
						localPeerConnection.setLocalDescription({type: 'offer', sdp: 'v=0\no=- 6674842143219411319 2 IN IP4 127.0.0.1\ns=-\nt=0 0\n'})
						startSession(getAudioStreamController(localPeerConnection.getLocalStreams()[0]))
					});
				} catch (e) {
					console.log(e);
				}
			};;
		})
		// Error callback
		.catch(function(err) {
			console.log(err);
			alert("ReadMi does not have access to your microphone.");
		})
} else {
	console.log(navigator.getUserMedia)
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
	let note_scheduler = new NoteScheduler(vf_bars, beat_value, beats_per_measure);
	let score_renderer = new ScoreRenderer(renderer_context, staveWidth, keySignature, bars, beats_per_measure, beat_value, name, note_scheduler.getScheduledNotes(), isPiano);
	if (isPiano) {
		score_renderer.renderForPiano();
	} else {
		score_renderer.render();
	}
	window.scrollTo(0, 0);

	function CustomPrompt(){

		this.render = function(){
			let dialogbox = document.getElementById('dialogbox');
			dialogbox.style.display = "block";
			dialogbox.style.left = 0.35 * boo.offsetWidth + "px";
			dialogbox.style.width = 0.3 * boo.offsetWidth;
			let bpm_slider = document.getElementById('bpm');
			let bpm_label = document.getElementById('bpm_label');
			bpm_label.innerHTML = bpm_slider.value + " BPM";
			let metronome = new ScheduledMetronome(10, 30);
			let future_metronome_click = null;
			bpm_slider.onmousedown = function() {
				bpm_label.innerHTML = this.value + " BPM";
				metronome.reset(this.value, 30)
				metronome.start()
			}
			bpm_slider.oninput = function() {
				if (future_metronome_click) {
					clearTimeout(future_metronome_click);
				}
				let bpm_value = this.value;
				bpm_label.innerHTML = bpm_value + " BPM";
				future_metronome_click = setTimeout(function() {
					metronome.reset(bpm_value, 30)
					metronome.start()
				}, 150);
			}
			bpm_slider.onmouseup = function () {
				if (future_metronome_click) {
					clearTimeout(future_metronome_click);
				}
				metronome.pause()
			}
		}
	}
	let prompt = new CustomPrompt();
	prompt.render();
	let start_song = document.getElementById('start_song');
	start_song.onclick = function() {
		audioStreamController.startStream();
		document.getElementById('dialogbox').style.display = "none";
		let bpm_slider = document.getElementById('bpm');
		let metronome = new ScheduledMetronome(bpm_slider.value, beats_per_measure * vf_bars.length)
		let songPlayer = new SongPlayer(note_scheduler.getScheduledNotes(), instrument, bpm_slider.value, beats_per_measure);
		songPlayer.setController();
		let timing_bar = new TimingBar(renderer_context, staveWidth, staveHeight, beats_per_measure, bpm_slider.value, keySigStaffWidth);
		let note_feedback = new NoteFeedback(renderer_context, note_scheduler.getScheduledNotes(), audioStreamController, beats_per_measure, bpm_slider.value, instrument)
		let score_scroller = new ScoreScroller(beats_per_measure, bpm_slider.value, staveHeight, isPiano)
		let session_controller = new SessionController(audioStreamController, note_feedback, metronome, songPlayer, timing_bar, score_scroller, beats_per_measure, bpm_slider.value, bars.length, isDemo, songId, bpmRequirement);
		session_controller.start();
	};

}
