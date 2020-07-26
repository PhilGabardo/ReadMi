<?php

namespace ReadMi;


class BarComputer {
	const TIMING_MAP = [
		'0.25' => "16",
		'0.375' => "16",
		'0.4275' => "16",
		'0.5' => "8",
		'0.75' => "8",
		'0.875' => "8",
		'1' => "q",
		'1.5' => "q",
		'1.75' => "q",
		'2' => "h",
		'3' => "h",
		'3.5' => "h",
		'3.75' => "h",
		'4' => "w",
		'6' => "w",
		'7' => "w",
		'7.5' => "w",
	];
	
	const GHOST_TIMING_MAP = [
		'0.25' => "16",
		'0.375' => "16d",
		'0.4275' => "16dd",
		'0.5' => "8",
		'0.75' => "8d",
		'0.875' => "8dd",
		'1' => "q",
		'1.5' => "qd",
		'1.75' => "qdd",
		'2' => "h",
		'3' => "hd",
		'3.5' => "hdd",
		'3.75' => "hddd",
		'4' => "w",
		'6' => "wd",
		'7' => "wd",
		'7.5' => "wddd",
	];
	
	const DOT_COUNT_MAP = [
		'0.25' => 0,
		'0.375' => 1,
		'0.4275' => 2,
		'0.5' => 0,
		'0.75' => 1,
		'0.875' => 2,
		'1' => 0,
		'1.5' => 1,
		'1.75' => 2,
		'2' => 0,
		'3' => 1,
		'3.5' => 2,
		'3.75' => 3,
		'4' => 0,
		'6' => 1,
		'7' => 2,
		'7.5' => 3,
	];
	
	const NATURAL_NOTES_STATE = [
		'A' => 'n',
		'B' => 'n',
		'C' => 'n',
		'D' => 'n',
		'E' => 'n',
		'F' => 'n',
		'G' => 'n',
	];

	public static function getBars(array $notes, string $key, float $beat_value, float $beats_per_measure) {
		$sum = 0;
		$bars = [];
		$current_bar = [];
		$key_signature_info = KeySignatures::getKeySignatureInfo($key);
		$default_notes_state = self::NATURAL_NOTES_STATE;
		foreach ($key_signature_info['notes'] as $note => $_) {
			$default_notes_state[$note] = $key_signature_info['type'];
		}
		$current_notes_state = $default_notes_state;
		for ($i = 0; $i < count($notes); $i++) {
			$note = $notes[$i];
			$quarter_length = (float)$note['quarterLength'];
			if ($quarter_length == 0) {
				continue;
			}
			$length_breakdown = self::getLengthBreakdown($quarter_length);
			for ($j = 0; $j < count($length_breakdown); $j++) {
				$note_struct = [
					'clef' => 'treble',
					'keys' => [$note['name'] . '/' . $note['octave']],
					'duration' => self::TIMING_MAP[(string)$length_breakdown[$j]],
					'dot_count' => self::DOT_COUNT_MAP[(string)$length_breakdown[$j]],
				];
				$accidental = $note['name'][1] ?? 'n';
				if ($current_notes_state[$note['name'][0]] != $accidental) {
					$note_struct['accidental'] = $accidental;
					$current_notes_state[$note['name'][0]] = $accidental;
				}
				$current_bar[] = $note_struct;
				$sum += $length_breakdown[$j] * ($beat_value / 4.0);
				$leftover_bars = 0;
				while ($sum > 2 * $beats_per_measure) {
					$leftover_bars++;
					$sum -= $beats_per_measure;
				}
				if ($sum > $beats_per_measure) {
					$bars[] = $current_bar;
					$current_bar = [];
					$current_notes_state = $default_notes_state;
					$remainder = ($sum - $beats_per_measure) * (4.0 / $beat_value);
					$_length_breakdown = self::getLengthBreakDown($remainder);
					for ($k = 0; $k < count($_length_breakdown); $k++) {
						$ghost_struct = [
							'clef' => "treble",
							'duration' => self::GHOST_TIMING_MAP[(string)$_length_breakdown[$k]],
							'ghost' => true,
						];
						$current_bar[] = $ghost_struct;
					}
					$sum -= $beats_per_measure;
				}
				if ($sum === $beats_per_measure) {
					$sum = 0;
					$bars[] = $current_bar;
					$current_bar = [];
					$current_notes_state = $default_notes_state;
				}
				for ($k = 0; $k < $leftover_bars; $k++) {
					$bars[] = [];
				}
			}
		}
		if (count($current_bar) > 0) {
			$bars[] = $current_bar;
		}
		while (count($bars) % 3 !== 0) {
			$bars[] = [];
		}
		return $bars;
	}

	private static function getLengthBreakdown(float $quarter_length) {
		$understood_lengths = array_map(function ($key) { return (float) $key; }, array_keys(self::TIMING_MAP));
		usort($understood_lengths, function ($a, $b) {
			return $b > $a;
		});
		$breakdown = [];
		$remaining = $quarter_length;
		while ($remaining > 0) {
			foreach ($understood_lengths as $understood_length) {
				if ($remaining > $understood_length || $remaining == $understood_length) {
					$breakdown[] = $understood_length;
					$remaining = $remaining - $understood_length;
					break;
				}
			}
		}
		return $breakdown;
	}

}
