<?php

namespace Actions;


abstract class LoggedOutAction extends ReadMiAction {
	protected static function expectsLoggedIn(): bool {
		return false;
	}

	protected static function validateCaptcha(string $captcha) : bool {
		// post request to server
		$url = 'https://www.google.com/recaptcha/api/siteverify';
		$data = array('secret' => "6LejCQQaAAAAAGy309wgQYf89TWTka4DFcUgifSV", 'response' => $captcha);

		$options = array(
			'http' => array(
				'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
				'method'  => 'POST',
				'content' => http_build_query($data)
			)
		);
		$context  = stream_context_create($options);
		$response = file_get_contents($url, false, $context);
		$responseKeys = json_decode($response,true);
		header('Content-type: application/json');
		if(!$responseKeys["success"]) {
			return false;
		}
		return $responseKeys["score"] >= 0.5;
	}
}
