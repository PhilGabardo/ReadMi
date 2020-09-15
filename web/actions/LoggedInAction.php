<?php

namespace Actions;
use PDO;
use Stripe\Customer;
use Stripe\Stripe;
use Stripe\Subscription;


abstract class LoggedInAction extends ReadMiAction {

	protected const DEV_API_KEY = 'sk_test_51H3pcGKfc5hHCIGN7B5BYPgWAUcoXcCeez8xGDvd86rJuCzRAQIxw8BXzZduFJvlrzi5k5PNLvc99fXw4OmehSZy008cd5NUzR';
	protected const REAL_API_KEY = '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';

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

	protected static function getOauthId() : string {
		$auth0 = ReadMiAction::getAuth0();
		$user_info = $auth0->getUser();
		return $user_info['sub'];
	}

	protected static function getSubscriptionInfo($app) : array {
		$customer = self::getStripeCustomer($app);
		$subscriptions = $customer->subscriptions;
		if (!$subscriptions) {
			return [];
		}
		$subscriptions = $subscriptions->all()->data;
		/** @var Subscription $subscription */
		$subscription = reset($subscriptions);
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

	protected static function getStripeCustomer($app) {
		$api_key = self::isDev() ? self::DEV_API_KEY : self::REAL_API_KEY;
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
		$oauth_id = self::getOauthId();
		$st = $app['pdo']->prepare("SELECT * FROM users WHERE oauth_id = '{$oauth_id}'");
		$st->execute();
		$user_info = $st->fetch(PDO::FETCH_ASSOC) ?: [];
		return $user_info;
	}

	protected static function getLoggedInData($app) {
		$user_info = self::getUserInfo($app);
		$sub_info =  self::getSubscriptionInfo($app);
		$is_premium_user = isset($sub_info['status']) ? self::getSubscriptionInfo($app)['status'] === 'active' : false;
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
