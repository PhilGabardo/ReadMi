<?php
namespace Actions;


use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class InstrumentSelectAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$instrument = $request->get('instrument');
		$auth0 = ReadMiAction::getAuth0();
		$user_info = $auth0->getUser();
		$user_id = $user_info['sub'];
		$st = $app['pdo']->prepare("INSERT INTO users (oauth_id, instrument) VALUES ('$user_id', '$instrument')");
		$st->execute();
		return $app['twig']->render('landing.twig',
			[
				'user_name' => $user_info['name']
			] + self::getLoggedInData($app));
	}
}
