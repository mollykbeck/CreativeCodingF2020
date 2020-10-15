
let lemonList = [];
let xposList = [];
let yposList = [];

let yspeedList = [];

let numoflemons = 30

function preload(){

for(let i = 0;1 < numoflemons;i = i +1){
  lemonList[i] = loadImage('https://i.imgur.com/2nxDLRH.png');

}

}

function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
for(let i = 0;i < numoflemons; i = i +1){
  yposList[i] = 0;
  xposList[i] = random(0,width);
  yspeedList[i] = random(3,10);
}

}

function draw() {
  background(255,255,153);
  imageMode(CENTER);

for(let i = 0;i < numoflemons;i = i +1){
  image(lemonList[i],xposList[i],yposList[i],100,100);

  yposList[i] = yposList[i] + ypseedList[i];
}



}
