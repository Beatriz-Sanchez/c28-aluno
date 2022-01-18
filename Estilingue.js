class Estilingue{
  constructor(bodyA, bodyB){
   var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      stiffness: 0.04,
      length: 10
    }
    this.elastico = Constraint.create(options);
    World.add(world, this.elastico);
  }

  display(){
    var pointA = this.elastico.bodyA.position;
    var pointB = this.elastico.bodyB.position;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  
}
