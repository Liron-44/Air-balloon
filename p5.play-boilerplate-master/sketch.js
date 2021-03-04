var balloon, balloonimg1, balloonimg2, balloonimg3, balloonimg4, database;

function preload(){
balloonimg1 = loadImage("pro-C35 images/Hot Air Ballon-01.png")
balloonimg2 = loadImage("pro-C35 images/Hot Air Ballon-02.png")
balloonimg3 = loadImage("pro-C35 images/Hot Air Ballon-03.png")
balloonimg4 = loadImage("pro-C35 images/Hot Air Ballon-04.png")

}
function setup() {
  createCanvas(500,500);
  database = firebase.database();
  balloon = createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10
  }
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10
  }
}