<?php
require_once('vendor/autoload.php');
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey('sk_test_51H3pcGKfc5hHCIGN7B5BYPgWAUcoXcCeez8xGDvd86rJuCzRAQIxw8BXzZduFJvlrzi5k5PNLvc99fXw4OmehSZy008cd5NUzR');

$session = \Stripe\Checkout\Session::create([
	'payment_method_types' => ['card', 'ideal'],
	'line_items' => [[
		'price_data' => [
			'currency' => 'usd',
			'product_data' => [
				'name' => 'ReadMi Premium Membership',
			],
			'unit_amount' => 1000,
		],
		'quantity' => 1,
	]],
	'mode' => 'payment',
	'success_url' => 'https://www.readmimusic.com/success?session_id={CHECKOUT_SESSION_ID}',
	'cancel_url' => 'https://www.readmimusic.com/cancel',
]);
echo json_encode(['session_id' => $session->id]);
