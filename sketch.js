
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world ,engine;
var ground1;
var score=0;
var bg="white";
var backgroundImg;
function  preload(){
  getTime();

}
function setup() {
  engine = Engine.create();
	world = engine.world;

 createCanvas(1000,700);

  ground1= new Ground(650,600,600,20);
  box1=new Box(450,540,100,100);
  box2=new Box(550,540,100,100);
  box3=new Box(650,540,100,100);
  box4=new Box(750,540,100,100);
  box5=new Box(850,540,100,100);
 box6=new Box(500,450,100,100);
 box7=new Box(600,450,100,100);
 box8=new Box(700,450,100,100);
 box9=new Box(800,450,100,100);
 box10=new Box(550,360,100,100);
 box11=new Box(650,360,100,100);
 box12=new Box(750,360,100,100);
 box13=new Box(600,270,100,100);
 box14=new Box(700,270,100,100);
 box15=new Box(650,180,100,100);
 stone1=new Stone(100,300,100,100);
 slingshot = new SlingShot(stone1.body,{x:150, y:400});
 
 
  Engine.run(engine);
}

function draw() {
background("black"); 
text("SCORE: "+score,100,100);
 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();
 box11.score();
 box12.score();
 box13.score();
 box14.score();
 box15.score(); 
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display(); 
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
stone1.display();
slingshot.display();


}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y:mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){

  if(keyCode===32){//space=32 
      slingshot.attach(stone1.body)
  }
  
  }

  async function getTime(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responsetype = await response.json();
console.log(responsetype);

var dt = responsetype.datatime;
console.log(dt);

var hour = dt.slice(11,13);
console.log(hour);

if(hour>=06 && hour<=19){
bg="white";
}
else{
bg="black";
}
backgroundImg = LoadImage(bg);
console.log(backgroundImg)

  }