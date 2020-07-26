import VexFlow from 'vexflow';
import key_signatures from './key_signatures'
import bar_computer from './bar_computer'
import note_detection from './note_detection'
import NoteHinter from './note_hinter'
import Instruments from './instruments'
import Timing from './timing'
import SongPlayer from './song_player'
import NoteScheduler from './note_scheduler'

export default class ScoreRenderer {
	constructor(renderer_context, staveWidth, key, bars, beats_per_measure, beat_value, name, scheduled_notes) {
		this.context = renderer_context;
		this.context.setFont("Arial", 3, "").setBackgroundFillStyle("#eed");
		this.key = key;
		this.bars = bars;
		this.vf_bars = bar_computer.getVFBars(this.bars);
		this.scheduled_notes = scheduled_notes;
		this.beats_per_measure = beats_per_measure;
		this.beat_value = beat_value;
		this.name = name;
		this.note_hinter = new NoteHinter();
		this.scaling_factor = document.getElementById("boo").offsetWidth / 1280;

		let keySigInfo = key_signatures.getKeySignatureInfo(key);
		let keySigNotesCount = Object.keys(keySigInfo.notes).length;
		this.keySigStaffWidth = 80 + keySigNotesCount * 10;
		this.staveWidth = staveWidth;
		this.totalNotes = 0;
		this.correctNotes = 0;
	}

	render() {
		let leftPadding = 20 * this.scaling_factor;
		let staveHeight = 150 * this.scaling_factor;
		let voices = [];
		for (let row = 0; row < (this.scheduled_notes.length / 3); row++) {
			let keySigStaff = new VexFlow.Flow.Stave(leftPadding, staveHeight * row, this.keySigStaffWidth);
			keySigStaff.options.spacing_between_lines_px = 10 * this.scaling_factor;
			keySigStaff.addClef('treble');
			if (row === 0) {
				keySigStaff.addTimeSignature(String(this.beats_per_measure).concat("/").concat(String(this.beat_value)));
			}
			let keySig = new VexFlow.Flow.KeySignature(this.key.replace(' major', '').replace(' minor', 'm'));
			keySig.addToStave(keySigStaff);
			keySigStaff.setContext(this.context).draw();
			for (let col = 0; col < 3; col++) {
				let horiz_offset =  leftPadding + this.keySigStaffWidth + this.staveWidth * col;
				let staff = new VexFlow.Flow.Stave(horiz_offset, staveHeight * row, this.staveWidth);
				staff.options.spacing_between_lines_px = 10 * this.scaling_factor;
				staff.setContext(this.context).draw();
				let scheduled_notes = this.scheduled_notes[row * 3 + col];
				// Create a voice in 4/4 and add above notes
				let voice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
				voice.setStrict(false);
				let notes = [];
				for (let i in scheduled_notes) {
					notes.push(scheduled_notes[i].note)
				}
				voice.addTickables(notes);

				// Format and justify the notes to staveWidth pixels.
				let formatter = new VexFlow.Flow.Formatter();
				formatter.joinVoices([voice]).format([voice], this.staveWidth);
				let offset = 0;
				for (let i = 0; i < notes.length; i++) {
					formatter.tickContexts['array'][i].x = offset - 20; // 20 padding is always added for some reason
					let percentage = getDurationAsPercentage(notes[i].duration, notes[i].dots, this.beat_value, this.beats_per_measure);
					offset += percentage * this.staveWidth;
				}

				voice.draw(this.context, staff);

				// Render voice
				voices.push(voice);
			}
		}
		for (let i = 0; i < voices.length; i++) {
			let notes  = voices[i].getTickables();
			for (let j = 0; j < notes.length; j++) {
				notes[j].draw();
			}
		}
	}
}

function getDurationAsPercentage(duration, number_of_dots, beat_value, beats_per_measure) {
	let percentage;
	switch (duration) {
		case '16':
		case '16r':
			percentage = (beat_value / 4.0) / (4.0 * beats_per_measure);
			break;
		case '8':
		case '8r':
			percentage = (beat_value / 4.0) / (2.0 * beats_per_measure);
			break;
		case 'q':
		case 'qr':
			percentage = (beat_value / 4.0) / beats_per_measure;
			break;
		case 'h':
		case 'hr':
			percentage = (beat_value / 2.0) / beats_per_measure;
			break;
		case 'w':
		case 'wr':
			percentage = (beat_value) / beats_per_measure;
			break;
	}
	let dot_factor = 1;
	let multiplier = 0.5
	for (let dot_count = 0; dot_count < number_of_dots; dot_count++) {
		dot_factor += multiplier;
		multiplier = multiplier / 2;
	}
	percentage *= dot_factor;
	return percentage;
}
