const starlist = []
let myFont;

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}
	
	render() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}

function preload() {
  myFont = loadFont('fonts/RussoOne-Regular.ttf');
}

function setup() {
  let c = createCanvas (displayWidth, displayHeight);
  c.position(0,0)
  c.style('z-index', '-1')
  createstar();
  textFont(myFont);
}

function draw() {
  background(20)
  noStroke();
  for (const star of starlist) {
    star.render();  
  }

  textSize(64);
  text('Hello', 10, 500)
  text('World.', 190, 500);
  text('I am Jackson Silvey', 10, 550);
  textSize(16)
  text('здравствуйте мир.', 10, 575)
  text('Меня зовут Джексон Сильви', 10, 600)
  textSize(24)
  let info = ('Major in Management Information Systems w/ Information Assurance  & Minor in Russian');
  text(info, 10, 650); // Text wraps within text box

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createstar();
}


function createstar() {
  for (let i = 0; i < 1000; i++) {
    let xvalue = getRandomInt(displayWidth)
    let yvalue = getRandomInt(displayHeight)
    let tvalue = random(0.10, 3)
    starlist [i] = new Star(xvalue, yvalue, tvalue)
  }
}


function getRandomInt(max) {                    
    return Math.floor(Math.random() * max);
  }