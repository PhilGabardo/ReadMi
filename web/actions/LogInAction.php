<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class LogInAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {
		// removes backslashes
		$captcha = $request->get('token');

		if (!self::validateCaptcha($captcha)) {
			return json_encode(['message' => 'Captcha check failed.']);
		}

		$email = trim($request->get('email'));
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			return json_encode(['message' => 'Invalid email.']);
		}
		$password = md5($request->get('password'));
		$st = $app['pdo']->prepare("SELECT 1 FROM readmi_users WHERE email = '$email'");
		$st->execute();
		$val = $st->fetch();
		if ((int)$val !== 1) {
			return json_encode(['message' => 'Invalid email.']);
		}
		$st = $app['pdo']->prepare("SELECT id, username FROM readmi_users WHERE (email = '$email') and password = '$password'");
		$st->execute();
		$val = $st->fetch();
		if (!$val) {
			return json_encode(['message' => 'Invalid password.']);
		}
		session_regenerate_id();
		$_SESSION['loggedin'] = TRUE;
		$_SESSION['username'] = $email;
		$_SESSION['id'] = $val['id'];
		return json_encode(['success' => true]);
	}
}
