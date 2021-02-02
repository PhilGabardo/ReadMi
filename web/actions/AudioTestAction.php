<?php
namespace Actions;


use ReadMi\BarComputer;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class AudioTestAction extends LoggedOutAction {

	CONST KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

	protected static function _execute(Application $app, Request $request): string {
		$notes = [];
		$instrument = $request->get('instrument', 'piano');
		$highest_note_num = \Instruments::MAX_PLAYABLE_NOTE_INDEX[$instrument];
		$lowest_note_num = \Instruments::MIN_PLAYABLE_NOTE_INDEX[$instrument];
		for ($i = $highest_note_num; $i >= $lowest_note_num; $i--) {
			$notes[] = \Instruments::getNoteFromIndex($i) + [
					'is_note' => true,
					'quarterLength' => '0.5'
				];
		}
		$bars = BarComputer::getBars($notes, 'C major', 4, 4, $instrument === 'piano');

		return $app['twig']->render('play_song_demo.twig', [
			's' => [
				"name" => "Audio Test",
				"key_signature" => "C major",
				"beat_value" => 4,
				"beats_per_measure" => 4,
			],
			'is_demo' => true,
			'song_id' => 0,
			'instrument' => $instrument,
			'bars' => json_encode($bars),
		]);
	}
}
