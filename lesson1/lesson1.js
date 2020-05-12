var x=0;
var y=0;
var direct=1;

function setup() {
  createCanvas(400, 400);
  x=width/2;
  y=height/2;
}

function draw() {
  background(220);
  noStroke()
  fill("pink")

  ellipse(x,y,10,10);
  if(direct===1 && x>400){
    direct=-1;  
  }
  if(direct===-1 && x<=0){
    direct=1;
  }

  x=x+direct;
}