class Block {
    constructor(x, y, width, height){
      var options = {
        isStatic:false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
      this.image=loadImage("images/block.png");
      this.visiblity=255;

     
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed<3){
        
      push();
      fill ("red");
      translate(this.body.position.x, this.body.position.y);
      rotate (this.body.angle)
      rectMode (CENTER);
      rect(0,0, this.width, this.height);
     
      pop();
  
      }
      else{
        World.remove(world,this.body);
        push ();
        this.visiblity = this.visiblity-5;
        tint(255,this.visiblity);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop ();
      
       
        
      }

      

     
    
      
   
    }
    score(){
      if(this.visiblity<0&&this.visiblity>-105){
        score++
      }
    }
  
  };
  