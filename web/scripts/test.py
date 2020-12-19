#!/usr/bin/env python

import sys

if len(sys.argv) != 4:
	print("Invalid args.")
	exit

midi_url = sys.argv[1]
midi_temp_filename = sys.argv[2]
start_hash = sys.argv[3]

import requests
import music21
from music21 import *
import urllib.request
import json
import os

output = {}

try:
	urllib.request.urlretrieve(midi_url, midi_temp_filename)
	piece = converter.parse(midi_temp_filename)
	os.remove(midi_temp_filename)
	vexFlow = {}
	notes = []
	part = piece.chordify()
	notes = []
	for note in part.recurse().notes:
		if isinstance(note, music21.chord.Chord):
			note.sortChromaticAscending()
			pitch = note.pitches[-1]
			notes.append({'is_note': True, 'name': pitch.name.replace('-', 'b'), 'octave': pitch.octave, 'quarterLength': str(note.quarterLength)})
		else:
			notes.append({'is_note': note.isNote, 'name': note.name.replace('-', 'b'), 'octave': note.octave, 'quarterLength': str(note.quarterLength)})
	if len(notes) > 0:
		output['name'] = midi_url
		output['keySignature'] = part.keySignature.name.replace('-', 'b')
		output['beatValue'] = part.timeSignature.denominator
		output['beatsPerMeasure'] = part.timeSignature.numerator
		output['notes'] = notes
except Exception as e:
	output['error'] = 'There was an error parsing the midi. Please try another.'
print(start_hash + json.dumps(output))
