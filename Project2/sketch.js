
let inkblot;
let journal;
let journal2;

let rcol = random(0-255);
let gcol = random(0-255);
let bcol = random(0-255);


function preload(){
  inkblot = loadImage('https://i.imgur.com/LqDDNVn.png');
  journal = loadImage('https://i.imgur.com/Sq1JLKA.jpg');
  journal2 = loadImage('https://i.imgur.com/jGz1upV.jpg');
}

function setup() {
  // creamy background color to mimic a faded textile the inkblot may be on
createCanvas(windowWidth,windowHeight);
background(249,239,210);

}

function draw() {

image(journal2,width/15,height/15,width/2,height/2);

//insert text to create depth and texture
tint(249,239,210,100);
image(journal,0,0);

//moth inkblots centered in the composition
//opacity of 100 to make less apparent
imageMode(CENTER);
tint(162,70,47,100);
image(inkblot, width*1/5,height*1/5);


//frantic inklots to make the viewer feel confused/tested
  for(let i = 0; i<width; i = i+400){
    for(let j = 0; j<height; j = j+400){
      tint(249,239,210);
      image(inkblot,i,j,width/3,height/3,random(0-400));
    }
  }

}
