import swal from 'sweetalert';

var subscription_info = document.getElementById('subscription_info');
subscription_info.onclick = function() {
	// get subscription info
	fetch('/', {
		method: "POST",
		headers: new Headers({
			'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
		}),
		body: "action_type=get_subscription_info"
	}).then(function(response) {
		return response.json();
	}).then(function(responseJson) {
		let list = document.createElement('ul');

		// sub start
		let cost = document.createElement('li');
		cost.innerHTML = 'Cost: 5$/month';


		let status = document.createElement('li');
		status.innerHTML = 'Status: ' + responseJson.status_pretty;

		// sub start
		let subStartItem = document.createElement('li');
		subStartItem.innerHTML = 'Started: ' + responseJson.start_pretty;

		// current period start
		let currentPeriodStart = document.createElement('li');
		currentPeriodStart.innerHTML = 'Current Period Start: ' + responseJson.period_start_pretty;

		// current period end
		let currentPeriodEnd = document.createElement('li');
		currentPeriodEnd.innerHTML = 'Current Period End: ' + responseJson.period_end_pretty;


		list.appendChild(cost);
		list.appendChild(status);
		list.appendChild(subStartItem);
		list.appendChild(currentPeriodStart);
		list.appendChild(currentPeriodEnd);
		if (responseJson.cancel_at_period_end) {
			const cancellationItem = document.createElement('li');
			cancellationItem.innerHTML = '<u>Your subscription will be cancelled on ' + responseJson.period_end_pretty + '</u>';
			list.appendChild(cancellationItem);
			swal({
				title: 'Subscription Info',
				content: list,
			})
		} else {
			swal({
				title: 'Subscription Info',
				content: list,
				buttons: {
					confirm : {
						value: 'cancel',
						text:'Cancel Subscription',
						className:'sweet-red'
					},
					cancel : 'Back'
				}
			}).then(result => {
				if (result === 'cancel') {
					swal({
						title: 'Are you sure you\'d like to cancel your subscription?',
						icon: 'warning',
						buttons: {
							confirm : {
								value: 'cancel',
								text:'Yes, cancel it',
							},
							cancel : 'No'
						}
					}).then((result) => {
						if (result === 'cancel') {
							fetch('/', {
								method: "POST",
								headers: new Headers({
									'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
								}),
								body: "action_type=cancel_gold"
							}).then(function(response) {
								return response.json();
							}).then(function(responseJson) {
								if (responseJson.error) {
									swal({
										title: responseJson.error,
										icon: 'error',
									})
								} else {
									swal({
										title: 'Your subscription will be cancelled at the end of this billing period.',
										icon: 'success',
									})
								}
							});
						}
					})
				}
			})
		}
	});
};
