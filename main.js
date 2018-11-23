function setup(){
  createCanvas(80, 20, WEBGL)
}

function draw(){
  strokeWeight(10)
  line(mouseX,mouseY,pmouseX,pmouseY)
}
