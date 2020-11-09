import DrawKeyboard from './draw_keyboard'
import DrawGuitar from './draw_guitar'
import DrawViolin from './draw_violin'
import NoteDetection from './note_detection'
import Timing from './timing'
import Vexflow from 'vexflow'
import KeySignatures from './key_signatures'
import Instruments from './instruments'

export default class NoteHinter {

	static getHinter(instrument, beats_per_minute, beats_per_measure, vf_bars, key) {
		switch (instrument) {
			case 'piano':
				return new PianoNoteHinter(beats_per_minute, beats_per_measure, vf_bars, key)
			case 'guitar':
				return new GuitarNoteHinter(beats_per_minute, beats_per_measure, vf_bars, key)
			case 'singing':
				return new SingingNoteHinter(beats_per_minute, beats_per_measure, vf_bars, key)
			case 'violin':
				return new ViolinNoteHinter(beats_per_minute, beats_per_measure, vf_bars, key)
			default:
				return new NoteHinter(beats_per_minute, beats_per_measure, vf_bars, key)
		}

	}

	constructor(beats_per_minute, beats_per_measure, vf_bars, key) {
		this.note_hint = document.getElementById("note_hint");
		let boo = document.getElementById("boo");
		let note_hint_div = document.getElementById("note_hint_div");

		this.note_hint.style.display = 'block'
		this.beats_per_minute = beats_per_minute
		this.beats_per_measure = beats_per_measure
		this.vf_bars = vf_bars;
		this.timing = new Timing()
	}

	start() {
		this.timing.startTiming()
		this.func = setInterval(this.draw, 10, this);
	}

	pause() {
		this.timing.pause()
		window.clearInterval(this.func);
	}

	setController() {
		document.getElementById('note-hinter-controller').addEventListener('change', (event) => {
			if (event.target.checked) {
				this.note_hint.style.display = "block";
			} else {
				this.note_hint.style.display = "none";
			}
		})
		this._setController()
	}

	_setController() {

	}

	draw(note_hinter) {
		let timeInMs = note_hinter.timing.getTimeSinceStart();
		let bps = note_hinter.beats_per_minute / 60;
		let beatsPassed = (timeInMs * bps) / (1000);
		let stavesPassed = Math.floor(beatsPassed / note_hinter.beats_per_measure);
		let percentageThroughStave = (beatsPassed % note_hinter.beats_per_measure) / note_hinter.beats_per_measure;
		let offset = ((note_hinter.beats_per_minute / note_hinter.beats_per_measure) / 20) * 0.08;
		let min_offset = ((note_hinter.beats_per_minute / note_hinter.beats_per_measure) / 20) * 0.04;
		let maxOffsettedPercentageThroughStave = percentageThroughStave - min_offset;
		let offsettedPercentageThroughStave = percentageThroughStave - offset;
		let offsettedStavesPassed = stavesPassed;
		if (offsettedPercentageThroughStave < 0) {
			if (stavesPassed === 0) {
				offsettedStavesPassed = 0;
			} else {
				offsettedStavesPassed -= 1;
				maxOffsettedPercentageThroughStave = maxOffsettedPercentageThroughStave + 1;
			}
		}
		let note = null;
		if (note_hinter.vf_bars[offsettedStavesPassed].length > 0 && note_hinter.vf_bars[offsettedStavesPassed][0] && note_hinter.vf_bars[offsettedStavesPassed][0].percentage < maxOffsettedPercentageThroughStave) {
			note = note_hinter.vf_bars[offsettedStavesPassed][0].note;
			note_hinter.vf_bars[offsettedStavesPassed].shift();
		}
		if (note && note.attrs.type !== 'GhostNote') {
			let props = note.getKeyProps()[0];
			let key = props.key;
			let octave = props.octave;
			note_hinter.undoLastHint(key, octave);
			let next_note = note_hinter.getNextNote(offsettedStavesPassed)
			if (next_note) {
				note_hinter.hint(next_note)
			}
		}
	}

	getNextNote(offsettedStavesPassed) {
		for (let i = offsettedStavesPassed; i < this.vf_bars.length; i++) {
			for (let j = 0; j < this.vf_bars[i].length; j++) {
				let note = this.vf_bars[i][j].note;
				if (note.attrs.type !== 'GhostNote') {
					return note;
				}
			}
		}
	}

