
var monkey , monkey_running, ground, banana;
var banana ,bananaImage, obstacle, obstacleImage;
var obstacleGroup, bananaGroup;
var score = 0;
var food;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
createCanvas (400,400);
  
  // monkey sprite
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;

  
  
  // ground sprite
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
//ground.x  = ground.width/2;
//console.log(ground.x);
  
  

  
  
// to create a new group
bananaGroup = new Group();
obstacleGroup = new Group();
}


function draw() {

  
  background("White");
  
  // infinite ground
   if (ground.x < 0) {
    ground.x = ground.width/2;
  }  
  monkey.collide(ground);
  
  // to display score
  stroke("white");
  textSize(15);
  fill("black");
  text("score:" + score, 300,50);
  
  stroke("black");
  textSize(15);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival time:" + survivalTime, 100,50);
  
  // monkey jumps when the space key is pressed
    if(keyDown("space")) {
      monkey.velocityY = -12;
      }
  // gravity to the monkey
 monkey.velocityY = monkey.velocityY + 0.3;
  
  // to call a new function
  food();
  obstacles();
  
      drawSprites();
}

function food() {

  if (frameCount % 80 === 0) {
      banana =createSprite(250,Math.round(random(120,200)));
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.lifetime = 200;
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }



}

function obstacles() {
  
  if (frameCount % 300 === 0) {
      obstacle = createSprite(250,335);
      obstacle.addImage(obstacleImage);
      obstacle.lifetime = 200; 
      obstacle.scale = 0.1;
      obstacleGroup.add(obstacle);
      obstacle.velocityX = ground.velocityX;
    
  } 
  
  
  
}




