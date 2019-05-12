function playSound(context, bpm, i) {
	_playSound(context)
	setTimeout(function () {                     //  ..  setTimeout()
		if (i++ < 4) {
			playSound(context, bpm, i)
		} else {
			drawTimingBar(Date.now(), beats_per_minute, beats_per_measure, beat_value);
		}
		_playSound(context)
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
