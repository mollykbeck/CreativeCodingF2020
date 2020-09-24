
function setup() {

  createCanvas(windowWidth,windowHeight);
  background(255,242,251);

  for(let m=0; m < width; m = m + 20){
    for(let k=0; k < height; k = k + 20){
      nofill();
      rect(m,k,19);
    }
    }
}

function draw() {
  //Put draw code here

}
