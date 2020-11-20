<?php
namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class InstrumentSelectAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$instrument = $request->get('instrument');
		$user_id = $_SESSION['id'];
		$st = $app['pdo']->prepare("UPDATE readmi_users set instrument = '$instrument' where id = $user_id");
		$st->execute();
		return $app['twig']->render('landing.twig',
			[
				'user_name' => $_SESSION['username']
			] + self::getLoggedInData($app));
	}
}
