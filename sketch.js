const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var paper;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    paper = new Paper(100,100);
    dustbin=new Dustbin(400,400,50,50);
    slingShot=new SlingShot(paper.body,{x:200,y:100});

}

function draw(){
    background(0);
    Engine.update(engine);

  ground.display();
   paper.display();
   dustbin.display();
   slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){
    slingShot.fly();

}
