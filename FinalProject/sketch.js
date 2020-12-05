
function setup() {
  // plain background color
createCanvas(windowWidth,windowHeight);
background(222,241,255);

}

function draw() {

  for(let i = 0; i < height; i = i + 5){
    let lineh = width - noise(offset)*500;
    strokeWeight(3);
    stroke(125,54,4);
    line(width,i,lineh,i);
    offset = offset + 0.003;
}