	undoLastHint(key, octave) {
		this.note_hint.innerHTML = 'Next Note:';
	}

	hint(note) {
		let props = note.getKeyProps()[0];
		let key = props.key;
		let octave = props.octave;
		let expected_note = KeySignatures.getOffsetNote(key, octave, 0 - Instruments.getInstrumentKeyOffset(this.getInstrument()));
		if (key.length > 1) {
			key = key.charAt(0) + key.charAt(1).replace('B', '<sup>♭</sup>').replace('#', '<sup>#</sup>')
		}
		this.note_hint.innerHTML = 'Next Note:&nbsp;' + key + octave;
	}

	getInstrument() {
		return '';
	}

	resume() {
		this.timing.resume()
		this.func = setInterval(this.draw, 10, this);
	}

	stop() {
		this.canvas.style.display = "none";
	}
}

export class PianoNoteHinter extends NoteHinter {
	constructor(beats_per_minute, beats_per_measure, vf_bars, key) {
		super(beats_per_minute, beats_per_measure, vf_bars, key)
		let boo = document.getElementById("boo");
		this.canvas = document.createElement('canvas');
		let width = window.orientation == 0 ? window.innerHeight : window.innerWidth;
		this.canvas.style.width = '60%';
		this.canvas.style.height = '10%';
		this.canvas.style.display = "block";
		this.canvas.style.position = "fixed";
		this.canvas.style.bottom = '20%'
		this.canvas.style.outline = "black 3px solid";
		this.canvas.style.left = '20%';
		document.body.appendChild(this.canvas);
		this.canvas.width = 650;
		this.canvas.height = 72;

		this.draw_keyboard = new DrawKeyboard(this.canvas, 650, 72);
		this.draw_keyboard.init()
	}

	getInstrument() {
		return 'piano';
	}

	_setController() {
		document.getElementById('note-hinter-controller').addEventListener('change', (event) => {
			if (event.target.checked) {
				this.canvas.style.display = "block";
			} else {
				this.canvas.style.display = "none";
			}
		})
	}

	undoLastHint(key, octave) {
		let index = NoteDetection.getIndexForNote(key, octave);
		this.draw_keyboard.drawRedKey(index - 9, true)
		super.undoLastHint(key, octave)
	}

	hint(note) {
		let props = note.getKeyProps()[0];
		let key = props.key;
		let octave = props.octave;
		let index = NoteDetection.getIndexForNote(key, octave);
		this.draw_keyboard.drawRedKey(index - 9, false)
		super.hint(note)
	}
}

export class SingingNoteHinter extends NoteHinter {
	constructor(beats_per_minute, beats_per_measure, vf_bars, key) {
		super(beats_per_minute, beats_per_measure, vf_bars, key)
		let boo = document.getElementById("boo");
		this.do_re_me_text = document.createElement('text');
		this.do_re_me_text.style.display = "block";
		this.do_re_me_text.style.position = "fixed";
		this.do_re_me_text.style.bottom = '10%'
		this.do_re_me_text.style.left = '40%';
		this.do_re_me_text.style.fontSize = '5vw';
		document.body.appendChild(this.do_re_me_text);
	}

	getInstrument() {
		return 'singing';
	}

	_setController() {
		document.getElementById('note-hinter-controller').addEventListener('change', (event) => {
			if (event.target.checked) {
				this.do_re_me_text.style.display = "block";
			} else {
				this.do_re_me_text.style.display = "none";
			}
		})
	}

	undoLastHint(key, octave) {
		this.do_re_me_text.innerHTML = '';
		super.undoLastHint(key, octave)
	}

	hint(note) {
		let props = note.getKeyProps()[0];
		let key = props.key;
		let do_re_mi_map = {
			"C": 'Do',
			"C#": 'Di',
			"DB": 'Di',
			"D": 'Re',
			"D#": 'Ri',
			"EB": 'Ri',
			"E": 'Me',
			"F": 'Fa',
			"F#": 'Fi',
			"GB": 'Fi',
			"G": 'Sol',
			"G#": 'Si',
			"AB": 'Si',
			"A": 'La',
			"A#": 'Li',
			"BB": 'Li',
			"B": 'Ti',
		};
		this.do_re_me_text.innerHTML = do_re_mi_map[key];
		super.hint(note)
	}
}

