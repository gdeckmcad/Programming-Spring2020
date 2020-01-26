function setup() {
    createCanvas(1000, 800);
    background ("#eee");
}

//let height = prompt("How tall should the circle be?", "placeholder");
//let width = prompt("How wide should the circule be?", "placeholder");

function draw() {
  // snowman legs
  fill("#fff");
  stroke("#666");
  strokeWeight(20);
  //left left
  ellipse(350, 650, 200);
  //right leg
  ellipse(650, 650, 200);
  //body
  ellipse(500, 450, 350, 400);
  //head
  ellipse(500, 200,250);
  //hat brim
  stroke(100, 100, 255);
  strokeWeight(40);
  line(400, 120, 600, 120);
  //hat body
  quad(400, 50, 600, 50, 550, 120, 450, 120);
  // eyes
  fill("fff");
  stroke(0);
  strokeWeight(10);
  ellipse(450, 200, 25);
  ellipse(550, 200, 25);
  // mouth
  noFill();
  strokeWeight(10);
  //triangle(475, 64, 80, 80, 0);
  arc(500, 250, 80, 80, 0, PI);
}