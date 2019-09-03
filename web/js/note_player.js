function playNote(noteName, octave, callback) {
	// TODO: variable duration based on note length
	var duration = 0.2;
	var frequency = getFrequencyForNote(noteName, octave);

	// create Oscillator node
	var oscillator = audioContext.createOscillator();

	oscillator.type = 'square';
	oscillator.frequency.value = frequency; // value in hertz
	oscillator.connect(audioContext.destination);

	oscillator.onended = callback;
	oscillator.start(0);
	oscillator.stop(audioContext.currentTime + duration);
}
