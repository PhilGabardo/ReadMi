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
			case 'display_login':
				return DisplayLogInAction::execute($app, $request);
			case 'login':
				return LogInAction::execute($app, $request);
			case 'create_user':
				return CreateUserAction::execute($app, $request);
			case 'logout':
				return LogOutAction::execute($app, $request);
			case 'play_song':
				return PlaySongAction::execute($app, $request);
			case 'premium_info':
				return PremiumInfoAction::execute($app, $request);
			case 'cancel_gold':
				return CancelGoldAction::execute($app, $request);
			case 'stripe_session_id':
				return StripeSessionIdAction::execute($app, $request);
			case 'get_subscription_info':
				return GetSubscriptionInfoAction::execute($app, $request);
			case 'payment_failure':
				return PaymentFailureAction::execute($app, $request);
			case 'instrument_select':
				return InstrumentSelectAction::execute($app, $request);
			case 'instrument_update':
				return InstrumentUpdateAction::execute($app, $request);
			case 'account_view':
				return AccountViewAction::execute($app, $request);
			case 'feedback':
				return FeedbackAction::execute($app, $request);
			case 'reset_password':
				return PasswordResetAction::execute($app, $request);
			case 'song_completion':
				return SongCompletionAction::execute($app, $request);
			case 'send_reset_password_email':
				return SendPasswordResetEmailAction::execute($app, $request);
			default:
				if (!self::isLoggedIn()) {
					return DemoLandingAction::execute($app, $request);
				} else {
					return LandingAction::execute($app, $request);
				}
		}
	}

	final public static function isLoggedIn() : bool {
		return isset($_SESSION['loggedin']);
	}

	abstract protected static function expectsLoggedIn() : bool;

	final public static function execute(Application $app, Request $request) : string {
		if (!self::isLoggedIn() && static::expectsLoggedIn()) {
			return DemoLandingAction::_execute($app, $request);
		} else if (self::isLoggedIn() && !static::expectsLoggedIn()) {
			throw new Exception("Invalid operation for logged out user");
		}
		return static::_execute($app, $request);
	}

	abstract protected static function _execute(Application $app, Request $request) : string;

	public static function isDev() {
		return strpos($_SERVER['HTTP_HOST'], 'localhost:8080') !== false;
	}
}
