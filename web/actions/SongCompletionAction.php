<?php

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use PDO;
use Instruments;

class SongCompletionAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$song_id = $request->get('song_id');
		$notes_correct = $request->get('notes_correct');
		$total_notes = $request->get('total_notes');
		$bpm = $request->get('bpm');
		$bpm_requirement = $request->get('bpm_requirement');
		$user_info = self::getUserInfo($app);
		$instrument = $user_info['instrument'];
		$instrument_data = json_decode($user_info["{$instrument}_data"], true);
		$level = $instrument_data['level'];
		$completed_songs = array_flip($instrument_data['completed_songs']);
		$accuracy = $notes_correct / $total_notes;
		$accuracy_as_percent = round($accuracy * 100, 3);
		if (!isset($completed_songs[$song_id])) {
			if ($accuracy < 0.8) {
				return json_encode(['msg' => "Your note accuracy was {$accuracy_as_percent}%, you need 80% accuracy to complete this song. Practice makes perfect!"]);
			}
			if ($bpm < $bpm_requirement) {
				return json_encode(['msg' => "Nice job! Your note accuracy was {$accuracy_as_percent}%, but you need to play at $bpm_requirement or higher to complete this song"]);
			}
			// update completed songs
			$instrument_data['completed_songs'][] = $song_id;

			// check for level up
			$song_ids_for_level = self::getSongIdsForLevel($app, $instrument, $level);
			$songs_completed = array_intersect_key(array_flip($song_ids_for_level), array_flip($instrument_data['completed_songs']));
			if (count($songs_completed) === 5) {
				$instrument_data['level'] = $instrument_data['level'] + 1;
				$msg = "Nice job! Your note accuracy was {$accuracy_as_percent}%. You have completed this song and have advanced to Level {$instrument_data['level']}.";
			} else {
				$songs_left = 5 - count($songs_completed);
				$msg = "Nice job! Your note accuracy was {$accuracy_as_percent}%. You have completed this song. You must complete $songs_left more songs at Level $level to advance to the next level.";
			}
			$encoded_instrument_data = json_encode($instrument_data);
			$st = $app['pdo']->prepare("UPDATE users set {$instrument}_data = '{$encoded_instrument_data}' where id = {$user_info['id']}");
			$st->execute();
			return json_encode(['msg'  => $msg]);
		} else {
			return json_encode(['msg'  => "Your note accuracy was {$accuracy_as_percent}%. You have already completed this song. Practice makes perfect!"]);
		}
	}

	private static function getSongIdsForLevel(Application $app, string $instrument, int $level) {
		$is_piano = $instrument === 'piano' ? 1 : 0;
		$max_note_index = Instruments::MAX_PLAYABLE_NOTE_INDEX[$instrument];
		$min_note_index = Instruments::MIN_PLAYABLE_NOTE_INDEX[$instrument];
		$st = $app['pdo']->prepare("SELECT id FROM readmi_songs WHERE piano = {$is_piano} and max_note_index <= {$max_note_index} and min_note_index >= {$min_note_index} and level = {$level}");
		$st->execute();
		$ids = [];
		while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
			$ids[] = $row['id'];
		}
		return $ids;
	}


}
