<?php

namespace Actions;


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class FeedbackAction extends LoggedInAction {

	private const EMAIL = 'readmimusic@gmail.com';

	protected static function _execute(Application $app, Request $request): string {
		$user_id = $_SESSION['username'];
		$mail = new PHPMailer(true);
		$comment = $request->get('comment');
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
			$mail->setFrom(self::EMAIL, 'Read Mi');
			$mail->addAddress(self::EMAIL, 'Read Mi');     // Add a recipient

			// Content
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = "New feedback from user '$user_id'";
			$mail->Body    = $comment;
			$mail->AltBody = $comment;

			$mail->send();
		} catch (Exception $e) {
			$success = false;
		}
		return json_encode(['success' => $success]);
	}
}
