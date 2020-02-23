let startingX = 20;
let startingY = 90;
let cards = [];
const DOWN = 'down';
const UP = 'up';
const gameState = {

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
            image(this.cardFaceImg, this.x, this.y);
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
    background('#F8E7A9');
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

//flipping card
function mousePressed() {
    for (let j = 0; j < cards.length; j++) {
        if(cards[j].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[j]);
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