

function setup() {
  // create full-screen canvas
createCanvas(windowWidth,windowHeight);
}

function draw() {

//initial background color red-orange
  background(255,83,73);

//face
  fill(255,220,199);
  stroke(255,220,199);
  ellipse(width/2,height/2,375,450);

//left eyebrow
  fill(227,177,145);
  stroke(227,177,145);
  ellipse(520,210,110,50);

  fill(255,220,190);
  stroke(255,220,190);
  ellipse(520,220,110,50);

//left eye
  fill(227,177,145);
  stroke(227,177,145);
  ellipse(520,240,100,50);

  fill(255,255,255);
  stroke(255,255,255);
  ellipse(520,250,100,50);

  fill(75,191,133);
  stroke(255,255,255);
  circle(520,250,50);

  fill(0,0,0);
  stroke(0,0,0);
  circle(520,250,25);

//right eyebrow
  fill(227,177,145);
  stroke(227,177,145);
  ellipse(670,210,110,50);

  fill(255,220,190);
  stroke(255,220,190);
  ellipse(670,220,110,50);

//right eye
  fill(227,177,145);
  stroke(227,177,145);
  ellipse(670,240,100,50);

  fill(255,255,255);
  stroke(255,255,255);
  ellipse(670,250,100,50);

  fill(75,191,133);
  stroke(255,255,255);
  circle(670,250,50);

  fill(0,0,0);
  stroke(0,0,0);
  circle(670,250,25);

}
