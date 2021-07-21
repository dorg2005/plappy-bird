function Bird() {
  this.y=height/2;
  this.gravity= 2 ;
  this.velocity=0;
  this.lift=-55  ;
  this.r=43.75;
  this.m=32;
  this.x=width-this.r/2;
  
  this.show=function(){
   if(this.velocity<7){
  push();
  translate(this.x/2,this.y/2)
  rotate(-45 );
  imageMode(CENTER);
  image(gif,0,0,this.r,this.m)
     // noFill();
     //  stroke(255)
     //  rect(-this.m,-this.r,this.m*2,this.r*2)
  pop();
    }
    else {
  push();
  translate(this.x/2,this.y/2)
  rotate(-144+this.velocity*12);
  imageMode(CENTER);
  image(gif,0,0,this.r,this.m)
  //   noFill();
  //     stroke(255)
  //     rect(-this.m,-this.r,this.m*2,this.r*2)
  pop();    
    }
  }
  this.update = function(){
    this.velocity+=this.gravity;
    this.velocity*=0.91;
    this.y+=this.velocity;
    if(this.y>height*2-this.m){
      this.y=height*2-this.m;
      this.velocity=0;
    }
    if(this.y<0+this.m){
      this.y=0+this.m;
      this.velocity=0;
    }
  }
  this.up=function(){
     this.velocity+=this.lift;
  }
  this.bol=function(i){
    if(this.x==round(pipes[i].x)-1 ){
      return true;
    }
    return false
  }
}