<?php

namespace Actions;

use Silex\Application;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;


class LandingAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$user_info = self::getUserInfo($app);
		if (!isset($user_info['instrument'])) {
			return $app['twig']->render('instrument_select.html');
		}

		return $app['twig']->render('landing.twig',
			[
				'user_name' => $user_info['username']
			] + self::getLoggedInData($app));
	}
}
