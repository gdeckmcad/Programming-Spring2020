let angle = 0;
let rotateBy = 5;

function setup() {
    createCanvas(600,600);
    background('#CAFFFB');
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 45);
    console.log(alt);
    noFill();
    stroke("#02066F");
    strokeWeight(1);
    triangle(150 + alt, 150, 150, 150, 150, 150 - alt);
}


function draw() {
    translate(150,300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}

function mousePressed() {
    noLoop();
}