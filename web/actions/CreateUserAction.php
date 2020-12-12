<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class CreateUserAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {
		// removes backslashes
		$captcha = $request->get('token');

		if (!self::validateCaptcha($captcha)) {
			return json_encode(['message' => 'Captcha check failed.']);
		}

		// username validation
		$username = trim($request->get('username'));
		if ($username == '') {
			return json_encode(['message' => "Username is required."]);
		}
		if (!preg_match("/^[a-zA-Z0-9_]+$/", $username)) {
			return json_encode(['message' => "Username can only contain numbers and letters."]);
		}
		$st = $app['pdo']->prepare("SELECT 1 FROM readmi_users WHERE username = '$username'");
		$st->execute();
		$val = $st->fetch();
		if ((int)$val == 1) {
			return json_encode(['message' => 'Username is already in use.']);
		}

		// email validation
		$email = trim($request->get('email_address'));
		if ($email == '') {
			return json_encode(['message' => "Email is required."]);
		}
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			return json_encode(['message' => "Email is invalid."]);
		}
		$st = $app['pdo']->prepare("SELECT 1 FROM readmi_users WHERE email = '$email'");
		$st->execute();
		$val = $st->fetch();
		if ((int)$val == 1) {
			return json_encode(['message' => 'Email is already in use.']);
		}
		// password validation
		$password = $request->get('password'); // md5
		if ((string)$password == '') {
			return json_encode(['message' => "Password is required."]);
		}

		$password = md5($password);
		$st = $app['pdo']->prepare("INSERT INTO readmi_users (username, email, password) VALUES('$username', '$email', '$password') RETURNING id");
		$st->execute();
		$id = $st->fetch();
		if (isset($id['id'])) {
			session_regenerate_id();
			$_SESSION['loggedin'] = TRUE;
			$_SESSION['username'] = $username;
			$_SESSION['id'] = $id['id'];
			return json_encode(['success' => true]);
		} else {
			return json_encode(['message' => "There was a problem creating your account. Please try again."]);
		}
	}
}
