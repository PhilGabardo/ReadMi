<?php

namespace Misc;


class ReadMiNote implements ReadMiNode, \JsonSerializable {
	private $note_props;
	private $quarter_len_numerator;
	private $quarter_len_denominator;

	public function getProps() : array {
		return $this->note_props;
	}

	public static function fromArray(array $arr) {
		$obj = new self();
		foreach ($arr as $k => $v) {
			$obj->$k = $v;
		}
		return $obj;
	}

	public function toArray() {
		$arr = [];
		foreach ($this as $k => $v) {
			$arr[$k] = $v;
		}
		return $arr;
	}

	public function isComplete(): bool {
		return self::isCompleteNote($this->quarter_len_numerator, $this->quarter_len_denominator);
	}

	public static function isCompleteNote($numerator, $denominator) : bool{
		if ($denominator == 1) {
			return true;
		}
		if ($numerator % $denominator == 0) {
			return true;
		}
		return ($denominator & ($denominator - 1)) == 0;
	}

	public function getNotes(): array {
		return [$this];
	}

	public function getNumerator() : float {
		return $this->quarter_len_numerator;
	}

	public function getDenominator() : float {
		return $this->quarter_len_denominator;
	}

	/**
	 * Specify data which should be serialized to JSON
	 * @link http://php.net/manual/en/jsonserializable.jsonserialize.php
	 * @return mixed data which can be serialized by <b>json_encode</b>,
	 * which is a value of any type other than a resource.
	 * @since 5.4.0
	 */
	function jsonSerialize() {
		return [
			'numerator' => $this->quarter_len_numerator,
			'denominator' => $this->quarter_len_denominator,
		];
	}
}
