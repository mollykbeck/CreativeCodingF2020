
function setup() {

  createCanvas(windowWidth,windowHeight);
  background(205,204,252);
}

function draw() {
  //Put draw code here
  for(let m=0; m < width; m = m + 100){
    for(let k=300; k < height; k = k + 100){
      let rcol = random(0,255);
      let gcol = random(0,255);
      let bcol = random(0,255);
      stroke(255,255,255);
      fill(rcol,gcol,255);
      triangle(m,k,250,m,300,300);
    }
  }
  stroke(255,255,255);
  fill(255,255,255);
  circle(300,300,100);
  circle(345,220,50);
}
