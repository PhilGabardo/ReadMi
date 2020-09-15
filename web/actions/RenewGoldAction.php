<?php

namespace Actions;


use Silex\Application;
use Stripe\Subscription;
use Symfony\Component\HttpFoundation\Request;

class RenewGoldAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$customer = self::getStripeCustomer($app);
		$subscriptions = $customer->subscriptions;
		if (!$subscriptions) {
			return json_encode(['error' => 'No active subscriptions']);
		}
		$subscriptions = $subscriptions->all()->data;
		/** @var Subscription $subscription */
		$subscription = reset($subscriptions);
		if ($subscription->cancel_at_period_end) {
			\Stripe\Subscription::update(
				$subscription->id,
				[
					'cancel_at_period_end' => false,
				]
			);
			return json_encode(['success' => true]);
		} else {
			return json_encode(['error' => 'Your subscription has already been renewed.']);
		}
	}
}
