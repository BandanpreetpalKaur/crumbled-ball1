class Paper{
    constructor(x,y,radius){
         var options = {
             isStaitc: false,
            'restitution':0.2,
            'friction':0.3,
            'density':1.0,
    }
            this.radius = radius
            this.body =  Bodies.circle(x,y,radius,options);
            world.add(world,this.body);
    }
         display(){
             fill("yellow")
             ellipseMode(RADIUS)
             ellipse(this.body.postion.x,this.body.position.y,this.radius,this.radius)
         }

}