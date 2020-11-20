
//hydrologic cycle, stage 4: runoff

let offset = 0.0;

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
  //mimic grass as the land the water will flow through
  background(45,105,102);

//water falling off the land and down into the basin below
//vertical contrast agains the ground
  for(let i = 0; i < width; i = i +10){
    let lineh = random(0,2000);
    strokeWeight(1);
    stroke(72,179,250);
    line(i,0,i,lineh);

//brown to mix dirt within the grean background
//horizontal lines to create crack in compostion
// lines closer together than water, but not solid for depth
  for(let i = 0; i < height; i = i + 5){
    let lineh = width - noise(offset)*500;
    strokeWeight(3);
    stroke(125,54,4);
    line(width,i,lineh,i);
    offset = offset + 0.003;
}
for(let i = 0; i < height; i = i + 4){
  let lineh = noise(offset)*300;;
  stroke(125,54,4);
  line(0,i,lineh,i);
  offset = offset + 0.003;
}
}
}
