let xCoordinates = [100, 200, 300] 
let yCoordinates = 0

function setup() {
createCanvas(400, 400)
x = random(0, 400)
}

function draw() {
background(50, 0, 80)
star(50, 50)
for ( let i = 0; i < xCoordinates.length; i + 1) {
    star(xCoordinates, yCoordinates)
}

//if (mouseIsPressed){
   //  star(x, y)
   //  y += 10
//}
}

/**
 * Draws a star at the given coordinates.
 * @param {number} x 
 * @param {number} y 
 */

function star(x, y ) {
    fill(255, 234, 0);
    noStroke();
    triangle(x, y - 50, x - 20, y, x + 20, y);
    triangle(x - 50, y - 20, x, y - 20, x, y + 10);
    triangle(x + 50, y - 20, x, y - 20, x, y + 10);
    triangle(x - 20, y - 5, x, y + 10, x - 35, y + 30);
    triangle(x, y + 10, x + 20, y - 5, x + 35, y + 30);
 
}

function mouseClicked(){
//if (true){
   // star
  //y +=2
//}
}