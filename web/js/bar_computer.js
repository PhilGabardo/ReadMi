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

var multi_length_map = {
	1.25 : [1, 0.25],
	2.25 : [2, 0.25],
	2.5 : [2, 0.5],
	2.75 : [2, 0.5, 0.25],
	4.75: [4, 0.5, 0.25],
	5 : [4, 1],
}

function getBars(notes) {
	var sum = 0;
	var bars = [];
	var current_bar = [];
	for (var i = 0; i < notes.length; i++) {
		var note = notes[i];
		var quarterLength = parseFloat(note.quarterLength);
		var length = parseFloat(quarterLength) * (beat_value / 4.0);
		var length_breakdown = multi_length_map[quarterLength] ? multi_length_map[quarterLength] : [quarterLength];
		for (var j = 0; j < length_breakdown.length; j++) {
			var noteStruct = {clef: "treble", keys: [note.name.concat("/").concat(String(note.octave))],
				duration: timing_map[length_breakdown[j]]};
			var staveNote = new VF.StaveNote(noteStruct);
			for (var dot_count = 0; dot_count < dot_count_map[length_breakdown[j]]; dot_count++) {
				staveNote.addDot(0);
			}
			current_bar.push(staveNote);
			sum += length_breakdown[j] * (beat_value / 4.0);
			var leftover_bars = 0;
			while (sum > 2 * beats_per_measure) {
				leftover_bars++;
				sum -= beats_per_measure;
			}
			if (sum > beats_per_measure) {
				bars.push(current_bar);
				current_bar = [];
				var remainder = (sum - beats_per_measure) * (4.0 / beat_value);
				var _length_breakdown = multi_length_map[remainder] ? multi_length_map[remainder] : [remainder];
				for (var k = 0; k < _length_breakdown.length; k++) {
					var ghostStruct = {clef: "treble",
						duration: ghost_timing_map[_length_breakdown[k]]};
					current_bar.push(new VF.GhostNote(ghostStruct));
				}
				sum -= beats_per_measure;
			} else if (sum === beats_per_measure) {
				sum = 0;
				bars.push(current_bar);
				current_bar = [];
			}
			for (var k = 0; k < leftover_bars; k++) {
				bars.push([]);
			}
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
