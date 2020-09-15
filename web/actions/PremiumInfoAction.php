<?php

namespace Actions;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PremiumInfoAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		return $app['twig']->render('premium_info.twig', self::getLoggedInData($app));
	}
}
