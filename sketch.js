const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5,box6,box7,box8,box9;
var ground,stage;
var slingshot,polygon;

function setup() {
  var canvas = createCanvas(1200,650);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);
  stage = new Ground(400,250,500,10);

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  box9 = new Box(390,155,30,40);
  var options = {
    density : 1.0
  }
  polygon = Bodies.circle(50,200,20,options)
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});

}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine);

  ground.display();
  stage.display();
  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  circle(polygon.position.x,polygon.position.y,20);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode==32) {
      slingshot.attach(this.polygon)
  }
}