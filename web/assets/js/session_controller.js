import Timing from './timing'
import swal from 'sweetalert';

export default class SessionController {
	constructor(note_feedback, metronome, song_player, beats_per_measure, bpm, total_bar_count, is_demo, note_hinter, stave_updater, beat_count_updater) {
		this.note_feedback = note_feedback;
		this.metronome = metronome;
		this.song_player = song_player;
		this.bpm = bpm;
		this.beats_per_measure = beats_per_measure;
		this.instrument = instrument;
		this.playingState = true;
		this.completion = null;
		this.total_bar_count = total_bar_count;;
		this.pause_controller_label = document.getElementById('pause-controller-label');
		this.is_demo = is_demo;
		this.note_hinter = note_hinter;
		this.beat_count_updater = beat_count_updater;
		let first_note = this.note_hinter.getNextNote(0);
		if (!first_note.isRest()) {
			this.note_hinter.hint(first_note);
		}
		this.setPauseController();
		this.stave_updater = stave_updater;
		this.beat_count_updater = beat_count_updater;
		this.timing = new Timing();
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
		this.stave_updater.start();
		this.metronome.start();
		for (let i = 0; i < this.beats_per_measure; i++) {
			//setTimeout(this.metronome.click, (60 * 1000 * i / this.bpm), this.metronome);
			setTimeout(this.showCountDown, (60 * 1000 * i / this.bpm), this.beats_per_measure - i, 60 * 1000 / 2 / this.bpm);
		}
		setTimeout(this._start, this.getStaveTimeInMs(), this);
	}

	_start(session_controller) {
		//session_controller.stave_updater.start()
		let timerCountdown = document.getElementById("timer_countdown");
		timerCountdown.style.display = 'none';
		session_controller.timing.startTiming()
		session_controller.pause_controller_label.style.visibility = 'visible';
		//session_controller.metronome.start();
		//session_controller.song_player.start();
		//session_controller.timing_bar.start();
		session_controller.note_feedback.start();
		//session_controller.score_scroller.start()
		session_controller.completion = setTimeout(session_controller.complete, session_controller.getTotalTimeInMs(), session_controller);
		session_controller.note_hinter.start();
		session_controller.beat_count_updater.start();
	}

	invertState() {
		if (this.playingState) {
			this.timing.pause()
			this.stave_updater.pause()
			this.metronome.pause();
			this.song_player.pause();
			this.note_feedback.pause();
			//this.timing_bar.pause();
			//this.score_scroller.pause();
			this.note_hinter.pause();
			this.beat_count_updater.pause();
			this.playingState = false;
			window.clearTimeout(this.completion);
		} else {
			this.timing.resume()
			this.stave_updater.resume()
			this.metronome.resume();
			this.song_player.resume();
			this.note_feedback.resume();
			//this.timing_bar.resume();
			//this.score_scroller.resume();
			this.beat_count_updater.resume();
			this.note_hinter.resume();
			this.playingState = true;
			this.completion = setTimeout(this.complete, this.getTotalTimeInMs() - this.timing.getTimeSinceStart(), this);
		}
	}

	complete(session_controller) {
		session_controller.timing.pause();
		session_controller.pause_controller_label.style.visibility = 'hidden';
		session_controller.metronome.pause();
		session_controller.song_player.pause();
		session_controller.note_feedback.pause();
		session_controller.beat_count_updater.pause();
		//session_controller.timing_bar.pause();
		//session_controller.timing_bar.clearLastChild();
		//session_controller.score_scroller.pause();
		session_controller.playingState = false;
		session_controller.note_hinter.pause();

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
						$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="display_login"></form>').appendTo($(document.body)).submit();
					} else {
						$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value=""></form>').appendTo($(document.body)).submit();
					}
				})
		} else {
			swal('You played ' + session_controller.note_feedback.getCorrectNotes() + ' out of ' + session_controller.note_feedback.getTotalNotes() + ' notes correctly!')
				.then((confirmed) => {
					$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value=""></form>').appendTo($(document.body)).submit();
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


