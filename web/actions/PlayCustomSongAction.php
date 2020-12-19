<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use ReadMi\BarComputer;
use Instruments;

class PlayCustomSongAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$user_info = self::getUserInfo($app);
		$midi_url = $request->get('midi_url');
		if (!filter_var($midi_url, FILTER_VALIDATE_URL)) {
			return json_encode(['error' => 'Invalid URL!']);
		}
		$midi_filename = "{$user_info['id']}.mid";
		$hash = '128739128731TEST123123';
		$output = shell_exec("python ../scripts/test.py {$midi_url} {$midi_filename} {$hash} 2>&1");
		$start_pos = mb_strpos($output, $hash) + mb_strlen($hash);
		$actual_output = json_decode(mb_substr($output, $start_pos), true);
		if (isset($actual_output['error'])) {
			return json_encode($actual_output);
		}

		$instrument = $user_info['instrument'];
		$max_note_index = Instruments::getMaxIndexForNotes($actual_output['notes']);
		$min_note_index = Instruments::getMinIndexForNotes($actual_output['notes']);
		if ($max_note_index > Instruments::MAX_PLAYABLE_NOTE_INDEX[$instrument] || $min_note_index < Instruments::MIN_PLAYABLE_NOTE_INDEX[$instrument]) {
			return json_encode(['error' => "This song contains notes that are outside of playable range of $instrument."]);
		}

		$song_row = [
			'notes' => $actual_output['notes'],
			'key_signature' => $actual_output['keySignature'],
			'beat_value' => $actual_output['beatValue'],
			'beats_per_measure' => $actual_output['beatsPerMeasure'],
			'name' => 'Custom Song',
		];
		$bars = BarComputer::getBars($song_row['notes'], $song_row['key_signature'],
			(float)$song_row['beat_value'], (float) $song_row['beats_per_measure'], $instrument == 'piano');
		return $app['twig']->render('play_song.twig', [
				's' => $song_row,
				'is_demo' => false,
				'song_id' => '',
				'bpm_requirement' => '',
				'bars' => json_encode($bars),
				'instrument' => $instrument,
			] + self::getLoggedInData($app, false));
	}
}
