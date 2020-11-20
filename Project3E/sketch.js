
//hydrologic cycle, stage 5: evapotranspiration
//variables for bezier effect
let x1
let y1
let x2
let y2
let x3
let y3
let x4
let y4

function setup() {
createCanvas(windowWidth,windowHeight);
  background(72,179,250);



}

function draw() {

//sun in the sky to allow for evaporation
fill(252,149,101);
stroke(252,149,101);
circle(width/7,height/6,200);

//cloud infront of sun for continuity
imageMode(CENTER);
stroke(255,255,255);
fill(255,255,255);
circle(width/4,height/6,100);
circle(width/4,height/4,150);
circle(width/5,height/5,75);
circle(width/3,height/5,135);
circle(width/7,height/5,100);
circle(width/6,height/4,100);

noFill();

x1 = random(width,0);
y1 = random(0,height);
x2 = random(width,0);
y2 = random(0,height);
x3 = random(width,0);
y3 = random(0,height);
x4 = random(width,0);
y4 = random(0,height);

bezier(x1,y1,x2,y2,x3,y3,x4,y4);



}
