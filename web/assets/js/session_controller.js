import Timing from './timing'
import swal from 'sweetalert';

export default class SessionController {
	constructor(audio_stream_controller, note_feedback, metronome, song_player, timing_bar,
	            score_scroller, beats_per_measure, bpm, total_bar_count, is_demo, song_id, bpm_requirement) {
		this.note_feedback = note_feedback;
		this.metronome = metronome;
		this.song_player = song_player;
		this.timing_bar = timing_bar;
		this.score_scroller = score_scroller;
		this.audio_stream_controller = audio_stream_controller;
		this.bpm = bpm;
		this.beats_per_measure = beats_per_measure;
		this.instrument = instrument;
		this.playingState = true;
		this.completion = null;
		this.total_bar_count = total_bar_count;
		this.menu = document.getElementById('menu');
		this.pause_controller_label = document.getElementById('pause-controller-label');
		this.is_demo = is_demo;
		this.song_id = song_id;
		this.bpm_requirement = bpm_requirement;
		this.setPauseController();
	}

	setPauseController() {
		document.getElementById('pause-controller').addEventListener('change', (event) => {
			this.invertState();
		})
	}

	showCountDown(beatsLeft, fadeOutTime) {
		let timerCountdown = document.getElementById("timer_countdown");
		let boo = document.getElementById("boo");
		timerCountdown.style.left = (boo.offsetWidth / 2) + "px";
		timerCountdown.style.display = 'block';
		timerCountdown.innerHTML = beatsLeft;
		$('#timer_countdown').fadeOut(fadeOutTime);
	}

	start() {
		let boo = document.getElementById("boo");
		this.menu.style.left = (boo.offsetWidth / 2 - this.menu.offsetWidth / 2) + "px";
		this.menu.style.visibility = 'visible';
		for (let i = 0; i < this.beats_per_measure; i++) {
			console.log(this.bpm)
			setTimeout(this.metronome.click, (60 * 1000 * i / this.bpm), this.metronome);
			setTimeout(this.showCountDown, (60 * 1000 * i / this.bpm), this.beats_per_measure - i, 60 * 1000 / 2 / this.bpm);
		}
		setTimeout(this._start, this.getStaveTimeInMs(), this);
	}

	_start(session_controller) {
		let timerCountdown = document.getElementById("timer_countdown");
		timerCountdown.style.display = 'none';
		Timing.startTiming();
		session_controller.pause_controller_label.style.visibility = 'visible';
		session_controller.metronome.start();
		session_controller.song_player.start();
		session_controller.timing_bar.start();
		session_controller.note_feedback.start();
		session_controller.score_scroller.start()
		session_controller.completion = setTimeout(session_controller.complete, session_controller.getTotalTimeInMs(), session_controller);
	}

	invertState() {
		if (this.playingState) {
			Timing.pause();
			this.metronome.pause();
			this.song_player.pause();
			this.note_feedback.pause();
			this.timing_bar.pause();
			this.score_scroller.pause();
			this.playingState = false;
			window.clearTimeout(this.completion);
		} else {
			Timing.resume();
			this.metronome.resume();
			this.song_player.resume();
			this.note_feedback.resume();
			this.timing_bar.resume();
			this.score_scroller.resume();
			this.playingState = true;
			this.completion = setTimeout(this.complete, this.getTotalTimeInMs() - Timing.getTimeSinceStart(), this);
		}
	}

	complete(session_controller) {
		Timing.pause();
		session_controller.pause_controller_label.style.visibility = 'hidden';
		session_controller.menu.style.visibility = 'hidden';
		session_controller.metronome.pause();
		session_controller.song_player.pause();
		session_controller.note_feedback.pause();
		session_controller.timing_bar.pause();
		session_controller.timing_bar.clearLastChild();
		session_controller.score_scroller.pause();
		session_controller.playingState = false;

		// TODO: show result box
		// TODO: log result to history table
		// TODO: ask create account? for demo
		// TODO: ask replay?
		if (session_controller.is_demo) {
			let title = "You played " + session_controller.note_feedback.getCorrectNotes() + " out of " +
				session_controller.note_feedback.getTotalNotes() + " correctly! Would you like to create an account?"
			swal({
				title: title,
				text: "Create an account to access more features and more songs!",
				buttons: {
					cancel: {
						text: "No thanks",
						value: null,
						visible: true,
						className: "",
						closeModal: true,
					},
					confirm: {
						text: "Yes!",
						value: true,
						visible: true,
						className: "",
						closeModal: true
					}
				}
			})
				.then((confirmed) => {
					if (confirmed) {
						$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="login"></form>').appendTo($(document.body)).submit();
					} else {
						$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value=""></form>').appendTo($(document.body)).submit();
					}
				})
		} else {
			let params = '';
			params += '&song_id=' + session_controller.song_id;
			params += '&notes_correct=' + session_controller.note_feedback.getCorrectNotes();
			params += '&total_notes=' + session_controller.note_feedback.getTotalNotes();
			params += '&bpm=' + session_controller.bpm;
			params += '&bpm_requirement=' + session_controller.bpm_requirement;
			fetch('/', {
				method: "POST",
				headers: new Headers({
					'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
				}),
				body: "action_type=song_completion&" + params
			}).then(function(response) {
				return response.json();
			}).then(function(responseJson) {
				swal(responseJson.msg).then(
					(confirmed) => {
						$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value=""></form>').appendTo($(document.body)).submit();
					}
				);
			});
		}
	}

	getStaveTimeInMs() {
		return (this.beats_per_measure / this.bpm) * 60 * 1000;
	}

	getTotalTimeInMs() {
		return this.getStaveTimeInMs() * this.total_bar_count;
	}
}


