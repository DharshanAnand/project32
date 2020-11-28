class Stone{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
/*class Stone{
  constructor(x,y,radius){
  
  var options={
  isStatic :true,
  'restitution' :0.1,
  'friction': 1.2,
  'density':1.2
  }
  this.image = loadImage("stone.png");
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.body = Bodies.circle(this.x,this.y,radius, options);
  World.add(world, this.body);
  }
  
  display(){
   var pos = this.body.position; 
  push();
   translate(pos.x,pos.y);
  rotate(this.body.angle);
  imageMode(CENTER);
  ellipseMode(CENTER);
  image(this.image, 0, 0, this.radius,this.radius);
   pop();
  }
  
  }*/