
let xpos = 500;
let ypos = 0;
let xballspeed = 1.5;
let yballspeed = 1.5;

function setup() {

createCanvas(windowWidth,windowHeight);
}

function draw() {

  background(245,214,93);
  fill(116,208,247);
  circle(xpos,ypos,70);

  xpos = xpos +xballspeed;
  ypos = ypos +yballspeed;

  if(xpos > width){
    xballspeed = -xballspeed;
  }
  if(xpos <0){
    xballspeed = -xballspeed
  }

  if(ypos > height){
    yballspeed = -yballspeed
  }
  if(ypos <0){
    yballspeed = -yballspeed;
  }
  if(mouseIsPressed & dist(xpos,ypos,mouseX,mouseY <35)){
      xpos = random(windowWidth,windowHeight);
  }

  }
