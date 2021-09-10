var col

function setup() {
  createCanvas(500, 500);
    rectMode(CENTER);
    print('Move your mouse up and down to make a sunset or sunrise!');
}

function draw() {
    col = map(mouseY, 0, 500, 255, 0);
  background(0, col/2, col);
    fill(255, 255, 0);
    ellipse(400,mouseY,64,64);
    fill(0, 255, 0);
    rect(250, 500, 500, 150);
}
