<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class AccountViewAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$user_info = self::getUserInfo($app);

		return $app['twig']->render('account_view.twig', [
				'instrument' => $user_info['instrument'],
				'is_premium' => self::isPremiumUser($app),
			] + self::getLoggedInData($app));
	}
}
