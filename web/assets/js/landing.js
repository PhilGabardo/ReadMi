import $ from 'jquery';
import selectize from 'selectize'
import VexFlow from 'vexflow';
// Create an SVG renderer and attach it to the DIV element named "boo".
let div = document.getElementById("sheet_sample");
let renderer = new VexFlow.Flow.Renderer(div, VexFlow.Flow.Renderer.Backends.SVG);

let staveWidth = Math.min(window.innerWidth * 0.9, 400)

// Size our SVG:
renderer.resize(staveWidth, 100);

// And get a drawing context:
let context = renderer.getContext();
// Create a stave at position 10, 40 of width 400 on the canvas.
let stave = new VexFlow.Flow.Stave(0, 0, staveWidth);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

let notes = [
	// A quarter-note C.
	new VexFlow.Flow.StaveNote({clef: "treble", keys: ["f/4"], duration: "q" }),

	// A quarter-note D.
	new VexFlow.Flow.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" }),

	// A quarter-note rest. Note that the key (b/4) specifies the vertical
	// position of the rest.
	new VexFlow.Flow.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }),

	// A C-Major chord.
	new VexFlow.Flow.StaveNote({clef: "treble", keys: ["e/5"], duration: "q" })
];

// Create a voice in 4/4 and add the notes from above
let voice = new VexFlow.Flow.Voice({num_beats: 4,  beat_value: 4});
voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
let formatter = new VexFlow.Flow.Formatter().joinVoices([voice]).format([voice], staveWidth - 20);

// Render voice
voice.draw(context, stave);

window.setTimeout(colorNote, 1000, notes[0], 1, context);
window.setTimeout(colorNote, 2000, notes[1], 1, context);
window.setTimeout(colorNote, 3000, notes[2], 1, context);
window.setTimeout(colorNote, 4000, notes[3], 1, context);


function colorNote(note, isGreen, rendering_context) {
	if (isGreen) {
		note.setStyle({fillStyle: "lightgreen", strokeStyle: "lightgreen"});
	} else {
		note.setStyle({fillStyle: "red", strokeStyle: "red"});
	}
	note.setContext(rendering_context);
	note.draw();
}

$('#instrument').on('change', (event) => {
	let instrument_param = '<input type="hidden" name="instrument" value="'+event.target.value+'">';
	$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="instrument_update">' + instrument_param + '</form>').appendTo($(document.body)).submit();
})
