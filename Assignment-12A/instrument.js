//preloading sound files
function preload() {
    blockOne = loadSound('sounds/blockOne.wav')
    blockTwo = loadSound('sounds/blockTwo.wav')
    blockThree = loadSound('sounds/blockThree.wav')
    blockFour = loadSound('sounds/blockFour.wav')
    blockFive = loadSound('sounds/blockFive.wav')
    blockSix = loadSound('sounds/blockSix.wav')
}

//setup with canvas and amplitude, this is storing each sound byte in it's own amplitude variable
function setup() {
    createCanvas (1050, 500);
    amplitudeOne = new p5.Amplitude();
    amplitudeOne.setInput(blockOne);

    amplitudeTwo = new p5.Amplitude();
    amplitudeTwo.setInput(blockTwo);

    amplitudeThree = new p5.Amplitude();
    amplitudeThree.setInput(blockThree);

    amplitudeFour = new p5.Amplitude();
    amplitudeFour.setInput(blockFour);

    amplitudeFive = new p5.Amplitude();
    amplitudeFive.setInput(blockFive);

    amplitudeSix = new p5.Amplitude();
    amplitudeSix.setInput(blockSix);
}

//Using mouseClicked to set up click targets for user interaction, leaving them play out so you can layer sounds on top of each other
function mouseClicked () {

    //Click target for block one
    if ((mouseX >= 0 && mouseX <= 350) && (mouseY >= 0 && mouseY <= 250)) {
        blockOne.play()
    }

    //Click target for block two
    if ((mouseX >= 350 && mouseX <= 700) && (mouseY >= 0 && mouseY <= 250)) {
        blockTwo.play()
    }

    //Click target for block three
    if ((mouseX >= 700 && mouseX <= 1050) && (mouseY >= 0 && mouseY <= 250)) {
        blockThree.play()
    }    

    //Click target for block four
    if ((mouseX >= 0 && mouseX <= 350) && (mouseY >= 250 && mouseY <= 500)) {
        blockFour.play()
    }

    //Click target for block five
    if ((mouseX >= 350 && mouseX <= 700) && (mouseY >= 250 && mouseY <= 500)) {
        blockFive.play()
    }    

    //Click target for block five
    if ((mouseX >= 700 && mouseX <= 1050) && (mouseY >= 250 && mouseY <= 500)) {
        blockSix.play()
    }   

}

//Carefully mapped out coordinates for the grid and shapes, had to store and call each level individually
function draw() {
    let levelOne = amplitudeOne.getLevel();
    let sizeOne = levelOne * 500;

    //block 1
    fill('#E65161');
    noStroke();
    rect(0, 0, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#FFFFFF');
    ellipse(175, 125, 160 + sizeOne,  160 + sizeOne);

    let levelTwo = amplitudeTwo.getLevel();
    let sizeTwo = levelTwo * 500;    

    //block 2
    fill('#9CCD65');
    noStroke();
    rect(350, 0, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#ffffff');
    rect(454, 45, 160, 160, 1 * sizeTwo, 1 * sizeTwo);   

    let levelThree = amplitudeThree.getLevel();
    let sizeThree = levelThree * 500;   

    //block 3
    fill('#45C9A7');
    noStroke();
    rect(700, 0, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#FFFFFF');
    triangle(778, 206, 835 + sizeThree, 36, 948 + sizeThree, 149);

    let levelFour = amplitudeFour.getLevel();
    let sizeFour = levelFour * 500;   
    
    //block 4
    fill('#4BB9E1');
    noStroke();
    rect(0, 250, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#ffffff');
    rect(100, 310, 160 + sizeFour, 130 + sizeFour); 

    let levelFive = amplitudeFive.getLevel();
    let sizeFive = levelFive * 500;   

    //block 5
    fill('#F5C851');
    noStroke();
    rect(350, 250, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#FFFFFF');
    triangle(534 - sizeFive, 295 + sizeFive, 614 + sizeFive, 455 - sizeFive, 454 + sizeFive, 455 - sizeFive);    

    let levelSix = amplitudeSix.getLevel();
    let sizeSix = levelSix * 500;   

     //block 6
     fill('#A68DE3');
     noStroke();
     rect(700, 250, 350, 250);
     noFill();
     strokeWeight(4);
     stroke('#ffffff');
     line(792 + sizeSix, 310, 992, 440);    

  }