var hr;
var min;
var sc;

var scHand;

function setup() {
  createCanvas(800,400);

  hr = hour();
  min = minute();
  sc = second();
  
}

function draw() {
  background("cyan");  

  scAngle = map(sc,0,60,0,360);
  strokeWeight(5);
  noFill();
  circle(400,200,210);
  ellipseMode(RADIUS);

  push();
  // scHand = createSprite(400,200,5,10);
  translate(400,200);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(50,50,50,50);
  pop();

  angleMode(DEGREES);
  drawSprites();
}