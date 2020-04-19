function compareKeys(note1, note2) {
	var keyaliases = {
		'ab': 'g#',
		'a' : 'a',
		'a#' : 'bb',
		'bb' : 'a#',
		'b' : 'cb',
		'b#': 'c',
		'cb' : 'b',
		'c' : 'b#',
		'c#': 'db',
		'db' : 'c#',
		'd' : 'd',
		'd#' : 'eb',
		'eb' : 'd#',
		'e' : 'fb',
		'e#' : 'f',
		'fb' : 'e',
		'f' : 'f',
		'f#' : 'gb',
		'gb' : 'f#',
		'g' : 'g',
		'g#' : 'ab',
	}
	if (note1 == undefined || note2 == undefined) {
		return false;
	}
	return note1.toLowerCase() == note2.toLowerCase() || keyaliases[note1.toLowerCase()] == note2.toLowerCase();
}

function getKeyAsFlat(key) {
	var flat_map = {
		'ab': 'Ab',
		'a' : 'a',
		'a#' : 'Bb',
		'bb' : 'Bb',
		'b' : 'B',
		'cb' : 'B',
		'c' : 'C',
		'c#': 'Db',
		'db' : 'Db',
		'd' : 'D',
		'd#' : 'Eb',
		'eb' : 'Eb',
		'e' : 'Fb',
		'e#' : 'F',
		'fb' : 'E',
		'f' : 'F',
		'f#' : 'Gb',
		'gb' : 'Gb',
		'g' : 'G',
		'g#' : 'Ab',
	}
	return flat_map[key.toLowerCase()]
}

export default {
	compareKeys: compareKeys
}
