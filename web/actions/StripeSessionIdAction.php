<?php

namespace Actions;


use Silex\Application;
use Stripe\Customer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Stripe\Stripe;

class StripeSessionIdAction extends LoggedInAction {

	protected const DEV_PRODUCT_ID = 'price_1I4q1UKfc5hHCIGNaQgH9ZSb';
	protected const PRODUCT_ID = 'price_1I4q11Kfc5hHCIGNfLkqeZxF';

	protected static function _execute(Application $app, Request $request): string {
		$host = self::isDev() ? 'http://localhost:8080' : 'https://www.readmimusic.com';
		$product_id = self::isDev() ? self::DEV_PRODUCT_ID : self::PRODUCT_ID;
		$customer = self::getStripeCustomer($app);
		$session = \Stripe\Checkout\Session::create([
			'customer' => $customer->id,
			'payment_method_types' => ['card'],
			'line_items' => [[
				'price' => $product_id,
				'quantity' => 1,
			]],
			'mode' => 'subscription',
			'success_url' => $host,
			'cancel_url' => $host,
		]);
		return json_encode(['session_id' => $session->id, 'publishable_key' => self::getPublishableKey()]);
	}
}
