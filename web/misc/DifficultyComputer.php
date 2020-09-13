<?php

namespace Misc;

use ReadMi\BarComputer;
use ReadMi\KeySignatures;

class DifficultyComputer {

	public static function getDifficultyMap(array $songs) : array {
		$max_accidental_complexity = 0;
		$max_timing_complexity = 0;
		foreach ($songs as $song) {
			$key_signature = $song['key_signature'];
			$beat_value = $song['beat_value'];
			$beats_per_measure = $song['beats_per_measure'];
			$notes = json_decode($song['notes'], true);
			$bars = BarComputer::getBars($notes, $key_signature, $beat_value, $beats_per_measure);
			$norm_notes = self::array_flatten($bars);
			$max_timing_complexity = max($max_timing_complexity, self::getTimingComplexity($norm_notes, $beat_value));
			$max_accidental_complexity = max($max_accidental_complexity, self::getAccidentalComplexity($norm_notes));
		}
		$difficulty_map = [];
		foreach ($songs as $song) {
			$difficulty_map[$song['id']] = self::computeDifficulty($song, $max_accidental_complexity, $max_timing_complexity);
		}
		return $difficulty_map;
	}

	private static function computeDifficulty(array $song, float $max_accidental_complexity, float $max_timing_complexity) : float {
		$key_signature = $song['key_signature'];
		$beat_value = $song['beat_value'];
		$beats_per_measure = $song['beats_per_measure'];
		$notes = json_decode($song['notes'], true);
		$bars = BarComputer::getBars($notes, $key_signature, $beat_value, $beats_per_measure);
		$norm_notes = self::array_flatten($bars);
		$key_signature_complexity = self::getKeySignatureComplexity($key_signature);
		$accidental_complexity = self::getAccidentalComplexity($norm_notes) / $max_accidental_complexity;
		$timing_complexity = self::getTimingComplexity($norm_notes, $beat_value) / $max_timing_complexity;
		return ($key_signature_complexity + $accidental_complexity + $timing_complexity) / 3;

	}

	private static function getKeySignatureComplexity(string $key_signature) : float {
		$key_signature_info = KeySignatures::getKeySignatureInfo($key_signature);
		return count(array_keys($key_signature_info['notes'])) / 7;
	}

	private static function getAccidentalComplexity(array $norm_notes) : float {
		$notes_with_accidentals = array_filter($norm_notes, function (array $note) {
			return isset($note['accidental']);
		});
		return count($notes_with_accidentals) / count($norm_notes);
	}

	private static function getTimingComplexity(array $norm_notes, int $beat_value) : float {
		$sum_timing = array_sum(array_map(function (array $norm_note) use ($beat_value) {
			return (1 / (float)$norm_note['raw_duration']) * (4 / $beat_value);
		}, $norm_notes));
		$average_timing = $sum_timing / count($norm_notes);
		return $average_timing;
	}

	private static function array_flatten(array $array) {
		$return = [];
		foreach ($array as $k => $v) {
			$return = array_merge($return, $v);
		}
		return $return;
	}
}
