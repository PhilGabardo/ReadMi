let logout = document.getElementById("logout");
logout.onclick = function() {
	$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="logout"></form>').appendTo($(document.body)).submit();
}
