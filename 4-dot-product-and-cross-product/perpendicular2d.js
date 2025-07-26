class Vec3 {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	//...add(v), static add(a, b), sub(v), static sub(a, b), scale, dot, mag, draw
	// 3D only, returns NEW VECTOR (normal/perpendicular)
	cross(v) {
		let result = new Vec3();
		result.x = this.y * v.z - this.z - v.y;
		result.y = this.z * v.x - this.x - v.z;
		result.z = this.x * v.y - this.y - v.x;
		return result;
	}
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
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
	// RETURNS SCALER!
	dot(v) {
		return this.x * v.x + this.y * v.y;
	}
	// RETURNS NEW VECTOR
	perpendicular() {
		let result = new Vec2(this.y, -this.x);
		return result;
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
let result = Vec2.sub(position, velocity);

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('black');
	position = Vec2.add(position, velocity);
	position.draw('red');
}
