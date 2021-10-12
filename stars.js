const starlist = []

class Star {
	constructor() {
		this.x = random(displayWidth);
		this.y = random(displayHeight);
		this.size = random(0.25, 4);
		this.t = random(TAU);
	}
	
	render() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * .8;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}

function setup() {
  let c = createCanvas (windowWidth, windowHeight);
  c.position(0,0)
  c.style('z-index', '-1')
  createstar();
}

function draw() {
  background(0)
  noStroke();
  for (const star of starlist) {
    star.render();
  }
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