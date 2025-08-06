//////////////////////////////////////////////////////////
// Vector 2D Class (blueprint for all our 2D vectors)
//////////////////////////////////////////////////////////
class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	mag() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
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
	draw(color) {
		fill(color);
		stroke("white");
		circle(this.x, this.y, 10);
	}
}

// instantiate a new object of type Vec2
let position = new Vec2(10, 20);
let velocity = new Vec2(2, 1);

//////////////////////////////////////////////////////////
// Setup called once at beginning of our app
//////////////////////////////////////////////////////////
function setup() {
	createCanvas(windowWidth, windowHeight);
	// scale vector by single value
	position.scale(5.0);
	console.log(position);
}

//////////////////////////////////////////////////////////
// Draw called every frame several times per second
//////////////////////////////////////////////////////////
function draw() {
	background("black");
	position.draw("red");
}
