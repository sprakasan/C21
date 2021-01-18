var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect3=createSprite(300,150,50,40);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(movingRect,rect3)){
  rect3.shapeColor="purple";
  movingRect.shapeColor="purple";
}
else

  if(isTouching(movingRect,fixedRect))
  {movingRect.shapeColor="pink";
  fixedRect.shapeColor="pink";
  rect3.shapeColor="pink";
}
else{movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
rect3.shapeColor="blue";
}
  drawSprites();
}

