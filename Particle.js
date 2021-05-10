class Particle{
constructor(x,y,r){
var options={

restitution:0.5,
friction:0.5,
density:0.5
}
this.r=r
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body)
this.color=color(random(0,255),random(0,255),random(0,255));
}
display(){
var position=this.body.position
fill(this.color);
ellipse(position.x,position.y,this.r,this.r);





}




}