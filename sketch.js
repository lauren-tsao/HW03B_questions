function tile(x, y) {
  translate(x, y);
  let trans = 255;
  let pink = color(245, 0, 79, trans);
  let purple = color(71, 0, 145, trans);
  let yellow = color(249, 228, 0, trans);
  let magenta = color(255, 0, 255, trans);

  //top triangle
  push();
  noStroke();
  fill(purple);
  triangle(12, 12, 0, 0, 24, 0);
  pop();

  //bottom triangle
  push();
  noStroke();
  fill(purple);
  triangle(12, 12, 24, 24, 0, 24);
  pop();

  //circle
  push();
  noStroke();
  fill(yellow);
  translate(12, 12);
  blendMode(NORMAL);
  circle(0, 0, 18);
  pop();

  //right triangle
  push();
  noStroke();
  fill(pink);
  triangle(12, 12, 24, 0, 24, 24);
  pop();

  //left triangle
  push();
  noStroke();
  fill(pink);
  triangle(12, 12, 0, 24, 0, 0);
  pop();

  //middle rings
  push();
  stroke(magenta);
  strokeWeight(5);
  noFill();
  blendMode(DIFFERENCE);
  translate(12, 12);
  for (let d = 8; d < 24; d += 5) {
    ellipse(0, 0, d);
  }
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 100);

  // draw a row of tiles
  for (let x = 0; x < width; x += 24) {
    tile(x, 0);
  }
}

function draw() {}
