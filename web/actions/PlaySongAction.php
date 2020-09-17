<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use PDO;
use ReadMi\BarComputer;

class PlaySongAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$user_info = self::getUserInfo($app);
		$instrument = $user_info['instrument'];
		$instrument_data = json_decode($user_info["{$instrument}_data"], true);
		$id = str_replace("'", "''", $request->get('id')); // handles songs with quotes
		$st = $app['pdo']->prepare("SELECT name, key_signature, beat_value, beats_per_measure, notes, piano  FROM readmi_songs where id = $id");
		$st->execute();
		$song_row = $st->fetch(PDO::FETCH_ASSOC);
		$bars = BarComputer::getBars(json_decode($song_row['notes'], true), $song_row['key_signature'],
			(float)$song_row['beat_value'], (float) $song_row['beats_per_measure']);
		return $app['twig']->render('play_song.twig', [
				's' => $song_row,
				'is_demo' => false,
				'song_id' => $id,
				'bpm_requirement' => self::getBPMRequirement($instrument_data['level'], $song_row['beat_value']),
				'bars' => json_encode($bars),
				'instrument' => $instrument,
			] + self::getLoggedInData($app, false));
	}
}
