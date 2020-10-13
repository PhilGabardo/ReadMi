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
