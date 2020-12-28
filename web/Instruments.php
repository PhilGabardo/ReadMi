<?php

use Silex\Application;

class Instruments {

	public const MIN_PLAYABLE_NOTE_INDEX = [
		'piano' => 10, // A0
		'violin' => 43, // G3
		'guitar' => 40, // E3
		'alto_saxophone' => 46,
	];

	public const MAX_PLAYABLE_NOTE_INDEX = [
		'piano' => 96, // C8
		'violin' => 71, // B5
		'guitar' => 85, // D7
		'alto_saxophone' => 78,
	];
	
	private const NOTE_INDEX_MAP = [
		"C"=> 0,
		"C#"=> 1,
		"DB"=> 1,
		"D"=> 2,
		"D#"=> 3,
		"EB"=> 3,
		"E"=> 4,
		"F"=> 5,
		"F#"=> 6,
		"GB"=> 6,
		"G"=> 7,
		"G#"=> 8,
		"AB"=> 8,
		"A"=> 9,
		"A#"=> 10,
		"BB"=> 10,
		"B"=> 11,
	];

	private const INDEX_NOTE_MAP = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

	public static function computeMinMaxNoteIndexForSongs(Application $app) {
		$st = $app['pdo']->prepare("SELECT id, notes FROM readmi_songs ORDER BY name ASC");
		$st->execute();
		$rows = $st->fetchAll();
		$min_note_index_map = [];
		$max_note_index_map = [];
		foreach ($rows as $row) {
			$notes = json_decode($row['notes'], true);
			$min_index = self::getMinIndexForNotes($notes);
			$max_index = self::getMaxIndexForNotes($notes);
			$min_note_index_map[$min_index][] = $row['id'];
			$max_note_index_map[$max_index][] = $row['id'];
		}
		foreach ($min_note_index_map as $index => $ids) {
			$id_list = implode(',', $ids);
			$st = $app['pdo']->prepare("UPDATE readmi_songs set min_note_index = $index where id in ($id_list)");
			$st->execute();
		}
		foreach ($max_note_index_map as $index => $ids) {
			$id_list = implode(',', $ids);
			$st = $app['pdo']->prepare("UPDATE readmi_songs set max_note_index = $index where id in ($id_list)");
			$st->execute();
		}
	}

	public static function getMinIndexForNotes(array $notes) {
		$min_index = 100000;
		foreach ($notes as $note) {
			if ($note['name'] === 'rest'){
				continue;
			}
			$min_index = min($min_index, self::getIndexForNote($note['name'], $note['octave']));
		}
		return $min_index;
	}

	public static function getMaxIndexForNotes(array $notes) {
		$max_index = 0;
		foreach ($notes as $note) {
			if ($note['name'] === 'rest'){
				continue;
			}
			$max_index = max($max_index, self::getIndexForNote($note['name'], $note['octave']));
		}
		return $max_index;
	}
	
	
	private static function getIndexForNote(string $key, int $octave) {
		return 12 * $octave + self::NOTE_INDEX_MAP[strtoupper($key)];
	}

	public static function getNoteFromIndex(int $index) {
		$octave = floor($index / 12);
		$key = self::INDEX_NOTE_MAP[$index % 12];
		return [
			'octave' => $octave,
			'name' => $key
		];
	}

}
