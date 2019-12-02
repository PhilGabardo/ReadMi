import note_detection from './note_detection'
function playNote(audioContext, noteName, octave, callback) {
	// TODO: variable duration based on note length
	var duration = 0.2;
	var frequency = note_detection.getFrequencyForNote(noteName, octave);

	// create Oscillator node
	var oscillator = audioContext.createOscillator();

	oscillator.type = 'square';
	oscillator.frequency.value = frequency; // value in hertz
	oscillator.connect(audioContext.destination);

	oscillator.onended = callback;
	oscillator.start(0);
	oscillator.stop(audioContext.currentTime + duration);
}

export default {
	playNote: playNote
}
