import swal from 'sweetalert';

var feedback_button = document.getElementById('popup');
feedback_button.onclick = function() {
	swal({
		text: 'Enter your feedback.',
		content: "input",
		button: {
			text: "Send!",
			closeModal: false,
		},
	})
		.then(feedback => {
			if (!feedback) throw null;
			return fetch('/', {
				method: "POST",
				headers: new Headers({
					'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
				}),
				body: "action_type=feedback&comment=" + escape(feedback)
			});
		})
		.then(results => {
			return results.json();
		})
		.then(responseJson => {
			console.log(responseJson)
			var success = responseJson.success;
			if (success) {
				swal("Feedback sent!");
			} else {
				swal("There was a problem sending your feedback, please try again.");
			}
		})
		.catch(err => {
			if (err) {
				swal("There was a problem sending your feedback, please try again.");
			} else {
				swal.stopLoading();
				swal.close();
			}
		});
};

