import VexFlow from 'vexflow';
// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("sheet_sample");
var renderer = new VexFlow.Flow.Renderer(div, VexFlow.Flow.Renderer.Backends.SVG);

// Size our SVG:
renderer.resize(400, 100);

// And get a drawing context:
var context = renderer.getContext();
// Create a stave at position 10, 40 of width 400 on the canvas.
var stave = new VexFlow.Flow.Stave(0, 0, 400);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var notes = [
	// A quarter-note C.
	new VexFlow.Flow.StaveNote({clef: "treble", keys: ["f#/4"], duration: "q" }),

	// A quarter-note D.
	new VexFlow.Flow.StaveNote({clef: "treble", keys: ["a/4"], duration: "q" }),

	// A quarter-note rest. Note that the key (b/4) specifies the vertical
	// position of the rest.
	new VexFlow.Flow.StaveNote({clef: "treble", keys: ["c/5"], duration: "q" }),

	// A C-Major chord.
	new VexFlow.Flow.StaveNote({clef: "treble", keys: ["e/5"], duration: "q" })
];

// Create a voice in 4/4 and add the notes from above
var voice = new VexFlow.Flow.Voice({num_beats: 4,  beat_value: 4});
voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
var formatter = new VexFlow.Flow.Formatter().joinVoices([voice]).format([voice], 400);

// Render voice
voice.draw(context, stave);

window.setTimeout(colorNote, 1000, notes[0], 1, context);
window.setTimeout(colorNote, 2000, notes[1], 0, context);
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
