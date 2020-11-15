<?php

namespace Actions;
use Symfony\Component\HttpFoundation\Request;


use Silex\Application;

class InstrumentUpdateAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$instrument = $request->get('instrument');
		$auth0 = ReadMiAction::getAuth0();
		$user_info = $auth0->getUser();
		$user_id = $user_info['sub'];
		$st = $app['pdo']->prepare("UPDATE users set instrument = '$instrument' where oauth_id = '$user_id'");
		$st->execute();
		return LandingAction::execute($app, $request);
	}
}
