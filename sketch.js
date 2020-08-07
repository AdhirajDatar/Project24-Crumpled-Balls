
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Paper(30,100);

	box1Body = new DBin(790,620,20,100);

	box2Body = new DBin(610,620,20,100);
	
	box3Body = new DBin(700,670,200,20);

	gound = new Ground(400,690);

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  box1Body.display();
  box2Body.display();
  box3Body.display();
  gound.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Body.applyForce(ball.body,ball.body.position,{x:71,y:-64})
	}
}

