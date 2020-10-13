//vertical
let xposList = [200,400,600,800,1000];
let yposList = [100,300,400,500,600];
//ballspeeds
let xspeedList = [5,6,5,7,5];
let yspeedList = [5,5,7,5,6];
//circle sizes
let sizeList = [70,150,110,130,90];

function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
background(145,0,150);

for(let i = 0; i < xposList.length; i = i +1){
  stroke(255,115,8);
  fill(255,115,8);
  circle(xposList[i],yposList[i],sizeList[i]);

  xposList[i] = xposList[i] + xspeedList[i];
  yposList[i] = yposList[i] + yspeedList[i];
//check points
  if(xposList[i] > width){
    xspeedList[i] = -xspeedList[i];
  }
  if(xposList[i] < 0){
    xspeedList[i] = -xspeedList[i];
  }
  if(yposList[i] > height){
    yspeedList[i] = -yspeedList[i];
  }
  if(yposList[i] < 0){
    yspeedList[i] = -yspeedList[i];
  }
  if(mouseIsPressed & dist(mouseX,mouseY,xposList[i],yposList[i]) < sizeList[i]/2 ){
    xposList[i] = -200;
    yposList[i] = -300;
  }

}
}
