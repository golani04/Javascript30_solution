(function() {
	'use strict';
	function removeTransition (e) {
		if (e.propertyName !== 'transform') return; // skip the function if it's not transform
		this.classList.remove('playing');
	}

	function playAudio(e) {
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if (!audio) return;  //stop the function
		audio.currentTime = 0; // rewind to the start, give option to listen immidiately to the same sound
		audio.play();
		key.classList.add('playing'); // add animation
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));

	document.addEventListener('keydown', playAudio);
}());
