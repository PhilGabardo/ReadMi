var stripe = Stripe('pk_test_51H3pcGKfc5hHCIGNNDlHnUBWKBHx45o0EpKq3VSU9HuqDTavTBz8ZfiCbcomqTRKDubfyNXofWZNEnvUduR0BHxX00I4zpqRNh');
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
