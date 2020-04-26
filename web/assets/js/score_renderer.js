import VexFlow from 'vexflow';
import key_signatures from './key_signatures'
import bar_computer from './bar_computer'
import note_player from './note_player'
import note_detection from './note_detection'
import key_comparison from './key_comparison'
import NoteHinter from './note_hinter'
import Instruments from './instruments'

export default class ScoreRenderer {
	constructor(key, bars, beats_per_measure, beat_value, name) {
		var renderer = new VexFlow.Flow.Renderer(document.getElementById("boo"), VexFlow.Flow.Renderer.Backends.SVG);
		this.context = renderer.getContext();
		renderer.resize(window.innerWidth * 0.9, 3000);
		this.context.setFont("Arial", 3, "").setBackgroundFillStyle("#eed");
		this.key = key;
		this.bars = bars;
		this.vf_bars = bar_computer.getVFBars(this.bars);
		this.beats_per_measure = beats_per_measure;
		this.beat_value = beat_value;
		this.name = name;
		this.note_hinter = new NoteHinter()
		var hintOffsetTop = document.getElementById("boo").offsetTop - getStaveHeight() / 2;

		var keySigInfo = key_signatures.getKeySignatureInfo(key);
		var keySigNotesCount = Object.keys(keySigInfo.notes).length;
		this.keySigStaffWidth = 80 + keySigNotesCount * 10;
		this.staveWidth = (window.innerWidth * 0.8 - this.keySigStaffWidth) / 3.0;

		var notePercentages = [];
		var playAlongNotePercentages = [];
		var noteHints = [];
		for (var i = 0; i < this.vf_bars.length; i++) {
			var notes = this.vf_bars[i];
			if (notes === undefined) {
				break;
			}
			notePercentages[i] = [{note: notes[0], percentage: 0}];
			playAlongNotePercentages[i] = [{note: notes[0], percentage: 0}];
			if (notes[0] && notes[0].attrs.type !== 'GhostNote') {
				noteHints.push({note: notes[0], offset_x: this.keySigStaffWidth + this.staveWidth * (i % 3), offset_y: hintOffsetTop + Math.floor(i / 3.0) * getStaveHeight()})
			}
			var accumuluated_percented = 0;
			for (var j = 0; j < notes.length; j++) {
				var percentage = getDurationAsPercentage(notes[j].duration, notes[j].dots, beat_value, beats_per_measure);
				accumuluated_percented += percentage;
				if (j !== notes.length - 1) {
					notePercentages[i].push({note: notes[j + 1], percentage: accumuluated_percented});
					playAlongNotePercentages[i].push({note: notes[j + 1], percentage: accumuluated_percented});
					if (notes[j + 1] && notes[j + 1].attrs.type !== 'GhostNote') {
						noteHints.push({note: notes[j + 1], offset_x: this.keySigStaffWidth + this.staveWidth * (i % 3) + accumuluated_percented * this.staveWidth, offset_y: hintOffsetTop + Math.floor(i / 3.0) * getStaveHeight()})
					}
				}
			}
		}
		this.notePercentages = notePercentages;
		this.playAlongNotePercentages = playAlongNotePercentages;
		this.noteHints = noteHints;
		this.totalNotes = 0;
		this.correctNotes = 0;
	}

	render() {
		var leftPadding = 20 * getScalingFactor();
		var staveHeight = getStaveHeight();
		var voices = [];
		for (var row = 0; row < (this.vf_bars.length / 3); row++) {
			var keySigStaff = new VexFlow.Flow.Stave(leftPadding, staveHeight * row, this.keySigStaffWidth);
			keySigStaff.options.spacing_between_lines_px = 10 * getScalingFactor();
			keySigStaff.addClef('treble');
			if (row === 0) {
				keySigStaff.addTimeSignature(String(this.beats_per_measure).concat("/").concat(String(this.beat_value)));
			}
			var keySig = new VexFlow.Flow.KeySignature(this.key);
			keySig.addToStave(keySigStaff);
			keySigStaff.setContext(this.context).draw();
			for (var col = 0; col < 3; col++) {
				var horiz_offset =  leftPadding + this.keySigStaffWidth + this.staveWidth * col;
				var staff = new VexFlow.Flow.Stave(horiz_offset, staveHeight * row, this.staveWidth);
				staff.options.spacing_between_lines_px = 10 * getScalingFactor();
				staff.setContext(this.context).draw();
				var notes = this.vf_bars[row * 3 + col];
				if (notes === undefined) {
					break;
				}
				// Create a voice in 4/4 and add above notes
				var voice = new VexFlow.Flow.Voice({num_beats: this.beats_per_measure,  beat_value: this.beat_value, resolution: VexFlow.Flow.RESOLUTION});
				voice.setStrict(false);
				voice.addTickables(notes);

				// Format and justify the notes to staveWidth pixels.
				var formatter = new VexFlow.Flow.Formatter();
				formatter.joinVoices([voice]).format([voice], this.staveWidth);
				var offset = 0;
				for (var i = 0; i < notes.length; i++) {
					formatter.tickContexts['array'][i].x = offset - 20; // 20 padding is always added for some reason
					var percentage = getDurationAsPercentage(notes[i].duration, notes[i].dots, this.beat_value, this.beats_per_measure);
					offset += percentage * this.staveWidth;
				}

				voice.draw(this.context, staff);

				// Render voice
				voices.push(voice);
			}
		}
		for (var i = 0; i < voices.length; i++) {
			var notes  = voices[i].getTickables();
			for (var j = 0; j < notes.length; j++) {
				notes[j].draw();
			}
		}
	}

