/**
 * Main sketch for starfield canvas using p5.js
 * Matthew Yu
 */
var stars = [];
var speed = 12; //modify speed of star movement

function setup() {
  var cnv = createCanvas(window.innerWidth * .988, window.innerHeight);
  cnv.parent('starfield');
  for(var i = 0; i < 150; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
