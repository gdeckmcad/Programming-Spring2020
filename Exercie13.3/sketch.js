var pos;

function setup() {
    createCanvas(500, 500)
    angleMode(DEGREES)

    //position as float value, has decimal places
    pos = 0.0

    //determines frequency of sine value
    inc = 3.0
}

function draw() {

    clear()

    var mySinVal = sin(pos)

    amplified = mySinVal * 50

    ellipse(amplified + 100, height/2, 50, mySinVal * 20)

    //everytime the draw function goes around sin value is giving a position that is increased by the increment and then when it gets to big it will flip back
    pos = pos + inc
}