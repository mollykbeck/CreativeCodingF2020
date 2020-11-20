
//hydrologic cycle, stage 3: infiltration
//pores
let xpos;
let ypos;
//water
let xpos2;
let ypos2;
let xoffset;
let yoffset;

function setup() {
createCanvas(windowWidth,windowHeight);
    background(87,122,145);
    noStroke();

    xoffset = random(0,width);
    yoffset = random(0,height);
}

function draw() {

//water infiltrating the ground
  xpos2 = noise(xoffset)*width;
  ypos2 = noise(yoffset)*height;
//alter transparency to show the water is moving toward the viewer
  fill(72,179,250,50);
  circle(xpos2,ypos2,200);
  xoffset = xoffset + 0.01;
  yoffset = yoffset +0.01;

  //porous texture for water to infiltrate
  //as the pores accumulate the scene becomes foggy (more water)
      xpos = random(0,width);
      ypos = random(0,height);


      fill(194,217,252,20);
      circle(xpos,ypos,150);

    //darker center to make the circle appear as a pore
      fill(87,122,145,20);
      circle(xpos,ypos,100);

}
