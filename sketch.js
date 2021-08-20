var capture;
var precision;
var width;
var heigth;
var rSlider;
var gSlider;
var bSlider;
var aSlider;

function setup() {
  width = 640;
  heigth = 360;
  frameRate(15);
  textSize(32);
  createElement("H1", "P5 Camera RGBA");
  createCanvas(width, heigth);
  capture = createCapture(VIDEO);
  createElement("span", "R:");
  rSlider = createSlider(-255, 255, 0);
  createElement("span", "G:");
  gSlider = createSlider(-255, 255, 0);
  createElement("span", "B:");
  bSlider = createSlider(-255, 255, 0);
  createElement("span", "A:");
  aSlider = createSlider(-255, 255, 0);
  createElement(
    "p",
    "A simple Demo of how to use the p5 library to control the colors or the camera. Try sliding the sliders and see the colors change!"
  );
  capture.hide();
  capture.size(width, heigth);
  precision = 1;
}

function draw() {
  //background(255);
  for (var x = 0; x < width; x = x + precision) {
    for (var y = 0; y < heigth; y = y + precision) {
      let c = capture.get(x, y);
      c[0] += rSlider.value();
      c[1] += gSlider.value();
      c[2] += bSlider.value();
      c[3] += aSlider.value();
      capture.set(x, y, c);
    }
  }
  updatePixels();
}
