
function setup() {

  createCanvas(windowWidth,windowHeight);
  background(255,242,251);
}

function draw() {
  //Put draw code here
  for(let m=0; m < width; m = m + 20){
    nofill();
    rect(m,0,20);
  }
}