export class GuitarNoteHinter extends NoteHinter {
	constructor(beats_per_minute, beats_per_measure, vf_bars, key) {
		super(beats_per_minute, beats_per_measure, vf_bars, key)
		this.canvas = document.createElement('canvas');
		this.canvas.style.width = '60%';
		this.canvas.style.height = '10%';
		this.canvas.style.display = "block";
		this.canvas.style.position = "fixed";
		this.canvas.style.bottom = '20%'
		//this.canvas.style.outline = "black 3px solid";
		this.canvas.style.left = '20%';
		document.body.appendChild(this.canvas);
		this.canvas.width = 1000;
		this.canvas.height = 90;

		this.draw_guitar = new DrawGuitar(this.canvas);
		this.string_frets_index_map = NoteDetection.getGuitarStringFretsMap() // todo optimize fingering
	}

	getInstrument() {
		return 'guitar';
	}

	_setController() {
		document.getElementById('note-hinter-controller').addEventListener('change', (event) => {
			if (event.target.checked) {
				this.canvas.style.display = "block";
			} else {
				this.canvas.style.display = "none";
			}
		})
	}

	undoLastHint(key, octave) {
		let note_index = NoteDetection.getIndexForNote(key, octave) - (12 * 3 + 4);
		let fingering = this.string_frets_index_map[note_index]
		fingering.sort(function(a, b) {
			return a[1] - b[1];
		});
		this.draw_guitar.drawNote(fingering[0][1] - 1, 5 - fingering[0][0], true)
		super.undoLastHint(key, octave)
	}

	hint(note) {
		let props = note.getKeyProps()[0];
		let key = props.key;
		let octave = props.octave;
		let note_index = NoteDetection.getIndexForNote(key, octave) - (12 * 3 + 4);
		let fingering = this.string_frets_index_map[note_index]
		fingering.sort(function(a, b) {
			return a[1] - b[1];
		});
		this.draw_guitar.drawNote(fingering[0][1] - 1, 5 - fingering[0][0])
		super.hint(note)
	}
}


export class ViolinNoteHinter extends NoteHinter {
	constructor(beats_per_minute, beats_per_measure, vf_bars, key) {
		super(beats_per_minute, beats_per_measure, vf_bars, key)
		this.canvas = document.createElement('canvas');
		this.canvas.style.width = '60%';
		this.canvas.style.height = '10%';
		this.canvas.style.display = "block";
		this.canvas.style.position = "fixed";
		this.canvas.style.bottom = '20%'
		//this.canvas.style.outline = "black 3px solid";
		this.canvas.style.left = '20%';
		document.body.appendChild(this.canvas);
		this.canvas.width = 1000;
		this.canvas.height = 90;

		this.draw_violin = new DrawViolin(this.canvas);
		this.string_frets_index_map = NoteDetection.getViolinStringFretsMap() // todo optimize fingering
	}

	getInstrument() {
		return 'violin';
	}

	_setController() {
		document.getElementById('note-hinter-controller').addEventListener('change', (event) => {
			if (event.target.checked) {
				this.canvas.style.display = "block";
			} else {
				this.canvas.style.display = "none";
			}
		})
	}

	undoLastHint(key, octave) {
		let note_index = NoteDetection.getIndexForNote(key, octave) - (12 * 3 + 7);
		let fingering = this.string_frets_index_map[note_index]
		fingering.sort(function(a, b) {
			return a[1] - b[1];
		});
		this.draw_violin.drawNote(fingering[0][1] - 1, 3 - fingering[0][0], true)
		super.undoLastHint(key, octave)
	}

	hint(note) {
		let props = note.getKeyProps()[0];
		let key = props.key;
		let octave = props.octave;
		let note_index = NoteDetection.getIndexForNote(key, octave) - (12 * 3 + 7);
		let fingering = this.string_frets_index_map[note_index]
		fingering.sort(function(a, b) {
			return a[1] - b[1];
		});
		this.draw_violin.drawNote(fingering[0][1] - 1, 3 - fingering[0][0])
		super.hint(note)
	}
}

