function setup() {
    createCanvas(500, 500);
}

function draw() {
    background('SlateGray');
    drawShape();
}

function mousePressed() {
    if((mouseX >= 0 && mouseX <= 75) && (mouseY >= 0 && mouseY <= 75)) {
        console.log('hit');
    }
}

function drawShape() {
    fill('SkyBlue');
    rect(0, 0, 75, 75);
}