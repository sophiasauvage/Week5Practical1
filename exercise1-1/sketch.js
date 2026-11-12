let diameters = [360, 280, 200, 150]
let colourVal = [60, 140, 180, 255]
function setup(){
    createCanvas(400, 400)
}

function draw(){
    background(255)

fill(colourVal [0])
    circle(200, 200, diameters[0])
    fill(colourVal [1])
     circle(200, 200, diameters[1])
     fill(colourVal [2])
      circle(200, 200, diameters[2])
      fill(colourVal [3])
       circle(200, 200, diameters[3])
}

 function mouseClicked(){
   let endColour = colourVal.pop()
        colourVal.unshift(endColour)
    }
 