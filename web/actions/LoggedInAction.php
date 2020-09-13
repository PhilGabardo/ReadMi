<?php

namespace Actions;
use PDO;


abstract class LoggedInAction extends ReadMiAction {

	private const SELECTABLE_INSTRUMENTS = [
		'piano' => 'Piano',
		'guitar' => 'Guitar',
		'alto_saxophone' => 'Alto Saxophone',
		'tenor_saxophone' => 'Tenor Saxophone',
		'soprano_saxophone' => 'Soprano Saxophone',
		'clarinet' => 'Clarinet',
		'bass_clarinet' => 'Bass Clarinet',
		'french_horn' => 'French Horn',
		'trumpet' => 'Trumpet',
	];

	protected static function expectsLoggedIn(): bool {
		return true;
	}

	protected static function getUserInfo($app) : array {
		$auth0 = ReadMiAction::getAuth0();
		$user_info = $auth0->getUser();
		$user_id = $user_info['sub'];
		$st = $app['pdo']->prepare("SELECT * FROM users WHERE oauth_id = '{$user_id}'");
		$st->execute();
		return $st->fetch(PDO::FETCH_ASSOC) ?: [];
	}

	protected static function getLoggedInData($app) {
		$user_info = self::getUserInfo($app);
		$is_premium_user = $user_info['is_premium'];
		$instrument = $user_info['instrument'];
		$is_piano = $instrument === 'piano' ? 1 : 0;

		$st = $app['pdo']->prepare("SELECT name, artist, key_signature, beat_value, beats_per_measure, is_premium FROM readmi_songs WHERE piano = {$is_piano} ORDER BY difficulty ASC");
		$st->execute();

		$key_signatures = [];
		$time_signatures = [];
		$enabled_songs = [];
		$disabled_songs = [];

		while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
			$app['monolog']->addDebug('Row ' . $row['name']);
			$row['time_signature'] = $row['beats_per_measure'] . '/' . $row['beat_value'];
			$key_signatures[] = $row['key_signature'];
			$time_signatures[] = $row['time_signature'];
			if ($is_premium_user || !$row['is_premium']) {
				$enabled_songs[] = $row;
			} else {
				$disabled_songs[] = $row;
			}
		}

		$selectable_instruments = [];
		foreach (self::SELECTABLE_INSTRUMENTS as $key => $val) {
			if ($key === $instrument) {
				$selectable_instruments[] = "<option value=\"$key\" selected>$val</option>";
			} else {
				$selectable_instruments[] = "<option value=\"$key\">$val</option>";
			}
		}

		return [
			'enabled_songs' => $enabled_songs,
			'disabled_songs' => $disabled_songs,
			'key_signatures' => array_unique($key_signatures),
			'time_signatures' => array_unique($time_signatures),
			'selectable_instruments' => self::SELECTABLE_INSTRUMENTS,
			'instrument' => $instrument,
		];
	}
}
