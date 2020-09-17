import $ from 'jquery';
import selectize from 'selectize'
import SongPlayer from './song_player'
import BarComputer from './bar_computer'
import NoteScheduler from './note_scheduler'

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
				let id_param = '<input type="hidden" name="id" value="'+id+'">';
				$('<form action="' + '/' + '" method="POST"><input type="hidden" name="action_type" value="play_song">' + id_param + '</form>').appendTo($(document.body)).submit();
			}
		};
	}
}
addRowHandlers();

let currentName = "";
let currentKeys = [];
let currentTimes = [];


function filterTable(songName, songKeys, songTimes) {
	// Declare variables
	let txtValue;
	let table = document.getElementById("songsTable");
	let tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (let i = 0; i < tr.length; i++) {
		let shouldFilter = false;
		if (songName != "") {
			let title_td = tr[i].getElementsByClassName("songTitle")[0];
			let titleTxtValue = title_td.textContent || title_td.innerText;
			let artist_td = tr[i].getElementsByClassName("songArtist")[0];
			let artistTxtValue = artist_td.textContent || artist_td.innerText;
			let songText = titleTxtValue + " " + artistTxtValue;
			if (songText.toUpperCase().indexOf(songName.toUpperCase()) > -1) {
			} else {
				shouldFilter = true;
			}
		}
		let td = tr[i].getElementsByClassName("songKey")[0];
		if (td && songKeys.length > 0) {
			let keyMatch = false;
			for (let j = 0; j < songKeys.length; j++) {
				let songKey = songKeys[j];
				txtValue = td.textContent || td.innerText;
				if (txtValue.toUpperCase().indexOf(songKey.toUpperCase()) > -1) {
					//tr[i].style.display = "";
					keyMatch = true;
					break;
				}
			}
			shouldFilter = shouldFilter || !keyMatch;
		}
		td = tr[i].getElementsByClassName("songTime")[0];
		if (td && songTimes.length > 0) {
			let timeMatch = false;
			for (let j = 0; j < songTimes.length; j++) {
				let songTime = songTimes[j];
				txtValue = td.textContent || td.innerText;
				if (txtValue.toUpperCase().indexOf(songTime.toUpperCase()) > -1) {
					timeMatch = true;
					break;
				}
			}
			shouldFilter = shouldFilter || !timeMatch;
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
