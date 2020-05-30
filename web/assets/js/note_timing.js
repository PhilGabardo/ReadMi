function getDurationAsPercentage(duration, number_of_dots, beat_value, beats_per_measure) {
	var percentage;
	switch (duration) {
		case '16':
		case '16r':
			percentage = (beat_value / 4.0) / (4.0 * beats_per_measure);
			break;
		case '8':
		case '8r':
			percentage = (beat_value / 4.0) / (2.0 * beats_per_measure);
			break;
		case 'q':
		case 'qr':
			percentage = (beat_value / 4.0) / beats_per_measure;
			break;
		case 'h':
		case 'hr':
			percentage = (beat_value / 2.0) / beats_per_measure;
			break;
		case 'w':
		case 'wr':
			percentage = (beat_value) / beats_per_measure;
			break;
	}
	var dot_factor = 1;
	var multiplier = 0.5
	for (var dot_count = 0; dot_count < number_of_dots; dot_count++) {
		dot_factor += multiplier;
		multiplier = multiplier / 2;
	}
	percentage *= dot_factor;
	return percentage;
}

export default {
	getDurationAsPercentage: getDurationAsPercentage,
}
