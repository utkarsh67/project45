

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var alien1group
var alien2group
var alien3group
function preload(){
  
//  backgroundImage = loadImage("background0.png");
  
  astronutImage = loadImage("astronut.png");
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  alien3Image = loadImage("alien3.png");
 
}



function setup() {
  createCanvas(1535,750);
  
  //creating background
 // background = createSprite(0,0,600,600);
  //background.addImage(backgroundImage);
  
  
  // creating bow to shoot arrow
  astronut = createSprite(1330,220,20,50);
  astronut.addImage(astronutImage); 
  astronut.scale = 0.5;

  alien1group=new Group()
  alien2group=new Group()
  alien3group=new Group()
}

function draw() {
  background("black")
 astronut.y=World.mouseY
  
  

  // moving ground
    
  
  //creating continous enemies
  var selectalien = Math.round(random(1,3));
  
  if (World.frameCount % 100 == 0) {
    if (selectalien == 1) {
      alien11();
    } else if (selectalien == 2) {
      alien22();
    } else if (selectalien == 3) {
      alien33();
    } 
  }
  /*
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

  */
  drawSprites();
   // text("Score: "+ score, 500,50); 
}





// Creating  arrows for bow
 
  function alien11() {
    var alien1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  alien1.addImage (alien1Image);
    alien1.velocityX = 3;
    alien1.lifetime = 170;
    alien1.scale = 0.6;
    alien1group.add(alien1);
  }
    function alien22() {
      var alien2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
      alien2.addImage(alien2Image);
      alien2.velocityX = 3;
      alien2.lifetime = 170;
      alien2.scale = 0.3;
      alien2group.add(alien2);
    }
      function alien33() {
        var alien3= createSprite(0,Math.round(random(20, 370)), 10, 10);
        alien3.addImage(alien3Image);
        alien3.velocityX = 3;
        alien3.lifetime = 170;
        alien3.scale = 1;
        alien3group.add(alien3);
}
