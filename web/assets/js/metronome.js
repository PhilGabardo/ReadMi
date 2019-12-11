function playSound(context, audioStreamController, score_renderer, bpm, step_offset, beats_per_measure, total_beats, i) {
	if ($('#metronome-enabled').is(":checked")) {
		_playSound(context)
	}
	setTimeout(function () {                     //  ..  setTimeout()
		if (i === beats_per_measure) {
			score_renderer.playAlong(Date.now(), context, bpm, step_offset);
			score_renderer.drawTimingBar(Date.now(), audioStreamController, bpm, step_offset);
		}
		if (i++ < total_beats + beats_per_measure) {
			playSound(context, audioStreamController, score_renderer, bpm, step_offset, beats_per_measure, total_beats, i)
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

export default {
	playSound: playSound
}
