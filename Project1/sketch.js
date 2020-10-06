

function setup() {
  // create full-screen canvas
createCanvas(windowWidth,windowHeight);
}
function draw() {
// main background color
  background(14,12,20);
//background color changes
  if(keyIsPressed & keyCode === UP_ARROW){
    background(255,83,73);
//flash of light upper leftthand corner
    fill(242,162,2);
    stroke(242,162,2);
    triangle(0,0,300,0,0,110);
    triangle(0,0,110,0,0,450);
    triangle(0,90,130,0,200,250);
  }
  if(keyIsPressed & keyCode === DOWN_ARROW){
    background(100,130,250);
//flash of light lower righthand corner
    triangle(700,700,1300,400,1300,700);
    triangle(1000,700,1300,200,1300,700);
    triangle(1100,700,900,350,1500,700);
  }
  if(keyIsPressed & keyCode === LEFT_ARROW){
    background(242,162,2);
//flash of light from lower lefthand corner
    triangle(0,700,0,200,100,700);
    triangle(0,700,0,400,500,700);
    triangle(0,500,250,200,200,700);
  }
  if(keyIsPressed & keyCode === RIGHT_ARROW){
    background(198,2,242);
//flash of light upper righthand corner
        triangle(900,0,1300,0,1300,350);
        triangle(1000,0,1300,0,1300,600);
        triangle(1100,0,1300,300,900,400);
  }
//begin drawing figure (tip: draw from back to front)

//neck
fill(245,200,174);
stroke(245,200,174);
rect(495,420,200,500);
//turtleneck sweater pieces
fill(210,210,212);
stroke(210,210,212);
rect(485,530,220,100);
fill(210,210,212);
ellipse(597,710,800,230);



//hair
  fill(255,255,245);
  stroke(255,255,250);
  circle(597,240,520);
//face
  fill(255,220,199);
  stroke(255,220,199);
  ellipse(597,280,375,450);
//hair part 2: bangs
  fill(255,255,245);
  stroke(255,255,250);
  rect(423,50,350,110);
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

  //initial drawing of sunglasses
  fill(75,191,133);
  stroke(75,191,133);
  rect(505,225,200,12);
  rect(505,190,180,12);
  //right lens
  fill(75,191,133)
  stroke(75,191,133);
  circle(710,260,200);
  fill(14,12,20);
  stroke(14,12,20);
  circle(710,260,175);
  //left lens
  fill(75,191,133);
  stroke(75,191,133);
  circle(485,260,200);
  fill(14,12,20);
  stroke(14,12,20);
  circle(485,260,175);
//the color changing lenses
//follow clockwise cycle of colors shifted back once
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
