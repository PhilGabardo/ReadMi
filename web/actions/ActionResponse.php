<?php

namespace Actions;


class ActionResponse {
	public $render_file;
	public $render_args;

	public function __construct(string $render_file, array $render_args) {
		$this->render_file = $render_file;
		$this->render_args = $render_args;
	}
}
