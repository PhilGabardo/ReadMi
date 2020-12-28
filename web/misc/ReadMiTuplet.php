<?php

namespace Misc;

class ReadMiTuplet implements ReadMiNode {

	private $children = [];


	public function addChild(ReadMiNote $node) {
		$this->children[] = $node;
	}

	public function getChildren() : array {
		return $this->children;
	}

	private static function getGCD($num1, $num2) {
		/* finds the greatest common factor between two numbers */
		if ($num1 < $num2) {
			$t = $num1;
			$num1 = $num2;
			$num2 = $t;
		}
		while ($t = ($num1 % $num2) != 0) {
			$num1 = $num2;
			$num2 = $t;
		}
		return $num2;
	}

	public static function addFractions($numerator1, $denominator1, $numerator2, $denominator2) {
		$newNum = $numerator1 * $denominator2 + $numerator2 * $denominator1;
		$newDenum = $denominator2 * $denominator1;
		$gcd = self::getGCD($newNum, $newDenum);
		$newNum /= $gcd;
		$newDenum /= $gcd;
		return [
			'numerator' => $newNum,
			'denominator' => $newDenum,
		];
	}

	public function getTotalTiming() {
		$quarter_len_numerator = 0;
		$quarter_len_denominator = 0;
		/** @var ReadMiNote $note */
		foreach ($this->children as $note) {
			if ($quarter_len_denominator === 0 && $quarter_len_numerator === 0) {
				$added_fraction = [
					'numerator' => $note->getNumerator(),
					'denominator' => $note->getDenominator(),
				];
			} else {
				$added_fraction = self::addFractions($quarter_len_numerator, $quarter_len_denominator, $note->getNumerator(), $note->getDenominator());
			}
			$quarter_len_numerator = $added_fraction['numerator'];
			$quarter_len_denominator = $added_fraction['denominator'];
		}
		return [
			'numerator' => $quarter_len_numerator,
			'denominator' => $quarter_len_denominator,
		];
	}

	public function isComplete(): bool {
		$total_timing = $this->getTotalTiming();
		return ReadMiNote::isCompleteNote($total_timing['numerator'], $total_timing['denominator']);
	}

	public function getNotes(): array {
		// TODO: support correctly tuplets
		$total_timing = $this->getTotalTiming();
		$new_note_arr = $this->children[0]->toArray();
		$new_note_arr['quarter_len_numerator'] = $total_timing['numerator'];
		$new_note_arr['quarter_len_denominator'] = $total_timing['denominator'];
		return [ReadMiNote::fromArray($new_note_arr)];
	}
}
