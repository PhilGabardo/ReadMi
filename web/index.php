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
		'name' => 'Dance of the Flowers from the Nutcracker',
		'key_signature' => 'Eb',
		'beat_value' => '4',
		'beats_per_measure' => '4',
		'notes' => '[{"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "1.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 5, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "3.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 5, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "3.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C", "octave": 5, "quarterLength": "1.0"}, {"is_note": true, "name": "A", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "4.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 5, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "3.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C", "octave": 5, "quarterLength": "1.0"}, {"is_note": true, "name": "A", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "4.0"}]',//'[{"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "E", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "0.5"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G#", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "Bb", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "G", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "F", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "C", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "2.0"}, {"is_note": true, "name": "G#", "octave": 3, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "Eb", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "1/3"}, {"is_note": true, "name": "C#", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "D", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "C", "octave": 5, "quarterLength": "2.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "C", "octave": 5, "quarterLength": "2.0"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "1.0"}, {"is_note": true, "name": "D", "octave": 5, "quarterLength": "0.5"}, {"is_note": true, "name": "Bb", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "B", "octave": 4, "quarterLength": "0.5"}, {"is_note": true, "name": "C", "octave": 5, "quarterLength": "0.5"}, {"is_note": true, "name": "D", "octave": 5, "quarterLength": "0.5"}, {"is_note": true, "name": "Eb", "octave": 5, "quarterLength": "1.0"}]',
	];
	return $app['twig']->render('play_song.twig', array(
		's' => $song_row,
	));
});

$app->get('/songs/', function() use($app) {
	$st = $app['pdo']->prepare('SELECT name, id FROM songs');
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
