class Restricao{
  constructor(bodyA, bodyB){
   var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      stiffness: 0.04,
      length: 10
    }
    this.restricao = Constraint.create(options);
    World.add(world, this.restricao);
  }

  display(){
    var pointA = this.restricao.bodyA.position;
    var pointB = this.restricao.bodyB.position;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  
}