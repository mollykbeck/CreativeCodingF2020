
//hydrologic cycle, stage 2: precipitation

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
  //gloomy color choice for rainy day
  background(119,138,168);

  //rain falling behind cloud to look as though it is coming from it.
  for(let i = 0; i < width; i = i +1){
    //rain does not reach edge of the screen (intentional)
    //effectively make the rain appear to thin out
    let lineh = random(0,850);
    line(i,0,i,lineh);
  }
  //second layer of rain to lessen contrast with background
    for(let i = 0; i < width; i = i +1){
      let lineh = random(0,900);
      stroke(119,138,168);
      line(i,0,i,lineh);
    }
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
