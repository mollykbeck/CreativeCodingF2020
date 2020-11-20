
//hydrologic cycle, stage 1: condensation

function setup() {
createCanvas(windowWidth,windowHeight);
  //faded blue color choice for cloudy sky
  background(194,217,252);


}

function draw() {

//central location of the cloud
//clouds drawing (background)
imageMode(CENTER);
stroke(255,255,255);
fill(255,255,255);
circle(width/2,height/4,400);
circle(width/2,height*2/3,500);
circle(width/3,height*2/5,340);
circle(width*2/3,height*2/5,340);
circle(width/4,height*2/3,400);
circle(width*3/4,height*2/3,400);
circle(width/7,height/2,400);
circle(width*6/7,height/2,400);
circle(width/10,0,500);
circle(width/3,0,200);

}