	hintFirst(instrument) {
		this.note_hinter.hintNext(instrument, this.noteHints[0].note.getKeyProps()[0].key, this.noteHints[0].note.getKeyProps()[0].octave);
	}


	drawTimingBar (startTime, audio_stream_controller, beats_per_minute, instrument) {          //  create a loop function
		var that = this;
		setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			var timeInMs = Date.now() - startTime;
			var bps = beats_per_minute / 60;
			var beatsPassed = (timeInMs * bps) / (1000);
			var stavesPassed = Math.floor(beatsPassed / that.beats_per_measure);
			var percentageThroughStave = (beatsPassed % that.beats_per_measure) / that.beats_per_measure;
			var offset = ((beats_per_minute / that.beats_per_measure) / 20) * 0.1;
			var offsettedPercentageThroughStave = percentageThroughStave - offset;
			var offsettedStavesPassed = stavesPassed;
			if (offsettedPercentageThroughStave < 0) {
				if (stavesPassed == 0) {
					offsettedStavesPassed = 0;
				} else {
					offsettedStavesPassed -= 1;
					offsettedPercentageThroughStave = offsettedPercentageThroughStave + 1;
				}
			}
			if (that.notePercentages[offsettedStavesPassed][0] && that.notePercentages[offsettedStavesPassed][0].percentage < offsettedPercentageThroughStave) {
				var note = that.notePercentages[offsettedStavesPassed][0].note;
				that.notePercentages[offsettedStavesPassed].shift();
			} else {
				var note = null;

			}
			that.context.svg.removeChild(that.context.svg.lastChild);
			if (note) {
				if (note.attrs.type !== 'GhostNote') {
					var props = note.getKeyProps()[0];
					var key = props.key;
					var octave = props.octave;
					var expected_note = key_signatures.getOffsetNote(key, octave,  0 - Instruments.getInstrumentKeyOffset(instrument));
					var currentNote = note_detection.getNoteFromSamples(audio_stream_controller.getSamples(), audio_stream_controller.getBufferSize());
					var expected_freq = note_detection.getFrequencyForNote(expected_note.name, expected_note.octave);
					var actual_freq = note_detection.getFrequencyForNote(currentNote.key, currentNote.octave);
					if ((note.isRest() && currentNote.length === 0) || (currentNote && actual_freq === expected_freq)) {
						note.setStyle({fillStyle: "lightgreen", strokeStyle: "lightgreen"});
						that.correctNotes++;
					} else {
						note.setStyle({fillStyle: "red", strokeStyle: "red"});
					}
					that.totalNotes++;
					note.setContext(that.context)
					note.draw();
					that.noteHints.shift();
					if (that.noteHints[0]) {
						var next_note_props = that.noteHints[0].note.getKeyProps()[0];
						that.note_hinter.hintNext(instrument, next_note_props.key, next_note_props.octave)
					} else {
						that.note_hinter.stop();
					}
				}
			}
			var pos = getPosition(stavesPassed, percentageThroughStave, 20 * getScalingFactor(), getStaveHeight(), that.staveWidth, that.keySigStaffWidth);
			if ($('#autoscroll-enabled').is(":checked")) {
				scrollToNiceSpot(stavesPassed, percentageThroughStave, getStaveHeight())
			}
			that.context.beginPath();
			that.context.rect(pos.width, pos.height, 10 * getScalingFactor(), 120 * getScalingFactor());
			that.context.closePath()
			if (stavesPassed < that.bars.length) {            //  if the counter < 10, call the loop function
				that.drawTimingBar(startTime, audio_stream_controller, beats_per_minute, instrument);             //  ..  again which will trigger another
			} else {
				// TODO: make this fancier
				var r = confirm("You played " + that.correctNotes + " out of " + that.totalNotes + " notes correctly! Would you like to play again?");
				if (r == true) {
					$.ajax({
						type: "POST",
						url: "/replay_song",
						data: {
							song: {
								name: that.name,
								beat_value: that.beat_value,
								beats_per_measure: that.beats_per_measure,
								key_signature: that.key
							},
							bars: that.bars,
						},
						success: function() {
							location.reload();
						}
					});
				} else {
					window.location.href = "/";
				}
			}
		}, 3);
	}

	playAlong (startTime, audioContext, beats_per_minute, instrument) {          //  create a loop function
		var that = this;
		setTimeout(function () {    //  call a 3s setTimeout when the loop is called
			var timeInMs = Date.now() - startTime;
			var bps = beats_per_minute / 60;
			var beatsPassed = (timeInMs * bps) / (1000);
			var stavesPassed = Math.floor(beatsPassed / that.beats_per_measure);
			var percentageThroughStave = (beatsPassed % that.beats_per_measure) / that.beats_per_measure;
			if (that.playAlongNotePercentages[stavesPassed][0] && that.playAlongNotePercentages[stavesPassed][0].percentage < percentageThroughStave) {
				var note = that.playAlongNotePercentages[stavesPassed][0].note;
				that.playAlongNotePercentages[stavesPassed].shift();
			} else {
				var note = null;
			}
			if (note) {
				if (note.attrs.type !== 'GhostNote') {
					var props = note.getKeyProps()[0];
					var key = props.key;
					var octave = props.octave;
					var offsetNote = key_signatures.getOffsetNote(key, octave, 0 - Instruments.getInstrumentKeyOffset(instrument));
					if ($('#playalong-enabled').is(":checked")) {
						note_player.playNote(audioContext, offsetNote.name, offsetNote.octave);
					}
				}
			}
			if (stavesPassed <= that.bars.length) {            //  if the counter < 10, call the loop function
				that.playAlong(startTime, audioContext, beats_per_minute, instrument);             //  ..  again which will trigger another
			}                        //  ..  setTimeout()
		}, 3)
	}
}

