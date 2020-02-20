let blockX = 0;
let blockY = 0;
let drawTimer;
const speed = 5;
const distance = 2;

function setup() {
    createCanvas(300, 300);
    background(0);
}
 
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

function keyTyped() {
    console.log('your pressed', key);
}

drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
        drawBlock(blockX, blockY, 255);
        blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    if (blockY > height && blockX >= width) {
        window.clearInterval(drawTimer);
        alert('done');
    }
}, speed);