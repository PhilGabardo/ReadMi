import VexFlow from 'vexflow';
function getVFBars(bars) {
	let VF = VexFlow.Flow;
	let vf_bars = [];
	// treble
	let total_area = 0.35 * (window.orientation == 0 ? window.innerWidth : window.innerHeight);
	let stave_height = total_area / 2;
	let spacing_between_lines_px = stave_height / 12;
	for (let i = 0; i < bars.length; i++) {
		let vf_bar = [];
		let bar = bars[i];
		for (let j = 0; j < bar.length; j++) {
			let note = bar[j];
			if (note.ghost) {
				vf_bar.push(new VF.GhostNote(note));
			} else {
				let staveNote = new VF.StaveNote(note);
				for (let k = 0; k < note.dot_count; k++) {
					staveNote.addDot(0);
				}
				if (note.accidental) {
					staveNote.addAccidental(0, new VF.Accidental(note.accidental));
				}
				vf_bar.push(staveNote);
			}
		}
		vf_bars.push(vf_bar);
	}
	return vf_bars;
}

export default {
	getVFBars: getVFBars
}

