
//hydrologic cycle, stage 2: precipitation

function setup() {
createCanvas(windowWidth,windowHeight);
  //gloomy color choice for rainy day
  background(119,138,168);
}

function draw() {

//bottom of cloud from previous sketch for continuity
imageMode(CENTER);
stroke(255,255,255);
fill(255,255,255);
circle(width/2,0,400);
circle(width/3,-30,200);
circle(width*2/3,0,300);
circle(width/7,0,400);
circle(width*6/7,-40,400);

}
