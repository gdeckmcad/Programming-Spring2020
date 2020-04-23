var heartbeat;

function preload() {
  heart = loadSound('wav/human-heartbeat-daniel_simon.wav')
}

function setup() {
  createCanvas(500, 500, WEBGL);
  amplitude = new p5.Amplitude();
  heart.play();
}

function draw() {
  let level = amplitude.getLevel();
  strokeWeight(1);
  stroke('red');
  rotateY(millis() / level);
  ellipsoid(150, 150, 150);

}