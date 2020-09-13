<?php

namespace ReadMi;

class KeySignatures {
	const KEY_SIGNATURES = [
		'C major' => [
			'type'=> '#',
			'notes'=> []
		],
		'A minor' => [
			'type'=> '#',
			'notes'=> []
		],
		'G major' => [
			'type'=> '#',
			'notes'=> ['F'=> true]
		],
		'E minor' => [
			'type'=> '#',
			'notes'=> ['F'=> true]
		],
		'D major' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true]
		],
		'B minor' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true]
		],
		'A major' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true, 'G' => true]
		],
		'E major' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true, 'G' => true, 'D' => true]
		],
		'B major' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true, 'G' => true, 'D' => true, 'A' => true]
		],
		'F# minor' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'G' => true, 'C' => true]
		],
		'F# major' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'G' => true, 'A' => true, 'C' => true, 'D' => true, 'E' => true]
		],
		'C# major' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'G' => true, 'A' => true, 'C' => true, 'D' => true, 'E' => true, 'B' => true]
		],
		'F major' => [
			'type'=> 'b',
			'notes'=> ['B' => true]
		],
		'D minor' => [
			'type'=> 'b',
			'notes'=> ['B' => true]
		],
		'Bb major' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true]
		],
		'G minor' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true]
		],
		'Eb major' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true]
		],
		'C minor' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true]
		],
		'Ab major' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true]
		],
		'F minor' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true]
		],
		'Db major' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true, 'G' => true]
		],
		'Bb minor' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true, 'G' => true]
		],
		'Gb major' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true, 'G' => true, 'C' => true]
		],
		'Eb minor' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true, 'G' => true, 'C' => true]
		],
		'Cb major' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true, 'G' => true, 'C' => true, 'F' => true]
		],
		'Ab minor' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true, 'G' => true, 'C' => true, 'F' => true]
		]
	];

	public static function getKeySignatureInfo(string $key) {
		return self::KEY_SIGNATURES[$key];
	}
}

