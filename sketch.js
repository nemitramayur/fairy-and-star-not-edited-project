var starImg,fairyImg,bgImg;
var fairy, fairyVoice;
var star,starBody

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg=loadAnimation("fairyImage1.png","fairyImage2.png");
    fairyVoice=loadSound("JoyMusic.mp3");
	bgImg = loadImage("starNight.png");
	
}

function setup() {
	createCanvas(800, 750);
    fairyVoice.play(); 
	//write code to play fairyVoice sound

	fairy=createSprite(300,490);
	fairy.addAnimation("fairyflying",fairyImg);
	fairy.scale=0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
	Engine.update(engine)

  background(bgImg);

  fairy.velocityX=0
  fairy.velocityY=0

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470){
Matter.Body.setStatic(starBody,true);

  }
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
   if(keyCode===RIGHT_ARROW){
	   fairy.x=fairy.x+20;
   }
   if(keyCode===LEFT_ARROW){
	fairy.x=fairy.x-20;
   }
	
}
