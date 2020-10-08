//vertical
let xposvList = [200,600,900];
let yposvList = [100,300,600];
//horizontal
let xposhList = [400,600,800];
let yposhList = [250,300,450];
//ballspeeds
let xspeedList = [10,10,10];
let yspeedList = [10,10,10];

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
background(145,0,150);
//vertical moving balls
  for(let i = 0; i < xposvList.length; i = i +1){
    circle(xposvList[i],yposvList[i],100);

    yposvList[i] = yposvList[i] + yspeedList;

    if(yposvList[i] > height){
      yspeedList[i] = -yspeedList[i];
    }
    if(yposvList[i] < 0){
      yspeedList[i] = -yspeedList[i];
    }
  }
  //horizontal moving balls
  for(let m = 0; m < xposhList.length; m = m +1){
    circle(xposhlist[m],yposhList[m],100);

    xposhList[m] = xposhList[m] + xspeedList;

    if(xposhList[m] > width){
      xspeedList[m] = -xspeedList[m];
    }
    if(xposhList[m] < 0){
      xspeedList[m] = -xspeedList[m];
    }
  }

}
