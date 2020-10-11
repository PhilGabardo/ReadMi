import key_comparison from './key_comparison'
let noteFrequencies =
	// B        A#        A      G#       G         F#       F        E         D#      D        C#       C
	[7902.13, 7458.62, 7040.00, 6644.88, 6271.93, 5919.91, 5587.65, 5274.04, 4978.03, 4698.64, 4434.92, 4186.01,  // 8
		3951.07, 3729.31, 3520.00, 3322.44, 3135.96, 2959.96, 2793.83, 2637.02, 2489.02, 2349.32, 2217.46, 2093.00,   // 7
		1975.53, 1864.66, 1760.00, 1661.22, 1567.98, 1479.98, 1396.91, 1318.51, 1244.51, 1174.66, 1108.73, 1046.50,   // 6
		987.767, 932.328, 880.000, 830.609, 783.991, 739.989, 698.456, 659.255, 622.254, 587.330, 554.365, 523.251,   // 5
		493.883, 466.164, 440.000, 415.305, 391.995, 369.994, 349.228, 329.628, 311.127, 293.665, 277.183, 261.626,   // 4
		246.942, 233.082, 220.000, 207.652, 195.998, 184.997, 174.614, 164.814, 155.563, 146.832, 138.591, 130.813,   // 3
		123.471, 116.541, 110.000, 103.826, 97.9989, 92.4986, 87.3071, 82.4069, 77.7817, 73.4162, 69.2957, 65.4064,   // 2
		61.7354, 58.2705, 55.0000, 51.9131, 48.9994, 46.2493, 43.6535, 41.2034, 38.8909, 36.7081, 34.6478, 32.7032,   // 1
		30.8677, 29.1352, 27.5000, 25.9565, 24.4997, 23.1247, 21.8268, 20.6017, 19.4454, 18.3540, 17.3239, 16.3516]; // 0

let noteNames = ["B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D", "C#", "C"];

let noteNameIndexMap = {
	"C": 0,
	"C#": 1,
	"DB": 1,
	"D": 2,
	"D#": 3,
	"EB": 3,
	"E": 4,
	"F": 5,
	"F#": 6,
	"GB": 6,
	"G": 7,
	"G#": 8,
	"AB": 8,
	"A": 9,
	"A#": 10,
	"BB": 10,
	"B": 11,
};


function estimateNote(frequency) {
	let length = noteFrequencies.length;
	let frequencyIndex = 0;
	let nextClosestIndex = 0;

	// Iterate through the note array to find the closest indices
	for (let i = 0; i < length - 1; i++) {
		if (i == 0 && frequency > noteFrequencies[i]) {
			frequencyIndex = 0;
			nextClosestIndex = 0;
			break;
		} else if (noteFrequencies[i] >= frequency && frequency > noteFrequencies[i + 1]) {
			frequencyIndex = (noteFrequencies[i] - frequency) < (frequency - noteFrequencies[i + 1]) ? i : i + 1;
			nextClosestIndex = frequencyIndex == i ? i + 1 : i;
			break;
		} else if (i == length - 2) {
			frequencyIndex = length - 1;
			nextClosestIndex = length - 1;
		}
	}

	// Get the name of the note
	return {
		key: noteNames[(frequencyIndex) % noteNames.length],
		octave: 8 - Math.floor(frequencyIndex / noteNames.length),
	};
}

function getFrequencyForNote(note_name, note_octave) {
	let noteNameIndex;
	for (let i = 0; i < noteNames.length; i++) {
		if (key_comparison.compareKeys(note_name, noteNames[i])) {
			noteNameIndex = i;
			break;
		}
	}
	return noteFrequencies[noteFrequencies.length - 1 - (note_octave * noteNames.length) - (noteNames.length - noteNameIndex - 1)]
}

function getIndexForNote(note_name, note_octave) {
	return note_octave * 12 + noteNameIndexMap[note_name]
}


