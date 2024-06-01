function setup() {
    createCanvas(400, 500);
    background("#8BC34A")
  }
  
  function draw() {
    stroke("rgb(255,255,255)");
    fill("rgb(0,0,0)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 15);
    }
  }
  