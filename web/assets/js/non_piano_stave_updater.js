import VexFlow from 'vexflow';
import key_signatures from './key_signatures'
import $ from 'jquery'
import Timing from './timing'
export default class StaveUpdater {
	constructor(renderer_context, staveWidth, key, bars, beats_per_measure, beat_value, name, scheduled_notes, bpm) {
		this.context = renderer_context;
		this.context.setFont("Arial", 3, "").setBackgroundFillStyle("#eed");
		this.key = key;
		this.bars = bars;
		this.scheduled_notes = scheduled_notes;
		this.beats_per_measure = beats_per_measure;
		this.beat_value = beat_value;
		this.name = name;
		this.scaling_factor = document.getElementById("boo").offsetWidth / 1280;
		this.bpm = bpm;
		this.animation_id = null;

		this.keySigStaffWidth = key_signatures.getKeySignatureStaffWidth(key);
		this.staveWidth = staveWidth;
		this.totalNotes = 0;
		this.correctNotes = 0;
		this.notes_on_staff = [];
		this.last_step_time = null;
		this.timing = new Timing()
	}

	renderForPiano() {
		// treble
		let total_area = 240;
		let stave_height = total_area / 2;
		let spacing_between_lines_px = stave_height / 12;

		let leftPadding = 20 * this.scaling_factor;
		let trebleKeySigStaff = new VexFlow.Flow.Stave(leftPadding, 0, this.keySigStaffWidth);
		trebleKeySigStaff.addClef('treble');
		trebleKeySigStaff.addTimeSignature(String(this.beats_per_measure).concat("/").concat(String(this.beat_value)));
		let trebleKeySig = new VexFlow.Flow.KeySignature(this.key.replace(' major', '').replace(' minor', 'm'));
		trebleKeySig.addToStave(trebleKeySigStaff);
		trebleKeySigStaff.setContext(this.context).draw();

		//base
		let bassKeySigStaff = new VexFlow.Flow.Stave(leftPadding, stave_height, this.keySigStaffWidth);
		bassKeySigStaff.addClef('bass');
		let baseKeySig = new VexFlow.Flow.KeySignature(this.key.replace(' major', '').replace(' minor', 'm'));
		baseKeySig.addToStave(bassKeySigStaff);
		bassKeySigStaff.setContext(this.context).draw();

		for (let col = 0; col < this.scheduled_notes.length + 1; col++) {
			let horiz_offset =  leftPadding + this.keySigStaffWidth + this.staveWidth * col;

			// treble
			let trebleStaff = new VexFlow.Flow.Stave(horiz_offset, 0, this.staveWidth);
			trebleStaff.setContext(this.context).draw();

			// bass
			let bassStaff = new VexFlow.Flow.Stave(horiz_offset, stave_height, this.staveWidth);
			bassStaff.setContext(this.context).draw();

			// Create a voice in 4/4 and add above notes
			let trebleVoice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
			trebleVoice.setStrict(false);
			// Create a voice in 4/4 and add above notes
			let bassVoice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
			bassVoice.setStrict(false);

			trebleVoice.draw(this.context, trebleStaff)
			bassVoice.draw(this.context, bassStaff);

			if (col > 0) {
				let trebleNotes = [];
				let percentages = [];
				let bassNotes = [];
				for (let scheduled_note of this.scheduled_notes[col - 1]) {
					percentages.push(scheduled_note.percentage)
					if (scheduled_note.note.attrs.type === 'GhostNote') {
						trebleNotes.push(scheduled_note.note);
						bassNotes.push(scheduled_note.note);
					} else if (scheduled_note.note.clef === 'bass') {
						bassNotes.push(scheduled_note.note);
						trebleNotes.push(new VexFlow.Flow.GhostNote({duration: scheduled_note.note.duration}))
						this.notes_on_staff.push(scheduled_note.note)
					} else {
						bassNotes.push(new VexFlow.Flow.GhostNote({duration: scheduled_note.note.duration}));
						trebleNotes.push(scheduled_note.note)
						this.notes_on_staff.push(scheduled_note.note)
					}
				}
				trebleVoice.addTickables(trebleNotes);
				bassVoice.addTickables(bassNotes);

				// Format and justify the notes to staveWidth pixels.
				let trebleFormatter = new VexFlow.Flow.Formatter();
				let baseFormatter = new VexFlow.Flow.Formatter();
				trebleFormatter.joinVoices([trebleVoice]).format([trebleVoice], this.staveWidth);
				baseFormatter.joinVoices([bassVoice]).format([bassVoice], this.staveWidth);
				for (let i = 0; i < percentages.length; i++) {
					trebleFormatter.tickContexts['array'][i].x = (percentages[i] * this.staveWidth) - 20; // 20 padding is always added for some reason
					baseFormatter.tickContexts['array'][i].x = (percentages[i] * this.staveWidth) - 20;
				}

				trebleVoice.draw(this.context, trebleStaff);
				bassVoice.draw(this.context, bassStaff);
			}
		}
		this.context.beginPath();
		this.context.rect(leftPadding + this.keySigStaffWidth - 5 * this.scaling_factor, 0, 10 * this.scaling_factor, total_area);
		this.context.closePath();
	}

