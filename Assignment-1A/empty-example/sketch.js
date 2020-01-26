function setup() {
    createCanvas(1000, 800);
    background ("#eee");
}

let nose = prompt("What color nose should the snow creature have?", "orange");
let hat = prompt("What color hat should the snow creature be wearing?", "red");
let pet = prompt("What color pet should the snow creature have?", "pink");

function draw() {
  //hillside landscape
  noFill();
  stroke("#90ee90");
  strokeWeight(20);
  arc(200, 300, 300, 300, radians(225), radians(325));
  arc(150, 550, 125, 125, radians(225), radians(325));
  arc(800, 200, 150, 150, radians(225), radians(325));
  arc(925, 800, 450, 450, radians(225), radians(325));
  // snowman legs
  fill("#fff");
  stroke("#666");
  strokeWeight(10);
  //left left
  ellipse(350, 650, 150);
  //right leg
  ellipse(650, 650, 150);
  //body
  ellipse(500, 450, 350, 400);
  //head
  ellipse(500, 200,250);
  //hat brim
  stroke(hat);
  strokeWeight(30);
  line(375, 120, 625, 120);
  //hat body
  noStroke();
  fill(hat);
  quad(350, 30, 650, 30, 575, 120, 425, 120);
  // eyes
  fill("fff");
  stroke(0);
  strokeWeight(10);
  ellipse(450, 200, 25);
  ellipse(550, 200, 25);
  // mouth
  noFill();
  strokeWeight(10);
  arc(500, 250, 80, 80, 0, HALF_PI);
  // nose
  noStroke();
  fill(nose);
  triangle(375, 300, 500, 190, 520, 220);
  //arms
  stroke("#666");
  strokeWeight(10);
  line(350, 400, 250, 300);
  line(650, 400, 750, 300);
  //snow pet
  fill(pet);
  stroke("#666");
  strokeWeight(10);
  ellipse(890, 420, 50);
  ellipse(825, 420, 50);
  ellipse(850, 500, 150);
  fill("fff");
  stroke(0);
  strokeWeight(10);
  ellipse(825, 490, 25);
  ellipse(850, 490, 25);
  noFill();
  arc(850, 500, 80, 80, 0, HALF_PI);
}