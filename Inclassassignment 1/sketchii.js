
let xpos = 0;
let ypos = 0;

let xpos2 = 325;
let ypos2 = 325;

function setup() {
  // put setup code here
createCanvas(500,500);
angleMode(DEGREES);

}

function draw() {
  background(245,66,239);

  fill(245,114,66);
  stroke(245,66,239);
  rect(xpos,xpos,175);
  xpos = xpos + 5;
  ypos = ypos + 5;

  fill(2,137,158);
  stroke(245,66,239);
  rect(xpos2,ypos2,175);
  xpos2 = xpos2 - 5;
  ypos2 = ypos2 - 5;

}
