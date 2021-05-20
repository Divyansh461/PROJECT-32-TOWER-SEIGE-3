class Rope {
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.24,
            length : 10,
        }
        this.pointB = pointB;   
        this.rope1  = Constraint.create(options);
        World.add(world,this.rope1);


     

    }
    
    
    fly() {
        this.rope1.bodyA = null;
    }

    attach(x) {
        this.rope1.bodyA = x;
    }


    display() {

      if(this.rope1.bodyA) {         
        push();
        var pointA = this.rope1.bodyA.position;
        var pointB = this.rope1.pointB;
        strokeWeight(10);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

      }
    }
}