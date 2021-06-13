
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer1,ground,stone1,rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7,rubber8,rubber9,rubber10;





function preload()
{
	
}

function setup() {
	var canvas =createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1=new Hammer(11,11);
	stone1=new Stone(400,480,100,100);
rubber1=new Rubber(600,400,50)
	ground=new Ground(600,height,1200,30); 

	rubber2=new Rubber(500,450,5)
	rubber3=new Rubber(500,450,5)
	rubber4=new Rubber(500,450,5)
	rubber5=new Rubber(500,450,5)
	rubber6=new Rubber(500,450,5)
	rubber7=new Rubber(500,450,5)
	rubber8=new Rubber(500,450,5)
	rubber9=new Rubber(500,450,5)
	rubber10=new Rubber(500,450,5)






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);
  hammer1.display();
  stone1.display();
  ground.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  rubber4.display();
  rubber5.display();
  rubber6.display();
  rubber7.display();
  rubber8.display();
  rubber9.display();
  rubber10.display();



  drawSprites();
 
}



