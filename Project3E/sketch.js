
//hydrologic cycle, stage 5: evapotranspiration

let offset = 0.0;
let offset1 = 0.0;

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
  //need background to show up behind the water
  background(72,179,250);
  //sun and cloud part of constant background
  //sun in the sky to allow for evaporation
  fill(252,149,101);
  stroke(252,149,101);
  circle(width/7,height/6,200);

  //cloud infront of sun for continuity
  //alter transparency to show water accumulating in sky
  stroke(255,255,255,95);
  fill(255,255,255,95);
  circle(width/4,height/6,100);
  circle(width/4,height/4,150);
  circle(width/5,height/5,75);
  circle(width/3,height/5,135);
  circle(width/7,height/5,100);
  circle(width/6,height/4,100);

  //really fine transparent lines
  //to show water rising from the surface of the sea
  for(let i = 0; i < width; i = i +10){
    let lineh = random(height,300);
    stroke(194,217,252,80);
    line(i,height,i,lineh);
  }

//layer1 of body of water
  for(let i = 0; i < width; i = i + 3){
    let lineh = height - noise(offset)*300;
    stroke(194,217,252);
    line(i,height,i,lineh);
    offset = offset + 0.003;
}
//layer 2 of body of water
for(let i = 0; i < width; i = i + 2){
  let lineh = height - noise(offset)*300;
  let lineb = height - noise(offset1)*200;
  stroke(119,138,168);
  line(i,lineb,i,lineh);
  offset = offset + 0.003;
  offset1 = offset1 + 0.003;
}
}
