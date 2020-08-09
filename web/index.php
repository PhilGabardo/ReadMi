<?php


require('../vendor/autoload.php');
require_once __DIR__ . '/BarComputer.php';
require_once __DIR__ . '/KeySignatures.php';
require_once __DIR__ . '/actions/ReadMiAction.php';
require_once __DIR__ . '/actions/LoggedInAction.php';
require_once __DIR__ . '/actions/LoggedOutAction.php';
require_once __DIR__ . '/actions/DemoLandingAction.php';
require_once __DIR__ . '/actions/LandingAction.php';
require_once __DIR__ . '/actions/LogInAction.php';
require_once __DIR__ . '/actions/LogOutAction.php';
require_once __DIR__ . '/actions/PlayDemoAction.php';
require_once __DIR__ . '/actions/PlaySongAction.php';
require_once __DIR__ . '/actions/PremiumInfoAction.php';
require_once __DIR__ . '/actions/StripeSessionIdAction.php';
require_once __DIR__ . '/actions/PaymentFailureAction.php';
require_once __DIR__ . '/actions/PaymentSuccessAction.php';
require_once __DIR__ . '/actions/InstrumentSelectAction.php';
require_once __DIR__ . '/actions/InstrumentUpdateAction.php';
require_once __DIR__ . '/actions/GetSongData.php';
require_once __DIR__ . '/hooks/PaymentHooks.php';

use ReadMi\BarComputer;
use Actions\PaymentSuccessAction;

use \Symfony\Component\HttpFoundation\Request;

use Auth0\SDK\Auth0;
use Actions\ReadMiAction;
use Hooks\PaymentHooks;

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

$app->get('/jeopardy', function(Request $request) use($app) {
	$app->register(new Csanquer\Silex\PdoServiceProvider\Provider\PDOServiceProvider('pdo'),
		array(
			'pdo.server' => array(
				'driver'   => 'pgsql',
				'user' => 'philipgabardo',
				'password' => 'ninetythree',
				'host' => '127.0.0.1',
				'port' => 5432,
				'dbname' => 'philipgabardo'
			)
		)
	);
	$category_offset = random_int(0, 45050);
	$st = $app['pdo']->prepare("SELECT distinct(category) FROM jeopardy_questions OFFSET $category_offset LIMIT 6");
	$st->execute();
	$categories = array_map(function ($arr) { return $arr['category']; }, $st->fetchAll(PDO::FETCH_ASSOC));
	$questions_by_category = [];
	foreach ($categories as $category) {
		$escaped_category = $app['pdo']->quote($category);
		$st = $app['pdo']->prepare("SELECT year, question, answer FROM jeopardy_questions where category = $escaped_category");
		$st->execute();
		$question_candidates = $st->fetchAll(PDO::FETCH_ASSOC);
		shuffle($question_candidates);
		$questions_by_category[$category] = array_slice($question_candidates, 0, 6);
	}
	$daily_double_row = random_int(0, 4);
	$daily_double_col = random_int(0, 5);
	$questions_by_category[$categories[$daily_double_col]][$daily_double_row]['question'] = 'DAILY DOUBLE! ' .$questions_by_category[$categories[$daily_double_col]][$daily_double_row]['question'];
	$clues = [];
	$is_double = (bool)$request->get('double');
	$multiplier = $is_double ? 400 : 200;
	for ($row = 0; $row < 5; $row++) {
		$clues[$row + 1] = [];
		foreach ($categories as $category) {
			$clues[$row + 1][] = $questions_by_category[$category][$row] + ['amount' => (($row + 1) * $multiplier)];
		}
	}
	return $app['twig']->render('jeopardy.html', [
		'categories' => $categories,
		'clues' => $clues,
	]);
});

// Our web handlers
// TODO: login
$app->post('/', function(Request $request) use($app) {
	return ReadMiAction::getResponse($app, $request);
});


$app->get('/', function(Request $request) use($app) {
	return ReadMiAction::getResponse($app, $request);
});

$app->post('/payment_hook', function(Request $request) use($app) {
	PaymentHooks::execute($app);
	return '';
});

$app->get('/payment_success', function(Request $request) use($app) {
	return PaymentSuccessAction::execute($app, $request);
});



$app->run();