function getDurationAsPercentage(duration, number_of_dots, beat_value, beats_per_measure) {
	var percentage;
	switch (duration) {
		case '16':
		case '16r':
			percentage = (beat_value / 4.0) / (4.0 * beats_per_measure);
			break;
		case '8':
		case '8r':
			percentage = (beat_value / 4.0) / (2.0 * beats_per_measure);
			break;
		case 'q':
		case 'qr':
			percentage = (beat_value / 4.0) / beats_per_measure;
			break;
		case 'h':
		case 'hr':
			percentage = (beat_value / 2.0) / beats_per_measure;
			break;
		case 'w':
		case 'wr':
			percentage = (beat_value) / beats_per_measure;
			break;
	}
	var dot_factor = 1;
	var multiplier = 0.5
	for (var dot_count = 0; dot_count < number_of_dots; dot_count++) {
		dot_factor += multiplier;
		multiplier = multiplier / 2;
	}
	percentage *= dot_factor;
	return percentage;
}

function getScalingFactor() {
	return window.innerWidth / 1280;
}

function getStaveHeight() {
	return 150 * getScalingFactor();
}



function getPosition(stavesPassed, percentageThroughStave, leftPadding, staveHeight, staveWidth, keySigStaffWidth) {
	var height = Math.floor(stavesPassed / 3) * staveHeight;
	var width = leftPadding + (stavesPassed % 3) * staveWidth + (percentageThroughStave * staveWidth);
	width += keySigStaffWidth;
	return {
		height: height,
		width: width,
	}
}

function scrollToNiceSpot(stavesPassed, percentageThroughStave, staveHeight) {
	if (stavesPassed < 3) {
		window.scrollTo(0, 0);
		return
	}
	var height = Math.floor(stavesPassed / 3) * staveHeight;
	var penalty = staveHeight - (((stavesPassed % 3) + percentageThroughStave) / 3) * staveHeight
	window.scrollTo(0, height - penalty)
}
