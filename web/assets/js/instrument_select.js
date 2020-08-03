let table = document.getElementById("instrument_select_table");
let rows = table.getElementsByTagName("tr");
for (let i = 0; i < rows.length; i++) {
	let currentRow = table.rows[i];
	let cells = currentRow.getElementsByTagName("td");
	for (let j = 0; j < cells.length; j++) {
		let currentCell = cells[j];
		currentCell.onclick = function () {
			let instrument_param = '<input type="hidden" name="instrument" value="'+currentCell.dataset.value+'">';
			$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="instrument_select">' + instrument_param + '</form>').appendTo($(document.body)).submit();
		};
	}
}
