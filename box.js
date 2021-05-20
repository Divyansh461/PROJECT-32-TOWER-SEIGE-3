class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        friction : 0,
        density : 0.1,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
  }

  score() {
    if(this.Visibility < 0 && this.Visibility >= -105) {
      score++;
    }
  }



  
  display(){
    
    if(this.body.speed < 6) {
    var pos =this.body.position;
    rectMode(CENTER);
    
    rect(pos.x, pos.y, this.width, this.height);
  }


else {
   World.remove(world,this.body);
   push();
   this.Visibility = this.Visibility - 5;
   tint(255,this.Visibility);   
  pop();  
  }
}
}