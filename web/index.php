<?php


require('../vendor/autoload.php');
require_once __DIR__ . '/BarComputer.php';
require_once __DIR__ . '/KeySignatures.php';
require_once __DIR__ . '/Instruments.php';
require_once __DIR__ . '/actions/ReadMiAction.php';
require_once __DIR__ . '/actions/LoggedInAction.php';
require_once __DIR__ . '/actions/LoggedOutAction.php';
require_once __DIR__ . '/actions/DemoLandingAction.php';
require_once __DIR__ . '/actions/LandingAction.php';
require_once __DIR__ . '/actions/DisplayLogInAction.php';
require_once __DIR__ . '/actions/LogOutAction.php';
require_once __DIR__ . '/actions/PlayDemoAction.php';
require_once __DIR__ . '/actions/PlaySongAction.php';
require_once __DIR__ . '/actions/PremiumInfoAction.php';
require_once __DIR__ . '/actions/StripeSessionIdAction.php';
require_once __DIR__ . '/actions/PaymentFailureAction.php';
require_once __DIR__ . '/actions/InstrumentSelectAction.php';
require_once __DIR__ . '/actions/InstrumentUpdateAction.php';
require_once __DIR__ . '/actions/FeedbackAction.php';
require_once __DIR__ . '/actions/AccountViewAction.php';
require_once __DIR__ . '/actions/SongCompletionAction.php';
require_once __DIR__ . '/actions/AudioTestAction.php';
require_once __DIR__ . '/actions/LogInAction.php';
require_once __DIR__ . '/actions/CreateUserAction.php';
require_once __DIR__ . '/actions/SendPasswordResetEmailAction.php';
require_once __DIR__ . '/actions/PasswordResetAction.php';
require_once __DIR__ . '/actions/DisplayPasswordResetAction.php';
require_once __DIR__ . '/actions/PlayCustomSongAction.php';
require_once __DIR__ . '/actions/GetSubscriptionInfoAction.php';
require_once __DIR__ . '/actions/CancelGoldAction.php';
require_once __DIR__ . '/misc/DifficultyComputer.php';
require_once __DIR__ . '/misc/ReadMiNode.php';
require_once __DIR__ . '/misc/ReadMiNote.php';
require_once __DIR__ . '/misc/ReadMiSong.php';
require_once __DIR__ . '/misc/ReadMiTuplet.php';



use \Symfony\Component\HttpFoundation\Request;

use Actions\ReadMiAction;
use Misc\DifficultyComputer;

session_start();

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

$app->get('/password_reset', function(Request $request) use($app) {
	return \Actions\DisplayPasswordResetAction::execute($app, $request);
});


$app->get('/compute_min_max_note_indexes', function(Request $request) use($app) {
	if (ReadMiAction::isDev()) {
		Instruments::computeMinMaxNoteIndexForSongs($app);
		return '';
	}
	return '';
});

$app->get('/compute_levels', function(Request $request) use($app) {
	if (ReadMiAction::isDev()) {
		DifficultyComputer::updateLevels($app);
		return '';
	}
	return '';
});

$app->get('/compute_beat_counts', function(Request $request) use($app) {
	if (ReadMiAction::isDev()) {
		DifficultyComputer::computeBeatCounts($app);
		return '';
	}
	return '';
});

$app->get('/audio_test', function(Request $request) use($app) {
	return \Actions\AudioTestAction::execute($app, $request);
});

// Our web handlers
// TODO: login
$app->post('/', function(Request $request) use($app) {
	return ReadMiAction::getResponse($app, $request);
});


$app->get('/', function(Request $request) use($app) {
	return ReadMiAction::getResponse($app, $request);
});

$app->get('/python_test', function(Request $request) use($app) {
	return \Actions\PlayCustomSongAction::execute($app, $request);
});



$app->run();



