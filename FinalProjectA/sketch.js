
let cloud;

function preload() {
  cloud = loadImage('https://i.imgur.com/eiM7zrd.png');
}

function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
//background changes as the sun rises and falls
//colors loop back around (purple to yellow complimentary colors)
  if(mouseX < width/12){
    //sky color 1
    background(118,112,171);
  } else if(mouseX < width/6){
    //sky color 2
    background(188,137,192);
  } else if(mouseX < width/4){
    //sky color 3
    background(213,165,177);
  } else if(mouseX < width/3){
    //sky color 4
    background(234,217,195);
  } else if(mouseX < width*5/12){
    //sky color 5
    background(244,255,227);
  } else if(mouseX < width/2){
    //sky color 6
    background(227,255,243);
  } else if(mouseX < width*7/12){
    //sky color 6
    background(227,255,243);
  } else if(mouseX < width*2/3){
    //sky color 5
    background(244,255,227);
  } else if(mouseX < width*3/4){
    //sky color 4
    background(234,217,195);
  } else if(mouseX < width*5/6){
    //sky color 3
    background(213,165,177);
  } else if(mouseX < width*11/12){
    //sky color 2
    background(188,137,192);
  } else if(mouseX > width*11/12){
    //sky color 1
    background(118,112,171);
  }

//as mouse moves left to right the sun moves up and down
  if(mouseX < width/12){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height,400);
  } else if(mouseX < width/6){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height*5/6,400);
  } else if(mouseX < width/4){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height*2/3,400);
  } else if(mouseX < width/3){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height/2,400);
  } else if(mouseX < width*5/12){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height/3,400);
  } else if(mouseX < width/2){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height/6,400);
  } else if(mouseX < width*7/12){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height/6,400);
  } else if(mouseX < width*2/3){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height/3,400);
  } else if(mouseX < width*3/4){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height/2,400);
  } else if(mouseX < width*5/6){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height*2/3,400);
  } else if(mouseX < width*11/12){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height*5/6,400);
  } else if(mouseX > width*11/12){
    fill(254, 255, 227);
    noStroke();
    circle(width/2,height,400);
  }

  // GRID
  //vertical lines - represents 12 hrs in a day
//stroke(0,0,0);
//line(width/12,0,width/12,height);
//line(width/6,0,width/6,height);
//line(width/4,0,width/4,height);
//line(width/3,0,width/3,height);
//line(width*5/12,0,width*5/12,height);
//line(width/2,0,width/2,height);
//line(width*7/12,0,width*7/12,height);
//line(width*2/3,0,width*2/3,height);
//line(width*3/4,0,width*3/4,height);
//line(width*5/6,0,width*5/6,height);
//line(width*11/12,0,width*11/12,height);
  //horizontal lines - sun heights through the day
 //half as many units, the sun will rise & fall
//line(0,height/6,width,height/6);
//line(0,height/3,width,height/3);
//line(0,height/2,width,height/2);
//line(0,height*2/3,width,height*2/3);
//line(0,height*5/6,width,height*5/6);

//clouds appear as the mouse moves up and down
if(mouseY < height/6){
  imageMode(CENTER);
  tint(255,255,255,42.5);
  image(cloud,width/2,height/5,width*1.25,height/2);
} else if(mouseY < height/3){
  imageMode(CENTER);
  tint(255,255,255,85);
  image(cloud,width/2,height/5,width*1.25,height/2);
} else if(mouseY < height/2){
  imageMode(CENTER);
  tint(255,255,255,127.5);
  image(cloud,width/2,height/5,width*1.25,height/2);
} else if(mouseY < height*2/3){
  imageMode(CENTER);
  tint(255,255,255,127.5);
  image(cloud,width/2,height/5,width*1.25,height/2);
} else if(mouseY < height*5/6){
  imageMode(CENTER);
  tint(255,255,255,85);
  image(cloud,width/2,height/5,width*1.25,height/2);
} else if(mouseY > height*5/6){
  imageMode(CENTER);
  tint(255,255,255,42.5);
  image(cloud,width/2,height/5,width*1.25,height/2);
}

//the ground which creates the horizon line for the sun to set behind
//must be coded last to be infront of everything
//needed to make ground stagnant- noLoop command stopped other transitions
if(mouseX < width/12){
  //RGB code opposite of sky color 1 (repeats)
  fill(28,0,12);
  rect(0,height,width,-100);
} else if(mouseX < width/6){
  //RGB code opposite of sky color 2 (repeats)
  fill(11,0,28);
  rect(0,height,width,-100);
} else if(mouseX < width/4){
  //RGB code opposite of sky color 3 (repeats)
  fill(21,38,60);
  rect(0,height,width,-100);
} else if(mouseX < width/3){
  //RGB code opposite of sky color 4 (repeats)
  fill(42,90,78);
  rect(0,height,width,-100);
} else if(mouseX < width*5/12){
  //RGB code opposite of sky color 5 (repeats)
  fill(67,118,63);
  rect(0,height,width,-100);
} else if(mouseX < width/2){
  //RGB code opposite of sky color 6 (repeats)
  fill(137,143,84);
  rect(0,height,width,-100);
} else if(mouseX < width*7/12){
  fill(137,143,84);
  rect(0,height,width,-100);
} else if(mouseX < width*2/3){
    fill(67,118,63);
    rect(0,height,width,-100);
} else if(mouseX < width*3/4){
  fill(42,90,78);
  rect(0,height,width,-100);
} else if(mouseX < width*5/6){
  fill(21,38,60);
  rect(0,height,width,-100);
} else if(mouseX < width*11/12){
  fill(11,0,28);
  rect(0,height,width,-100);
} else if(mouseX > width*11/12){
  fill(28,0,12);
  rect(0,height,width,-100);
}

}
