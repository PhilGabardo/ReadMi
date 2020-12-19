#!/usr/bin/env python
import requests
import music21
from music21 import *
import urllib.request
import json

try:
	urllib.request.urlretrieve('https://www.8notes.com/digital_tradition/midi_dtrad/TITANIC6.midi', '1.mid')
	piece = converter.parse('1.mid')
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
		key_signature = part.keySignature.name.replace('-', 'b')
		row = ['Custom Song', part.keySignature.name.replace('-', 'b'), part.timeSignature.denominator, part.timeSignature.numerator, json.dumps(notes)]
		print(json.dumps(row))
except Exception as e:
	print(e)
