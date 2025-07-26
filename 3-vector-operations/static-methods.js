class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	add(v) {
		this.x += v.x;
		this.y += v.y;
	}
	static add(a, b) {
		let result = new Vec2(0, 0);
		result.x = a.x + b.x;
		result.y = a.y + b.y;
		return result;
	}
	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
	}
	static sub(a, b) {
		let result = new Vec2(0, 0);
		result.x = a.x - b.x;
		result.y = a.y - b.y;
		return result;
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
let velocity = new Vec2(1, 2);

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('black');
	position = Vec2.add(position, velocity);
	position.draw('red');
}
