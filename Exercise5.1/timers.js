let blockX = 0;
let blockY = 0;
let drawTimer;
function setup() {
    createCanvas(500, 500);
    background(0);
    drawBlock(blockX, blockY, 255);
}
 
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

drawTimer = window.setInterval(() => {}, 1000);