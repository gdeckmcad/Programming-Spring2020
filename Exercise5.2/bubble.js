let bubble;

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
    move() {
        this.x = random(width);
        this.y = random(height);
    }
    show() {
        stroke('#0339A6');
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}

function setup() {
    createCanvas(500, 500);
    bubble = new Bubble();
    //print(bubble.x, bubble.y);
}

function draw() {
    background('#4CB1F7');
for (let i = 0; i < 10; i++){
    bubble.move();
    bubble.show();
}
}
