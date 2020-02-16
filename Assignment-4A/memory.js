let startingX = 20;
let startingY = 90;
let myGrid = [];

function setup () {
    createCanvas(605, 569);
    background('#F8E7A9');
    //rect(rectX, rectY, 175, 100);
    for (let i = 0; i < 3; i++) {
        rect(startingX, startingY, 175, 100);
        myGrid.push({x: startingX, y: startingY});
        startingX += 190;
    }
}