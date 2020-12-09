
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var ground;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  ground=createSprite(350,200,1000,10);
ground.shapeColor="black";
  monkey=createSprite(100,100,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  monkey.y=ground.y-50;
 obstacleGroup=createGroup();
  console.log(ground.x);
  FoodGroup=createGroup();
}


function draw() {
createCanvas(1000,300);
  obstacles();
  bananas();
  monkey.collide(ground);
  if(keyDown("space")&& monkey.y>=135){
    monkey.velocityY=-12;
    
  } 
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.velocityX=0;
    FoodGroup.velocityX=0;
    survivaltime=0;
    
    
  }
 monkey.velocityY=monkey.velocityY+0.8;
  stroke=("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival time:"+ survivaltime,299,50);
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
   
    
  }
  if (obstacleGroup.isTouching(monkey)){
    bananas.velocityX=0;
    obstacles.velocityX=0;
    
    
  }
  drawSprites();
}
function obstacles(){
  if(frameCount%300===0){
  var obstacles;
 obstacles=createSprite(500,157,10,10);
  obstacles.addImage(obstacleImage);
     obstacleGroup.add(obstacles);
obstacles.scale=0.2;
    obstacles.velocityX=-10;
    obstacles.lifetime=600;
}
}
function bananas(){

  
  if(frameCount%80===0){
      var bananas;
    bananas=createSprite(900,200,10,10);
    bananas.addImage(bananaImage);
    bananas.y=Math.round(random(40,30));
    bananas.velocityX=-10;
    bananas.lifetime=600;
    bananas.scale=0.1;
    
    FoodGroup.add(bananas);

  }
}

  






