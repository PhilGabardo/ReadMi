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
	8: "1/2"
}

var ghost_timing_map = {
	0.25 : "16",
	0.375 : "16d",
	0.4275 : "16dd",
	0.5 : "8",
	0.75 : "8d",
	0.875 : "8dd",
	1 : "q",
	1.5 : "qd",
	1.75 : "qdd",
	2 : "h",
	3 : "hd",
	3.5 : "hdd",
	3.75 : "hddd",
	4 : "w",
	6 : "wd",
	7 : "wdd",
	7.5 : "wddd",
	8 : "1/2",
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
	8 : 0,
}

function getBars(notes) {
	var sum = 0;
	var bars = [];
	var current_bar = [];
	for (var i = 0; i < notes.length; i++) {
		var note = notes[i];
		console.log(note);
		var length = parseFloat(note.quarterLength) * (4.0 / beat_value);
		console.log(length);
		var noteStruct = {clef: "treble", keys: [note.name.concat("/").concat(String(note.octave))],
			duration: timing_map[length]};
		console.log(noteStruct);
		var staveNote = new VF.StaveNote(noteStruct);
		for (var dot_count = 0; dot_count < dot_count_map[parseFloat(note.quarterLength)]; dot_count++) {
			staveNote.addDot(0);
		}
		current_bar.push(staveNote);
		sum += length;
		if (sum > beats_per_measure) {
			bars.push(current_bar);
			current_bar = [];
			var remainder = sum - beats_per_measure;
			var length = (sum - beats_per_measure) * 4.0 / beat_value;
			console.log(length);
			var ghostStruct = {clef: "treble",
				duration: ghost_timing_map[length]};
			current_bar.push(new VF.GhostNote(ghostStruct));
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
