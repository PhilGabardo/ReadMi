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
		var hintOffsetTop = document.getElementById("boo").offsetTop - getStaveHeight() / 2;

		var keySigInfo = key_signatures.getKeySignatureInfo(key);
		var keySigNotesCount = Object.keys(keySigInfo.notes).length;
		this.keySigStaffWidth = 80 + keySigNotesCount * 10;
		this.staveWidth = staveWidth;
		this.totalNotes = 0;
		this.correctNotes = 0;
	}

	render() {
		var leftPadding = 20 * getScalingFactor();
		var staveHeight = getStaveHeight();
		var voices = [];
		for (var row = 0; row < (this.scheduled_notes.length / 3); row++) {
			var keySigStaff = new VexFlow.Flow.Stave(leftPadding, staveHeight * row, this.keySigStaffWidth);
			keySigStaff.options.spacing_between_lines_px = 10 * getScalingFactor();
			keySigStaff.addClef('treble');
			if (row === 0) {
				keySigStaff.addTimeSignature(String(this.beats_per_measure).concat("/").concat(String(this.beat_value)));
			}
			var keySig = new VexFlow.Flow.KeySignature(this.key);
			keySig.addToStave(keySigStaff);
			keySigStaff.setContext(this.context).draw();
			for (var col = 0; col < 3; col++) {
				var horiz_offset =  leftPadding + this.keySigStaffWidth + this.staveWidth * col;
				var staff = new VexFlow.Flow.Stave(horiz_offset, staveHeight * row, this.staveWidth);
				staff.options.spacing_between_lines_px = 10 * getScalingFactor();
				staff.setContext(this.context).draw();
				var scheduled_notes = this.scheduled_notes[row * 3 + col];
				if (scheduled_notes.length === 0) {
					continue;
				}
				// Create a voice in 4/4 and add above notes
				var voice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
				voice.setStrict(false);
				var notes = [];
				for (var i in scheduled_notes) {
					notes.push(scheduled_notes[i].note)
				}
				voice.addTickables(notes);

				// Format and justify the notes to staveWidth pixels.
				var formatter = new VexFlow.Flow.Formatter();
				formatter.joinVoices([voice]).format([voice], this.staveWidth);
				var offset = 0;
				for (var i = 0; i < notes.length; i++) {
					formatter.tickContexts['array'][i].x = offset - 20; // 20 padding is always added for some reason
					var percentage = getDurationAsPercentage(notes[i].duration, notes[i].dots, this.beat_value, this.beats_per_measure);
					offset += percentage * this.staveWidth;
				}

				voice.draw(this.context, staff);

				// Render voice
				voices.push(voice);
			}
		}
		for (var i = 0; i < voices.length; i++) {
			var notes  = voices[i].getTickables();
			for (var j = 0; j < notes.length; j++) {
				notes[j].draw();
			}
		}
	}
}

function getDurationAsPercentage(duration, number_of_dots, beat_value, beats_per_measure) {
	var percentage;
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
	var dot_factor = 1;
	var multiplier = 0.5
	for (var dot_count = 0; dot_count < number_of_dots; dot_count++) {
		dot_factor += multiplier;
		multiplier = multiplier / 2;
	}
	percentage *= dot_factor;
	return percentage;
}

function getScalingFactor() {
	return window.innerWidth / 1280;
}

function getStaveHeight() {
	return 150 * getScalingFactor();
}



function getPosition(stavesPassed, percentageThroughStave, leftPadding, staveHeight, staveWidth, keySigStaffWidth) {
	var height = Math.floor(stavesPassed / 3) * staveHeight;
	var width = leftPadding + (stavesPassed % 3) * staveWidth + (percentageThroughStave * staveWidth);
	width += keySigStaffWidth;
	return {
		height: height,
		width: width,
	}
}

function scrollToNiceSpot(stavesPassed, percentageThroughStave, staveHeight) {
	if (stavesPassed < 3) {
		window.scrollTo(0, 0);
		return
	}
	var height = Math.floor(stavesPassed / 3) * staveHeight;
	var penalty = staveHeight - (((stavesPassed % 3) + percentageThroughStave) / 3) * staveHeight
	window.scrollTo(0, height - penalty)
}
