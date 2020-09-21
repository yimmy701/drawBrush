// Namebackground(95); any p5.js functions we use in the global so Glitch can recognize them.
/* global createCanvas, width, height, colorMode, HSB, mouseX, mouseY, pmouseX, pmouseY, mouseIsPressed, random, background, fill, color, rect, ellipse, line, stroke, noStroke, noFill, strokeWeight, abs */

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6); 
  background(95);
  
}

function draw() {
  chooseColors();
  if (mouseIsPressed){
    ellipse(mouseX, mouseY,abs(pmouseY - mouseY),abs(pmouseX - mouseX))
  } 
}

function chooseColors() {
  brushHue += 1;
  if (brushHue >= 360){
    brushHue = 0;
  }
 
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function keyPressed() {
  background(95);
}

