<?php

namespace Actions;

use Auth0\SDK\Auth0;
use Symfony\Component\HttpFoundation\Request;
use Silex\Application;
use Exception;
use PDO;

abstract class ReadMiAction {
	public static function getResponse(Application $app, Request $request) : string {
		$action_type = $request->get('action_type');
		switch ($action_type) {
			case 'play_demo':
				return PlayDemoAction::execute($app, $request);
			case 'login':
				return LogInAction::execute($app, $request);
			case 'logout':
				return LogOutAction::execute($app, $request);
			case 'play_song':
				return PlaySongAction::execute($app, $request);
			case 'premium_info':
				return PremiumInfoAction::execute($app, $request);
			case 'stripe_session_id':
				return StripeSessionIdAction::execute($app, $request);
			case 'payment_success':
				return PaymentSuccessAction::execute($app, $request);
			case 'payment_failure':
				return PaymentFailureAction::execute($app, $request);
			case 'instrument_select':
				return InstrumentSelectAction::execute($app, $request);
			case 'instrument_update':
				return InstrumentUpdateAction::execute($app, $request);
			case 'get_song_data':
				return GetSongData::execute($app, $request);
			default:
				$auth0 = self::getAuth0();
				$user_info = $auth0->getUser();
				if (!$user_info) {
					return DemoLandingAction::execute($app, $request);
				} else {
					return LandingAction::execute($app, $request);
				}
		}
	}

	abstract protected static function expectsLoggedIn() : bool;

	final public static function execute(Application $app, Request $request) : string {
		$auth0 = self::getAuth0();

		$user_info = $auth0->getUser();

		if (!$user_info && static::expectsLoggedIn()) {
			return DemoLandingAction::_execute($app, $request);
		} else if ($user_info && !static::expectsLoggedIn()) {
			throw new Exception("Invalid operation for logged out user");
		}
		return static::_execute($app, $request);
	}

	abstract protected static function _execute(Application $app, Request $request) : string;

	public static function getAuth0($redirect_uri = null) {
		$redirect_uri = $redirect_uri ?? (self::isDev() ? 'http://localhost:8080' : 'https://www.readmimusic.com');
		return new Auth0([
			'domain' => 'dev-x4bvwq5p.us.auth0.com',
			'client_id' => 'qBKDTm0fwT9Wncy4Al81zkZiYR0LRUlD',
			'client_secret' => 'MCLdqQfFQhIt-qeWwl-JJhJuSR_jcDR8UN4qjP8g2xSIgHFwrKLAwoxnbQnoraUW',
			'redirect_uri' => $redirect_uri,
			'scope' => 'openid profile email',
		]);
	}


	protected static function isDev() {
		return strpos($_SERVER['HTTP_HOST'], 'localhost:8080') !== false;
	}
}
