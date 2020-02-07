function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    fill('blue');
    rect(0, 0, 200, 200);
}

function draw() {
    createTile();
}