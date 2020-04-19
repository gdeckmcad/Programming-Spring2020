function setup() {
  createCanvas(640, 480);
}

function draw() {
  clear();
  fill("#CAFFFB");
  stroke("#048243");
  scale(1, mouseX * 1.3);
  rect(0, 0, 640, 50);
}