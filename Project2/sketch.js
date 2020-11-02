
let inkblot;
let journal;

function preload(){
  inkblot = loadImage('https://i.imgur.com/LqDDNVn.png');
  journal = loadImage('https://i.imgur.com/Sq1JLKA.jpg');
}

function setup() {
  // creamy background color to mimic a faded textile the inkblot may be on
createCanvas(windowWidth,windowHeight);
background(249,239,210);

}

function draw() {
//insert text to create depth and texture
image(journal,0,0);
//moth inkblots centered in the composition
imageMode(CENTER);
tint(162,70,47,100);
image(inkblot, width*1/5,height/2);

tint(16,17,49,100);
image(inkblot,width*4/5,height/2);
//same color as background to create negative space
tint(160,179,145,100);
image(inkblot,width/2,height/2);

}
