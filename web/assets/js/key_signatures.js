import key_comparison from './key_comparison'

function getKeySignatureInfo(key) {
	// https://en.wikipedia.org/wiki/Key_signature
	var key_sigs = {
		'C' : {
			'type': '#',
			'notes': []
		},
		'G' : {
			'type': '#',
			'notes': {'F': true}
		},
		'D' : {
			'type': '#',
			'notes': {'F' : true, 'C' : true}
		},
		'A' : {
			'type': '#',
			'notes': {'F' : true, 'C' : true, 'G' : true}
		},
		'E' : {
			'type': '#',
			'notes': {'F' : true, 'C' : true, 'G' : true, 'D' : true}
		},
		'B' : {
			'type': '#',
			'notes': {'F' : true, 'C' : true, 'G' : true, 'D' : true, 'A' : true}
		},
		'F' : {
			'type': 'b',
			'notes': {'B' : true}
		},
		'Bb' : {
			'type': 'b',
			'notes': {'B' : true, 'E' : true}
		},
		'Eb' : {
			'type': 'b',
			'notes': {'B' : true, 'E' : true, 'A' : true}
		},
		'Ab' : {
			'type': 'b',
			'notes': {'B' : true, 'E' : true, 'A' : true, 'D' : true}
		},
		'Db' : {
			'type': 'b',
			'notes': {'B' : true, 'E' : true, 'A' : true, 'D' : true, 'G' : true}
		},
		'Gb' : {
			'type': 'b',
			'notes': {'B' : true, 'E' : true, 'A' : true, 'D' : true, 'G' : true, 'C' : true}
		}
	};
	return key_sigs[key];
}

function getOffsetNote(key, octave, offset) {
	var notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
	var startIndex = 0;
	for (var i = 0; i < notes.length; i++) {
		if (key_comparison.compareKeys(notes[i], key)) {
			startIndex = i;
			break;
		}
	}
	var offsetKey = notes[(notes.length + startIndex + offset) % notes.length];
	var offsetOctave = octave + Math.floor((startIndex + offset) / notes.length);
	return {
		"name": offsetKey,
		"octave": offsetOctave,
	};
}

export default {
	getKeySignatureInfo: getKeySignatureInfo,
	getOffsetNote: getOffsetNote
}

