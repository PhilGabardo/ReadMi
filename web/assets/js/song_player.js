import note_detection from './note_detection'
import Instruments from './instruments'
import KeySignatures from './key_signatures'

export default class SongPlayer {
	constructor(notes, instrument, beats_per_minute, beats_per_measure) {
		this.audioCtx = new AudioContext();
		this.tick = null;
		this.tickVolume = null;
		this.soundHz = 1000;
		this.scheduledNotes = this.appendTimingOffset(notes, beats_per_measure, beats_per_minute).flat();
		this.instrument = instrument;
		this.setController()
		this.initAudio();
	}

	initAudio() {
		this.tick = this.audioCtx.createOscillator();
		this.tickVolume = this.audioCtx.createGain();

		this.tick.type = 'square';
		this.tick.frequency.value = this.soundHz;
		this.tickVolume.gain.value = 0;

		this.tick.connect(this.tickVolume);
		//this.tickVolume.connect(this.audioCtx.destination);
		this.tick.start(0);  // No offset, start immediately.
	}

	start() {

		let now = this.audioCtx.currentTime;

		// Schedule all the clicks ahead.
		for (let i = 0; i < this.scheduledNotes.length; i++) {
			let note = this.scheduledNotes[i].note;
			if (note.attrs.type !== 'GhostNote') {
				let props = note.getKeyProps()[0];
				let key = props.key;
				let octave = props.octave;
				let offsetNote = KeySignatures.getOffsetNote(key, octave,  0 - Instruments.getInstrumentKeyOffset(this.instrument));
				let freqency = note_detection.getFrequencyForNote(offsetNote.name, offsetNote.octave);
				this.playNoteAtTime(freqency, now + this.scheduledNotes[i].timing_offset);
			}
		}
	}

	playNoteAtTime(frequency, time) {
		// Silence the click.
		this.tick.frequency.cancelScheduledValues(time);
		this.tick.frequency.setValueAtTime(frequency, time);
		this.tickVolume.gain.cancelScheduledValues(time);
		this.tickVolume.gain.setValueAtTime(0, time);

		// Audible click sound.
		this.tickVolume.gain.linearRampToValueAtTime(1, time + .001);
		this.tickVolume.gain.linearRampToValueAtTime(0, time + .001 + 1);
	}

	stop() {
		this.tickVolume.gain.value = 0;
	}

	pause() {
		this.audioCtx.suspend();
	}

	resume() {
		this.audioCtx.resume();
	}

	setController() {
		document.getElementById('song-player-controller').addEventListener('change', (event) => {
			if (event.target.checked) {
				this.tickVolume.connect(this.audioCtx.destination);
			} else {
				this.tickVolume.disconnect(this.audioCtx.destination);
			}
		})
	}

	appendTimingOffset(bars, beats_per_measure, beats_per_minute) {
		for (let i = 0; i < bars.length; i++) {
			let notes = bars[i];
			if (notes.length === 0) {
				continue;
			}
			let bar_timing_offset = i * (beats_per_measure / beats_per_minute) * 60;
			bars[i][0]['timing_offset'] = bar_timing_offset;
			for (let j = 0; j < notes.length; j++) {
				if (j !== notes.length - 1) {
					let timing_offset = bar_timing_offset + notes[j + 1].percentage * (beats_per_measure / beats_per_minute) * 60;
					bars[i][j + 1]['timing_offset'] = timing_offset;
				}
			}
		}
		return bars;
	}
}
