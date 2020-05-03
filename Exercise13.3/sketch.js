var slider;
var slider2;
var pos;
var pos2;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    slider = createSlider(0, 15, 0);
    slider.position(75,165);
    slider2 = createSlider(0, 15, 0);
    slider2.position(75,190);

    //position as float value, has decimal places
    pos = 0.0;
    pos2 = 0.0;

}

function draw() {

    clear();

    //start our drawing from the middle of the canvas
    translate(width/2, height/2);

    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    amplified = mySinVal * 100;
    amplified2 = mySinVal2 * 100;

    background(0);
    noFill();
    strokeWeight(2);
    stroke(255);

    //as many times as 10 goes into 360
    for (x = 0; x <= 360; x = x + 10) {
        bezier(amplified, 20, amplified2, 10, amplified, 90, amplified2, 80);
        rotate(x)
    }


    //everytime the draw function goes around sin value is giving a position that is increased by the increment and then when it gets to big it will flip back
    pos = pos + slider.value();
    pos2 = pos2 + slider2.value();
}