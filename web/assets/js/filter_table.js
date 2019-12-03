import $ from 'jquery';
import selectize from 'selectize'

function addRowHandlers() {
	var table = document.getElementById("myTable");
	var rows = table.getElementsByTagName("tr");
	for (var i = 0; i < rows.length; i++) {
		var currentRow = table.rows[i];
		currentRow.onclick = function () {
			var cell = this.getElementsByTagName("td")[0];
			var name = cell.innerHTML;
			var form = '';
			$.each({name: name}, function( key, value ) {
				value = value.split('"').join('\"')
				form += '<input type="hidden" name="'+key+'" value="'+value+'">';
			});
			$('<form action="' + '/play_song' + '" method="POST">' + form + '</form>').appendTo($(document.body)).submit();
		};
	}
}
addRowHandlers();


var songsFilter = document.getElementById('songsFilter');
songsFilter.onkeyup = function() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	filter = this.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
