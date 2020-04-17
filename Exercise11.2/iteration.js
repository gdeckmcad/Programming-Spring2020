var cwidth = 640
var cheight = 400
var row = 25

function setup() {
  createCanvas(cwidth, cheight);
  for (x = 0; x <= width; x += row) {
    for (y = 0; y <= height; y += row) {
      //stroke(x - 100);
      if ( y % 3 === 0) {
        fill("#32BF84");
        stroke("#048243");
        strokeWeight(1);
        triangle(x - 20, y, x + 20, y, x, y - 20);
      }
      else {
        fill("#FE46A5");
        noStroke();
        circle(x, y + 15, 16)
        
      }
    }
  }
}