function estimateFrequency(wave) {

	function autoCorrelationDifference(wave) {
		var compressedWave = new Array(wave.length / 2)
		var compressedResultBuffer = new Array(compressedWave.length / 2)
		var resultBuffer = new Array(wave.length / 2)


		for (var i = 0; i < wave.length - 1; i += 2) {
			compressedWave[i / 2] = (wave[i] + wave[i + 1]) / 2;
		}

		for (var j = 0; j < compressedResultBuffer.length; j++) {
			for (var i = 0; i < compressedResultBuffer.length; i++) {
				// d sub t (tau) = (x(i) - x(i - tau))^2, from i = 1 to result buffer size
				if (!(j in compressedResultBuffer)) {
					compressedResultBuffer[j] = 0;
				}
				compressedResultBuffer[j] += Math.pow((compressedWave[i] - compressedWave[i + j]), 2);
			}
		}

		for (var i = 0; i < resultBuffer.length - 1; i += 2) {
			var iNorm = i / 2;
			var diff = (compressedResultBuffer[iNorm + 1] - compressedResultBuffer[iNorm]) / 2;
			resultBuffer[i] = compressedResultBuffer[iNorm];
			resultBuffer[i + 1] = compressedResultBuffer[iNorm] + diff;
		}
		return resultBuffer;
	}

	function cumulativeMeanNormalizedDifference(resultBuffer) {
		var length = resultBuffer.length;
		var runningSum = 0;

		// Set the first value in the result buffer to the value of one
		resultBuffer[0] = 1;

		for (var i = 1; i < length; i++) {
			// The sum of this value plus all the previous values in the buffer array
			runningSum = runningSum + resultBuffer[i];

			// The current value is updated to be the current value multiplied by the index divided by the running sum value
			resultBuffer[i] =  resultBuffer[i] * i / runningSum;
		}
		return resultBuffer;
	}

	function absoluteThreshold(resultBuffer) {
		var tau;
		var length = resultBuffer.length;

		// The first two values in the result buffer should be 1, so start at the third value
		for (tau = 0; tau < length; tau++) {
			// If we are less than the threshold, continue on until we find the lowest value
			// indicating the lowest dip in the wave since we first crossed the threshold.
			if (resultBuffer[tau] < 0.1) {
				while (tau + 1 < length && resultBuffer[tau + 1] < resultBuffer[tau]) {
					tau++;
				}

				// We have the approximate tau value, so break the loop
				break;
			}
		}

		// Some implementations of this algorithm set the tau value to -1 to indicate no correct tau
		// value was found. This implementation will just return the last tau.
		tau = (tau >= length - 1 ? -1 : tau);
		return tau;
	}

	function parabolicInterpretation(currentTau, resultBuffer) {
		// Finds the points to fit the parabola between
		var x0 = currentTau < 1 ? currentTau : currentTau - 1;
		var x2 = currentTau + 1 < resultBuffer.length ? currentTau + 1 : currentTau;

		// Finds the better tau estimate
		var betterTau;

		if (x0 == currentTau) {
			if (resultBuffer[currentTau] <= resultBuffer[x2]) {
				betterTau = currentTau;
			} else {
				betterTau = x2;
			}
		} else if (x2 == currentTau) {
			if (resultBuffer[currentTau] <= resultBuffer[x0]) {
				betterTau = currentTau;
			} else {
				betterTau = x0;
			}
		} else {
			// Fit the parabola between the first point, current tau, and the last point to find a
			// better tau estimate.
			var s0 = resultBuffer[x0];
			var s1 = resultBuffer[currentTau];
			var s2 = resultBuffer[x2];

			betterTau = currentTau + (s2 - s0) / (2 * (2 * s1 - s2 - s0));
		}

		return betterTau;
	}

	var resultBuffer = autoCorrelationDifference(wave);
	resultBuffer = cumulativeMeanNormalizedDifference(resultBuffer)
	var tau = absoluteThreshold(resultBuffer)
	if (tau == -1) {
		return tau;
	}
	tau = parabolicInterpretation(tau, resultBuffer)
	return 44100 / tau
}

function getNoteFromSamples(buffer, sampleRate, expected_freq) {
	if (expected_freq < 300) {
		let freq = estimateFrequency(buffer);
		return freq == -1 ? [] : estimateNote(freq)
	}
	// We use Autocorrelation to find the fundamental frequency.

	// In order to correlate the signal with itself (hence the name of the algorithm), we will check two points 'k' frames away.
	// The autocorrelation index will be the average of these products. At the same time, we normalize the values.
	// Source: http://www.phy.mty.edu/~suits/autocorrelation.html
	// Assuming the sample rate is 48000Hz, a 'k' equal to 1000 would correspond to a 48Hz signal (48000/1000 = 48),
	// while a 'k' equal to 8 would correspond to a 6000Hz one, which is enough to cover most (if not all)
	// the notes we have in the notes.json file.

	var n = 1024, bestR = 0, bestK = -1;
	for(var k = 8; k <= 1000; k++){

		var sum = 0;
		for(var i = 0; i < n; i++) {
			sum += ((buffer[i] - 128) / 128) * ((buffer[i + k] - 128) / 128);
		}

		var r = sum / (n + k);

		if(r > bestR){
			bestR = r;
			bestK = k;
		}

		if(r > 0.9) {
			break;
		}
	}

	if(bestR > 0.0025) {
		// The period (in frames) of the fundamental frequency is 'bestK'. Getting the frequency from there is trivial.
		var fundamentalFreq = sampleRate / bestK;
		return estimateNote(fundamentalFreq);
	}
	else {
		// We haven't found a good correlation
		return [];
	}
};

export default {
	getFrequencyForNote: getFrequencyForNote,
	getNoteFromSamples: getNoteFromSamples,
	estimateNote: estimateNote,
	getIndexForNote: getIndexForNote,
}
