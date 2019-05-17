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
$app->get('/index', function() use($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('index.twig');
});
$app->get('/songs/', function() use($app) {
	$st = $app['pdo']->prepare('SELECT name, key FROM songs');
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

$app->run();
