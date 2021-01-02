class Dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.Dwidth=200;
        this.Dheight=100;
        this.Dthickness=20;
        this.angle=0;

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.Dwidth, this.Dthickness, {isStatic:true})
       
        this.leftWallBody=Bodies.rectangle(this.x-this.Dwidth/2, this.y-this.Dheight/2, this.Dthickness, this.Dheight, {isStatic:true})
        Matter.Body.setAngle(this.leftWallBody, this.angle);

        this.rightWallBody=Bodies.rectangle(this.x+this.Dwidth/2, this.y-this.Dheight/2, this.Dthickness, this.Dheight, {isStatic:true})
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        
        World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);
 }
 display(){
     var bottom=this.bottomBody.position;
     var left=this.leftWallBody.position;
     var right=this.rightWallBody.position;

     push()
	 translate(left.x,left.y);
	 rectMode(CENTER)
	 angleMode(RADIANS)
	 fill(255)
	 stroke(255)
	 rotate(this.angle)
	 rect(0,0,this.Dthickness, this.Dheight);
     pop()
     
     push()
	 translate(right.x,right.y);
	 rectMode(CENTER)
	 angleMode(RADIANS)
	 fill(255)
	 stroke(255)
	 rotate(this.angle)
	 rect(0,0,this.Dthickness, this.Dheight);
     pop()
     
     push()
	 translate(bottom.x,bottom.y);
	 rectMode(CENTER)
	 angleMode(RADIANS)
	 fill(255)
	 stroke(255)
	 rotate(this.angle)
	 rect(0,0,this.Dwidth,this.Dthickness);
	 pop()



 }
}