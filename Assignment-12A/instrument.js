//preloading sound files
function preload() {
    blockOne = loadSound('sounds/blockOne.wav')
    blockTwo = loadSound('sounds/blockTwo.wav')
    blockThree = loadSound('sounds/blockThree.wav')
    blockFour = loadSound('sounds/blockFour.wav')
    blockFive = loadSound('sounds/blockFive.wav')
    blockSix = loadSound('sounds/blockSix.wav')
}


//setup, trying to match this up with the dimensions set in body
function setup() {
    createCanvas(1080, 500);
    amplitude = new p5.Amplitude();
}


//drawing the shapes and getting them set up in their quadrants
function draw() {
    circleX = 160;

    fill('#E65161');
    noStroke();
    rect(0, 0, 356, 250);
    noFill();
    strokeWeight(4);
    stroke('#FFFFFF');
    ellipse(175, 125, circleX, circleX);
  }