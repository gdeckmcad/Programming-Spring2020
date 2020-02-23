let startingX = 20;
let startingY = 90;
let cards = [];
const DOWN = 'down';
const UP = 'up';
const gameState = {

}

//loading font
let myFont;
function preload () {
    myFont = loadFont('Lato-Light.ttf');
}
//loading imgs


//setting up card class, took off border radius from demo
class Card {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 175;
        this.height = 100;
        this.face = DOWN;
        this.show();
    }
    show () {
        if(this.face === DOWN) {
        fill('#A9D9C3');
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        fill('#93C8B0');
        rect(this.x, this.y, this.width, 15);
        rect(this.x, this.y + 28, this.width, 15);
        rect(this.x, this.y + 56, this.width, 15);
        rect(this.x, this.y + 84, this.width, 15);
    } else {
        fill(0);
        rect(this.x, this.y, this.width, this.height);
    }
    }
    didHit (mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.width && 
           mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

//grid of cards
function setup () {
    createCanvas(605, 569);
    background('#F8E7A9');
    for (let k = 0; k < 4; k++) {
    for (let i = 0; i < 3; i++){
        cards.push(new Card(startingX, startingY));
        startingX += 190;
    }
    startingY += 115;
    startingX = 20;
}
}

//flipping card
function mousePressed() {
    for (let j = 0; j < cards.length; j++) {
        if(cards[j].didHit(mouseX, mouseY)) {
            console.log('flipped');
        }
    }
}

//messaging
function draw () {
    fill(0);
    textFont(myFont);
    textSize(20);
    textAlign(CENTER, CENTER);
    text('Charley Harper Memory Card Game', 300, 30);
    textSize(16);
    textAlign(CENTER,CENTER);
    text('0/6 matches found', 300, 60);
}