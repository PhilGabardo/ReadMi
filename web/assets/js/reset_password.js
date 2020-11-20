import swal from 'sweetalert';

$('.reset-password').submit(function(event) {
	event.preventDefault();
	var data = {};
	data['token'] = token;
	data['password'] = $('#new_password').val();
	data['action_type'] = 'reset_password';
	$.ajax({
		type : 'POST',
		url  : '/',
		data : data,
		success : function(response){
			response = JSON.parse(response);
			if (response.success) {
				swal({icon: 'success', title: 'Your password has been successfully reset.'}).then(function() {window.location.href = '/';});
			} else {
				swal({icon: 'error', title: response.message});
			}
		}
	});
	return false;
});
