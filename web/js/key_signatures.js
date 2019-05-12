function getKeySignatureInfo(key) {
	// https://en.wikipedia.org/wiki/Key_signature
	var key_sigs = {
		'C' : {
			'type': 'sharp',
			'notes': []
		},
		'G' : {
			'type': 'sharp',
			'notes': {'F': true}
		},
		'D' : {
			'type': 'sharp',
			'notes': {'F' : true, 'C' : true}
		},
		'A' : {
			'type': 'sharp',
			'notes': {'F' : true, 'C' : true, 'G' : true}
		},
		'E' : {
			'type': 'sharp',
			'notes': {'F' : true, 'C' : true, 'G' : true, 'D' : true}
		},
		'B' : {
			'type': 'sharp',
			'notes': {'F' : true, 'C' : true, 'G' : true, 'D' : true, 'A' : true}
		},
		'F' : {
			'type': 'flat',
			'notes': {'B' : true}
		},
		'Bb' : {
			'type': 'flat',
			'notes': {'B' : true, 'E' : true}
		},
		'Eb' : {
			'type': 'flat',
			'notes': {'B' : true, 'E' : true, 'A' : true}
		},
		'Ab' : {
			'type': 'flat',
			'notes': {'B' : true, 'E' : true, 'A' : true, 'D' : true}
		},
		'Db' : {
			'type': 'flat',
			'notes': {'B' : true, 'E' : true, 'A' : true, 'D' : true, 'G' : true}
		},
		'Gb' : {
			'type': 'flat',
			'notes': {'B' : true, 'E' : true, 'A' : true, 'D' : true, 'G' : true, 'C' : true}
		}
	};
	return key_sigs[key];
}
