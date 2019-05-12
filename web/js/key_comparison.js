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

function compareKeys(note1, note2) {
	if (note1 == undefined || note2 == undefined) {
		return false;
	}
	return note1.toLowerCase() == note2.toLowerCase() || keyaliases[note1.toLowerCase()] == note2.toLowerCase();
}
