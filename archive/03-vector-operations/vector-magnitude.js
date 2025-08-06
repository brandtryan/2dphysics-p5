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
	draw(color) {
		fill(color);
		stroke("white");
		circle(this.x, this.y, 10);
		line(0, 0, this.x, this.y);
	}
}

// instantiate a new object of type Vec2
let position = new Vec2(10, 20);

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
	position.x = mouseX;
	position.y = mouseY;
	position.draw("red");
	print(position.mag());
}
