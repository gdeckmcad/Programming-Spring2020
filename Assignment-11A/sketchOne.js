function setup() {
  createCanvas(640, 480);
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  rotate(mouseX * 10 / PI);
  noStroke();
  fill("#048243");
  rect(50, 50, 100, 100);
  translate(width / 4, height / 4);
  rotate(mouseX * 8 / PI);
  fill("#32BF84");
  rect(50, 50, 100, 100);
  translate(width / 6, height / 6);
  rotate(mouseX * 6 / PI);
  fill("#CAFFFB");
  rect(50, 50, 100, 100);
}