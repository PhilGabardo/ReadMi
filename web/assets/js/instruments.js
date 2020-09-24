function getInstrumentKeyOffset(instrument) {
	let key_offsets = {
		'guitar': 12,
		'clarinet': 2,
		'bass_clarinet': 14,
		'soprano_saxophone': 2,
		'alto_saxophone': 9,
		'tenor_saxophone': 14,
		'french_horn': 7,
		'trumpet': 2,
		'piano': 0,
		'singing': 0,
	}
	return key_offsets[instrument];
}

function getInstrumentFingering(instrument) {
	let fingering_map = {
		'guitar': 'guitar',
		'piccolo': 'picolo',
		'clarinet': 'clarinet',
		'bass_clarinet': 'clarinet',
		'soprano_saxophone': 'saxophone',
		'alto_saxophone': 'saxophone',
		'tenor_saxophone': 'saxophone',
		'baritone_saxophone': 'saxophone',
		'french_horn': 'trumpet',
		'trumpet': 'trumpet',
		'xylophone': 'xylophone',
		'glockenspiel': 'glockenspiel',
		'piano': 'piano',
	}
	return fingering_map[instrument];
}



export default {
	getInstrumentKeyOffset: getInstrumentKeyOffset,
	getInstrumentFingering: getInstrumentFingering,
}
