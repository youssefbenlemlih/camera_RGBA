var capture;
var precision;
var width ;
var heigth ;
var rSlider;
var gSlider;
var bSlider;
var aSlider;

function setup() {
  //scale(0.5);
  width = 640;
  heigth = 360;
  frameRate(15);
  createCanvas(width,heigth);
capture = createCapture(VIDEO);
rSlider = createSlider(-255,255, 0)
gSlider = createSlider(-255,255, 0)
bSlider = createSlider(-255,255, 0)
aSlider = createSlider(-255,255, 0)
capture.hide();
capture.size(width, heigth);
precision = 1;

}

function draw() {
  background(255);
    for (var x=0; x<width;x=x+precision){
        for (var y=0; y<heigth;y=y+precision){
          let c = capture.get(x,y);
          c[0]+=rSlider.value();
          c[1]+=gSlider.value();
          c[2]+=bSlider.value();
          c[3]+=aSlider.value();
         capture.set(x,y,c);
      }
    }
    updatePixels();

}

function mouseClicked()
{

}
function mouseWheel(event)
{

}

function doubleClicked()
{

}

function mousePressed() {

}
