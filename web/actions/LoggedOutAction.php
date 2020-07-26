<?php

namespace Actions;


abstract class LoggedOutAction extends ReadMiAction {
	protected static function expectsLoggedIn(): bool {
		return false;
	}
}
