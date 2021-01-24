import $ from 'jquery';
import swal from 'sweetalert2';

function addRowHandlers() {
	let table = document.getElementById("songsTable");
	let rows = table.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++) {
		let currentRow = table.rows[i];
		let id = currentRow.dataset.value;
		currentRow.onclick = function () {
			if (currentRow.classList.contains('songDisabled')) {
				//$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="premium_info"></form>').appendTo($(document.body)).submit();
				let list = document.createElement('ul');

				// sub start
				let description = document.createElement('li');
				description.innerHTML = 'Unlimited access to hundreds of songs for 5$ per month!';


				let cancelAnytime = document.createElement('li');
				cancelAnytime.innerHTML = 'You can cancel your membership anytime';
				list.appendChild(description);
				list.appendChild(cancelAnytime);
				swal.fire({
					title: '<h2>ReadMi <span class="gold">Gold</span></h2>',
					html: '<ul class="swal-custom-list"><li>Unlimited access to hundreds of songs for 5$ per month!</li><li>You can cancel your membership anytime</li></ul>',
					showCancelButton: true,
					cancelButtonText: 'No thanks',
					confirmButtonText: 'Yes, subscribe!',
				}).then((result) => {
					if (result.isConfirmed) {
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
					}
				})
			} else {
				let id_param = '<input type="hidden" name="id" value="' + id + '">';
				$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="play_song">' + id_param + '</form>').appendTo($(document.body)).submit();
			}
		};
	}
}

addRowHandlers();
