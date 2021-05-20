const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var engine,world;

var score = 0;

function preload() {

                                                                                                                                                                       
    polyimg = loadImage("polygon.png");
    
}

function setup() {
 createCanvas(1600,630);
 

   engine = Engine.create();
   world = engine.world;

   fill("red");
   
    
  ground = new Ground(680,600,430,20);
  
ground1 = new Ground(1200,430,330,20);  
  
  box1 = new Box(530,554,50,70);
  box2 = new Box(580,554,50,70);
  box3 = new Box(630,554,50,70);
  box4 = new Box(680,554,50,70);
  box5 = new Box(730,554,50,70);
  box6 = new Box(780,554,50,70);
  box7 = new Box(830,554,50,70);
 
  box11 = new Box(580,460,50,70);
  box12 = new Box(630,460,50,70);
  box13 = new Box(680,460,50,70);
  box14 = new Box(730,460,50,70);
  box15 = new Box(780,460,50,70);

  box21 = new Box(630,390,50,70);
  box22 = new Box(680,390,50,70);
  box23 = new Box(730,390,50,70);

  box25 = new Box(680,320,50,70);
  


  block1 = new Box(1100,395,50,70);
  block2 = new Box(1150,380,50,70);
  block3 = new Box(1200,380,50,70);
  block4 = new Box(1250,380,50,70);
  block5 = new Box(1300,380,50,70);

  block11 = new Box(1150,325,50,70);
  block12 = new Box(1200,325,50,70);
  block13 = new Box(1250,325,50,70);
  
  block15 = new Box(1200,255,50,70);

  var options = {
    restitution:0.5,
    density:1,
    friction:1
  }
  polygon = Bodies.circle(200,500,40,options);
  World.add(world,polygon);
  
  
  rope = new Rope(this.polygon,{x : 200, y : 400 });
  
}


function draw() {

Engine.update(engine);

if(background){
getbackgroundimg();
fill("red");
textSize(20);
 text("Drag the polygon to destroy the blocks",300,100);
 text("SCORE : "+score,950,60);

 
}


ground.display();
fill(134,205,233);
box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();

fill(254,191,202);
box11.display();
box11.score();
box12.display();
box12.score();
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();

fill(62,233,207);
box21.display();
box21.score();
box22.display();
box22.score();
box23.display();
box23.score();

fill(127,127,127);
box25.display();
box25.score();

ground1.display();
fill(135,206,234);
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();

fill(62,233,207);
block11.display();
block11.score();
block12.display();
block12.score();
block13.display();
block13.score();

fill(62,233,207);
block15.display();
block15.score();

drawSprites();  

rope.display();

imageMode(CENTER);
  
image(polyimg,polygon.position.x,polygon.position.y,80,80)



}

function mouseDragged () {
    Matter.Body.setPosition(this.polygon,{x : mouseX ,y : mouseY});
    
}

function mouseReleased() {
    rope.fly();
}


function keyPressed() {
    if(keyCode === 32) {
        
        //Matter.Body.setPosition(polygon, {x:200, y:400});
        rope.attach(this.polygon);
       
    }
}

async function getbackgroundimg() {
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    var dt = responseJSON.currentDateTime;
    var hour = dt.slice(11,13);
    console.log(hour);
     if(hour < 2 || hour>14){
      background(200);        
     } else {
         background(25);
     }
}