<?php

namespace Actions;
use Symfony\Component\HttpFoundation\Request;


use Silex\Application;

class InstrumentUpdateAction extends LoggedInAction {

	protected static function _execute(Application $app, Request $request): string {
		$instrument = $request->get('instrument');
		$user_id = $_SESSION['id'];
		$st = $app['pdo']->prepare("UPDATE readmi_users set instrument = '$instrument' where id = $user_id");
		$st->execute();
		return LandingAction::execute($app, $request);
	}
}
