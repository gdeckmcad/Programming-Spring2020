//this is loading the sound files on preload
function preload() {
  heart = loadSound('wav/human-heartbeat-daniel_simon.wav')
  stomach = loadSound('wav/Stomach Growling-SoundBible.com-164767511.wav')
  lungs = loadSound('wav/Exhale-SoundBible.com-1772711989.wav')
}

//setting up 
function setup() {
  createCanvas(500, 500);
  amplitude = new p5.Amplitude();
}

//this is capturing the level of the sound in the variable level and outputting the visual reprsentation of the sounds
function draw() {
  let level = amplitude.getLevel();
  strokeWeight(1);
  stroke('red');
  circleX = level * 1000
  ellipse(250, 250, circleX, circleX);
}

//these are the functions that are put on the buttons with the event onClick, letting them play their entirety so that they layer over each other
function playHeart() {
  heart.play()
}

function playStomach() {
  stomach.play()
}

function playLungs() {
  lungs.play()
}