	renderForNonPiano() {
		// treble
		let total_area = 240;
		let stave_height = total_area / 2;
		let spacing_between_lines_px = stave_height / 12;

		// treble
		let leftPadding = 20 * this.scaling_factor;
		let trebleKeySigStaff = new VexFlow.Flow.Stave(leftPadding, total_area / 2 - stave_height / 2, this.keySigStaffWidth);
		trebleKeySigStaff.addClef('treble');
		trebleKeySigStaff.addTimeSignature(String(this.beats_per_measure).concat("/").concat(String(this.beat_value)));
		let trebleKeySig = new VexFlow.Flow.KeySignature(this.key.replace(' major', '').replace(' minor', 'm'));
		trebleKeySig.addToStave(trebleKeySigStaff);
		trebleKeySigStaff.setContext(this.context).draw();

		for (let col = 0; col < this.scheduled_notes.length + 1; col++) {
			let horiz_offset =  leftPadding + this.keySigStaffWidth + this.staveWidth * col;

			// treble
			let trebleStaff = new VexFlow.Flow.Stave(horiz_offset, total_area / 2 - stave_height / 2, this.staveWidth);
			trebleStaff.setContext(this.context).draw();


			// Create a voice in 4/4 and add above notes
			let trebleVoice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
			trebleVoice.setStrict(false);

			trebleVoice.draw(this.context, trebleStaff)

			if (col > 0) {
				let trebleNotes = [];
				let percentages = [];
				for (let scheduled_note of this.scheduled_notes[col - 1]) {
					percentages.push(scheduled_note.percentage)
					if (scheduled_note.note.attrs.type === 'GhostNote') {
						trebleNotes.push(scheduled_note.note);
					} else {
						trebleNotes.push(scheduled_note.note)
						this.notes_on_staff.push(scheduled_note.note)
					}
				}
				trebleVoice.addTickables(trebleNotes);

				// Format and justify the notes to staveWidth pixels.
				let trebleFormatter = new VexFlow.Flow.Formatter();
				trebleFormatter.joinVoices([trebleVoice]).format([trebleVoice], this.staveWidth);
				for (let i = 0; i < percentages.length; i++) {
					trebleFormatter.tickContexts['array'][i].x = (percentages[i] * this.staveWidth) - 20; // 20 padding is always added for some reason
				}

				trebleVoice.draw(this.context, trebleStaff);
			}
		}
		this.context.beginPath();
		this.context.rect(leftPadding + this.keySigStaffWidth - 5 * this.scaling_factor, 0, 10 * this.scaling_factor, total_area);
		this.context.closePath();
	}


	start() {
		this.timing.startTiming()
		this.animation_id = window.requestAnimationFrame(this.step.bind(this))
	}


	step() {
		let timeInMs = this.timing.getTimeSinceStart();
		let bps = this.bpm / 60;
		let beatsPassed = (timeInMs * bps) / (1000);
		let stavesPassed = Math.floor(beatsPassed / this.beats_per_measure);
		let percentageThroughStave = (beatsPassed % this.beats_per_measure) / this.beats_per_measure;
		for(let note of this.notes_on_staff){
			var x = (stavesPassed + percentageThroughStave) * this.staveWidth;
			let jquery_note = $(note.attrs.el)[0]
			let jquery_note_bar = $(note.attrs.el).prev('path')[0]
			let x_y = this.getTransformXY(jquery_note)
			x_y.x = -x;
			jquery_note.setAttribute('transform', `translate(${x_y.x},${x_y.y})`);
			if (jquery_note_bar) {
				jquery_note_bar.setAttribute('transform', `translate(${x_y.x},${x_y.y})`);
			}
		}
		this.animation_id = window.requestAnimationFrame(this.step.bind(this));
	}

	getTransformXY(html_element) {
		var xforms = html_element.getAttribute('transform');
		if(xforms === null){
			return {x: 0, y: 0};
		}
		var parts  = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(xforms);
		return {
			x: parseInt(parts[1]),
			y: parseInt(parts[2])
		}
	}

	pause() {
		this.timing.pause()
		window.cancelAnimationFrame(this.animation_id);
	}

	resume() {
		this.timing.resume()
		this.animation_id = window.requestAnimationFrame(this.step.bind(this))
	}

}
