let lemonList = [];
let limeList = [];

let xposList = [];
let yposList = [];

let yspeedList = [];

let sizeList = [];
let fruittotals = 30

function preload(){
  for(let i = 0; i < fruittotals; i = i +1){
    lemonList[i] = loadImage('https://i.imgur.com/vzaZa9i.png');
    limeList[i] = loadImage('https://i.imgur.com/emA8rbf.png');
  }
  }

function setup(){
createCanvas(windowWidth,windowHeight);
for(let i = 0; i < fruittotals; i = i +1){
  yposList[i] = 0;
  xposList[i] = random(0,width);
  yspeedList[i] = random(1,20);
  sizeList[i] = 100,100
}
}

function draw() {
background(255,255,153);
imageMode(CENTER);

for(let i = 0; i < fruittotals; i = i +1){
  image(limeList[i],xposList[i],yposList[i],sizeList[i],sizeList[i]);

  yposList[i] = yposList[i] + yspeedList[i];
}

for(let i = 0; i < fruittotals; i = i +1){
  image(lemonList[i],xposList[i],yposList[i],sizeList[i],sizeList[i]);

  yposList[i] = yposList[i] + yspeedList[i];
}
}
