var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles=[]
var plinkoes=[]
var divisions=[]
var divisionheight=300
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

 for(var i=0;i<width;i=i+80){
divisions.push(new Divisions(i,height-divisionheight/2,10,300))

 }
 for (var i=50;i<width;i=i+50) {
plinkoes.push(new Plinko(i,75,10))

 }
 for (var i=50;i<width;i=i+50) {
  plinkoes.push(new Plinko(i,175,10))
  
   } 
   
   
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  for(var i=0;i<divisions.length;i++){
divisions[i].display();

  }
  for(var k=0;k<plinkoes.length;k++){
    plinkoes[k].display();
  }
  
if(frameCount%60===0){
particles.push(new Particle(random(10,750),10,10))

}
for(var i=0;i<particles.length;i++){

 particles[i].display(); 
}
}