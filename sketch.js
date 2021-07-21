var offsetX = 0,bird,points,hit,wing,pipes=[];
let pipeup,pipedoen,back,gif,count=0,best=0,sound=true,on,off,play,pause,stop=false;
function preload(){
  pipedown = loadImage("pipeup.png");
  pipeup = loadImage("pipedown.png");
  back=loadImage("back.png");
  points=loadSound("point.mp3");
  hit=loadSound("hit.mp3");
  wing=loadSound("wing.mp3");
  gif=loadImage("bird.gif");
  off=loadImage("nomusic.jpg");
  on=loadImage("music.jpg");
  play=loadImage("play.png");
  pause=loadImage("pause.jpg");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bird=new Bird();
  pipes.push(new Pipe());
  angleMode(DEGREES);
}
function draw() {
  background(back);
  image(back, offsetX, 0, width, height);
  image(back, offsetX+width, 0, width, height);
  offsetX--;
  if(offsetX <= -width){
 	offsetX = 0;	
  }
  if(count<5){
  textSize(10);
  stroke(255,0,0);
  noStroke();
  fill(255);
  text("\nTo jamp press \"spece\"/one finger tap\nTo start press \"spece\"/One finger tap\nTo stop press double \"s\"/two fingers tap",2,15);
  textSize(15);
  fill(255,0,0);
  text("Operating Instructions:",0,14)
  }
  bird.update();
  bird.show();
 for(var i=pipes.length-1;i>=0;i--){
    pipes[i].show();
    pipes[i].update();
   if(pipes[i].hits(bird)){ 
     bird.y=height;
     end();
     for(let v=0;v<pipes.length;v++){
    pipes[v].x=-pipes[v].w-10;
     }
     if(sound){
     hit.play();
     }
   }
    else{
       if(pipes[i].x<=bird.x/2-pipes[i].w-bird.m&&pipes[i].x>=bird.x/2-pipes[i].w-bird.m-3&&!(pipes[i].hits(bird))){
      count++;
      if(best<=count){
       best=count;
     }
         if(frameCount%1==0&&sound){
           points.play();
         }
    }
   }
   if(pipes[i].offscreen())
      pipes.splice(i,1);
  }
  if(frameCount%105==0){
    pipes.push(new Pipe());
  }
  textSize(64);
  stroke(0);
  strokeWeight(4);
  fill(255,255,255);
  text(count,width/2-25,64);
  textSize(10);
  text("your best score is :"+best,width-100,32);
  if(sound){
  image(on,width-55,35,30,30);
  }
  else{
    image(off,width-55,35,30,30);
  }
  if(stop){
    noLoop();
    fill(250,255,150);
    stroke(250,240,150);
    strokeWeight(10);
    rect(width/2-200,height/2,400,200,15);
    textSize(20);
    fill(250,200,0);
    stroke(0);
    strokeWeight(2);
     text("                    Your score was: "+count+"\n                Your best score was:"+best+"\n  To continue press \"space\"/one finger tap",width/2-190,height/2+80);
    textSize(65);
    fill(250,200,0);
    stroke(0);
    strokeWeight(2);
    mousePressed();
    image(pause,width-90,35,30,30);
    stop=false;
  }
  else{
    image(play,width-90,35,30,30);
  }
}
function keyPressed(){
  if(key== ' '){
    bird.up();
    loop();
    wing.play();
  }
  if(key== 's'){
    end();
  }
  if(key=='m'){
    if(sound){
      sound=false;
    }
    else{
      sound=true;
    }
  }
}
function mousePressed(){
  if(touches.length==1){
    if(mouseX>width-55&&mouseX<width-25&&mouseY>35&&mouseY<75){
      if(sound){
        sound=false;
      }
      else{
        sound=true;
      }
    }
    else{
    if(mouseX>width-90&&mouseX-60&&mouseY>35&&mouseY<75){
      if(stop){
        stop=false;
      }
      else{
        stop=true;
      }
    }
    else{
      loop();
      bird.up();
     if(sound){
        wing.play();
     }
    }
  }
  }
  // if(touches.length==2||key== 's'){
  //   noLoop();
  // }
}
function end(){
  noLoop();
    fill(250,255,150);
    stroke(250,240,150);
    strokeWeight(10);
    rect(width/2-200,height/2,400,200,15);
    textSize(20);
    fill(250,200,0);
    stroke(0);
    strokeWeight(2);
     text("                    Your score was: "+count+"\n                Your best score was:"+best+"\n  To continue press \"space\"/one finger tap",width/2-190,height/2+80);
    textSize(65);
    fill(250,200,0);
    stroke(0);
    strokeWeight(2);
    text("Game Over",width/2-165,height/2-75);
    count=0;
}