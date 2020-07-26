<?php
/**
 * Created by PhpStorm.
 * User: philipgabardo
 * Date: 7/25/20
 * Time: 4:26 PM
 */

namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PlayDemoAction extends LoggedOutAction {

	protected static function _execute(Application $app, Request $request): string {
		return $app['twig']->render('play_song_demo.twig', [
			's' => [
				"name" => "Happy Birthday",
				"key_signature" => "F major",
				"beat_value" => 4,
				"beats_per_measure" => 3,
			],
			'bars' => '[[{"clef":"treble","keys":["C\/4"],"duration":"8","dot_count":1},{"clef":"treble","keys":["C\/4"],"duration":"16","dot_count":0},{"clef":"treble","keys":["D\/4"],"duration":"q","dot_count":0},{"clef":"treble","keys":["C\/4"],"duration":"q","dot_count":0}],[{"clef":"treble","keys":["F\/4"],"duration":"q","dot_count":0},{"clef":"treble","keys":["E\/4"],"duration":"h","dot_count":0}],[{"clef":"treble","keys":["C\/4"],"duration":"8","dot_count":1},{"clef":"treble","keys":["C\/4"],"duration":"16","dot_count":0},{"clef":"treble","keys":["D\/4"],"duration":"q","dot_count":0},{"clef":"treble","keys":["C\/4"],"duration":"q","dot_count":0}],[{"clef":"treble","keys":["G\/4"],"duration":"q","dot_count":0},{"clef":"treble","keys":["F\/4"],"duration":"h","dot_count":0}],[{"clef":"treble","keys":["C\/4"],"duration":"8","dot_count":1},{"clef":"treble","keys":["C\/4"],"duration":"16","dot_count":0},{"clef":"treble","keys":["C\/5"],"duration":"q","dot_count":0},{"clef":"treble","keys":["A\/4"],"duration":"q","dot_count":0}],[{"clef":"treble","keys":["F\/4"],"duration":"q","dot_count":0},{"clef":"treble","keys":["E\/4"],"duration":"q","dot_count":0},{"clef":"treble","keys":["D\/4"],"duration":"q","dot_count":0}],[{"clef":"treble","keys":["Bb\/4"],"duration":"8","dot_count":1},{"clef":"treble","keys":["Bb\/4"],"duration":"16","dot_count":0},{"clef":"treble","keys":["A\/4"],"duration":"q","dot_count":0},{"clef":"treble","keys":["F\/4"],"duration":"q","dot_count":0}],[{"clef":"treble","keys":["G\/4"],"duration":"q","dot_count":0},{"clef":"treble","keys":["F\/4"],"duration":"h","dot_count":1}],[{"clef":"treble","duration":"q","ghost":true}]]'
		]);
	}
}
