function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
// Use a square shape as the background color — don’t use your background. All other shapes should be on top of that square.
    fill('#D5AC4E');
    noStroke();
    rect(0, 0, 200, 200);
//Use good design so that this single pattern tile looks visually pleasing on its own. As you’re design it, think about what modifications to size, color, or position may lead to interesting other tiles.
    noStroke();
    fill('#7E231D');
    arc(100, 0, 150, 150, 0, PI);
    arc(100, 150, 150, 150, PI, 0);
    stroke('black');
    strokeWeight('1');
    noFill();
    arc(100, 0, 170, 170, 0, PI);
    arc(100, 150, 170, 170, PI, 0);
    noStroke();
    fill('#BA5624');
    circle(100, 150, 50);
    noFill();
    stroke('#EECF6D');
    strokeWeight('5');
    circle(100, 150, 75);
}

//Wrap your entire ‘drawing’ with a function, so that you would have blank canvas unless you called your function. Call your pattern function in the draw function. Use the noLoop method to stop the draw loop.
function draw() {
    createTile();
    //noLoop();
}