export default class StaveUpdater {
	constructor(renderer_context, staveWidth, key, bars, beats_per_measure, beat_value, name, scheduled_notes) {
		this.context = renderer_context;
		this.context.setFont("Arial", 3, "").setBackgroundFillStyle("#eed");
		this.key = key;
		this.bars = bars;
		this.scheduled_notes = scheduled_notes;
		this.beats_per_measure = beats_per_measure;
		this.beat_value = beat_value;
		this.name = name;
		this.scaling_factor = document.getElementById("boo").offsetWidth / 1280;

		let keySigInfo = key_signatures.getKeySignatureInfo(key);
		let keySigNotesCount = Object.keys(keySigInfo.notes).length;
		this.keySigStaffWidth = 80 + keySigNotesCount * 10;
		this.staveWidth = staveWidth;
		this.totalNotes = 0;
		this.correctNotes = 0;

		let leftPadding = 20 * this.scaling_factor;
		let keySigStaff = new VexFlow.Flow.Stave(leftPadding, 0 , this.keySigStaffWidth);
		//keySigStaff.options.spacing_between_lines_px = 15 * this.scaling_factor;
		keySigStaff.addClef('treble');
		keySigStaff.addTimeSignature(String(this.beats_per_measure).concat("/").concat(String(this.beat_value)));

		let keySig = new VexFlow.Flow.KeySignature(this.key.replace(' major', '').replace(' minor', 'm'));
		keySig.addToStave(keySigStaff);
		keySigStaff.setContext(this.context).draw();
		for (let col = 0; col < 3; col++) {
			let horiz_offset =  leftPadding + this.keySigStaffWidth + this.staveWidth * col;
			let staff = new VexFlow.Flow.Stave(horiz_offset, 0, this.staveWidth);
			//staff.options.spacing_between_lines_px = 15 * this.scaling_factor;
			staff.setContext(this.context).draw();
			// Create a voice in 4/4 and add above notes
			let voice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
			voice.setStrict(false);
			voice.draw(this.context, staff);
		}
	}

	start() {
	}

	pause() {
	}

	draw(timing_bar) {
		let timeInMs = Timing.getTimeSinceStart();
		let bps = timing_bar.beats_per_minute / 60;
		let beatsPassed = (timeInMs * bps) / (1000);
		let stavesPassed = Math.floor(beatsPassed / timing_bar.beats_per_measure);
		let percentageThroughStave = (beatsPassed % timing_bar.beats_per_measure) / timing_bar.beats_per_measure;
		let pos = getPosition(stavesPassed, percentageThroughStave, 20 * timing_bar.scaling_factor, timing_bar.staveHeight, timing_bar.staveWidth, timing_bar.key_sig_staff_width);
		if (timing_bar.has_drawn_rect) {
			timing_bar.clearLastChild();
		}
		timing_bar.rendering_context.beginPath();
		timing_bar.rendering_context.rect(pos.width, pos.height, 10 * timing_bar.scaling_factor, timing_bar.staveHeight);
		timing_bar.rendering_context.closePath();
		timing_bar.has_drawn_rect = true;
	}

	resume() {
		this.start();
	}

	clearLastChild() {

	}
}
