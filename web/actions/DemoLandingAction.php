<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DemoLandingAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {
		return $app['twig']->render('demo_landing.twig');
	}
}
