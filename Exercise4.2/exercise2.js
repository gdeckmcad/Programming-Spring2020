function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(155);
    drawShape();
}

function drawShape () {
    fill('purple');
    rec(30, 30, 75, 75);
}