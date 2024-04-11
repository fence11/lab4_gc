let roomModel;

function preload() {
  roomModel = loadModel('https://raw.githubusercontent.com/fence11/lab4_gc/main/room1.obj', true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  
  translate(0, 0, 600);
  
  rotateX(PI);
  rotateY(90);
  model(roomModel);
}
