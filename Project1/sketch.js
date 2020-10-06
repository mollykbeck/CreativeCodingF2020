

function setup() {
  // create full-screen canvas
createCanvas(windowWidth,windowHeight);
}

function draw() {
// background color (red-orange)
background(0,0,0);
  if(keyIsPressed & keyCode === UP_ARROW){
    background(255,83,73);
  }
//background color change
  if(keyIsPressed & keyCode === DOWN_ARROW){
    background(100,130,250);
  }
  if(keyIsPressed & keyCode === LEFT_ARROW){
    background(242,162,2);
  }
  if(keyIsPressed & keyCode === RIGHT_ARROW){
    background(198,2,242);
  }
//hair
  fill(255,255,250);
  stroke(255,255,250);
  circle(597,240,520);
//face
  fill(255,220,199);
  stroke(255,220,199);
  ellipse(597,280,375,450);
//bangs
  fill(255,255,250);
  stroke(255,255,250);
  rect(430,50,350,110);
//nose
//nostrils
  fill(245,200,174);
  stroke(245,200,174);
  ellipse(572,320,50,35);
  ellipse(619,320,50,35);
//tip of nose
  fill(255,228,212);
  stroke(255,220,199);
  circle(597,315,50);
//mouth
//upper lip
  fill(255,83,73);
  stroke(255,83,73);
  triangle(520,400,597,380,597,400);
  triangle(597,404,597,380,670,400);
//lower lip
  fill(227,72,64);
  triangle(520,400,670,400,597,415);
//chin
  fill(255,228,212);
  stroke(255,228,212);
  ellipse(597,470,100,60);

  //sunglasses
  fill(75,191,133);
  stroke(75,191,133);
  rect(505,225,200,12);
  rect(505,190,180,12);
  //right lens
  fill(75,191,133)
  stroke(75,191,133);
  circle(710,260,200);
  fill(0,0,0);
  stroke(75,191,133);
  circle(710,260,175);
  //left lens
  fill(75,191,133);
  stroke(75,191,133);
  circle(485,260,200);
  fill(0,0,0);
  stroke(75,191,133);
  circle(485,260,175);

  if(keyIsPressed & keyCode === UP_ARROW){
    fill(242,162,2);
    stroke(75,191,133);
    circle(710,260,175);
    fill(242,162,2);
    stroke(75,191,133);
    circle(485,260,175);
  }
  if(keyIsPressed & keyCode === RIGHT_ARROW){
    fill(255,83,73);
    stroke(255,83,73);
    circle(710,260,175);
    fill(255,83,73);
    stroke(255,83,73);
    circle(485,260,175);
  }
  if(keyIsPressed & keyCode === DOWN_ARROW){
    fill(198,2,242);
    stroke(198,2,242);
    circle(710,260,175);
    fill(198,2,242);
    stroke(198,2,242);
    circle(485,260,175);
  }
  if(keyIsPressed & keyCode === LEFT_ARROW){
    fill(100,130,250);
    stroke(100,130,250);
    circle(710,260,175);
    fill(100,130,250);
    stroke(100,130,250);
    circle(485,260,175);
  }
}
