function setup() {
  // put setup code here
  createCanvas(640, 480);
}

let height = prompt("How tall should the circle be?");
let width = prompt("How wide should the circule be?");

function draw() {
  // put drawing code here
  if (mouseIsPressed) {
    fill(230);
  } else {
    clear();
  }
  ellipse(mouseX, mouseY, width, height);
}