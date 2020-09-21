import Timing from './timing'
import Instruments from './instruments'
import key_signatures from './key_signatures'
import note_detection from './note_detection'
import VexFlow from 'vexflow';
import AudioContext from './audio_context';


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
		this.current_closest_freq = null;
	}

	start() {
		this.func = setInterval(this.draw, 1, this);
	}

	pause() {
		window.clearInterval(this.func);
	}

	draw(note_feedback) {
		let timeInMs = Timing.getTimeSinceStart();
		let bps = note_feedback.beats_per_minute / 60;
		let beatsPassed = (timeInMs * bps) / (1000);
		let stavesPassed = Math.floor(beatsPassed / note_feedback.beats_per_measure);
		let percentageThroughStave = (beatsPassed % note_feedback.beats_per_measure) / note_feedback.beats_per_measure;
		let offset = ((note_feedback.beats_per_minute / note_feedback.beats_per_measure) / 20) * 0.08;
		let min_offset = ((note_feedback.beats_per_minute / note_feedback.beats_per_measure) / 20) * 0.04;
		let max_offset = ((note_feedback.beats_per_minute / note_feedback.beats_per_measure) / 20) * 0.12;
		let minOffsettedPercentageThroughStave = percentageThroughStave - max_offset;
		let maxOffsettedPercentageThroughStave = percentageThroughStave - min_offset;
		let offsettedPercentageThroughStave = percentageThroughStave - offset;
		let offsettedStavesPassed = stavesPassed;
		if (offsettedPercentageThroughStave < 0) {
			if (stavesPassed === 0) {
				offsettedStavesPassed = 0;
			} else {
				offsettedStavesPassed -= 1;
				minOffsettedPercentageThroughStave = minOffsettedPercentageThroughStave + 1;
				maxOffsettedPercentageThroughStave = maxOffsettedPercentageThroughStave + 1;
			}
		}
		let note = null;
		let percentage = null
		let noteObj = null;
		if (note_feedback.vf_bars[offsettedStavesPassed][0] && note_feedback.vf_bars[offsettedStavesPassed][0].percentage < maxOffsettedPercentageThroughStave) {
			note = note_feedback.vf_bars[offsettedStavesPassed][0].note;
			percentage = note_feedback.vf_bars[offsettedStavesPassed][0].percentage;
			noteObj = note_feedback.vf_bars[offsettedStavesPassed].shift();
		}
		if (note && note.attrs.type !== 'GhostNote') {
			let props = note.getKeyProps()[0];
			let key = props.key;
			let octave = props.octave;
			let expected_note = key_signatures.getOffsetNote(key, octave, 0 - Instruments.getInstrumentKeyOffset(note_feedback.instrument));
			console.log("Lag = " + (note_feedback.audio_stream_controller.getTimeSinceInit() - (note_feedback.audio_stream_controller.getContextTime() * 1000)));

			let currentNote = note_detection.getNoteFromSamples(note_feedback.audio_stream_controller.getByteTimeDomainData(), note_feedback.audio_stream_controller.getSampleRate());
			let expected_freq = note_detection.getFrequencyForNote(expected_note.name, expected_note.octave);
			let actual_freq = note_detection.getFrequencyForNote(currentNote.key, currentNote.octave);
			if ((note.isRest() && currentNote.length === 0) || (currentNote && actual_freq === expected_freq)) {
				console.log("CORRECT!");
				note.setStyle({fillStyle: "lightgreen", strokeStyle: "lightgreen"});
				note_feedback.correctNotes++;
				note_feedback.current_closest_freq = null;
			} else {
				if (currentNote) {
					let freq_diff = Math.abs(expected_freq - actual_freq);
					let current_closest_diff = note_feedback.current_closest_freq == null ? 1000000 : Math.abs(expected_freq - note_feedback.current_closest_freq);
					if (current_closest_diff > freq_diff) {
						note_feedback.current_closest_freq = actual_freq;
					}
				}
				if (percentage > minOffsettedPercentageThroughStave) {
					// note flexibility
					note_feedback.vf_bars[offsettedStavesPassed].unshift(noteObj);
					return;
				}
				console.log("Incorrect!");
				console.log("Expected:" + expected_freq);
				console.log("Actual:" + actual_freq);
				console.log("Closest:" + note_feedback.current_closest_freq);
				if (note_feedback.current_closest_freq != null) {
					let incorrectNote = note_detection.estimateNote(note_feedback.current_closest_freq);
					let incorrectStaveNote = new VexFlow.Flow.StaveNote({
						keys: [incorrectNote.key + "/" + incorrectNote.octave],
						duration: note.duration,
						clef: note.clef,
						x: note.x,
					});

					incorrectStaveNote.setContext(note_feedback.rendering_context);
					incorrectStaveNote.setTickContext(note.getTickContext())
					incorrectStaveNote.setStave(note.getStave())
					incorrectStaveNote.setStyle({fillStyle: "red", strokeStyle: "red"});
					incorrectStaveNote.draw();
				} else {
					note.setStyle({fillStyle: 'rgba(255, 0, 0, 0.8)', strokeStyle: "red"});
				}
				note_feedback.current_closest_freq = null;
			}
			note_feedback.last_note_key = expected_note.name;
			note_feedback.last_note_octave = expected_note.octave;
			note_feedback.totalNotes++;
			note.setContext(note_feedback.rendering_context);
			note.draw();
		}
	}

	resume() {
		this.start();
	}

	getCorrectNotes() {
		return this.correctNotes;
	}

	getTotalNotes() {
		return this.totalNotes;
	}
}

