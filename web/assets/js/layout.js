let logout = document.getElementById("logout");
logout.onclick = function() {
	$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="logout"></form>').appendTo($(document.body)).submit();
}
let account_info = document.getElementById("my_account");
account_info.onclick = function() {
	$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="account_view"></form>').appendTo($(document.body)).submit();
}
let home = document.getElementById("home");
home.onclick = function() {
	$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value=""></form>').appendTo($(document.body)).submit();
}
