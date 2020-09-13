var feedback_button = document.getElementById('popup');
feedback_button.onclick = function() {
	var e = document.getElementById('feedback-main');

	if(e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}

var feedback_form = document.getElementById('feedback-form1');
feedback_form.onsubmit = function(e) {
	var button = document.getElementById('feedback-button-blue');
	button.innerHTML='<i class="fa fa-spinner fa-spin"></i> Sending Love…';
	e.preventDefault();
	let comment = escape(document.getElementById('feedback-comment').value);
	fetch('/', {
		method: "POST",
		headers: new Headers({
			'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
		}),
		body: "action_type=feedback&comment=" + comment
	}).then(function(response) {
		return response.json();
	}).then(function(responseJson) {
		var success = responseJson.success;
		var e = document.getElementById('feedback-main');
		e.style.display = 'none';
		if (success) {
			alert("Feedback sent!");
		} else {
			alert("There was a problem sending your feedback, please try again.");
		}
	});
}

