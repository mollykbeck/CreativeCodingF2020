//inkblot vector
let inkblot;
//inkblot image
let inkblot2;
//rorshach letters repeated
let journal;
//"this is a test"
let journal2;

function preload(){
  inkblot = loadImage('https://i.imgur.com/LqDDNVn.png');
  inkblot2 = loadImage('https://i.imgur.com/W1k4KYg.jpg');
  journal = loadImage('https://i.imgur.com/Sq1JLKA.jpg');
  journal2 = loadImage('https://i.imgur.com/jGz1upV.jpg');
}

function setup() {
  // creamy background color to mimic a faded textile the inkblot may be on
createCanvas(windowWidth,windowHeight);
background(249,239,210);
}

function draw() {
// image of inkblot at the back, show through all layers slightly
image(inkblot2,width/2,height/2);
//large lettering layered for chaos
image(journal2,width/15,height/15,width/2,height/2);

//insert smaller text to create depth and texture, reveal through inkblot pattern lited below
tint(249,239,210,100);
image(journal,0,0);


//opacity of 100 to make less apparent, make orange to add subtle color
imageMode(CENTER);
tint(162,70,47,100);
image(inkblot, width*1/5,height*1/5);

//moth inkblots patterned
//frantic inklots to make the viewer feel confused/tested
  for(let i = 0; i<width; i = i+400){
    for(let j = 0; j<height; j = j+400){
//full opacity
      tint(249,239,210);
      image(inkblot,i,j,width/3,height/3,random(0-400));
    }
  }

}
