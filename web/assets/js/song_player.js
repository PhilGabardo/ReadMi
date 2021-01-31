import note_detection from './note_detection'
import Instruments from './instruments'
import KeySignatures from './key_signatures'
import AudioContext from './audio_context'

export default class SongPlayer {
	constructor(notes, instrument, beats_per_minute, beats_per_measure) {
		this.tick = null;
		this.tickVolume = null;
		this.soundHz = 1000;
		this.scheduledNotes = notes.flat();
		this.instrument = instrument;
		this.beats_per_minute = beats_per_minute;
		this.beats_per_measure = beats_per_measure;
		this.initAudio()
		this.scheduleNotes();
		this.setController();
	}

	initAudio() {
		this.audioCtx = AudioContext.getAudioContext()
		this.tick = this.audioCtx.createOscillator();
		this.tickVolume = this.audioCtx.createGain();

		this.tick.type = 'square';
		this.tick.frequency.value = this.soundHz;
		this.tickVolume.gain.value = 0;

		this.tick.connect(this.tickVolume);
		if (document.getElementById('song-player-controller').checked) {
			this.tickVolume.connect(this.audioCtx.destination);
		}
		this.tick.start(0);  // No offset, start immediately.
	}

	scheduleNotes() {
		//this.initAudio();
		//this.setController()
		//(60 * 1000 * i / this.bpm)
		// Schedule all the clicks ahead.
		let countdown_offset = (60 / this.beats_per_minute) * this.beats_per_measure;
		for (let i = 0; i < this.scheduledNotes.length; i++) {
			let note = this.scheduledNotes[i].note;
			if (note.attrs.type !== 'GhostNote' && !note.isRest()) {
				let time_to_play = this.scheduledNotes[i].time_offset;
				let props = note.getKeyProps()[0];
				let key = props.key;
				let octave = props.octave;
				let offsetNote = KeySignatures.getOffsetNote(key, octave,  0 - Instruments.getInstrumentKeyOffset(this.instrument));
				let freqency = note_detection.getFrequencyForNote(offsetNote.name, offsetNote.octave);
				this.playNoteAtTime(freqency, countdown_offset + time_to_play);
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
		this.tickVolume.gain.linearRampToValueAtTime(0, time + .001 + .2);
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
}
