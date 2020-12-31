import $ from 'jquery';

function addRowHandlers() {
	let table = document.getElementById("songsTable");
	let rows = table.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++) {
		let currentRow = table.rows[i];
		let id = currentRow.dataset.value;
		currentRow.onclick = function () {
			if (currentRow.classList.contains('songDisabled')) {
				$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="premium_info"></form>').appendTo($(document.body)).submit();
			} else {
				let id_param = '<input type="hidden" name="id" value="' + id + '">';
				$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="play_song">' + id_param + '</form>').appendTo($(document.body)).submit();
			}
		};
	}
}

addRowHandlers();
