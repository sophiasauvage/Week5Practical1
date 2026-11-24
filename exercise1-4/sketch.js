let mousePositionX = []
let mousePositionY = []
function setup(){
    createCanvas(400, 400)
}

function draw(){
    background(255)
    fill(255, 0, 0)
 for (let i = 0;i < mousePositionX.length; i += 1){
    circle(mousePositionX[i], mousePositionY[i], 50)

}
}

function mouseClicked(){
   mousePositionX.push(mouseX)
mousePositionY.push(mouseY)
}

function keyPressed(){
    if (key === "z"){
        mousePositionX.pop()
        mousePositionY.pop()
    }
}