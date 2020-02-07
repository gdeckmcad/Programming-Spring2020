function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor) {
    translate(originX, originY);
    fill(primaryColor);
    noStroke();
    rect(0, 0, 200, 200);
    noStroke();
    fill(secondaryColor);
    arc(100, 0, 150, 150, 0, PI);
    arc(100, 150, 150, 150, PI, 0);
    stroke('black');
    strokeWeight('1');
    noFill();
    arc(100, 0, 170, 170, 0, PI);
    arc(100, 150, 170, 170, PI, 0);
    noStroke();
    fill('#BA5624');
    circle(100, 150, 50);
    noFill();
    stroke('#EECF6D');
    strokeWeight('5');
    circle(100, 150, 75);
}

function draw() {
    createTile(0,0, '#D5AC4E', '#7E231D');
    createTile(0, 200, 'green', 'white');
    createTile(0, 200, 'blue', 'yellow');
    createTile(200, -400, 'purple', 'blue');
}