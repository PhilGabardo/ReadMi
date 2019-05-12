var timing_map = {
	0.25 : "16",
	0.375 : "16d",
	0.5 : "8",
	0.75 : "8d",
	1 : "q",
	1.5 : "qd",
	2 : "h",
	3 : "hd",
	4 : "w"
}

function getBars(notes) {
	var sum = 0;
	var bars = [];
	var current_bar = [];
	for (var i = 0; i < notes.length; i++) {
		var note = notes[i];
		var length = parseFloat(note.quarterLength) * (beat_value / 4.0);
		var staveNote = new VF.StaveNote({clef: "treble", keys: [note.name.concat("/").concat(String(note.octave))],
			duration: timing_map[parseFloat(note.quarterLength)]});
		if (staveNote.dots === 1) {
			staveNote.addDot(0);
		}
		current_bar.push(staveNote);
		sum += length;
		if (sum > beats_per_measure) {
			bars.push(current_bar);
			current_bar = [];
			var remainder = sum - beats_per_measure;
			current_bar.push(new VF.GhostNote({clef: "treble",
				duration: timing_map[(sum - beats_per_measure) * 4.0 / beat_value]}));
			sum = remainder;
		} else if (sum === beats_per_measure) {
			sum = 0;
			bars.push(current_bar);
			current_bar = [];
		}
	}
	if (current_bar.length > 0) {
		bars.push(current_bar)
	}
	while (bars.length % 3 !== 0) {
		bars.push([])
	}
	return bars;
}
