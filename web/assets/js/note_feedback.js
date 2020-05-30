import Timing from './timing'
import Instruments from './instruments'
import key_signatures from './key_signatures'
import note_detection from './note_detection'

export default class NoteFeedback {
	constructor(rendering_context, vf_bars, audio_stream_controller, beats_per_measure, beats_per_minute, instrument) {
		this.rendering_context = rendering_context;
		this.audio_stream_controller = audio_stream_controller;
		this.vf_bars = vf_bars;
		this.beats_per_measure = beats_per_measure;
		this.beats_per_minute = beats_per_minute;
		this.totalNotes = 0;
		this.correctNotes = 0;
		this.func = null;
		this.instrument = instrument;
	}

	start() {
		this.func = setInterval(this.draw, 10, this);
	}

	pause() {
		window.clearInterval(this.func);
	}

	draw(note_feedback) {
		var timeInMs = Timing.getTimeSinceStart();
		var bps = note_feedback.beats_per_minute / 60;
		var beatsPassed = (timeInMs * bps) / (1000);
		var stavesPassed = Math.floor(beatsPassed / note_feedback.beats_per_measure);
		var percentageThroughStave = (beatsPassed % note_feedback.beats_per_measure) / note_feedback.beats_per_measure;
		var offset = ((note_feedback.beats_per_minute / note_feedback.beats_per_measure) / 20) * 0.1;
		var offsettedPercentageThroughStave = percentageThroughStave - offset;
		var offsettedStavesPassed = stavesPassed;
		if (offsettedPercentageThroughStave < 0) {
			if (stavesPassed === 0) {
				offsettedStavesPassed = 0;
			} else {
				offsettedStavesPassed -= 1;
				offsettedPercentageThroughStave = offsettedPercentageThroughStave + 1;
			}
		}
		var note = null;
		if (note_feedback.vf_bars[offsettedStavesPassed][0] && note_feedback.vf_bars[offsettedStavesPassed][0].percentage < offsettedPercentageThroughStave) {
			note = note_feedback.vf_bars[offsettedStavesPassed][0].note;
			note_feedback.vf_bars[offsettedStavesPassed].shift();
		}
		if (note && note.attrs.type !== 'GhostNote') {
			var props = note.getKeyProps()[0];
			var key = props.key;
			var octave = props.octave;
			var expected_note = key_signatures.getOffsetNote(key, octave,  0 - Instruments.getInstrumentKeyOffset(note_feedback.instrument));
			var currentNote = note_detection.getNoteFromSamples(note_feedback.audio_stream_controller.getSamples(), note_feedback.audio_stream_controller.getBufferSize());
			var expected_freq = note_detection.getFrequencyForNote(expected_note.name, expected_note.octave);
			var actual_freq = note_detection.getFrequencyForNote(currentNote.key, currentNote.octave);
			if ((note.isRest() && currentNote.length === 0) || (currentNote && actual_freq === expected_freq)) {
				note.setStyle({fillStyle: "lightgreen", strokeStyle: "lightgreen"});
				note_feedback.correctNotes++;
			} else {
				note.setStyle({fillStyle: "red", strokeStyle: "red"});
			}
			note_feedback.totalNotes++;
			note.setContext(note_feedback.rendering_context);
			note.draw();
		}
	}

	resume() {
		this.start();
	}
}

