var jackson,path
var jacksonImage,pathImage

function preload(){
  //pre-load images
  jacksonImage=loadAnimation("Runner-1.png","Runner-2.png")
  pathImage=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(200,200)
  path.addImage(pathImage)
  path.scale=1.2
  path.velocityY=4
  jackson=createSprite(180,340,30,30)
  jackson.scale=0.08
  jackson.addAnimation("jackrunning",jacksonImage)
  left=createSprite(0,0,100,800)
  left.visible=false
right=createSprite(4,10,100,800)
right.visible=false
}

function draw() {
  background(0);
  jackson.x=World.mouseX
  edges=createEdgeSprites()
  jackson.collide(edges[3])
  jackson.collide(left)
  jackson.collide(right)
  if(path.y>400){
    path.y=height/2
  }
  drawSprites()

}
