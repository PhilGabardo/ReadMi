<?php

namespace Actions;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class SendPasswordResetEmailAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {

		$captcha = $request->get('token');

		if (!self::validateCaptcha($captcha)) {
			return json_encode(['message' => 'Captcha check failed.']);
		}

		// email validation
		$email = trim($request->get('email'));
		if ($email == '') {
			return json_encode(['message' => "Email is required."]);
		}
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			return json_encode(['message' => "Email is invalid."]);
		}
		$st = $app['pdo']->prepare("SELECT 1 FROM readmi_users WHERE email = '$email'");
		$st->execute();
		$val = $st->fetch();
		if ((int)$val != 1) {
			return json_encode(['message' => 'Email is not associated with any existing accounts.']);
		}
		$random_token = bin2hex(random_bytes(50));
		$st = $app['pdo']->prepare("UPDATE readmi_users set reset_password_token = '$random_token' where email = '$email'");
		if (!$st->execute()) {
			return json_encode(['message' => 'We encountered an issue trying to send a reset link. Please try again.']);
		}

		$mail = new PHPMailer(true);
		$link = "https://www.readmimusic.com/password_reset?token=$random_token";
		$body = "Visit this link to reset your password: $link";
		$success = true;

		try {
			//Server settings
			//	$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
			$mail->isSMTP();                                            // Send using SMTP
			$mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'readmimusic@gmail.com';                     // SMTP username
			$mail->Password   = 'ninetythree';                               // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
			$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

			//Recipients
			$mail->setFrom('readmimusic@gmail.com', 'Read Mi');
			$mail->addAddress($email, 'Read Mi');     // Add a recipient

			// Content
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = "Password Reset Link!";
			$mail->Body    = $body;
			$mail->AltBody = $body;

			$mail->send();
		} catch (Exception $e) {
			$success = false;
		}
		return json_encode(['success' => $success]);
	}
}
