function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

let clickX = window.innerWidth / 2;
let clickY = window.innerHeight / 2;

let rects = [];

function draw() {
  background(0);
  noFill();
  setLineDash([5, 5]); //create the dashed line pattern here
  stroke("#00ff00");

  for (let rec of rects) {
    rect(rec[0], rec[1], rec[2], rec[3]);
  }

  rect(
    Math.min(mouseX, clickX),
    Math.min(mouseY, clickY),
    Math.abs(clickX - mouseX),
    Math.abs(clickY - mouseY)
  );
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function mouseClicked() {
  rects.push([
    Math.min(mouseX, clickX),
    Math.min(mouseY, clickY),
    Math.abs(clickX - mouseX),
    Math.abs(clickY - mouseY),
  ]);

  clickX = mouseX;
  clickY = mouseY;
}
