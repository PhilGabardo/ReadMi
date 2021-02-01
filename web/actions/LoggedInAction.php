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
		'alto_saxophone' => 'Alto Saxophone',
		/*
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

	protected static function getSubscriptionInfo($app) : array {
		$customer = self::getStripeCustomer($app);
		$subscriptions = $customer->subscriptions;
		if (!$subscriptions) {
			return [];
		}
		$subscriptions = $subscriptions->all()->data;
		if (!$subscriptions) {
			return [];
		}
		usort($subscriptions, function(Subscription $a, Subscription $b) {
			return $a->start_date > $b->start_date ? -1 : 1;
		});
		/** @var Subscription $subscription */
		$subscription = $subscriptions[0];
		if (!$subscription) {
			return [];
		}
		$pretty_period_end = date('l jS \of F Y', $subscription->current_period_end);
		return [
			'start' => $subscription->start_date,
			'status' =>	$subscription->status,
			'cancel_at_period_end' => $subscription->cancel_at_period_end,
			'status_pretty' => $subscription->cancel_at_period_end ? "Active (until $pretty_period_end)" : "Active",
			'start_pretty' => date('l jS \of F Y', $subscription->start_date),
			'period_end_pretty' => date('l jS \of F Y', $subscription->current_period_end),
			'period_start_pretty' => date('l jS \of F Y', $subscription->current_period_start),
			'period_start' => $subscription->current_period_start,
			'period_end' => $subscription->current_period_end,
		];
	}

	protected static function isPremiumUser($app) : bool {
		$user_info = self::getUserInfo($app);
		if ($user_info['is_super_user']) {
			return true;
		}
		$sub_info =  self::getSubscriptionInfo($app);
		return isset($sub_info['status']) ? $sub_info['status'] === 'active' : false;
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
		$max_note_index = Instruments::MAX_PLAYABLE_NOTE_INDEX[$instrument];
		$min_note_index = Instruments::MIN_PLAYABLE_NOTE_INDEX[$instrument];
		$enabled_songs_clause = self::isDev() ? '' : 'enabled = 1 and';
		$st = $app['pdo']->prepare("SELECT id, name, level, artist, key_signature, beat_value, beats_per_measure, beat_count, is_premium FROM readmi_songs WHERE {$enabled_songs_clause} max_note_index <= {$max_note_index} and min_note_index >= {$min_note_index} ORDER BY level ASC");
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
			if ($row['is_premium'] != 1 || $is_premium_user) {
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
			'is_premium' => $is_premium_user,
			'enabled_songs' => $enabled_songs,
			'disabled_songs' => $disabled_songs,
			'key_signatures' => array_unique($key_signatures),
			'time_signatures' => array_unique($time_signatures),
			'selectable_instruments' => self::SELECTABLE_INSTRUMENTS,
			'instrument' => $instrument,
		];
	}
}
