<?php

require('../vendor/autoload.php');

$app = new Silex\Application();
$app['debug'] = true;

$dbopts = parse_url(getenv('DATABASE_URL'));
$app->register(new Csanquer\Silex\PdoServiceProvider\Provider\PDOServiceProvider('pdo'),
	array(
		'pdo.server' => array(
			'driver'   => 'pgsql',
			'user' => $dbopts["user"],
			'password' => $dbopts["pass"],
			'host' => $dbopts["host"],
			'port' => $dbopts["port"],
			'dbname' => ltrim($dbopts["path"],'/')
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
$app->get('/play_song', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('play_song.twig');
});
$app->get('/songs/', function() use($app) {
	$st = $app['pdo']->prepare('SELECT name FROM songs');
	$st->execute();

	$songs = [];
	while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
		$app['monolog']->addDebug('Row ' . $row['name']);
		$songs[] = $row;
	}
	/* // local testing
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
	];*/

	return $app['twig']->render('songs.twig', array(
		'songs' => $songs
	));
});

$app->run();
