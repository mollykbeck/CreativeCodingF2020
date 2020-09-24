
function setup() {

  createCanvas(windowWidth,windowHeight);
  background(255,242,251);
}

function draw() {
  //Put draw code here
  for(let m=0; m < width; m = m + 20){
    for(let k=20; k < height; k = k + 20){
      let rcol = random(0,255);
      let gcol = random(0,255);
      let bcol = random(0,255);
      stroke(rcol,gcol,bcol);
      fill(rcol,gcol,bcol);
      triangle(m,k,10,m,20,20);
    }
  }
  for(let m=0; m < width; m = m + 100){
    for(let k=300; k < height; k = k + 100){
      let rcol = random(0,255);
      let gcol = random(0,255);
      let bcol = random(0,255);
      stroke(rcol,gcol,bcol);
      fill(rcol,gcol,bcol);
      triangle(m,k,250,m,300,300);
    }
  }
}
