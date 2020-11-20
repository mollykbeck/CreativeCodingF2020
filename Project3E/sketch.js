
//hydrologic cycle, stage 5: evapotranspiration

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


}
