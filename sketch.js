
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

var engine;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(600,660,1200,20);
	leftSide=new Ground(1140,590,20,120);
    rightSide=new Ground(900,590,20,120);

    var ball_options={
		isStatic:false,
		restitution:0.1,
		friction:0,
		density:1.2,
	
	}

	//Create the Bodies Here.
    ball=Bodies.circle(100,200,15,ball_options);
    World.add(world,ball);
    
	
  
	
	//rectMode(CENTER);
	//
	
}


function draw() {
  
  background(0);

  Engine.update(engine);
  ground.display();
  leftSide.display();
  rightSide.display();

  ellipseMode(RADIUS);

  fill("white");
  ellipse(ball.position.x,ball.position.y,15);

 
  if(keyDown("UP_ARROW")){
	  keyPressed();

  }

  drawSprites();

}

function keyPressed(){

  Matter.Body.applyForce(ball,ball.position,{x:2,y:-2});
	
}

