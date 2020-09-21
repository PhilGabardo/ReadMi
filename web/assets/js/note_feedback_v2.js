import Timing from './timing'
import Instruments from './instruments'
import key_signatures from './key_signatures'
import note_detection from './note_detection'
import VexFlow from 'vexflow';
import AudioContext from './audio_context';


export default class NoteFeedbackV2 {
	constructor(rendering_context, vf_bars, audio_stream_controller, beats_per_measure, beats_per_minute, instrument) {
		this.rendering_context = rendering_context;
		this.audio_stream_controller = audio_stream_controller;
		this.notes = [];
		for (let i = 0; i < vf_bars['note_percentages'].length; i++) {
			for (let j = 0; j < vf_bars['note_percentages'][i].length; j++) {
				this.notes.push(vf_bars['note_percentages'][i][j]);
			}
		}
		this.vf_bars = vf_bars;
		this.beats_per_measure = beats_per_measure;
		this.beats_per_minute = beats_per_minute;
		this.totalNotes = 0;
		this.correctNotes = 0;
		this.func = null;
		this.instrument = instrument;
		this.current_closest_freq = null;
	}

	getCountDownTimeInMs() {
		return this.beats_per_measure * (60 / this.beats_per_minute) * 1000;
	}

	getSamplingBufferTime() {
		return 0.08 * this.beats_per_measure * (60 / this.beats_per_minute) * 1000;
	}

	start() {
		this.func = setInterval(this.draw, 1, this);
	}

	pause() {
		window.clearInterval(this.func);
	}

	draw(note_feedback) {
		let context_time = note_feedback.audio_stream_controller.getContextTime();
		let normalized_context_time = context_time - note_feedback.getCountDownTimeInMs() - Timing.getPauseDelay()
		let note = note_feedback.notes[0].note;
		if (note.attrs.type === 'GhostNote') {
			note_feedback.notes.shift()
			return;
		}
		if (normalized_context_time > note_feedback.notes[0].time_offset) {
			if (normalized_context_time > (note_feedback.notes[0].time_offset + note_feedback.getSamplingBufferTime())) {
				// mark wrong
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
				note_feedback.totalNotes++;
				note.setContext(note_feedback.rendering_context);
				note.draw();
				note_feedback.notes.shift()

			} else {
				let props = note.getKeyProps()[0];
				let key = props.key;
				let octave = props.octave;
				let expected_note = key_signatures.getOffsetNote(key, octave, 0 - Instruments.getInstrumentKeyOffset(note_feedback.instrument));

				let currentNote = note_detection.getNoteFromSamples(note_feedback.audio_stream_controller.getByteTimeDomainData(), note_feedback.audio_stream_controller.getSampleRate());
				let expected_freq = note_detection.getFrequencyForNote(expected_note.name, expected_note.octave);
				let actual_freq = note_detection.getFrequencyForNote(currentNote.key, currentNote.octave);
				if ((note.isRest() && currentNote.length === 0) || (currentNote && actual_freq === expected_freq)) {
					note.setStyle({fillStyle: "lightgreen", strokeStyle: "lightgreen"});
					note_feedback.correctNotes++;
					note_feedback.current_closest_freq = null;
					note_feedback.totalNotes++;
					note.setContext(note_feedback.rendering_context);
					note.draw();
					note_feedback.notes.shift()
				} else {
					if (currentNote) {
						let freq_diff = Math.abs(expected_freq - actual_freq);
						let current_closest_diff = note_feedback.current_closest_freq == null ? 1000000 : Math.abs(expected_freq - note_feedback.current_closest_freq);
						if (current_closest_diff > freq_diff) {
							note_feedback.current_closest_freq = actual_freq;
						}
					}

				}
			}
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

