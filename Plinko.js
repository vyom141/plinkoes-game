class Plinko{
constructor(x,y,r){

var options={
restitution:1,
friction:0.2,
density:0.5,
isStatic:true
}
this.r=r
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body)
}
display(){
ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
stroke("green");


}





}