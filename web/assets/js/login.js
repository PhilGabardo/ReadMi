let login = document.getElementById("login");
login.onclick = function() {
	$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="login"></form>').appendTo($(document.body)).submit();
}
