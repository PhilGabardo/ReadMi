<?php

namespace Hooks;

use Actions\ReadMiAction;
use Silex\Application;

class PaymentHooks {
	public static function execute(Application $app) {

		// Set your secret key. Remember to switch to your live secret key in production!
		\Stripe\Stripe::setApiKey('sk_test_51H3pcGKfc5hHCIGN7B5BYPgWAUcoXcCeez8xGDvd86rJuCzRAQIxw8BXzZduFJvlrzi5k5PNLvc99fXw4OmehSZy008cd5NUzR');

		// You can find your endpoint's secret in your webhook settings
		$endpoint_secret = 'whsec_fx9MwOqa871ooJDSAD15ueIsByZmgarm';

		$payload = @file_get_contents('php://input');
		$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'] ?? '';
		$event = null;

		try {
			$event = \Stripe\Webhook::constructEvent(
				$payload, $sig_header, $endpoint_secret
			);
		} catch(\UnexpectedValueException $e) {
			// Invalid payload
			http_response_code(400);
			exit();
		} catch(\Stripe\Exception\SignatureVerificationException $e) {
			// Invalid signature
			http_response_code(400);
			exit();
		}
		// Handle the checkout.session.completed event
		if ($event->type == 'checkout.session.completed') {
			$session = $event->data->object;

			// Fulfill the purchase...
			$auth0 = ReadMiAction::getAuth0();
			$user_info = $auth0->getUser();
			$user_id = $user_info['sub'];
			echo $user_id;
			$st = $app['pdo']->prepare("INSERT INTO gold_memberships (auth0_id) VALUES ('{$user_id}')");
			$st->execute();
			http_response_code(200);
			exit();
		}
		// Invalid Event
		http_response_code(400);
		exit();
	}
}
