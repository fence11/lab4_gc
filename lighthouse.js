let lighthouseModel;

function preload() {
  lighthouseModel = loadModel('https://raw.githubusercontent.com/fence11/lab4_gc/main/lighthouse.obj', true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  
  translate(0, 0, 300);
  
  rotateX(PI);
  rotateY(frameCount * 0.01);
  model(lighthouseModel);
}
