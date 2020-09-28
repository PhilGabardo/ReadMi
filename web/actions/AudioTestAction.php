<?php
namespace Actions;


use ReadMi\BarComputer;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class AudioTestAction extends LoggedOutAction {

	CONST KEYS = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

	protected static function _execute(Application $app, Request $request): string {
		$notes = [];
		$octave_start = $request->get('octave_start', 5);
		for ($octave = $octave_start; $octave >= 2; $octave--) {
			foreach (array_reverse(self::KEYS) as $key) {
				$notes[] = [
					'is_note' => true,
					'name' => $key,
					'octave' => $octave,
					'quarterLength' => '0.5'
				];
			}
		}
		$bars = BarComputer::getBars($notes, 'C major', 4, 4, true);

		return $app['twig']->render('play_song_demo.twig', [
			's' => [
				"name" => "Audio Test",
				"key_signature" => "C major",
				"beat_value" => 4,
				"beats_per_measure" => 4,
			],
			'is_demo' => true,
			'song_id' => 0,
			'bpm_requirement' => 0,
			'instrument' => 'piano',
			'bars' => json_encode($bars),
		]);
	}
}
