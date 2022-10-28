const cogwheel = document.getElementById('cogwheel');
let rotation = 0
let speed = 0.1
const step = 0.3

function slower() {
	speed -= step
}

function faster() {
	speed += step
}

function rotate() {
	rotation += speed

	if (rotation > 360) {
		rotation = 360 - rotation
	}

	cogwheel.style.transform = `rotate(${rotation}deg)`;
}

setInterval(rotate, 1000/60.0)