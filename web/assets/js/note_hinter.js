import Instruments from './instruments';

export default class NoteHinter {

	constructor() {
		this.label = document.getElementById('note_hint_text');
		this.img = document.getElementById('note_hint_note');
	}

	hintNext(instrument, key, octave) {
		var hintKey = key[0];
		if (key.length > 1) {
			hintKey += "<sup>" + key[1].replace("B", '♭') + "</sup>"
		}
		this.label.innerHTML = hintKey + octave;
		this.img.style.display = 'block';
		this.img.src = '../../assets/images/' + Instruments.getInstrumentFingering(instrument) + '/' + octave + '/' + key.replace('#', 'sharp') + '.png';
	}

	stop() {
		this.label.innerHTML = "";
		this.img.style.display = "none";
	}
}
