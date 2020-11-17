var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,50,100);
  movingRect.shapeColor ="blue";
  movingRect.debug = true;
  fixedRect = createSprite(600,250,100,50);
  fixedRect.shapeColor ="blue";
  fixedRect.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x -movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red"
  }else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor = "green"
  }

  drawSprites();
}
