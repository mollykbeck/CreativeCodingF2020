
let xpos = 500;
let ypos = 0;
let xballspeed = 2;
let yballspeed = 2;

function setup() {

createCanvas(windowWidth,windowHeight);

}

function draw() {

  background(245,214,93);
  fill(116,208,247);
  circle(xpos,ypos,70);

  xpos = xpos +xballspeed;
  ypos = ypos +yballspeed;

  //check for x position
  if(xpos > width){
    xballspeed = -xballspeed;
  }
  if(xpos <0){
    xballspeed = -xballspeed
  }
  //check for y position
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
