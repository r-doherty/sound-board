const sounds = [
	`ambientScale`,
	`bouncyBass`,
	`chillGuitar`,
	`choppedVocalOne`,
	`choppedVocalTwo`,
	`darkBass`,
	`epicSynth`,
	`lofiPad`,
	`miamiClaps`,
	`strummedSynth`,
	`stop`,
];

sounds.forEach((sound) => {
	const btn = document.createElement(`button`);
	btn.classList.add(`btn`);

	btn.innerText = sound;

	btn.addEventListener(`click`, () => {
		stopLoops();

		document.getElementById(sound).play();
	});
	document.getElementById(`buttons`).appendChild(btn);
});

function stopLoops() {
	sounds.forEach((sound) => {
		const loop = document.getElementById(sound);

		loop.pause();
		loop.currentTime = 0;
	});
}
