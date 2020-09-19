
let xpos = 500;
let ypos = 0;
let xballspeed = 5;
let yballspeed = 5;

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

  if(mouseIsPressed & dist(mouseX,mouseY,xpos,ypos <35)){
    dist(random(windowWidth,windowHeight));
  }


}
