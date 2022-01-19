var quadrado;


function setup() {
  createCanvas(400,400);
  quadrado=createSprite(200,200,20,20)

}

function draw() 
{
  background(30);
drawSprites();
if (keyDown("left")){
quadrado.velocityX=-5 
}
else if (keyDown("right")){
  quadrado.velocityX=5
}
else if (keyDown("up")){
  quadrado.velocityY=-5
}
else if (keyDown("down")){
  quadrado.velocityY=5
} else{
  quadrado.velocityX=0
  quadrado.velocityY=0
}
}




