class Football{
   
  constructor(tempD){

    this.x=random(width);
    this.y=height;
    this.diameter= tempD;
    this.yspeed= random(0.5,1.5);
  }
  
  display(){
    stroke(0);
    fill(89,52,30);
    ellipse(this.x,this.y,125,50);
  }
  ascend(){
    this.x=this.x+random(-2,2);
    this.y= this.y-this.yspeed;
  }
   top(){
    if (this.y< -this.diameter/2){
      this.y=this.height+this.diameter/2;
    }
  }
}