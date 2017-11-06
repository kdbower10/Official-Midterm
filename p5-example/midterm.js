var speed=10;
var x=10;
var y=10;
var speed2=10;

var footballs=[];

var a=25;
var xpos, ypos;    // Starting position of shape    
var xspeed = 10;  // Speed of the shape
var yspeed = 10;  // Speed of the shape
var xdirection = 1;  // Left or Right
var ydirection = 1;  // Top to Bottom

function royals(){


  ellipseMode(CENTER);
  rectMode(CENTER);

    background(2,10,150);
    fill(242,238,235);
    noStroke();
  
    fill(242,183,5); //basecrown
    noStroke();
    rect(500,400,400,100);
  
    fill(242,183,5); //leftpoint
    noStroke();
    triangle(300,350,300,250,400,350);
  
    fill(242,183,5); //centerpoint
    noStroke();
    triangle(400,350,500,200,600,350);

    fill(242,183,5); //rightpoint
    noStroke();
    triangle(600,350,700,250,700,350);

    fill(112,58,28);//abstract bat ORIGINAL
    quad(15,35,35,15,140,110,110,140);
  
  
    fill(242,238,235);//ball original
    ellipse(175,175,50,50);
  
    push();
      translate(1000,0);
      rotate(HALF_PI);
  
      fill(112,58,28);//abstract bat
      quad(15,35,35,15,140,110,110,140);
  
  
      fill(242,238,235);//ball
      ellipse(175,175,50,50);
  
    pop();
  
    push();
      translate(0,700);
      rotate(3*HALF_PI);

      fill(112,58,28);//abstract bat
      quad(15,35,35,15,140,110,110,140);
  
  
      fill(242,238,235);//ball
      ellipse(175,175,50,50);
  
    pop();
  
    push();
      translate(1000,700);
      rotate(PI);

      fill(112,58,28);//abstract bat
      quad(15,35,35,15,140,110,110,140);
   
  
      fill(242,238,235);//ball
      ellipse(175,175,50,50);
  
    pop();
    
  fill(242,238,235);
  ellipse(x,height/2,50,50);
  x=x+speed;
  
    if(x>= width-25){
      speed=-7;
    }
    if(x<=0){
      speed=7;
    }
  fill(242,238,235);
  ellipse(width/2,y,50,50);
  y=y+speed2;
  
    if(y>= height -25){
      speed2=-5;
    }
  if(y<=0){
    speed2=5;
  }

}

function bowties(){

  stroke(0);
  strokeWeight(2);
  fill(255);
  background(1,24,41);
  ellipseMode(CENTER);

   if(mouseIsPressed){
     background(255);
     fill(1,24,41);
   } else {background(1,24,41);
    fill(255);
    }

    for(var y=25;y<= height -75; y+=75){
      for ( var x=50;x<= width-75; x+=200){
        triangle(x,y,x+50,y+25,x,y+50);
        triangle(x+75,y+25,x+125,y,x+125,y+50);
        ellipse(x+62,y+10,15,15);
        ellipse(x+62,y+40,15,15);
      }
    }
 }

 function chiefs(){

  background(242,0,0);//cheifs red
  
    if(mouseIsPressed){
      background(250,187,0);    
      fill(242,0,0);
    } else {background(242,0,0);     
      fill(250,187,0);
      }

   //under arrowhead gold
   noStroke();
   triangle(400,200,750,350,400,500);
   triangle(275,250,500,350,275,450);
  
   fill(242);//top arrowhear white
   noStroke();
   triangle(415,225,725,350,415,475);
   triangle(290,275,475,350,290,425);
    
   stroke(0);//arrow shaft
   strokeWeight(8);
   line(25,25,150,150);
  
   line(30,30,30,0);//right fletching
   line(40,40,40,10);
   line(50,50,50,20);
   line(60,60,60,30);
  
   line(30,30,0,30);//left fletching
   line(40,40,10,40);
   line(50,50,20,50);
   line(60,60,30,60);
  
   noFill();//arrowhead
   stroke(0);
   strokeWeight(5);
   triangle(175,125,125,175,200,200);

   push();
     translate(1000,0);
     rotate(HALF_PI);
  
     stroke(0);//arrow shaft
     strokeWeight(8);
     line(25,25,150,150);

     line(30,30,30,0);//right fletching
     line(40,40,40,10);
     line(50,50,50,20);
     line(60,60,60,30);
  
     line(30,30,0,30);//left fletching
     line(40,40,10,40);
     line(50,50,20,50);
     line(60,60,30,60);
  
     noFill();//arrowhead
     stroke(0);
     strokeWeight(5);
     triangle(175,125,125,175,200,200);
    
   pop();
  
   push();
    translate(0,700);
    rotate(3*HALF_PI);

    stroke(0);//arrow shaft
    strokeWeight(8);
    line(25,25,150,150);
  
    line(30,30,30,0);//right fletching
    line(40,40,40,10);
    line(50,50,50,20);
    line(60,60,60,30);
  
    line(30,30,0,30);//left fletching
    line(40,40,10,40);
    line(50,50,20,50);
    line(60,60,30,60);
  
    noFill();//arrowhead
    stroke(0);
    strokeWeight(5);
    triangle(175,125,125,175,200,200);

   pop();
   
   push();
    translate(1000,700);
    rotate(PI);
  
    stroke(0);//arrow shaft
    strokeWeight(8);
    line(25,25,150,150);
  
    line(30,30,30,0);//right fletching
    line(40,40,40,10);
    line(50,50,50,20);
    line(60,60,60,30);
  
    line(30,30,0,30);//left fletching
    line(40,40,10,40);
    line(50,50,20,50);
    line(60,60,30,60);
  
    noFill();//arrowhead
    stroke(0);
    strokeWeight(5);
    triangle(175,125,125,175,200,200);
    
  pop();
  
  for (var i=0;i<footballs.length;i++){
    footballs[i].ascend();
    footballs[i].display();
    footballs[i].top(); 
  }  
}   

