function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(RGB,255,255,255,1);


}

function draw() {
  background(0); 
 
  let x,y,size,a,r,b,g;
  for(let i=0;i<random(10,100);i++){
    x=random(1,random(0,width*2))
    y=random(1,random(0,height*2));
    size=random(1,10);
    a=random(1,100);
    a=a/100;
    r=random(0,255);
    b=random(0,255);
    g=random(0,255);
    fill(r,b,g,a);
    circle(x,y,size);

  }

}
