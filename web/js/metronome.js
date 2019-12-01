function playSound(context, bpm, i, total_beats, step_offset) {
	if ($('#metronome-enabled').is(":checked")) {
		_playSound(context)
	}
	setTimeout(function () {                     //  ..  setTimeout()
		if (i === beats_per_measure) {
			playAlong(Date.now(), bpm, beats_per_measure, beat_value, step_offset);
			drawTimingBar(Date.now(), bpm, beats_per_measure, beat_value, step_offset);
		}
		if (i++ < total_beats + beats_per_measure) {
			playSound(context, bpm, i, total_beats, step_offset)
		}
	}, 60000/bpm)

}

function _playSound(context) {
	var o = context.createOscillator()
	var  g = context.createGain()
	o.connect(g)
	g.connect(context.destination)
	g.gain.exponentialRampToValueAtTime(
		0.00001, context.currentTime + 0.04
	)
	o.start(0)
}
