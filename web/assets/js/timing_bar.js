import Timing from './timing'

export default class TimingBar {
	constructor(rendering_context, stave_width, stave_height, beats_per_measure, beats_per_minute, key_sig_staff_width) {
		this.rendering_context = rendering_context;
		this.staveWidth = stave_width
		this.staveHeight = stave_height;
		this.beats_per_measure = beats_per_measure;
		this.beats_per_minute = beats_per_minute;
		this.func = null;
		this.key_sig_staff_width = key_sig_staff_width;
		this.scaling_factor = document.getElementById("boo").offsetWidth / 1280;
		this.has_drawn_rect = false;
	}

	start() {
		this.func = setInterval(this.draw, 100, this);
	}

	pause() {
		window.clearInterval(this.func);
	}

	draw(timing_bar) {
		let timeInMs = Timing.getTimeSinceStart();
		let bps = timing_bar.beats_per_minute / 60;
		let beatsPassed = (timeInMs * bps) / (1000);
		let stavesPassed = Math.floor(beatsPassed / timing_bar.beats_per_measure);
		let percentageThroughStave = (beatsPassed % timing_bar.beats_per_measure) / timing_bar.beats_per_measure;
		let pos = getPosition(stavesPassed, percentageThroughStave, 20 * timing_bar.scaling_factor, timing_bar.staveHeight, timing_bar.staveWidth, timing_bar.key_sig_staff_width);
		if (timing_bar.has_drawn_rect) {
			timing_bar.clearLastChild();
		}
		timing_bar.rendering_context.beginPath();
		timing_bar.rendering_context.rect(pos.width, pos.height, 10 * timing_bar.scaling_factor, timing_bar.staveHeight);
		timing_bar.rendering_context.closePath();
		timing_bar.has_drawn_rect = true;
	}

	resume() {
		this.start();
	}

	clearLastChild() {
		let lastChild = this.rendering_context.svg.querySelectorAll("rect");
		if (lastChild.length > 0) {
			this.rendering_context.svg.removeChild(lastChild[lastChild.length - 1]);
		}
	}

}

function getPosition(stavesPassed, percentageThroughStave, leftPadding, staveHeight, staveWidth, keySigStaffWidth) {
	let height = Math.floor(stavesPassed / 3) * staveHeight;
	let width = leftPadding + (stavesPassed % 3) * staveWidth + (percentageThroughStave * staveWidth);
	width += keySigStaffWidth;
	return {
		height: height,
		width: width,
	}
}

function getStaveHeight() {
	return 150 * getScalingFactor();
}
