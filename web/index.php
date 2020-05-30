<?php

require('../vendor/autoload.php');
require_once __DIR__ . '/BarComputer.php';

use \Symfony\Component\HttpFoundation\Request;

$app = new Silex\Application();
$app['debug'] = true;
if ($_SERVER['HTTP_HOST'] === 'localhost:8080') {
	$app->register(new Csanquer\Silex\PdoServiceProvider\Provider\PDOServiceProvider('pdo'),
		array(
			'pdo.server' => array(
				'driver'   => 'pgsql',
				'user' => 'alksmbyxthkgqd',
				'password' => '3dc6eb0f467b0c84d36284923fe3e2c79cee65c8378b05e84720b7f93789484b',
				'host' => 'ec2-174-129-208-118.compute-1.amazonaws.com',
				'port' => 5432,
				'dbname' => 'd6k8qaesslnfl6'
			)
		)
	);
} else {
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
}

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
$app->post('/', function(Request $request) use($app) {
	$song_name = str_replace("'", "''", $request->get('name')); // handles songs with quotes
	$st = $app['pdo']->prepare("SELECT name, key_signature, beat_value, beats_per_measure, notes FROM songs where name = '{$song_name}'");
	$st->execute();
	$song_row = $st->fetch(PDO::FETCH_ASSOC);
	$bars = \BarComputer::getBars(json_decode($song_row['notes'], true), $song_row['key_signature'],
		(float)$song_row['beat_value'], (float) $song_row['beats_per_measure']);
	return $app['twig']->render('play_song.twig', [
		's' => $song_row,
		'bars' => json_encode($bars),
	] + getSongData($app));
});


$app->post('/replay_song', function(Request $request) use($app) {
	return $app['twig']->render('play_song.twig', [
		's' => $request->get('song'),
		'bars' => $request->get('bars')
	] + getSongData($app));
});

$app->get('/', function() use($app) {
	return $app['twig']->render('landing.twig', getSongData($app));
});

$app->run();

function getTestSongData() {
	return [
		'songs' => [
			['name' => 'test', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test1', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test2', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test3', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test4', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test5', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test6', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test7', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test8', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test9', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test10', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test1', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test2', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test3', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test4', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test5', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test6', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test7', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test8', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test9', 'key_signature' => 'A', 'time_signature' => '3/4'],
			['name' => 'test10', 'key_signature' => 'A', 'time_signature' => '3/4'],
		],
		'key_signatures' => ['A', 'A#', 'B', 'C', 'D'],
		'time_signatures' => ['4/4', '3/4', '2/2', '7/8']
	];
}

function getSongData($app) {
	$st = $app['pdo']->prepare('SELECT name, key_signature, beat_value, beats_per_measure FROM songs ORDER BY name ASC');
	$st->execute();

	$songs = [];
	$key_signatures = [];
	$time_signatures = [];
	while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
		$app['monolog']->addDebug('Row ' . $row['name']);
		$row['time_signature'] = $row['beats_per_measure'] . '/' . $row['beat_value'];
		$key_signatures[] = $row['key_signature'];
		$time_signatures[] = $row['time_signature'];
		$songs[] = $row;
	}
	return [
		'songs' => $songs,
		'key_signatures' => array_unique($key_signatures),
		'time_signatures' => array_unique($time_signatures),
	];
}
