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
		this.beats_per_measure = beats_per_measure;
		this.beats_per_minute = beats_per_minute;
		this.totalNotes = 0;
		this.correctNotes = 0;
		this.func = null;
		this.instrument = instrument;
		this.timing = new Timing()
	}

	getCountDownTimeInMs() {
		return this.beats_per_measure * (60 / this.beats_per_minute) * 1000;
	}

	getSamplingBufferTime() {
		return 0.12 * this.beats_per_measure * (60 / this.beats_per_minute) * 1000;
	}

	start() {
		this.audio_stream_controller.startStream();
		this.timing.startTiming()
		this.func = setInterval(this.draw, 1, this);
	}

	pause() {
		this.timing.pause()
		window.clearInterval(this.func);
	}

	draw(note_feedback) {
		let context_time = note_feedback.audio_stream_controller.getContextTime();
		let normalized_context_time = context_time - note_feedback.timing.getPauseDelay();
		if (note_feedback.notes.length == 0) {
			return;
		}
		let note = note_feedback.notes[0].note;
		if (note.attrs.type === 'GhostNote') {
			note_feedback.notes.shift()
			return;
		}
		if (normalized_context_time > note_feedback.notes[0].time_offset) {
			if (normalized_context_time > (note_feedback.notes[0].time_offset + note_feedback.getSamplingBufferTime())) {
				// mark wrong
				let bar = $(note.attrs.el).prev('path')[0]
				if (bar) {
					bar.remove()
				}
				$(note.attrs.el)[0].remove()
				note.setStyle({fillStyle: 'rgba(255, 0, 0, 0.8)', strokeStyle: "red"});
				note_feedback.totalNotes++;
				note.setContext(note_feedback.rendering_context);
				note.draw();
				note_feedback.notes.shift()

			} else {
				let props = note.getKeyProps()[0];
				let key = props.key;
				let octave = props.octave;
				let expected_note = key_signatures.getOffsetNote(key, octave, 0 - Instruments.getInstrumentKeyOffset(note_feedback.instrument));
				let expected_freq = note_detection.getFrequencyForNote(expected_note.name, expected_note.octave);
				let currentNote = note_detection.getNoteFromSamples(note_feedback.audio_stream_controller.getByteTimeDomainData(), note_feedback.audio_stream_controller.getSampleRate(), expected_freq);
				let actual_freq = note_detection.getFrequencyForNote(currentNote.key, currentNote.octave);
				if ((note.isRest() && currentNote.length === 0) || (currentNote && actual_freq === expected_freq)) {
					let bar = $(note.attrs.el).prev('path')[0]
					if (bar) {
						bar.remove()
					}
					$(note.attrs.el)[0].remove()
					note.setStyle({fillStyle: "lightgreen", strokeStyle: "lightgreen"});
					note_feedback.correctNotes++;
					note_feedback.totalNotes++;
					note.setContext(note_feedback.rendering_context);
					note.draw();
					note_feedback.notes.shift()
				}
			}
		}
	}

	resume() {
		this.timing.resume()
		this.func = setInterval(this.draw, 1, this);
	}

	getCorrectNotes() {
		return this.correctNotes;
	}

	getTotalNotes() {
		return this.totalNotes;
	}
}

