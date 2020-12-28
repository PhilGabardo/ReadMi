<?php

namespace Misc;


interface ReadMiNode {

	public function isComplete() : bool;

	public function getNotes() : array;

}
