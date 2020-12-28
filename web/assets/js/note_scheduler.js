import NoteTiming from './note_timing'

export default class NoteScheduler {
	constructor(vf_bars, beat_value, beats_per_measure, bpm) {
		this.note_percentages = [];
		let time_offset = 0;
		for (let i = 0; i < vf_bars.length; i++) {
			let notes = vf_bars[i];
			if (notes.length === 0) {
				//time_offset += beats_per_measure * (60 / bpm) * 1000;
				this.note_percentages[i] = [];
				continue;
			}
			this.note_percentages[i] = [{note: notes[0], percentage: 0, time_offset: time_offset}];
			let accumuluated_percented = 0;
			let better_time_offset = i * beats_per_measure * (60 / bpm);
			for (let j = 0; j < notes.length; j++) {
				let percentage = NoteTiming.getDurationAsPercentage(notes[j].duration, notes[j].dots, beat_value, beats_per_measure);
				time_offset += notes[j].attrs.type === 'GhostNote' ? 0 : percentage * beats_per_measure * (60 / bpm)
				better_time_offset += notes[j].attrs.type === 'GhostNote' ? 0 : percentage * beats_per_measure * (60 / bpm);
				accumuluated_percented += percentage;
				if (j !== notes.length - 1) {
					this.note_percentages[i].push({note: notes[j + 1], percentage: accumuluated_percented, time_offset: time_offset, better_time_offset: better_time_offset});
				}
			}
		}
	}

	getScheduledNotes() {
		return this.note_percentages;
	}
}
