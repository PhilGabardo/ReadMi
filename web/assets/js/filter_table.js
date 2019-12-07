import $ from 'jquery';
import selectize from 'selectize'

function addRowHandlers() {
	var table = document.getElementById("songsTable");
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

var currentName = "";
var currentKeys = [];
var currentTimes = [];


function filterTable(songName, songKeys, songTimes) {
	// Declare variables
	var filter, table, tr, td, i, txtValue;
	var table = document.getElementById("songsTable");
	var tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		var shouldFilter = false;
		td = tr[i].getElementsByClassName("songName")[0];
		if (td && songName) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(songName.toUpperCase()) > -1) {
				//tr[i].style.display = "";
			} else {
				shouldFilter = true;
				//tr[i].style.display = "none";
			}
		}
		td = tr[i].getElementsByClassName("songKey")[0];
		if (td && songKeys) {
			var keyMatch = false;
			for (var j = 0; j < songKeys.length; j++) {
				var songKey = songKeys[j];
				txtValue = td.textContent || td.innerText;
				if (txtValue.toUpperCase().indexOf(songKey.toUpperCase()) > -1) {
					//tr[i].style.display = "";
					keyMatch = true;
					break;
				}
			}
			shouldFilter = shouldFilter && keyMatch;
		}
		td = tr[i].getElementsByClassName("songTime")[0];
		if (td && songTimes) {
			var timeMatch = false;
			for (var j = 0; j < songTimes.length; j++) {
				var songTime = songTimes[j];
				txtValue = td.textContent || td.innerText;
				if (txtValue.toUpperCase().indexOf(songTime.toUpperCase()) > -1) {
					timeMatch = true;
					break;
				}
			}
			shouldFilter = shouldFilter && timeMatch;
		}
		tr[i].style.display = shouldFilter ? "none" : "";
	}
}

$('.filter').selectize(
	{
		onType: function(value) {
			currentName = value;
			filterTable(currentName, currentKeys, currentTimes);
		}});
$('#keyFilterSelect').selectize(
	{
		maxItems: 3,
		onChange: function(value) {
			currentKeys = value;
			filterTable(currentName, currentKeys, currentTimes);
		}
	});
$('#timeFilterSelect').selectize(
	{
		maxItems: 3,
		onChange: function(value) {
			currentTimes = value;
			filterTable(currentName, currentKeys, currentTimes);
		}
	});
