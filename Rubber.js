class Rubber {
    constructor(x,y,radius)
    {
        var option={
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        World.add(world, this.body);

    }
    
    display(){
        var pos =this.body.position;
        //var angle = this.body.angle;
        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("blue");
        ellipse(pos.x, pos.y,this.radius);
        //pop();
      }



}