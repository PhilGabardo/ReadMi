import Instruments from './instruments';
import DrawKeyboard from './draw_keyboard'
import NoteDetection from './note_detection'
import Timing from './timing'

export default class NoteHinter {

	constructor(beats_per_minute, beats_per_measure, vf_bars) {
		this.canvas = document.getElementById("canvas");
		this.canvas.style.display = "block";

		let boo = document.getElementById("boo");
		this.canvas.style.left = (boo.offsetWidth / 2 - this.canvas.offsetWidth / 2) + "px";
		this.draw_keyboard = new DrawKeyboard(canvas);
		this.draw_keyboard.init()
		this.beats_per_minute = beats_per_minute
		this.beats_per_measure = beats_per_measure
		this.vf_bars = vf_bars;
	}

	start() {
		this.func = setInterval(this.draw, 10, this);
	}

	pause() {
		window.clearInterval(this.func);
	}

	draw(note_hinter) {
		let timeInMs = Timing.getTimeSinceStart();
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
		if (note_hinter.vf_bars[offsettedStavesPassed][0] && note_hinter.vf_bars[offsettedStavesPassed][0].percentage < maxOffsettedPercentageThroughStave) {
			note = note_hinter.vf_bars[offsettedStavesPassed][0].note;
			note_hinter.vf_bars[offsettedStavesPassed].shift();
		}
		if (note && note.attrs.type !== 'GhostNote') {
			let props = note.getKeyProps()[0];
			let key = props.key;
			let octave = props.octave;
			let index = NoteDetection.getIndexForNote(key, octave);
			note_hinter.draw_keyboard.drawRedKey(index - 9, true)
			note_hinter.hintNextNote(offsettedStavesPassed)
		}
	}

	hintNextNote(offsettedStavesPassed) {
		for (let i = offsettedStavesPassed; i < this.vf_bars.length; i++) {
			for (let j = 0; j < this.vf_bars[i].length; j++) {
				let note = this.vf_bars[i][j].note;
				if (note.attrs.type !== 'GhostNote') {
					let props = note.getKeyProps()[0];
					let key = props.key;
					let octave = props.octave;
					let index = NoteDetection.getIndexForNote(key, octave);
					console.log(index)
					this.draw_keyboard.drawRedKey(index - 9, false)
					return;
				}
			}
		}
	}

	resume() {
		this.start();
	}

	stop() {
		this.canvas.style.display = "none";
	}
}
