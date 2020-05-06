//creating an array to allow for multiple rain drops
var rainFall = [];
var pos;

//adding some rainfall noises
function preload() {
    rainSounds = loadSound('sounds/Rain-SoundBible.com-176235038.wav');
}

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    for (var i = 0; i < 200; i++) {
        rainFall[i] = new rainDrop();
    }
}

//drawing the droplets and running through loop
function draw() {
    background('#F0F8FF');
    rainSounds.play();
    for (var i = 0; i < 200; i++) {
        rainFall[i].show();
        rainFall[i].update();
    }
}

//creating new object for rain drops
function rainDrop() {
    pos = 0.0;
    var mySinVal = sin(pos);
    amplitude = mySinVal - height;
    this.x = random(0, height);
    this.y = random(0, amplitude);

    //drawing the drops
    this.show = function() {
        noStroke();
        fill('#6495ED');
        ellipse(this.x, this.y, 2, 10);
    }

    //making the drops move
    this.update = function() {
        this.speed = random(5, 15);
        this.gravity = 1.05;
        this.y = this.y + this.speed * this.gravity;

        //repeating fall
        if (this.y > height) {
            this.y = random(0, amplitude);
            this.gravity = 0;
        }
}
    
}