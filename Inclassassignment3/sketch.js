
function setup() {

  createCanvas(windowWidth,windowHeight);
  background(255,242,251);
}

function draw() {
  //Put draw code here
  for(let m=0; m < width; m = m + 20){
    for(let k=20; k < height; k = k + 20){
      triangle(m,k,10,0,20,20);
    }

  }
}
