import swal from 'sweetalert';


$('#create_account').click(function(){
	$('.register-form').show();
	$('.login-form').hide();
	$('.reset-password-form').hide();
});
$('#reset_password').click(function(){
	$('.reset-password-form').show();
	$('.login-form').hide();
	$('.register-form').hide();
});
$('#sign_in').click(function(){
	$('.login-form').show();
	$('.register-form').hide();
	$('.reset-password-form').hide();
});
$('#back').click(function(){
	$('.login-form').show();
	$('.register-form').hide();
	$('.reset-password-form').hide();
});

$('.login-form').submit(function(event) {
	event.preventDefault();
	var data = {};
	data['username_or_email'] = $('#username_or_email').val();
	data['password'] = $('#login_password').val();
	data['action_type'] = 'login';
	$.ajax({
		type : 'POST',
		url  : '/',
		data : data,
		success : function(response){
			response = JSON.parse(response);
			if (response.success) {
				window.location.href = '/';
			} else {
				swal({icon: 'error', title: response.message});
			}
		}
	});
	return false;
});
$('.register-form').submit(function(event) {
	event.preventDefault();
	var data = {};
	data['username'] = $('#create_username').val();
	data['password'] = $('#create_password').val();
	data['email_address'] = $('#create_email_address').val();
	data['action_type'] = 'create_user';
	console.log(data);
	$.ajax({
		type : 'POST',
		url  : '/',
		data : data,
		success : function(response){
			response = JSON.parse(response);
			if (response.success) {
				window.location.href = '/';
			} else {
				swal({icon: 'error', title: response.message});
			}
		}
	});
	return false;
});
$('.reset-password-form').submit(function(event) {
	event.preventDefault();
	var data = {};
	data['email'] = $('#reset_email_address').val();
	data['action_type'] = 'send_reset_password_email';
	$.ajax({
		type : 'POST',
		url  : '/',
		data : data,
		success : function(response){
			console.log(response);
			response = JSON.parse(response);
			if (response.success) {
				swal({icon: 'success', title: 'A recovery link has been sent to your email.'}).then(function() {window.location.href = '/';});
			} else {
				swal({icon: 'error', title: response.message});
			}
		}
	});
	return false;
});

