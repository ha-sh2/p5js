function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  colorMode(RGB, 255, 255, 255, 1);

}

function draw() {}

function mouseMoved() {
  background(0);
  r = random(0, 255);
  b = random(0, 255);
  g = random(0, 255);

  size = random(1, 100);
  for(let i=15;i>0;i--){
    fill(r, b, g, 1/i);
    circle(mouseX-i*10, mouseY, size, size);
    circle(mouseX-i*10 - size * 0.5, mouseY - size * 0.5, size * 0.6, size * 0.6);
    circle(mouseX-i*10 + size * 0.5, mouseY - size * 0.5, size * 0.6, size * 0.6);
  }
}