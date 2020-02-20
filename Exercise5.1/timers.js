let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 20;
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
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    if (blockY >= height && blockX >= width) {
        window.clearInterval(drawTimer);
        alert('done');
    }
}, speed);