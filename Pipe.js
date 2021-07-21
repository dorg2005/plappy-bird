function Pipe(){
  this.x=width;
  this.w=90;
  this.speed=3;
  this.spp=height-(count)*(height/60);
  if(this.spp<150){
    this.spp=150;
  }
  this.sp=random(this.spp,130);
  this.top=random(height-this.sp-50,50);
  this.bottom=height-this.sp-this.top;
  this.highlight=false;
  this.hits= function(){
    //text(round(bird.y/2+bird.m/2) +"<"+round(this.top+bird.m)+"||"+round(bird.y/2+bird.m)+">"+round(this.sp+this.top),0,100);
   // text(round(bird.x/2) +">"+round(this.x)+"&&"+round(bird.x/2)+"<"+round(this.x+this.w),0,150);
   if((bird.y/2)<this.top+bird.m/2||(bird.y/2)>this.sp+this.top-bird.m/2){
     if(bird.x/2-10>this.x-bird.r/2&&bird.x/2+10<this.x+this.w+bird.r/2){
       this.highlight=true;     
       return true;
    }
   }
   this.highlight=false;
   return false; 
 }
  this.show=function(){
    if(this.highlight==true){
            fill(255,0,0);
      rect(this.x-10,0,this.w+20,this.top+10);
       rect(this.x-10,height-this.bottom-10,this.w+20,this.bottom+10);
    }
    image(pipedown,this.x,0,this.w,this.top);
    image(pipeup,this.x,height-this.bottom,this.w,this.bottom);
  }
  this.update=function(){
    this.x-=this.speed;
  }
  this.offscreen =function(){
    if(this.x<-this.w) {
      return true;
    }
      else {
        return false;
      }
    } 
}