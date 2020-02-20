let bubble;

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
    move() {
        this.x = this.x + random(-5, 5); 
        this.y = this.y + random(-5, 5);       
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
    print(bubble.x, bubble.y);
}

function draw() {
    background('#4CB1F7');
    bubble.move();
    bubble.show();
}