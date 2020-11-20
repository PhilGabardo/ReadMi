<?php

namespace Actions;
use PDO;
use Stripe\Customer;
use Stripe\Stripe;
use Stripe\StripeClient;
use Stripe\Subscription;
use Instruments;


abstract class LoggedInAction extends ReadMiAction {

	protected const SONG_COMPLETION_NUMBER_PER_LEVEL = 5;

	protected const DEV_PUBLISHABLE_API_KEY = 'pk_test_51H3pcGKfc5hHCIGNNDlHnUBWKBHx45o0EpKq3VSU9HuqDTavTBz8ZfiCbcomqTRKDubfyNXofWZNEnvUduR0BHxX00I4zpqRNh';
	protected const REAL_PUBLISHABLE_API_KEY = 'pk_live_51H3pcGKfc5hHCIGNF7dL39ESkSR024XBiphRwIZP6E5CI4tWNa8iS7tB4SMNaVcSd5H7ivyNjv3b20UrnuM5wnrl007dXUBaxq';

	protected const DEV_SECRET_API_KEY = 'sk_test_51H3pcGKfc5hHCIGN7B5BYPgWAUcoXcCeez8xGDvd86rJuCzRAQIxw8BXzZduFJvlrzi5k5PNLvc99fXw4OmehSZy008cd5NUzR';
	protected const REAL_SECRET_API_KEY = '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';

	private const SELECTABLE_INSTRUMENTS = [
		'piano' => 'Piano',
		'guitar' => 'Guitar',
		'violin' => 'Violin',
		/*
		'alto_saxophone' => 'Alto Saxophone',
		'tenor_saxophone' => 'Tenor Saxophone',
		'soprano_saxophone' => 'Soprano Saxophone',
		'clarinet' => 'Clarinet',
		//'bass_clarinet' => 'Bass Clarinet',
		'french_horn' => 'French Horn',
		'trumpet' => 'Trumpet',*/
	];

	protected static function getPublishableKey() : string {
		return self::isDev() ? self::DEV_PUBLISHABLE_API_KEY : self::REAL_PUBLISHABLE_API_KEY;
	}

	protected static function getSecretKey() : string {
		return self::isDev() ? self::DEV_SECRET_API_KEY : self::REAL_SECRET_API_KEY;
	}

	protected static function expectsLoggedIn(): bool {
		return true;
	}

	protected static function getBPMRequirement(int $level, int $beat_value) : int {
		$multiplier = 10 + min(10, $level / 10);
		return floor($multiplier * $beat_value);
	}

	protected static function isPremiumUser($app) : bool {
		$customer = self::getStripeCustomer($app);
		$client = new StripeClient(self::getSecretKey());
		return $client->charges->all(['customer' => $customer->id])->count() === 1;
	}

	protected static function getStripeCustomer($app) {
		$api_key = self::getSecretKey();
		Stripe::setApiKey($api_key);
		$user_info = self::getUserInfo($app);
		try {
			$customer = Customer::retrieve($user_info['id']);
		} catch (\Exception $e) {
			$customer = Customer::create([
				'id' => $user_info['id']
			]);
		} finally {
			return $customer;
		}
	}

	protected static function getUserInfo($app) : array {
		$user_id = $_SESSION['id'];
		$st = $app['pdo']->prepare("SELECT * FROM readmi_users WHERE id = {$user_id}");
		$st->execute();
		$user_info = $st->fetch(PDO::FETCH_ASSOC) ?: [];
		return $user_info;
	}

	protected static function getLoggedInData($app) {
		$user_info = self::getUserInfo($app);
		$is_premium_user = self::isPremiumUser($app);
		$instrument = $user_info['instrument'];
		$instrument_data = json_decode($user_info["{$instrument}_data"], true);
		$level = $instrument_data['level'];
		$completed_songs = array_flip($instrument_data['completed_songs']);
		$is_piano = $instrument === 'piano' ? 1 : 0;
		$max_note_index = Instruments::MAX_PLAYABLE_NOTE_INDEX[$instrument];
		$min_note_index = Instruments::MIN_PLAYABLE_NOTE_INDEX[$instrument];
		$st = $app['pdo']->prepare("SELECT id, name, level, artist, key_signature, beat_value, beats_per_measure, is_premium FROM readmi_songs WHERE piano = {$is_piano} and max_note_index <= {$max_note_index} and min_note_index >= {$min_note_index} ORDER BY level ASC");
		$st->execute();

		$key_signatures = [];
		$time_signatures = [];
		$enabled_songs = [];
		$disabled_songs = [];
		$completable_songs = [];

		while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
			$app['monolog']->addDebug('Row ' . $row['name']);
			$row['time_signature'] = $row['beats_per_measure'] . '/' . $row['beat_value'];
			$key_signatures[] = $row['key_signature'];
			$time_signatures[] = $row['time_signature'];
			$class = isset($completed_songs[$row['id']]) ? 'completed' : 'incomplete';
			if ($row['level'] <= $level || $is_premium_user) {
				$row['class'] = $class;
				$enabled_songs[] = $row;
			} else {
				$disabled_songs[] = $row;
			}
			if ($row['level'] == $level) {
				$completable_songs[] = [
					'name' => $row['name'],
					'bpm' => self::getBPMRequirement($level, $row['beat_value']),
					'class' => $class,
				];
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
			'is_premium' => $is_premium_user,
			'enabled_songs' => $enabled_songs,
			'disabled_songs' => $disabled_songs,
			'key_signatures' => array_unique($key_signatures),
			'time_signatures' => array_unique($time_signatures),
			'selectable_instruments' => self::SELECTABLE_INSTRUMENTS,
			'instrument' => $instrument,
			'level' => $level,
			'completable_songs' => $completable_songs,
		];
	}
}
