
function setup() {

  createCanvas(windowWidth,windowHeight);
  background(255,242,251);
}

function draw() {
  //Put draw code here
for(let i = 0; i <width; i = i + 20){
  for(let j = 0; j <height; j = j + 20){
      rect(i,j,19);
  }
}

}
