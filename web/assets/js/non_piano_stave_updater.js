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
		this.notes_queued_up = [];
		this.last_step_time = null;
		this.timing = new Timing();
		this.last_treble_stave = null;
		this.last_bass_stave = null;
	}

	renderForPiano() {
		// treble
		let total_area = Math.min(240, 0.35 * (window.orientation == 0 ? window.innerWidth : window.innerHeight));

		let stave_height = total_area / 2;
		let spacing_between_lines_px = stave_height / 12;

		let leftPadding = 20 * this.scaling_factor;
		let trebleKeySigStaff = new VexFlow.Flow.Stave(leftPadding, 0, this.keySigStaffWidth, {spacing_between_lines_px: spacing_between_lines_px});
		trebleKeySigStaff.addClef('treble');
		trebleKeySigStaff.addTimeSignature(String(this.beats_per_measure).concat("/").concat(String(this.beat_value)));
		let trebleKeySig = new VexFlow.Flow.KeySignature(this.key.replace(' major', '').replace(' minor', 'm'));
		trebleKeySig.addToStave(trebleKeySigStaff);
		trebleKeySigStaff.setContext(this.context).draw();

		//base
		let bassKeySigStaff = new VexFlow.Flow.Stave(leftPadding, stave_height, this.keySigStaffWidth, {spacing_between_lines_px: spacing_between_lines_px});
		bassKeySigStaff.addClef('bass');
		let baseKeySig = new VexFlow.Flow.KeySignature(this.key.replace(' major', '').replace(' minor', 'm'));
		baseKeySig.addToStave(bassKeySigStaff);
		bassKeySigStaff.setContext(this.context).draw();

		// draw 3 staves
		for (let col = 0; col < 4; col++) {
			let horiz_offset =  leftPadding + this.keySigStaffWidth + this.staveWidth * col;

			// treble
			let trebleStaff = new VexFlow.Flow.Stave(horiz_offset, 0, this.staveWidth, {spacing_between_lines_px: spacing_between_lines_px});
			trebleStaff.setContext(this.context).draw();

			// bass
			let bassStaff = new VexFlow.Flow.Stave(horiz_offset, stave_height, this.staveWidth, {spacing_between_lines_px: spacing_between_lines_px});
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
						this.notes_on_staff.push(scheduled_note)
					} else {
						bassNotes.push(new VexFlow.Flow.GhostNote({duration: scheduled_note.note.duration}));
						trebleNotes.push(scheduled_note.note)
						this.notes_on_staff.push(scheduled_note)
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
				this.last_treble_stave = trebleStaff;
				this.last_bass_stave = bassStaff;
			}
		}
		for (let i = 3; i < this.scheduled_notes.length; i++) {
			for (let j = 0; j < this.scheduled_notes[i].length; j++) {
				this.scheduled_notes[i][j]['subtract_staves'] = i;
			}
			this.notes_queued_up.push(this.scheduled_notes[i]);
		}
		this.context.beginPath();
		this.context.rect(leftPadding + this.keySigStaffWidth - 5 * this.scaling_factor, 0, 10 * this.scaling_factor, total_area);
		this.context.closePath();
	}

	renderForNonPiano() {
		// treble
		let total_area = Math.min(240, 0.35 * (window.orientation == 0 ? window.innerWidth : window.innerHeight));
		let stave_height = total_area / 2;
		let spacing_between_lines_px = stave_height / 12;

		// treble
		let leftPadding = 20 * this.scaling_factor;
		let trebleKeySigStaff = new VexFlow.Flow.Stave(leftPadding, total_area / 2 - stave_height / 2, this.keySigStaffWidth, {spacing_between_lines_px: spacing_between_lines_px});
		trebleKeySigStaff.addClef('treble');
		trebleKeySigStaff.addTimeSignature(String(this.beats_per_measure).concat("/").concat(String(this.beat_value)));
		let trebleKeySig = new VexFlow.Flow.KeySignature(this.key.replace(' major', '').replace(' minor', 'm'));
		trebleKeySig.addToStave(trebleKeySigStaff);
		trebleKeySigStaff.setContext(this.context).draw();

		for (let col = 0; col < 4; col++) {
			let horiz_offset =  leftPadding + this.keySigStaffWidth + this.staveWidth * col;

			// treble
			let trebleStaff = new VexFlow.Flow.Stave(horiz_offset, total_area / 2 - stave_height / 2, this.staveWidth, {spacing_between_lines_px: spacing_between_lines_px});
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
						this.notes_on_staff.push(scheduled_note)
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
				this.last_treble_stave = trebleStaff;
			}
		}
		for (let i = 3; i < this.scheduled_notes.length; i++) {
			for (let j = 0; j < this.scheduled_notes[i].length; j++) {
				this.scheduled_notes[i][j]['subtract_staves'] = i;
			}
			this.notes_queued_up.push(this.scheduled_notes[i]);
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
		let new_notes_on_staff = [];

		var x = (beatsPassed / this.beats_per_measure) * (this.staveWidth * 0.9996);

		var queued_note = this.notes_queued_up.length > 0 ? this.notes_queued_up[0][0] : [];
		let queued_note_stavesPassed = -1000000;
		if (queued_note) {
			var queued_note_time = queued_note.time_offset * 1000;
			var queued_note_time_diff = timeInMs - queued_note_time;
			let queued_note_beatsPassed = (queued_note_time_diff * bps) / (1000);
			queued_note_stavesPassed = queued_note_beatsPassed / this.beats_per_measure;
		}
		if (queued_note_stavesPassed > -2) {
			let queued_bar = this.notes_queued_up.shift()
			if (this.last_bass_stave !== null) {
				// draw note, add to staff
				// Create a voice in 4/4 and add the notes from above
				let trebleNotes = [];
				let bassNotes = [];
				let trebleVoice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
				trebleVoice.setStrict(false);
				let bassVoice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
				bassVoice.setStrict(false);
				let percentages = [];
				for (let scheduled_note of queued_bar) {
					percentages.push(scheduled_note.percentage)
					if (scheduled_note.note.attrs.type === 'GhostNote') {
						trebleNotes.push(scheduled_note.note);
						bassNotes.push(scheduled_note.note);
					} else if (scheduled_note.note.clef === 'bass') {
						bassNotes.push(scheduled_note.note);
						trebleNotes.push(new VexFlow.Flow.GhostNote({duration: scheduled_note.note.duration}))
						this.notes_on_staff.push(scheduled_note);
					} else {
						bassNotes.push(new VexFlow.Flow.GhostNote({duration: scheduled_note.note.duration}));
						trebleNotes.push(scheduled_note.note)
						this.notes_on_staff.push(scheduled_note);
					}
				}
				trebleVoice.addTickables(trebleNotes);
				bassVoice.addTickables(bassNotes);
				let trebleFormatter = new VexFlow.Flow.Formatter();
				let baseFormatter = new VexFlow.Flow.Formatter();
				trebleFormatter.joinVoices([trebleVoice]).format([trebleVoice], this.staveWidth);
				baseFormatter.joinVoices([bassVoice]).format([bassVoice], this.staveWidth);
				for (let i = 0; i < percentages.length; i++) {
					trebleFormatter.tickContexts['array'][i].x = (percentages[i] * this.staveWidth) - 20; // 20 padding is always added for some reason
					baseFormatter.tickContexts['array'][i].x = (percentages[i] * this.staveWidth) - 20;
				}
				trebleVoice.draw(this.context, this.last_treble_stave);
				bassVoice.draw(this.context, this.last_bass_stave);
			} else {
				// draw note, add to staff
				// Create a voice in 4/4 and add the notes from above
				let trebleNotes = [];
				let trebleVoice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
				trebleVoice.setStrict(false);
				let percentages = [];
				for (let scheduled_note of queued_bar) {
					percentages.push(scheduled_note.percentage)
					if (scheduled_note.note.attrs.type === 'GhostNote') {
						trebleNotes.push(scheduled_note.note);
					} else {
						trebleNotes.push(scheduled_note.note)
						this.notes_on_staff.push(scheduled_note);
					}
				}
				trebleVoice.addTickables(trebleNotes);
				let trebleFormatter = new VexFlow.Flow.Formatter();
				trebleFormatter.joinVoices([trebleVoice]).format([trebleVoice], this.staveWidth);
				for (let i = 0; i < percentages.length; i++) {
					trebleFormatter.tickContexts['array'][i].x = (percentages[i] * this.staveWidth) - 20; // 20 padding is always added for some reason
				}
				trebleVoice.draw(this.context, this.last_treble_stave);
			}
		}

		for(let note of this.notes_on_staff){
			let note_time_offset = note.time_offset * 1000;
			let note_time_diff = timeInMs - note_time_offset;
			let diffbeatsPassed = (note_time_diff * bps) / (1000);
			let diffstavesPassed = diffbeatsPassed / this.beats_per_measure;
			if (diffstavesPassed > 1.5) { // +1 for the countdown
				let jquery_note_bars = [];
				let jquery_note_bar = $(note.note.attrs.el).prev('path')[0]
				while (jquery_note_bar) {
					jquery_note_bars.push(jquery_note_bar)
					jquery_note_bar = $(jquery_note_bar).prev('path')[0]
				}
				for (let jquery_note_bar of jquery_note_bars) {
					jquery_note_bar.remove();
				}
				$(note.note.attrs.el)[0].remove()
				continue;
			}

			// get stave offset, and subtract from X if planted
			let beats = (note_time_offset * (101/60)) / (1000);
			let staves = Math.floor(beats / this.beats_per_measure);

			let _x = x;
			if (note.subtract_staves) {
				_x -= (note.subtract_staves - 2) * this.staveWidth;
			}


			let jquery_note = $(note.note.attrs.el)[0]
			let jquery_note_bars = [];
			let jquery_note_bar = $(note.note.attrs.el).prev('path')[0]
			while (jquery_note_bar) {
				jquery_note_bars.push(jquery_note_bar)
				jquery_note_bar = $(jquery_note_bar).prev('path')[0]
			}
			let x_y = this.getTransformXY(jquery_note)
			x_y.x = -_x;
			jquery_note.setAttribute('transform', `translate(${x_y.x},${x_y.y})`);
			for (let jquery_note_bar of jquery_note_bars) {
				jquery_note_bar.setAttribute('transform', `translate(${x_y.x},${x_y.y})`);
			}
			new_notes_on_staff.push(note)
		}
		this.notes_on_staff = new_notes_on_staff;
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
