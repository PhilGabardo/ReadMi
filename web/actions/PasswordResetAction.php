<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PasswordResetAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {
		$token = $request->get('token');
		$password = $request->get('password');
		if ((string)$password == '') {
			return json_encode(['message' => "Password is required."]);
		}
		$password = md5($password);
		$st = $app['pdo']->prepare("UPDATE readmi_users set password = '$password' WHERE reset_password_token = '$token'");
		if ($st->execute()) {
			return json_encode(['success' => true]);
		} else {
			return json_encode(['message' => 'We encountered an issue. Please try again.']);
		}
	}
}
