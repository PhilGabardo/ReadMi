<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DisplayPasswordResetAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {
		$token = $request->get('token');
		$st = $app['pdo']->prepare("SELECT email FROM readmi_users WHERE reset_password_token = '$token'");
		$st->execute();
		$val = $st->fetch();
		if (!$val) {
			return $app['twig']->render('login.twig');
		}
		return $app['twig']->render('reset_password.twig', [
			'email' => $val['email'],
			'token' => $token,
		]);
	}
}
