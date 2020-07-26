<?php
/**
 * Created by PhpStorm.
 * User: philipgabardo
 * Date: 7/25/20
 * Time: 4:24 PM
 */

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class LogOutAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$auth0 = self::getAuth0();

		$user_info = $auth0->getUser();

		if ($user_info) {
			$auth0->logout();
		}
		return $app['twig']->render('demo_landing.twig');
	}
}
