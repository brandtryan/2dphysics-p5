class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	add(v) {
		this.x += v.x;
		this.y += v.y;
	}
	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
	}
	scale(n) {
		this.x *= n;
		this.y *= n;
	}
	mag() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	draw(color) {
		fill(color);
		stroke('white');
		circle(this.x, this.y, 10);
	}
}

let position = new Vec2(10, 20);
let velocity = new Vec2(0, 1);

function setup() {
	createCanvas(windowWidth, windowHeight);
	position.scale(10.0);
}

function draw() {
	background('black');
	position.draw('red');
}
