function getAudioContext() {
	window.AudioContext = (window.AudioContext ||
	window.webkitAudioContext ||
	window.mozAudioContext ||
	window.oAudioContext ||
	window.msAudioContext); // Safari and old versions of Chrome
	return new AudioContext();
}

export default {
	getAudioContext: getAudioContext
}
