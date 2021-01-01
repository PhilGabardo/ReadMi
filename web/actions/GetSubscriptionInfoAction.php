<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class GetSubscriptionInfoAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$subscription_info = self::getSubscriptionInfo($app);
		return json_encode($subscription_info);
	}
}
