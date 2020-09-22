<?php

namespace Misc;

use ReadMi\BarComputer;
use ReadMi\KeySignatures;
use Silex\Application;

class DifficultyComputer {

	public static function updateLevels(Application $app) {

		$st = $app['pdo']->prepare("SELECT id, notes, key_signature, beat_value, beats_per_measure, piano FROM readmi_songs ORDER BY name ASC");
		$st->execute();
		$rows = $st->fetchAll();
		$piano_songs = [];
		$non_piano_songs = [];
		foreach ($rows as $row) {
			if ((int)$row['piano']) {
				$piano_songs[] = $row;
			} else {
				$non_piano_songs[] = $row;
			}
		}
		$piano_difficulty_map = self::getDifficultyMap($piano_songs);
		self::updateLevelsFromDifficultyMap($app, $piano_difficulty_map);
		$non_piano_difficulty_map = self::getDifficultyMap($non_piano_songs);
		self::updateLevelsFromDifficultyMap($app, $non_piano_difficulty_map);
	}

	private static function updateLevelsFromDifficultyMap(Application $app, array $difficulty_map) {
		asort($difficulty_map);
		$level = 1;
		$current_level_count = 0;
		$level_map = [];
		foreach ($difficulty_map as $id => $difficulty) {
			$level_map[$level][] = $id;
			$current_level_count++;
			if ($current_level_count > 10) {
				$level++;
				$current_level_count = 0;
			}
		}
		foreach ($level_map as $level => $ids) {
			$id_list = implode(',', $ids);
			$premium_list = array_slice($ids, 0, 3);
			$premium_list_str = implode(',', $premium_list);
			$st = $app['pdo']->prepare("UPDATE readmi_songs set level = $level where id in ($id_list)");
			$st->execute();
			$st = $app['pdo']->prepare("UPDATE readmi_songs set is_premium = 1 where id in ($premium_list_str)");
			$st->execute();
		}
	}

	private static function getDifficultyMap(array $songs) : array {
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
