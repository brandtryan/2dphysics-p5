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
}

//////////////////////////////////////////////////////////
// Draw called every frame several times per second
//////////////////////////////////////////////////////////
function draw() {
	background("black");
	// get velocity vector and for every frame add it to original
	position.add(velocity);
	position.draw("red");
}
