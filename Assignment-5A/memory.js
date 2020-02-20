let startingX = 20;
let startingY = 90;
let myGrid = [];

//loading font
let myFont;
function preload () {
    myFont = loadFont('Lato-Light.ttf');
}

//grid of cards
function setup () {
    createCanvas(605, 569);
    background('#F8E7A9');
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < 3; i++){
            rect(startingX, startingY, 175, 100);
            myGrid.push({ x: startingX, y: startingY, id: i + k });
            startingX += 190;
        }
        startingY += 115;
        startingX = 20;
    }
}

//messaging
function draw () {
    textFont(myFont);
    textSize(20);
    textAlign(CENTER, CENTER);
    text('Charley Harper Memory Card Game', 300, 30);
    textSize(16);
    textAlign(CENTER,CENTER);
    text('0/6 matches found', 300, 60);
}