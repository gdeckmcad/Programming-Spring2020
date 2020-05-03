var drop = [];

function setup() {
    createCanvas(500, 500);
    for (var i = 0; i < 200; i++) {
        drop[i] = new Drop();
    }
}

function draw() {
    background('#F0F8FF');
    for (var i = 0; i < 200; i++) {
        drop[i].show();
        drop[i].update();
    }
}

//create new object
function Drop() {
    this.x = random(0, width);
    this.y = random(0, -height);

    this.show = function() {
        noStroke();
        fill('#6495ED');
        ellipse(this.x, this.y, 2, 10);
    }

    //speed
    this.update = function() {
        this.y = this.y + 8;

        //repeating fall
        if (this.y > height) {
            this.y = random(0, -height);
        }
    }
    
}