<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Stripe\Stripe;

class StripeSessionIdAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		Stripe::setApiKey('sk_test_51H3pcGKfc5hHCIGN7B5BYPgWAUcoXcCeez8xGDvd86rJuCzRAQIxw8BXzZduFJvlrzi5k5PNLvc99fXw4OmehSZy008cd5NUzR');
		$host = self::isDev() ? 'http://localhost:8080' : 'https://www.readmimusic.com';
		$session = \Stripe\Checkout\Session::create([
			'payment_method_types' => ['card'],
			'line_items' => [[
				'price_data' => [
					'currency' => 'usd',
					'product_data' => [
						'name' => 'ReadMi Gold Membership',
					],
					'unit_amount' => 1400,
				],
				'quantity' => 1,
			]],
			'mode' => 'payment',
			'success_url' => $host . '/payment_success?session_id={CHECKOUT_SESSION_ID}',
			'cancel_url' => $host,
		]);
		return json_encode(['session_id' => $session->id]);
	}
}
