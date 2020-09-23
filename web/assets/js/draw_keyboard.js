export default class KeyBoardDrawer {

	constructor(canvas) {
		this.ctx = canvas.getContext("2d");
		this.width = canvas.width;
		this.height = canvas.height;
	}

	init() {
		for (let i = 0; i < 52; i++) {
			this.drawWhiteKey(i, false);
		}

		this.drawBlackKey(0, false);

		// now draw all the rest of the black keys...
		// loop through all 7 octaves
		let numOctaves = 7;
		let curWhiteNoteIndex = 2;

		for (let octave = 0; octave < numOctaves; octave++) {
			// and draw 5 black notes per octave...
			for (let i = 0; i < 5; i++) {
				this.drawBlackKey(curWhiteNoteIndex, false);
				if (i == 1 || i == 4)
					curWhiteNoteIndex += 2;
				else
					curWhiteNoteIndex += 1;
			}
		}
	}

	drawRectWithBorder(X, Y, Width, Height, Color1, Color2) {

		//draw border
		this.ctx.fillStyle = Color1;
		this.ctx.fillRect(X, Y, Width, Height);

		//draw inside
		this.ctx.fillStyle = Color2;
		this.ctx.fillRect(X + 1, Y + 1, Width - 2, Height - 2);
	}

	drawBlackKey(whiteKeyIndex, shouldBeRed = false) {

		if (!shouldBeRed) {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(50,50,50)";		// ??

			this.drawRectWithBorder(((whiteKeyIndex + 1) * (this.width / 52)) - ((this.width / 52) * 0.75 / 2), 0, (this.width / 52) * 0.75, this.height * 0.66, C1, C2);

		}
		else {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(255,0,0)";		// red

			this.drawRectWithBorder(((whiteKeyIndex + 1) * (this.width / 52)) - ((this.width / 52) * 0.75 / 2), 0, (this.width / 52) * 0.75, this.height * 0.66, C1, C2);

		}
	}

	drawWhiteKey(WhiteKeyIndex, shouldBeRed = false) {

		if (!shouldBeRed) {

			let C1 = "rgb(0,0,0)";			// lback
			let C2 = "rgb(255,255,255)";	// white

			this.drawRectWithBorder((WhiteKeyIndex * (this.width / 52)), 0, (this.width / 52), this.height, C1, C2);

		} else {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(255,0,0)";		// red

			this.drawRectWithBorder((WhiteKeyIndex * (this.width / 52)), 0, (this.width / 52), this.height, C1, C2);

		}
	}

	drawRedKey(index, undo) {
		let beforeKeyInfo = this.absoluteToKeyInfo(index - 1);
		let afterKeyInfo = this.absoluteToKeyInfo(index + 1);
		let keyInfo = this.absoluteToKeyInfo(index + 1);

		let keyLookup = this.absoluteToKeyInfo(index);
		if (keyLookup.is_black) {
			if (beforeKeyInfo.is_black) {
				this.drawBlackKey(beforeKeyInfo.white_index, false)
			}
			if (afterKeyInfo.is_black) {
				this.drawBlackKey(afterKeyInfo.white_index, false)
			}
			this.drawBlackKey(keyLookup.white_index, !undo);
		} else {
			this.drawWhiteKey(keyLookup.white_index, !undo);
			if (beforeKeyInfo.is_black) {
				this.drawBlackKey(beforeKeyInfo.white_index, false)
			}
			if (afterKeyInfo.is_black) {
				this.drawBlackKey(afterKeyInfo.white_index, false)
			}
		}
	}

	undoDrawRedKey(index) {
		this._undoDrawRedKey(index-1)
		this._undoDrawRedKey(index)
		this._undoDrawRedKey(index+1)
	}

	_undoDrawRedKey(index) {
		let keyLookup = this.absoluteToKeyInfo(index);
		if (keyLookup.is_black) {
			this.drawBlackKey(keyLookup.white_index, false);
		} else {
			this.drawWhiteKey(keyLookup.white_index, false);
		}
	}

	absoluteToKeyInfo(AbsoluteNoteNum) {

		var KeyLookupTable = new Array(88);

		KeyLookupTable[0] = {is_black: false, white_index: 0};			// a
		KeyLookupTable[1] = {is_black: true, white_index: 0};			// a#
		KeyLookupTable[2] = {is_black: false, white_index: 1};			// b
		let base = 3;

		let NumOctaves = 8
		for (let counter = 0; counter < NumOctaves; counter++) {
			let octave_offset = 7 * counter;

			KeyLookupTable[base + 0] = {is_black: false, white_index: octave_offset + 2}; // c
			KeyLookupTable[base + 1] = {is_black: true, white_index: octave_offset + 2}; // c#
			KeyLookupTable[base + 2] = {is_black: false, white_index: octave_offset + 3}; // d
			KeyLookupTable[base + 3] = {is_black: true, white_index: octave_offset + 3}; // d#
			KeyLookupTable[base + 4] = {is_black: false, white_index: octave_offset + 4}; // e
			KeyLookupTable[base + 5] = {is_black: false, white_index: octave_offset + 5}; // f
			KeyLookupTable[base + 6] = {is_black: true, white_index: octave_offset + 5}; // f#
			KeyLookupTable[base + 7] = {is_black: false, white_index: octave_offset + 6}; // g
			KeyLookupTable[base + 8] = {is_black: true, white_index: octave_offset + 6}; // g#
			KeyLookupTable[base + 9] = {is_black: false, white_index: octave_offset + 7}; // a
			KeyLookupTable[base + 10] = {is_black: true, white_index: octave_offset + 7};  // a#
			KeyLookupTable[base + 11] = {is_black: false, white_index: octave_offset + 8}; // b

			base += 12;
		}

		return KeyLookupTable[AbsoluteNoteNum];
	}
}
/*
// canvas 		- HTML5 canvas element
// RedKeyArray  - array of keys to color red (0 = low a, 87 = high c, proceeding chromatically)
function DrawKeyboard(canvas, RedKeyArray) {

	// general characteristics of a piano

	var TOTAL_KEYS = 88;
	var NUM_WHITE_KEYS = 52;
	var NUM_BLACK_KEYS = TOTAL_KEYS - NUM_WHITE_KEYS;

	var ctx = canvas.getContext("2d");

	var X_BORDER = 0;
	var Y_BORDER = 0;

	var width = canvas.width - (X_BORDER * 2);
	var height = canvas.height - (Y_BORDER * 2);

	var WHITE_KEY_WIDTH = (width / NUM_WHITE_KEYS);
	var WHITE_KEY_HEIGHT = height;

	var BLACK_KEY_WIDTH = WHITE_KEY_WIDTH * .75
	var BLACK_KEY_HEIGHT = height * .66

	function DrawRectWithBorder(X, Y, Width, Height, Color1, Color2) {

		//draw border
		ctx.fillStyle = Color1;
		ctx.fillRect(X, Y, Width, Height);

		//draw inside
		ctx.fillStyle = Color2;
		ctx.fillRect(X + 1, Y + 1, Width - 2, Height - 2);

	}

	// draws a back key, based on whiteKeyIndex, where 0 <= WhiteKeyIndex < 52
	function drawBlackKey(whiteKeyIndex, shouldBeRed = false) {

		if (!shouldBeRed) {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(50,50,50)";		// ??

			DrawRectWithBorder(X_BORDER + ((whiteKeyIndex + 1) * WHITE_KEY_WIDTH) - (BLACK_KEY_WIDTH / 2), Y_BORDER, BLACK_KEY_WIDTH, BLACK_KEY_HEIGHT, C1, C2);

		}
		else {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(255,0,0)";		// red

			DrawRectWithBorder(X_BORDER + ((whiteKeyIndex + 1) * WHITE_KEY_WIDTH) - (BLACK_KEY_WIDTH / 2), Y_BORDER, BLACK_KEY_WIDTH, BLACK_KEY_HEIGHT, C1, C2);

		}

	}

	function DrawWhiteKey(WhiteKeyIndex, shouldBeRed = false) {

		if (!shouldBeRed) {

			let C1 = "rgb(0,0,0)";			// lback
			let C2 = "rgb(255,255,255)";	// white

			DrawRectWithBorder(X_BORDER + (WhiteKeyIndex * WHITE_KEY_WIDTH), Y_BORDER, WHITE_KEY_WIDTH, height, C1, C2);

		} else {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(255,0,0)";		// red

			DrawRectWithBorder(X_BORDER + (WhiteKeyIndex * WHITE_KEY_WIDTH), Y_BORDER, WHITE_KEY_WIDTH, height, C1, C2);

		}
	}

	function keyType(isBlack, White_Index) {
		this.isBlack = isBlack;
		this.White_Index = White_Index
	}

	function AbsoluteToKeyInfo(AbsoluteNoteNum) {

		var KeyLookupTable = new Array(TOTAL_KEYS);

		KeyLookupTable[0] = new keyType(false, 0);			// a
		KeyLookupTable[1] = new keyType(true, 0);			// a#
		KeyLookupTable[2] = new keyType(false, 1);			// b
		let base = 3;

		let NumOctaves = 8
		for (let counter = 0; counter < NumOctaves; counter++) {
			let octave_offset = 7 * counter;

			KeyLookupTable[base + 0] = new keyType(false, octave_offset + 2); // c
			KeyLookupTable[base + 1] = new keyType(true, octave_offset + 2); // c#
			KeyLookupTable[base + 2] = new keyType(false, octave_offset + 3); // d
			KeyLookupTable[base + 3] = new keyType(true, octave_offset + 3); // d#
			KeyLookupTable[base + 4] = new keyType(false, octave_offset + 4); // e
			KeyLookupTable[base + 5] = new keyType(false, octave_offset + 5); // f
			KeyLookupTable[base + 6] = new keyType(true, octave_offset + 5); // f#
			KeyLookupTable[base + 7] = new keyType(false, octave_offset + 6); // g
			KeyLookupTable[base + 8] = new keyType(true, octave_offset + 6); // g#
			KeyLookupTable[base + 9] = new keyType(false, octave_offset + 7); // a
			KeyLookupTable[base + 10] = new keyType(true, octave_offset + 7)  // a#
			KeyLookupTable[base + 11] = new keyType(false, octave_offset + 8); // b

			base += 12;
		}

		return KeyLookupTable[AbsoluteNoteNum];
	}


	// just draw in all the white keys to begin with...
	for (let i = 0; i < NUM_WHITE_KEYS; i++) {
		DrawWhiteKey(i, false);
	}


	// now draw specially white keys that need to be red...
	// just loop through all the RedKeyArray
	for (let index = 0; index <= TOTAL_KEYS; index++) {
		// and if we find any white keys that are supposed to be red, then draw them in red...
		if (RedKeyArray.includes(index)) {
			let KeyLookup = AbsoluteToKeyInfo(index);
			if (!KeyLookup.isBlack)
				DrawWhiteKey(KeyLookup.White_Index, true);
		}
	}

	// draw in lowest a# manually (making sure to draw it red if it should be)
	let LowestShouldBeRed = RedKeyArray.includes(1);
	drawBlackKey(0, LowestShouldBeRed);

	// now draw all the rest of the black keys...
	// loop through all 7 octaves
	let numOctaves = 7;
	let curWhiteNoteIndex = 2;

	for (let octave = 0; octave < numOctaves; octave++) {
		// and draw 5 black notes per octave...
		for (let i = 0; i < 5; i++) {
			drawBlackKey(curWhiteNoteIndex, false);
			if (i == 1 || i == 4)
				curWhiteNoteIndex += 2;
			else
				curWhiteNoteIndex += 1;
		}
	}


	// now draw specially black keys that need to be red...
	// just loop through all the RedKeyArray
	for (let index = 0; index <= 88; index++) {
		// and if we find any black keys that are supposed to be red, then draw them in red...
		if (RedKeyArray.includes(index)) {
			let KeyLookup = AbsoluteToKeyInfo(index);
			if (KeyLookup.isBlack)
				drawBlackKey(KeyLookup.White_Index, true);
		}
	}
}

export default {
	drawKeyboard: DrawKeyboard
}
*/
