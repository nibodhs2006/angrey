const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(400,390,800,10)
    box1=new Box(700,350,90,90)
    box2=new Box(400,350,90,90)
    pig1=new Pig(550,350)
    log1= new Log(550,330,390,PI/2)
    box3= new Box(700,250,90,90)
    box4= new Box(400,250,90,90)
    pig2=new Pig(550,250)
    log2=new Log(550,230,390,PI/2)
    box5=new Box(550,150,90,90)
    log3=new Log(690,100,160,-PI/7)
    log4=new Log(410,100,165,PI/7)
    bird=new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    box1.display()
    box2.display()
    pig1.display()
    log1.display()
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
   box5.display()
   log3.display()
   log4.display()
   bird.display()
}