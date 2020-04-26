//preloading sound files
function preload() {
    blockOne = loadSound('sounds/blockOne.wav')
    blockTwo = loadSound('sounds/blockTwo.wav')
    blockThree = loadSound('sounds/blockThree.wav')
    blockFour = loadSound('sounds/blockFour.wav')
    blockFive = loadSound('sounds/blockFive.wav')
    blockSix = loadSound('sounds/blockSix.wav')
}


//setup
function setup() {
    createCanvas (1050, 500);
    amplitude = new p5.Amplitude();
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
    ellipse(175, 125, 160 + size,  160 + size);

    //block 2
    fill('#9CCD65');
    noStroke();
    rect(350, 0, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#ffffff');
    rect(454, 45, 160, 160, 1 * size, 1 * size);   


    //block 3
    fill('#45C9A7');
    noStroke();
    rect(700, 0, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#FFFFFF');
    triangle(778, 206, 835 + size, 36, 948 + size, 149);

    //block 4
    fill('#4BB9E1');
    noStroke();
    rect(0, 250, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#ffffff');
    rect(100, 310, 160 + size, 130 + size); 

    //block 5
    fill('#F5C851');
    noStroke();
    rect(350, 250, 350, 250);
    noFill();
    strokeWeight(4);
    stroke('#FFFFFF');
    triangle(534 - size, 295 + size, 614 + size, 455 - size, 454 + size, 455 - size);    

     //block 6
     fill('#A68DE3');
     noStroke();
     rect(700, 250, 350, 250);
     noFill();
     strokeWeight(4);
     stroke('#ffffff');
     line(792 + size, 310, 992, 440);    

  }