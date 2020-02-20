let bubble;

class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
}

function setup() {
    createCanvas(500, 500);
    bubble = new Bubble();
    print(bubble.x, bubble.y);
}

function draw() {
    background(0);
    //bubble.move();
    //bubble.show();
}