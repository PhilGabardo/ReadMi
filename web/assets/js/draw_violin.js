// This class represents the fretboard
export default class Violin {
	constructor(canvas, numberOfFrets=7) {
		this.numberOfFrets = numberOfFrets;
		let width = window.orientation == 0 ? window.innerHeight : window.innerWidth;
		this.width = 1000;
		this.canvas = canvas;

		// this is an approxumation of the tempered scale
		// geometric progression ratio 2^(1/12)
		this.ratio = 0.94;
		this.frets = new Array();
		this.drawFretboard();
	}

	drawFret(entry) {
		entry.draw();
	}

	drawNote(fret, string, undo) {
		if (undo) {
			if (fret == -1) {
				for (let i = 0; i < this.frets.length; i++) {
					this.frets[i].drawString(string);
				}
			} else {
				this.frets[fret].draw();
			}
		} else {
			if (fret == -1) {
				for (let i = 0; i < this.frets.length; i++) {
					this.frets[i].markString(string);
				}
			} else {
				this.frets[fret].mark(string);
			}
		}
	}


	drawFretboard() {
		// inizializza i Frets
		let starting_width = this.width / this.numberOfFrets;
		let offset = 0;
		for (let i = 0; i < this.numberOfFrets; i++) {
			var width = starting_width * Math.pow(this.ratio, i + 1);
			this.frets[i] = new Fret(offset, width, this.canvas);
			this.frets[i].pallino = false;
			offset += width;
		}

		this.frets.forEach(this.drawFret);
	}
}

class Fret {
	constructor(start, width, canvas, dot) {
		this.start= start;
		this.width = width;
		this.canvas = canvas;
		this.dot = dot;
		this.ctx = canvas.getContext('2d');
	}

	markString(string) {
		this.ctx.fillStyle = 'red';
		this.ctx.beginPath();
		this.ctx.fillRect(this.start, this.findString(string), this.width, 2);
		this.ctx.closePath();
	}

	draw() {
		// the neck
		this.drawNeck()
		// the strings
		for (let i = 0; i < 4; i++) {
			this.drawString(i)
		}
	}

	drawNeck() {
		this.ctx.fillStyle = theme.neck; //"#807050";
		this.ctx.beginPath();
		this.ctx.fillRect(this.start, 0, this.width, this.canvas.height);
		this.ctx.closePath();
	}

	drawString(string) {
		// the strings
		this.ctx.fillStyle = theme.string;
		this.ctx.beginPath();
		this.ctx.fillRect(this.start, this.findString(string), this.width, 2);
		this.ctx.closePath();
	}

	mark(string) {
		this.ctx.beginPath();
		this.ctx.fillStyle = 'red';
		this.ctx.arc(this.start + this.width / 2, this.findString(string) , 7, 0, 2 * Math.PI);
		this.ctx.fill();
		this.ctx.closePath();
	}

	findString(number) {
		return 13 + 20 * number;
	}
}

// theme based on burlywood http://www.colorhexa.com/deb887
const theme = {
	neck: '#221709',
	dot: '#808080',
	fret: '#e2c196',
	string: '#fcf8f3',
	fundamental: '#87deb8',
	scale: '#87adde'
};
