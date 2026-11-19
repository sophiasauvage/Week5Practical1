let mouseXPosition = []
let mouseYPosition = []
let circleDiameter = []

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(255);
    fill(255,0, 255)
    mouseXPosition.push(mouseX)
    mouseYPosition.push(mouseY)
    circleDiameter.push(20)
    for (let i = 0; i < mouseXPosition.length; i++){
        circle(mouseXPosition[i], mouseYPosition[i], circleDiameter[i]- (2 * i))
    }
    if (mouseXPosition.length === 5){
        mouseXPosition.shift()
        mouseYPosition.shift()
    }

}