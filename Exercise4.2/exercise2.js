let rectX = 0;
let rectY = 0;
let rectWidth = 75;
let rectHeight = 75;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background('SlateGray');
    drawShape();
    rectX += 2;
}

function mousePressed() {
    if((mouseX >= 0 && mouseX <= rectX + rectWidth) && (mouseY >= 0 && mouseY <= rectY + rectHeight)) {
        console.log('hit');
    }
}

function drawShape() {
    fill('SkyBlue');
    rect(rectX, rectY, rectWidth, rectHeight);
}