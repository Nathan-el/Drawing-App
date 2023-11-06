const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20
let isPressed = false
let color = 'black'

let x
let y 



document.getElementById("color").onchange = function() {
    color = this.value;
  };

document.getElementById("decrease").onclick = function(){
    size -= 1
    document.getElementById("size").innerHTML = size
}

document.getElementById("increase").onclick = function(){
    size += 1
    document.getElementById("size").innerHTML = size
}

document.getElementById("clear").onclick = function(){
    size = 20
    document.getElementById("size").innerHTML = size

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}








canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    
    x = e.offsetX
    y = e.offsetY
} 
)

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    
    x = undefined
    y = undefined
} 
)

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
        
       
    }

   
} 
)

function drawCircle(x, y){

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}




