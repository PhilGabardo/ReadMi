<?php

require('../vendor/autoload.php');

use \Symfony\Component\HttpFoundation\Request;

$app = new Silex\Application();
$app['debug'] = true;

$dbopts = parse_url(getenv('DATABASE_URL'));
$app->register(new Csanquer\Silex\PdoServiceProvider\Provider\PDOServiceProvider('pdo'),
	array(
		'pdo.server' => array(
			'driver'   => 'pgsql',
			'user' => $dbopts["user"] ?? null,
			'password' => $dbopts["pass"] ?? null,
			'host' => $dbopts["host"] ?? null,
			'port' => $dbopts["port"] ?? null,
			'dbname' => ltrim($dbopts["path"] ?? '','/')
		)
	)
);

// Register the monolog logging service
$app->register(new Silex\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));

// Register view rendering
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));

// Our web handlers
// TODO: login
$app->post('/play_song', function(Request $request) use($app) {
	$song_name = $request->get('name');
	$st = $app['pdo']->prepare("SELECT name, key_signature, beat_value, beats_per_measure, notes FROM songs where name = '{$song_name}'");
	$st->execute();
	$song_row = $st->fetch(PDO::FETCH_ASSOC);
	return $app['twig']->render('play_song.twig', array(
		's' => $song_row,
	));
});

$app->get('/test_play_song', function() use($app) {
	$song_row = [
		'name' => 'Bingo',
		'key_signature' => 'C',
		'beat_value' => '2',
		'beats_per_measure' => '2',
		//'notes' => '[{"is_note": true, "name": "G#", "octave": 3, "quarterLength": "0.5"},{"is_note": true, "name": "G", "octave": 3, "quarterLength": "0.5"},{"is_note": true, "name": "F#", "octave": 3, "quarterLength": "0.5"},{"is_note": true, "name": "F", "octave": 3, "quarterLength": "0.5"},{"is_note": true, "name": "E", "octave": 3, "quarterLength": "0.5"},{"is_note": true, "name": "D#", "octave": 3, "quarterLength": "0.5"},{"is_note": true, "name": "D", "octave": 3, "quarterLength": "0.5"},{"is_note": true, "name": "C#", "octave": 3, "quarterLength": "0.5"}]',
		//'notes' => '[{"is_note": true, "name": "G#", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}]',//, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"},{"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}]',
		'notes' => '[{"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}]',
	];
	return $app['twig']->render('play_song.twig', array(
		's' => $song_row,
	));
});

$app->get('/songs/', function() use($app) {
	$st = $app['pdo']->prepare('SELECT name FROM songs ORDER BY name ASC');
	$st->execute();

	$songs = [];
	while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
		$app['monolog']->addDebug('Row ' . $row['name']);
		$songs[] = $row;
	}

	return $app['twig']->render('songs.twig', array(
		'songs' => $songs
	));
});

$app->get('/test_songs/', function() use($app) {
	$songs = [
		['name' => 'test'],
		['name' => 'test1'],
		['name' => 'test2'],
		['name' => 'test3'],
		['name' => 'test4'],
		['name' => 'test5'],
		['name' => 'test6'],
		['name' => 'test7'],
		['name' => 'test8'],
		['name' => 'test9'],
		['name' => 'test10'],
	];

	return $app['twig']->render('songs.twig', array(
		'songs' => $songs
	));
});

$app->run();
