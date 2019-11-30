<?php

class KeySignatures {
	const KEY_SIGNATURES = [
		'C' => [
			'type'=> '#',
			'notes'=> []
		],
		'G' => [
			'type'=> '#',
			'notes'=> ['F'=> true]
		],
		'D' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true]
		],
		'A' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true, 'G' => true]
		],
		'E' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true, 'G' => true, 'D' => true]
		],
		'B' => [
			'type'=> '#',
			'notes'=> ['F' => true, 'C' => true, 'G' => true, 'D' => true, 'A' => true]
		],
		'F' => [
			'type'=> 'b',
			'notes'=> ['B' => true]
		],
		'Bb' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true]
		],
		'Eb' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true]
		],
		'Ab' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true]
		],
		'Db' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true, 'G' => true]
		],
		'Gb' => [
			'type'=> 'b',
			'notes'=> ['B' => true, 'E' => true, 'A' => true, 'D' => true, 'G' => true, 'C' => true]
		]
	];

	public static function getKeySignatureInfo(string $key) {
		return self::KEY_SIGNATURES[$key];
	}
}

