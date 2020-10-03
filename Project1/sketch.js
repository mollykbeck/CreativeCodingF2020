
let xpos = 300
let ypos = 200

function setup() {

  if(mouseIsPressed & dist(xpos,ypos,mouseX,mouseY <50)){
    fill(255,164,116);
    stroke(255,160,137);
    circle(350,250,75);

    fill(253,217,181);
    stroke(255,164,116);
    circle(350,175,45);
    }
}

function draw() {
  // create full-screen canvas
  createCanvas(windowWidth,windowHeight);
  //keep background color red-orange
  background(255,83,73);
  //initial cluster of circles (3)
  fill(255,160,137);
  stroke(255,164,116);
  circle(xpos,ypos,100);

}
