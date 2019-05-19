var timing_map = {
	0.25 : "16",
	0.375 : "16",
	0.4275 : "16",
	0.5 : "8",
	0.75 : "8",
	0.875 : "8",
	1 : "q",
	1.5 : "q",
	1.75 : "q",
	2 : "h",
	3 : "h",
	3.5 : "h",
	3.75 : "h",
	4 : "w",
	6 : "w",
	7 : "w",
	7.5 : "w",
}

var dot_count_map = {
	0.25 : 0,
	0.375 : 1,
	0.4275 : 2,
	0.5 : 0,
	0.75 : 1,
	0.875 : 2,
	1 : 0,
	1.5 : 1,
	1.75 : 2,
	2 : 0,
	3 : 1,
	3.5 : 2,
	3.75 : 3,
	4 : 0,
	6 : 1,
	7 : 2,
	7.5 : 3,
}

function getBars(notes) {
	var sum = 0;
	var bars = [];
	var current_bar = [];
	for (var i = 0; i < notes.length; i++) {
		var note = notes[i];
		var length = parseFloat(note.quarterLength) * (beat_value / 4.0);
		var noteStruct = {clef: "treble", keys: [note.name.concat("/").concat(String(note.octave))],
			duration: timing_map[parseFloat(note.quarterLength)]};
		var staveNote = new VF.StaveNote(noteStruct);
		for (var dot_count = 0; dot_count < dot_count_map[note.quarterLength]; dot_count++) {
			staveNote.addDot(0);
		}
		current_bar.push(staveNote);
		sum += length;
		if (sum > beats_per_measure) {
			bars.push(current_bar);
			current_bar = [];
			var remainder = sum - beats_per_measure;
			var ghostNote = new VF.GhostNote({clef: "treble",
				duration: timing_map[(sum - beats_per_measure) * 4.0 / beat_value]});
			for (var dot_count = 0; dot_count < dot_count_map[note.quarterLength]; dot_count++) {
				ghostNote.addDot(0);
			}
			current_bar.push(ghostNote);
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
