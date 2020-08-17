import Timing from './timing'


export default class SessionController {
	constructor(audio_stream_controller, note_feedback, metronome, song_player, timing_bar, score_scroller, beats_per_measure, bpm, total_bar_count) {
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
		this.setPauseController();
	}

	setPauseController() {
		document.getElementById('pause-controller').addEventListener('change', (event) => {
			this.invertState();
		})
	}

	start() {
		this.menu.style.visibility = 'visible';
		for (let i = 0; i < this.beats_per_measure; i++) {
			setTimeout(this.metronome.click, (60 * 1000 * i / this.bpm), this.metronome);
		}
		setTimeout(this._start, this.getStaveTimeInMs(), this);
	}

	_start(session_controller) {
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
	}

	getStaveTimeInMs() {
		return (this.beats_per_measure / this.bpm) * 60 * 1000;
	}

	getTotalTimeInMs() {
		return this.getStaveTimeInMs() * this.total_bar_count;
	}
}


