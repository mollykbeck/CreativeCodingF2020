
let moon;
let stars;

function preload() {
  moon = loadImage('https://i.imgur.com/XEf77MT.png');
  stars = loadImage('https://i.imgur.com/p1TtAn8.png');
}
function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
//background changes as the moon moves from East to West
//colors start with the purple from Final Part 1
  if(mouseX < width/12){
    //sky color 1 (same as Part 1)
    background(118,112,171);
  } else if(mouseX < width/6){
    //sky color 2
    background(100,84,168);
  } else if(mouseX < width/4){
    //sky color 3
    background(85,43,130);
  } else if(mouseX < width/3){
    //sky color 4
    background(56,28,87);
  } else if(mouseX < width*5/12){
    //sky color 5
    background(26,12,41);
  } else if(mouseX < width/2){
    //sky color 4
    background(56,28,87);
  } else if(mouseX < width*7/12){
    //sky color 3
    background(85,43,130);
  } else if(mouseX < width*2/3){
    //sky color 2
    background(100,84,168);
  } else if(mouseX < width*3/4){
    //sky color 1
    background(118,112,171);
  } else if(mouseX < width*5/6){
    //sky color 6
    background(255,207,110);
  } else if(mouseX < width*11/12){
    //sky color 7
    background(255,172,94);
  } else if(mouseX > width*11/12){
    //sky color 8
    background(255,151,94);
  }

//as the mouse moves left to right the moon moves invevrsely
//movement opposite of the mouse intentional
  if(mouseX < width/12){
    imageMode(CENTER);
    image(moon, width*11/12,height/3);
  } else if(mouseX < width/6){
    imageMode(CENTER);
    image(moon, width*5/6,height/3);
  } else if(mouseX < width/4){
    imageMode(CENTER);
    image(moon, width*3/4,height/3);
  } else if(mouseX < width/3){
    imageMode(CENTER);
    image(moon, width*2/3,height/3);
  } else if(mouseX < width*5/12){
    imageMode(CENTER);
    image(moon, width*7/12,height/3);
  } else if(mouseX < width/2){
    imageMode(CENTER);
    image(moon, width/2,height/3);
  } else if(mouseX < width*7/12){
    imageMode(CENTER);
    image(moon, width*5/12,height/3);
  } else if(mouseX < width*2/3){
    imageMode(CENTER);
    image(moon, width/3,height/3);
  } else if(mouseX < width*3/4){
    imageMode(CENTER);
    image(moon, width/4,height/3);
  } else if(mouseX < width*5/6){
    imageMode(CENTER);
    image(moon, width/6,height/3);
  } else if(mouseX < width*11/12){
    imageMode(CENTER);
    image(moon, width/12,height/3);
  } else if(mouseX > width*11/12){
    imageMode(CENTER);
    image(moon, width/12,height/3);
  }
//stars in the sky change location as mouse moves up & down
//almost appears to be snow... I don't hate that about it
  if(mouseY < height/6){
    imageMode(CENTER);
    image(stars,width/2,height/6,);
  } else if(mouseY < height/3){
    imageMode(CENTER);
    image(stars,width/2,height/3);
  } else if(mouseY < height/2){
    imageMode(CENTER);
    image(stars,width/2,height/4);
  } else if(mouseY < height*2/3){
    imageMode(CENTER);
    image(stars,width/2,height/3);
  } else if(mouseY < height*5/6){
    imageMode(CENTER);
    image(stars,width/2,height/6);
  } else if(mouseY > height*5/6){
    imageMode(CENTER);
    image(stars,width/2,0);
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

//the ground which creates the horizon line for the sun to set behind
//needed to make ground stagnant- noLoop command stopped other transitions
//brightness gives the illusion that the moon is shining on the ground
if(mouseX < width/12){
  //opposite of sky color 1 (same as Part 1)
  fill(137,143,84);
  rect(0,height,width,-100);
} else if(mouseX < width/6){
  //opposite of sky color 2
  fill(155,171,87);
  rect(0,height,width,-100);
} else if(mouseX < width/4){
  //opposite of sky color 3
  fill(170,212,125);
  rect(0,height,width,-100);
} else if(mouseX < width/3){
  //opposite of sky color 4
  fill(199,227,168);
  rect(0,height,width,-100);
} else if(mouseX < width*5/12){
  //opposite of sky color 5
  fill(229,243,214);
  rect(0,height,width,-100);
} else if(mouseX < width/2){
  //opposite of sky color 4
  fill(199,227,168);
  rect(0,height,width,-100);
} else if(mouseX < width*7/12){
  //opposite of sky color 3
  fill(170,212,125);
  rect(0,height,width,-100);
} else if(mouseX < width*2/3){
  //opposite of sky color 2
  fill(155,171,87);
  rect(0,height,width,-100);
} else if(mouseX < width*3/4){
  //opposite of sky color 1
  fill(137,143,84);
  rect(0,height,width,-100);
} else if(mouseX < width*5/6){
  //opposite of sky color 6
  fill(0,48,145);
  rect(0,height,width,-100);
} else if(mouseX < width*11/12){
  //opposite of sky color 7
  fill(0,83,161);
  rect(0,height,width,-100);
} else if(mouseX > width*11/12){
  //opposite of sky color 8
  fill(0,104,161);
  rect(0,height,width,-100);
}
}
