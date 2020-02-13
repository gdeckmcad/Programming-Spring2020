let rectX = 0;
const rectWidth = 75;
const rectHeight = 75;
let rectY;
let clickCount = 0;
let speed;

function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
}

function draw() {
    background('SlateGray');
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 175, 175);
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