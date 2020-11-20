
//hydrologic cycle, stage 1: condensation
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
  //faded blue color choice for cloudy sky
  background(194,217,252);
  //central location of the cloud
  //clouds drawing (background)

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

  offset = 0.0;
noFill();

}

function draw() {
  //bezier curves mimic the water vapor within the clouds during condensation
x1 = noise(offset)*width;
x2 = noise(offset +300)*width;
x3 = noise(offset +600)*width;
x4 = noise(offset +900)*width;

y1 = noise(offset +300)*height;
y2 = noise(offset +600)*height;
y3 = noise(offset +900)*height;
y4 = noise(offset +1100)*height;

strokeWeight(1);
stroke(194,217,252,65);
bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.01;

  //white curves layerd over the blue to add to hazy vapor look
x1 = noise(offset)*width;
x2 = noise(offset +200)*width;
x3 = noise(offset +500)*width;
x4 = noise(offset +800)*width;

y1 = noise(offset +300)*height;
y2 = noise(offset +600)*height;
y3 = noise(offset +900)*height;
y4 = noise(offset +1100)*height;

strokeWeight(.5);
stroke(255,255,255);
bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.012;
}
