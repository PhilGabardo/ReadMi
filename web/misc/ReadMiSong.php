<?php

namespace Misc;

use Exception;

class ReadMiSong {


	private $children = [];

	public function addChild(ReadMiNode $readmi_node) {
		$this->children[] = $readmi_node;
	}

	public function getLastChild() : ?ReadMiNode {
		return $this->children ? $this->children[count($this->children) - 1] : null;
	}

	public static function fromNotes(array $notes) {
		$song = new self();
		$existing_tuplet = null;
		for ($i = 0; $i < count($notes); $i++) {
			$note = $notes[$i];
			$readmi_note = self::getReadMiNote($note);
			$last_child = $song->getLastChild();
			if ($last_child instanceof ReadMiTuplet && !$last_child->isComplete()) {
				$last_child->addChild($readmi_note);
			} else {
				if ($readmi_note->isComplete()) {
					$song->addChild($readmi_note);
				} else {
					$tuplet = new ReadMiTuplet();
					$tuplet->addChild($readmi_note);
					$song->addChild($tuplet);
				}
			}
		}
		$last_child = $song->getLastChild();
		if (!$last_child->isComplete()) {
			$song->removeLastChild();
		}
		return $song;
	}

	public function getNotes() : array {
		$notes = [];
		foreach ($this->children as $child) {
			if ($child instanceof ReadMiTuplet) {
				$arr = [];
				foreach ($child->getChildren() as $c) {
					$arr[] = [
						'num' => $c->getNumerator(),
						'denom' => $c->getDenominator(),
					];
				}
			}
			$notes = array_merge($notes, $child->getNotes());
		}
		return $notes;
	}

	private static function getReadMiNote(array $note) : ReadMiNote {
		if (strpos($note['quarterLength'], '/') !== false) {
			[$numerator, $denominator] = explode('/', $note['quarterLength']);
			if ($numerator > 0 && $denominator > 0) {
				return ReadMiNote::fromArray(
					[
						'note_props' => $note,
						'quarter_len_numerator' => $numerator,
						'quarter_len_denominator' => $denominator
					]);
			}
		} else {
			$float_val = (float) $note['quarterLength'];
			if ($float_val > 0) {
				$rat = self::float2rat($float_val);
				return ReadMiNote::fromArray(
					[
						'note_props' => $note,
						'quarter_len_numerator' => $rat['numerator'],
						'quarter_len_denominator' => $rat['denominator']
					]);
			}
			throw new Exception("Invalid quarter length!");
		}
	}

	private function removeLastChild() {
		array_pop($this->children);
	}

	private static function float2rat($n, $tolerance = 1.e-6) {
		$h1=1; $h2=0;
		$k1=0; $k2=1;
		$b = 1/$n;
		do {
			$b = 1/$b;
			$a = floor($b);
			$aux = $h1; $h1 = $a*$h1+$h2; $h2 = $aux;
			$aux = $k1; $k1 = $a*$k1+$k2; $k2 = $aux;
			$b = $b-$a;
		} while (abs($n-$h1/$k1) > $n*$tolerance);

		return [
			'numerator' => $h1,
			'denominator' => $k1,
		];
	}
}
