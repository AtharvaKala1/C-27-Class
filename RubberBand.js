class RubberBand {

constructor(bodyA,bodyB) {
    var options = {
        bodyA:bird.body,
        bodyB:cLog.body,
        stiffness:0.04,
        length:10
        }
    this.rubber = Constraint.create(options);
    World.add(world,this.rubber);

}

display(){
    var pointA = this.rubber.bodyA.position;
    var pointB = this.rubber.bodyB.position;
    strokeWeight(10);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}