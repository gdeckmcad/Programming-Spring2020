function setup() {
  createCanvas(640, 480, WEBGL);
  noFill();
}

function draw() {
  background(255);
  rotateY(mouseX / 4);
  stroke("#048243");
  strokeWeight(2);
  box(200);
  rotateY(mouseY / 6);
  stroke("#32BF84");
  box(100);
  let rad = millis() / 1000;
  // Set rotation angles
  let ct = cos(rad);
  let st = sin(rad);
  // Matrix for rotation around the Y axis
  applyMatrix(  ct, 0.0,  st,  0.0,
               0.0, 1.0, 0.0,  0.0,
               -st, 0.0,  ct,  0.0,
               0.0, 0.0, 0.0,  1.0);
  stroke("#BDF8A3");
  box(50);
}