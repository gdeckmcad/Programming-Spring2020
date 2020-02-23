let startingX = 20;
let startingY = 90;
let cards = [];
const DOWN = 'down';
const UP = 'up';
const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};

//preload function for images and font
let myFont;
let cardfaceArray = [];
function preload () {
    myFont = loadFont('Lato-Light.ttf');
    cardfaceArray = [
        loadImage('imgs/match-1.png'),
        loadImage('imgs/match-2.png'),
        loadImage('imgs/match-3.png'),
        loadImage('imgs/match-4.png'),
        loadImage('imgs/match-5.png'),
        loadImage('imgs/match-6.png'),
    ]
}


//setting up card class, took off border radius from demo
class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 175;
        this.height = 100;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show () {
        if(this.face === UP || this.isMatch) {
            image(this.cardFaceImg, this.x, this.y);
        } else {
            fill('#A9D9C3');
            noStroke();
            rect(this.x, this.y, this.width, this.height);
            fill('#93C8B0');
            rect(this.x, this.y, this.width, 15);
            rect(this.x, this.y + 28, this.width, 15);
            rect(this.x, this.y + 56, this.width, 15);
            rect(this.x, this.y + 84, this.width, 15);
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

function setup () {
    createCanvas(605, 569);
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //removee the used cardface so it doesn't get randomized
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    //grid
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < 3; i++){
        const faceImage = selectedFaces.pop();
        cards.push(new Card(startingX, startingY, faceImage));
        startingX += 190;
        }
    startingY += 115;
    startingX = 20;
    }
}


function draw () {
    background('#F8E7A9');
    if (gameState.numMatched === gameState.totalPairs) {
        fill(0);
        textSize(66);
        text('You win!', 175, 225);
        noLoop();
    }
    for (let m = 0; m < cards.length; m++) {
        if(!cards[m].isMatch) {
            cards[m].face = DOWN;
        }
        cards[m].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(0);
    textFont(myFont);
    textAlign(CENTER, CENTER);
    textSize(16);
    text('attempts ' + gameState.attempts, 300, 65);
    text('matches ' + gameState.numMatched, 300, 45);

}

//flipping card
function mousePressed() {
    if (gameState.waiting) {
        //stops function and won't go on to the rest of it
        return;
    }
    for (let j = 0; j < cards.length; j++) {
        // first check flipped cards length and then we can trigger the flip
        if (gameState.flippedCards.length < 2 && cards[j].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[j]);
            gameState.flippedCards.push(cards[j]);
        }
    }
    if (gameState.flippedCards.length === 2) {
            gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
           // mark cards as matched so they don't flip back when matched
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

//shuffle
function shuffleArray (array) {
        let counter = array.length;
        while (counter > 0) {
            // pick random index
            const idx = Math.floor(Math.random() * counter);
            // decrease counter by 1 
            counter --;
            // swap the last element with it
            const temp = array[counter];
            array[counter] = array[idx];
            array[idx] = temp;
        }
        return array;
        }