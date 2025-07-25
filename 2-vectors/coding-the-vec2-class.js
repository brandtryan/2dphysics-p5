class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	draw() {
		fill('white');
		circle(this.x, this.y, 10);
	}
}

let position = new Vec2(10, 20);

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('black');

	position.draw();
}
