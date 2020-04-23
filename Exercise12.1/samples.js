var drink;
//var fireplace;
//var heartbeat;

function preload() {
  drink = loadSound('wav/ice-cubes-glass-daniel_simon.wav');
  //fireplace = loadSound ('wav/crackling-fireplace_daniel-simion.wav');
  //heartbeat = loadSound('wav/human-heartbeat-daniel_simon.wav')
}

function setup() {
  createCanvas(500, 500, WEBGL);
  amplitude = new p5.Amplitude();
  drink.play();
}

function draw() {
  let level = amplitude.getLevel();
  strokeWeight(1);
  stroke('red');
  rotateY(millis() / level);
  ellipsoid(90, 100, 100);

}