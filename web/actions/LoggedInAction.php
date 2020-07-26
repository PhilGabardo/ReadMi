<?php

namespace Actions;
use PDO;


abstract class LoggedInAction extends ReadMiAction {
	protected static function expectsLoggedIn(): bool {
		return true;
	}

	protected static function getSongData($app, $is_premium_user) {
		$st = $app['pdo']->prepare('SELECT name, artist, key_signature, beat_value, beats_per_measure, is_premium FROM readmi_songs ORDER BY name ASC');
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
		return [
			'enabled_songs' => $enabled_songs,
			'disabled_songs' => $disabled_songs,
			'key_signatures' => array_unique($key_signatures),
			'time_signatures' => array_unique($time_signatures),
		];
	}
}
