
let shot  = new Audio('shot.mp3');

let ufo = new Image();   // Create new img element
ufo.src = 'ufo.png';


let   canvas = document.getElementById("canvas");
let   ctx = canvas.getContext("2d");



let xPos = 10;
let yPos = 10;
let speed = 2;

canvas.addEventListener( "click" , () => shot.play());


window.onload = function () {
    game();
}



function game(){
    update();
    draw();
    requestAnimationFrame(game);
}

function draw(){


    ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(ufo, xPos, yPos);
    // ctx.clear(true);
   // ctx.clearRect(0, 0, canvas.width, canvas.height);

    }
     
 function update(){
    xPos = xPos + 1;
   // yPos = yPos + 1;

if(xPos > 550){
    xPos -=  xPos   ; 
}

 }        
      
 










