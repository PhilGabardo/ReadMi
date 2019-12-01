VF = Vex.Flow;
var windowWidth = window.innerWidth;
var scalingFactor = windowWidth / 1280;
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
var context = renderer.getContext();// Configure the rendering context.
renderer.resize(windowWidth * 0.9, 3000);
context.setFont("Arial", 3, "").setBackgroundFillStyle("#eed");
var voices = [];
var notePercentages = {};
var playAlongNotePercentages = {};
var keySigStaffWidth;
var keySigInfo;
var staveHeight = 150 * scalingFactor;
var leftPadding = 20 * scalingFactor;

function createStaff(key, bars) {

	// key signature staff
	keySigInfo = getKeySignatureInfo(key);
	var keySigNotesCount = Object.keys(keySigInfo.notes).length;
	keySigStaffWidth = 80 + keySigNotesCount * 10;
	staveWidth = (windowWidth * 0.8 - keySigStaffWidth) / 3.0;
	for (var row = 0; row < (bars.length / 3); row++) {
		var keySigStaff = new Vex.Flow.Stave(leftPadding, staveHeight * row, keySigStaffWidth);
		keySigStaff.options.spacing_between_lines_px = 10 * scalingFactor;
		keySigStaff.addClef('treble')
		if (row === 0) {
			keySigStaff.addTimeSignature(String(beats_per_measure).concat("/").concat(String(beat_value)));
		}
		var keySig = new VF.KeySignature(key);
		keySig.addToStave(keySigStaff);
		keySigStaff.setContext(context).draw();
		for (var col = 0; col < 3; col++) {
			var horiz_offset =  leftPadding + keySigStaffWidth + staveWidth * col;
			var staff = new Vex.Flow.Stave(horiz_offset, staveHeight * row, staveWidth);
			staff.options.spacing_between_lines_px = 10 * scalingFactor;
			staff.setContext(context).draw();
			var notes = bars[row * 3 + col];
			if (notes === undefined) {
				break;
			}
			// Create a voice in 4/4 and add above notes
			var voice = new VF.Voice({num_beats: beats_per_measure,  beat_value: beat_value, resolution: VF.RESOLUTION});
			voice.setStrict(false);
			voice.addTickables(notes);

			// Format and justify the notes to staveWidth pixels.
			var formatter = new VF.Formatter();
			formatter.joinVoices([voice]).format([voice], staveWidth);
			var offset = 0;
			var accumuluated_percented = 0;
			notePercentages[row * 3 + col] = [{note: notes[0], percentage: 0}];
			playAlongNotePercentages[row * 3 + col] = [{note: notes[0], percentage: 0}];
			for (var i = 0; i < notes.length; i++) {
				formatter.tickContexts['array'][i].x = offset - 20; // 20 padding is always added for some reason
				var percentage = getDurationAsPercentage(notes[i].duration, notes[i].dots, beat_value, beats_per_measure);
				accumuluated_percented += percentage;
				if (i !== notes.length - 1) {
					notePercentages[row * 3 + col].push({note: notes[i + 1], percentage: accumuluated_percented});
					playAlongNotePercentages[row * 3 + col].push({note: notes[i + 1], percentage: accumuluated_percented});
				}
				offset += percentage * staveWidth;
			}

			voice.draw(context, staff);

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

function playAlong (startTime, beats_per_minute, beats_per_measure, beat_value, step_offset) {          //  create a loop function
	setTimeout(function () {    //  call a 3s setTimeout when the loop is called
		var timeInMs = Date.now() - startTime;
		var bps = beats_per_minute / 60;
		var beatsPassed = (timeInMs * bps) / (1000);
		var stavesPassed = Math.floor(beatsPassed / beats_per_measure);
		var percentageThroughStave = (beatsPassed % beats_per_measure) / beats_per_measure;
		if (playAlongNotePercentages[stavesPassed][0] && playAlongNotePercentages[stavesPassed][0].percentage < percentageThroughStave) {
			var note = playAlongNotePercentages[stavesPassed][0].note;
			playAlongNotePercentages[stavesPassed].shift();
		} else {
			var note = null;
		}
		if (note) {
			if (note.attrs.type !== 'GhostNote') {
				var props = note.getKeyProps()[0];
				var key = props.key;
				var octave = props.octave;
				var offsetNote = getOffsetNote(key, octave, 0 - step_offset);
				if ($('#playalong-enabled').is(":checked")) {
					playNote(offsetNote.name, offsetNote.octave);
				}
			}
		}
		if (stavesPassed <= vf_bars.length) {            //  if the counter < 10, call the loop function
			playAlong(startTime, beats_per_minute, beats_per_measure, beat_value, step_offset);             //  ..  again which will trigger another
		}                        //  ..  setTimeout()
	}, 3)
}

function drawTimingBar (startTime, beats_per_minute, beats_per_measure, beat_value, step_offset) {          //  create a loop function
	setTimeout(function () {    //  call a 3s setTimeout when the loop is called
		var timeInMs = Date.now() - startTime;
		var bps = beats_per_minute / 60;
		var beatsPassed = (timeInMs * bps) / (1000);
		var stavesPassed = Math.floor(beatsPassed / beats_per_measure);
		var percentageThroughStave = (beatsPassed % beats_per_measure) / beats_per_measure;
		var offset = ((beats_per_minute / beats_per_measure) / 20) * 0.1;
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
		if (notePercentages[offsettedStavesPassed][0] && notePercentages[offsettedStavesPassed][0].percentage < offsettedPercentageThroughStave) {
			var note = notePercentages[offsettedStavesPassed][0].note;
			notePercentages[offsettedStavesPassed].shift();
		} else {
			var note = null;
		}
		context.svg.removeChild(context.svg.lastChild);
		if (note) {
			if (note.attrs.type !== 'GhostNote') {
				var props = note.getKeyProps()[0];
				var key = props.key;
				var octave = props.octave;
				var currentNote = getNoteFromSamples(sixteenthNoteSamples);
				var offsetNote = getOffsetNote(currentNote.key, currentNote.octave, step_offset);
				if ((note.isRest() && currentNote.length === 0) || (currentNote && compareKeys(offsetNote.name, key) && offsetNote.octave === octave)) {
					note.setStyle({fillStyle: "lightgreen", strokeStyle: "lightgreen"});
					correctNotes++;
				} else {
					note.setStyle({fillStyle: "red", strokeStyle: "red"});
				}
				totalNotes++;
				note.setContext(context)
				note.draw();
			}
		}
		var pos = getPosition(stavesPassed, percentageThroughStave);
		if ($('#autoscroll-enabled').is(":checked")) {
			scrollToNiceSpot(stavesPassed, percentageThroughStave)
		}
		context.beginPath();
		context.rect(pos.width, pos.height, 10 * scalingFactor, 120 * scalingFactor);
		context.closePath()
		if (stavesPassed < vf_bars.length) {            //  if the counter < 10, call the loop function
			drawTimingBar(startTime, beats_per_minute, beats_per_measure, beat_value, step_offset);             //  ..  again which will trigger another
		} else {
			// TODO: make this fancier
			var r = confirm("You played " + correctNotes + " out of " + totalNotes + " notes correctly! Would you like to play again?");
			if (r == true) {
				$.ajax({
					type: "POST",
					url: "/replay_song",
					data: {
						song: {
							name: name,
							beat_value: beatValue,
							beats_per_measure: beatsPerMeasure,
							key_signature: keySignature,
							notes: notes,
						},
						bars: bars,
					},
					success: function() {
						location.reload();
					}
				});
			} else {
				window.location.href = "/";
			}
		}
	}, 3)
}

function getPosition(stavesPassed, percentageThroughStave) {
	var height = Math.floor(stavesPassed / 3) * staveHeight;
	var width = leftPadding + (stavesPassed % 3) * staveWidth + (percentageThroughStave * staveWidth);
	width += keySigStaffWidth;
	return {
		height: height,
		width: width,
	}
}

function scrollToNiceSpot(stavesPassed, percentageThroughStave) {
	if (stavesPassed < 3) {
		window.scrollTo(0, 0);
		return
	}
	var height = Math.floor(stavesPassed / 3) * staveHeight;
	var penalty = staveHeight - (((stavesPassed % 3) + percentageThroughStave) / 3) * staveHeight
	window.scrollTo(0, height - penalty)
}
