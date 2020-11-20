<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class LogInAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {
		// removes backslashes
		$username_or_email = trim($request->get('username_or_email'));
		if (!preg_match("/^[a-zA-Z0-9_]+$/", $username_or_email) && !filter_var($username_or_email, FILTER_VALIDATE_EMAIL)) {
			return json_encode(['message' => 'Invalid username or email.']);
		}
		$password = md5($request->get('password'));
		$st = $app['pdo']->prepare("SELECT 1 FROM readmi_users WHERE username = '$username_or_email' or email = '$username_or_email'");
		$st->execute();
		$val = $st->fetch();
		if ((int)$val !== 1) {
			return json_encode(['message' => 'Invalid username or email.']);
		}
		$st = $app['pdo']->prepare("SELECT id, username FROM readmi_users WHERE (username = '$username_or_email' or email = '$username_or_email') and password = '$password'");
		$st->execute();
		$val = $st->fetch();
		if (!$val) {
			return json_encode(['message' => 'Invalid password.']);
		}
		session_regenerate_id();
		$_SESSION['loggedin'] = TRUE;
		$_SESSION['username'] = $val['username'];
		$_SESSION['id'] = $val['id'];
		return json_encode(['success' => true]);
	}
}
