function getVFBars(bars) {
	var vf_bars = [];
	for (var i = 0; i < bars.length; i++) {
		var vf_bar = [];
		var bar = bars[i];
		for (var j = 0; j < bar.length; j++) {
			var note = bar[j];
			if (note.ghost) {
				vf_bar.push(new VF.GhostNote(note));
			} else {
				var staveNote = new VF.StaveNote(note);
				for (var k = 0; k < note.dot_count; k++) {
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
