let rectX = 0;
let rectY = 0;
let rectWidth = 75;
let rectHeight = 75;
let clickCount = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background('SlateGray');
    drawShape();
    rectX += 2;
    if(rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 250, 250);
    }
}

function mousePressed() {
    if((mouseX >= 0 && mouseX <= rectX + rectWidth) && (mouseY >= 0 && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape() {
    fill('SkyBlue');
    rect(rectX, rectY, rectWidth, rectHeight);
}