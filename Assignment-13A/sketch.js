//creating an array to allow for multiple rain drops
var rainDrop = [];
var pos;

function setup() {
    createCanvas(500, 500);
    for (var i = 0; i < 200; i++) {
        rainDrop[i] = new rainFall();
    }
    pos = 0.0;
}

//drawing the droplets and running through loop
function draw() {
    background('#F0F8FF');
    for (var i = 0; i < 200; i++) {
        rainDrop[i].show();
        rainDrop[i].update();
    }
}

//creating new object to create the rain fall
function rainFall() {
    this.x = random(0, width);
    this.y = random(0, -height);

    this.show = function() {
        noStroke();
        fill('#6495ED');
        ellipse(this.x, this.y, 2, 10);
    }

    //speed
    this.update = function() {
        this.speed = random(5, 15);
        this.gravity = sin(pos);
        this.y = this.y + this.speed * this.gravity;

        //repeating fall
        if (this.y > height) {
            this.y = random(0, -height);
            this.gravity = 0;
        }
}
    
}