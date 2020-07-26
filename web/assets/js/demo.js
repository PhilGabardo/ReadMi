let demoButton = document.getElementById("demo");
if (demoButton) {
	demoButton.onclick = function() {
		$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="play_demo"></form>').appendTo($(document.body)).submit();
	}
}
