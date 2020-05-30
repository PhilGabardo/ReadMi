import NoteTiming from './note_timing'

export default class NoteScheduler {
	constructor(vf_bars, beat_value, beats_per_measure) {
		this.note_percentages = [];
		for (let i = 0; i < vf_bars.length; i++) {
			let notes = vf_bars[i];
			if (notes.length === 0) {
				this.note_percentages[i] = [];
				continue;
			}
			this.note_percentages[i] = [{note: notes[0], percentage: 0}];
			let accumuluated_percented = 0;
			for (let j = 0; j < notes.length; j++) {
				accumuluated_percented += NoteTiming.getDurationAsPercentage(notes[j].duration, notes[j].dots, beat_value, beats_per_measure);
				if (j !== notes.length - 1) {
					this.note_percentages[i].push({note: notes[j + 1], percentage: accumuluated_percented});
				}
			}
		}
	}

	getScheduledNotes() {
		return this.note_percentages;
	}
}
