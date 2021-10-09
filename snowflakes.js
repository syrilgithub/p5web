//the array that stores all instances of snowflake(s)
const snowflakelist = []

let numSnowflakes = 20 + getRandomInt(0, 10);

//defining a Snowflake (what is a snowflake and what can it do! constuctor passes arguments related to its position, diameter, speed)
class Snowflake {
    constructor(x, y, d, s) {
        this.x = x
        this.y = y
        this.d = d
        this.s = s
    }
    render() {                                                  // defining the method or the function of rendering the Snowflake (relating to function draw)
        circle(this.x,this.y,this.d);
        this.y = frameCount * this.s % windowHeight;           //framecount always increasing, multiplying by the speed and modulating by displayHeight 
    }
};

function setup () {
  let c = createCanvas(windowWidth,windowHeight);
  c.position(0,0)
  c.style('z-index', '-1')
  createsnowflakes();

}

function draw() {
  background(20);

  for (const snowflake of snowflakelist) {
      snowflake.render()
  }
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    createsnowflakes();
  }

function createsnowflakes() {
    // iterating through the array snowflakelist and generating xvalue and speed value
  for (let i = 0; i < numSnowflakes; i++) {
    let xvalue = getRandomInt(windowWidth)
    let svalue = (Math.random() * 3) + 8
    snowflakelist [i] = new Snowflake(xvalue, 0, 10, svalue)      //
    }
}







function getRandomInt(max) {                    //coolguy64
    return Math.floor(Math.random() * max);
  }