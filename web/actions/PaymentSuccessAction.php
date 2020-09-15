<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class PaymentSuccessAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		return $app['twig']->render('payment_success.twig', self::getLoggedInData($app));
	}
}
