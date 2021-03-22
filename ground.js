class Ground{
    constructor(x,y,radius){
         var options = {
             isStaitc: false,
            'restitution':0,
            'friction':0,
            'density':1,
    }
            this.body = rBodies.rectangle(x,y,width,height,option)
            this.width = width
            this.height = height
            World.add(world,this.body);
    }
         display(){
             fill(255)
           rect(this.body.position.x,this.body.position.y,this.width,this.height);
         }

};