var cwidth = 1200
var cheight = 900
var row = 25

function setup() {
  createCanvas(cwidth, cheight);
  for (x = 0; x <= width; x += row) {
    for (y = 0; y <= height; y += row) {
        fill("#FFC513");
        noStroke();
        circle(x, y + 15, 20)
      if ( y % 3 === 0) {
        fill("#475F94");
        stroke("#1F0954");
        strokeWeight(1);
        triangle(x - 50, y, x + 20, y, x, y - 35);
      }
      else {
        fill("#75B3E7");
        noStroke();
        circle(x, y + 15, 20)
        
      }
    }
  }
}