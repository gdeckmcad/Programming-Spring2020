function preload() {
  heart = loadSound('wav/human-heartbeat-daniel_simon.wav')
  stomach = loadSound('wav/Stomach Growling-SoundBible.com-164767511.wav')
  lungs = loadSound('wav/Exhale-SoundBible.com-1772711989.wav')
}

function setup() {
  createCanvas(500, 500, WEBGL);
  amplitude = new p5.Amplitude();
}

function draw() {
  let level = amplitude.getLevel();
  strokeWeight(1);
  stroke('red');
  circleW = level * 1000
  circleH = level * 1000
  ellipse(0, 0, circleW, circleH);
}


function playHeart() {
  heart.play()
}

function playStomach() {
  stomach.play()
}

function playLungs() {
  lungs.play()
}