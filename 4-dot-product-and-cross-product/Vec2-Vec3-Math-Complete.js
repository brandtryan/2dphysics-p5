////////////////////////////////////////////////////////////////////////////////
// Vector 2D Class (blueprint for all our 2D vectors)
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
////////////////////////////////////////////////////////////////////////////////
// Vector 3D Class (blueprint for all our 3D vectors)
////////////////////////////////////////////////////////////////////////////////
class Vec3 {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	add(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
	}
	static add(a, b) {
		let result = new Vec3(0, 0, 0);
		result.x = a.x + b.x;
		result.y = a.y + b.y;
		result.z = a.z + b.z;
		return result;
	}
	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
	}
	static sub(a, b) {
		let result = new Vec3(0, 0, 0);
		result.x = a.x - b.x;
		result.y = a.y - b.y;
		result.z = a.z - b.z;
		return result;
	}
	scale(n) {
		this.x *= n;
		this.y *= n;
		this.z *= n;
	}
	// RETURNS SCALER!
	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}
	mag() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	// 3D only, returns NEW VECTOR (normal/perpendicular)
	cross(v) {
		let result = new Vec3();
		result.x = this.y * v.z - this.z * v.y;
		result.y = this.z * v.x - this.x * v.z;
		result.z = this.x * v.y - this.y * v.x;
		return result;
	}
	// TODO: draw method for 3D canvas in the future...
}

// Create new 3D vector objects
let position = new Vec3(10, 20, -2);
let velocity = new Vec3(1, 2, 0);
////////////////////////////////////////////////////////////////////////////////
// Setup function, called once at beginning of our app
////////////////////////////////////////////////////////////////////////////////
function setup() {
	createCanvas(windowWidth, windowHeight);
}

////////////////////////////////////////////////////////////////////////////////
// Draw function, called every frame several times per second
////////////////////////////////////////////////////////////////////////////////
function draw() {
	background('black');
	position.add(velocity);
	console.log('Position: ', position);
}
