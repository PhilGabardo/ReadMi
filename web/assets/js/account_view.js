import $ from 'jquery';
import selectize from 'selectize'
import swal from 'sweetalert';

$('#instrument').selectize(
	{
		maxItems: 1,
		onChange: function(value) {
			let instrument_param = '<input type="hidden" name="instrument" value="'+value+'">';
			$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="instrument_update">' + instrument_param + '</form>').appendTo($(document.body)).submit();
		}
	});

$('#membership_type').selectize(
	{
		maxItems: 1,
		onChange: function(value) {
			if (value === 'Gold') {
				$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="premium_info"></form>').appendTo($(document.body)).submit();
			} else if (value === 'Gold_Renew'){
				swal({
					title: "Are you sure you'd like to renew your Gold Membership?",
					text: "Your subscription will continue after this billing period.",
					type: "warning",
					showCancelButton: true,
					confirmButtonColor: "#DD6B55",
					confirmButtonText: "Yes, renew it."
				})
					.then((confirmed) => {
						if (confirmed) {
							fetch('/', {
								method: "POST",
								headers: new Headers({
									'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
								}),
								body: "action_type=renew_gold"
							}).then(function(response) {
								return response.json();
							}).then(function(responseJson) {
								if (responseJson.success) {
									swal("Your Gold membership will be renewed.")
								} else if (responseJson.error){
									swal(responseJson.error)
								}
							});
						}
					})
			} else {
				swal({
						title: "Are you sure you'd like to cancel your Gold Membership?",
						text: "Your subscription will end after this billing period.",
						type: "warning",
						showCancelButton: true,
						confirmButtonColor: "#DD6B55",
						confirmButtonText: "Yes, cancel it."
					})
					.then((confirmed) => {
						if (confirmed) {

							fetch('/', {
								method: "POST",
								headers: new Headers({
									'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
								}),
								body: "action_type=cancel_gold"
							}).then(function(response) {
								return response.json();
							}).then(function(responseJson) {
								if (responseJson.success) {
									swal("Your Gold membership will end after this billing period. You will no longer be charged.")
								} else if (responseJson.error){
									swal(responseJson.error)
								}
							});
						}
					})
			}
		}
	});
