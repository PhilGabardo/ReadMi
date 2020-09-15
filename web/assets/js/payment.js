var checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function() {
	fetch('/', {
		method: "POST",
		headers: new Headers({
			'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
		}),
		body: "action_type=stripe_session_id"
	}).then(function(response) {
		return response.json();
	}).then(function(responseJson) {
		var sessionID = responseJson.session_id;
		var stripe = Stripe(responseJson.publishable_key);
		stripe.redirectToCheckout({
			// Make the id field from the Checkout Session creation API response
			// available to this file, so you can provide it as argument here
			// instead of the {{CHECKOUT_SESSION_ID}} placeholder.
			sessionId: sessionID
		}).then(function (result) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		});
	});
});
