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
    createCanvas (1080, 500);
    amplitude = new p5.Amplitude();
}

function mouseClicked () {
    noFill();
    noStroke();
    rect(0, 0, 350, 250);
    if (blockOne.isPlaying() ) {
        blockOne.stop();
    } else {
        blockOne.play();
    }

    fill(0);
    noStroke();
    rect(350, 250, 350, 250);
    if (blockTwo.isPlaying() ) {
        blockTwo.stop();
    } else {
        blockTwo.play();
    }

}

//drawing the shapes and getting them set up in their quadrants
function draw() {
    let level = amplitude.getLevel();
    let size = level * 500;

    //block 1
    fill('#E65161');
    noStroke();
    rect(0, 0, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#FFFFFF');
    ellipse(175, 125, size, size);
  }