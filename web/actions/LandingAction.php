<?php

namespace Actions;

use Silex\Application;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;


class LandingAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$auth0 = self::getAuth0();

		$user_info = $auth0->getUser();
		return $app['twig']->render('landing.twig',
			[
				'user_name' => $user_info['name']
			] + self::getSongData($app, false));
	}
}
