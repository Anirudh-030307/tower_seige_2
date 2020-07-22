class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255;
    }
  
    display(){
      if (this.body.speed<=2) {
        super.display()
      } 
      else {
        push()
        World.remove(world,this.body);
        this.visibility=this.visibility-10;
        tint(255,this.visibility);
        pop();
      }
    }

  };
  