<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DisplayLogInAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {
		return $app['twig']->render('login.twig');
	}
}
