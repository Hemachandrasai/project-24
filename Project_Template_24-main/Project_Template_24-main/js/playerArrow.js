class PlayerArrow{

constructor(x,y,width,height){

 var   options = {
    isStatic:true,
    restitution:0.8,
    friction:1.0,
    density:1.0
    }
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/arrow.png");
    World.add(world,this.body);
}
    display(){
   var  pos = this.body.position;
   var angle = this.body.angle;

   push();
   translate(pos.x,pos.y)
   rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height);
   pop();
}
shoot(){
    var velocity = p5.vector.formAngle(playerArcher.angle);
    velocity.mult(20);
    Matter.body.setStatic(this.body,false);
    Matter.body.setVelocity({x:velocity.x,y:velocity.y});


}

}