function diamonds(){
 
  stroke(0);
  strokeWeight(8);
  background(255,0,255);
  fill(13,234,234);

  if(mouseIsPressed){
    background(13,234,234);
    fill(255,0,255);
  } else { background(255,0,255);
           fill(13,234,234);
    }

  for(var x=0;x<=width; x+=265){
    for(var y=0; y<=height;y+=265){

       quad(x+100,y,x+200,y+100,x+100,y+200,x,y+100);
       quad(x+100,y+25,x+175,y+100,x+100,y+175,x+25,y+100);
       quad(x+100,y+50,x+150,y+100,x+100,y+150,x+50,y+100);
       quad(x+100,y+75,x+125,y+100,x+100,y+125,x+75,y+100);
    }
  }

  for (var i=232.5;i<=width; i+=265){
     for(var a=232.5;a<=height; a+=265){

       quad(i,a-100,i+100,a,i,a+100,i-100,a);
       quad(i,a-75,i+75,a,i,a+75,i-75,a);
       quad(i,a-50,i+50,a,i,a+50,i-50,a);
       quad(i,a-25,i+25,a,i,a+25,i-25,a);
 
    }
  } 

}

function sporting(){
  rectMode(CORNER);
  
  background(109, 146, 186);
  a=25;  
  noStroke();

  fill(13, 17, 32);//darkblue rect
  while (a< height) {
    rect(0, a, 500, 50);
    a=a+100;
  } 
  a=25;

  fill(16, 61, 98);//med grade blue rectangles and loop
   while (a< height) {
      rect(0, a-25, 500, 50);
         a=a+100;
  }
  stroke(254, 254, 254);
  strokeWeight(4);
  fill(163, 164, 156);
  ellipse(width/2, height/2, 200, 200);//center ellipse
  line(500, 0, 500, 700);//line down the middle of screen

  ellipse(150, height/2, 200, 200);//ellipse tip on rightside of screen
  rect(0, 200, 200, 300);//rect goalie box on right side of screen

  ellipse(850, height/2, 200, 200);//ellipse tip on leftside of screen
  rect(1000, 200, -200, 300);//rect goalie box on left side of screen


  xpos = xpos + ( xspeed * xdirection );
  ypos = ypos + ( yspeed * ydirection );


  if (xpos > width-25|| xpos <=25) {
    xdirection *= -1;
  }
  if (ypos > height-25 || ypos <=25) {
    ydirection *= -1;
  }
  fill(254, 254, 254);//soccer ball 
  ellipse(xpos, ypos, 50, 50);
}

function setup(){
  createCanvas(1000,700);
  
  for(var i=0;i<100;i++){
    footballs[i]=new Football(random(20,40)); 
  }

  // Set the starting position of the shape
  xpos = width/2;
  ypos = height/2;


}


function draw(){

  if(frameCount < 600) {
    royals();
  } else if (frameCount < 900) {
    bowties();
  } else if (frameCount < 1500) {
    chiefs();
  } else if (frameCount < 1700) {
    diamonds();
  } else if (frameCount < 2400) {
    sporting();}
}
