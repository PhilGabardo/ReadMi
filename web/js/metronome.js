function playSound(context, bpm, i, total_beats) {
	_playSound(context)
	setTimeout(function () {                     //  ..  setTimeout()
		if (i === beats_per_measure) {
			playAlong(Date.now(), beats_per_minute, beats_per_measure, beat_value, {});
			drawTimingBar(Date.now(), beats_per_minute, beats_per_measure, beat_value, {});
		}
		if (i++ < total_beats + beats_per_measure) {
			playSound(context, bpm, i, total_beats)
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
