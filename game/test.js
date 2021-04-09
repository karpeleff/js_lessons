var canvas = document.querySelector("canvas")
var context = canvas.getContext("2d");

function updateGameArea() {
    context.clearRect(0, 0, canvas.width, canvas.height)  
    requestAnimationFrame(updateGameArea);  
}

requestAnimationFrame(updateGameArea);


var canvas = document.querySelector("canvas")
var context = canvas.getContext("2d");
var player = {width: 30, height: 30, x: 0, y:110};

function updateGameArea() {
    context.clearRect(0, 0, canvas.width, canvas.height)  
    context.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(updateGameArea);  
}

requestAnimationFrame(updateGameArea);


var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var player = {width: 30, height: 30, x: 0, y:110, speedX: 0.0, speedY: 0.0};

function updateGameArea() {
    context.clearRect(0, 0, canvas.width, canvas.height)  
    context.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(updateGameArea);  
}

window.onkeydown = function(event) {
  event.preventDefault() // stops the button scrolling the page
  if(event.keyCode == 40) { // down
    player.y += 10
  } else if(event.keyCode == 38) { // up
    player.y -= 10    
  } else if(event.keyCode == 39) { // right 
    player.x += 10    
  } else if(event.keyCode == 37) { // left
    player.x -= 10        
  } 
}

requestAnimationFrame(updateGameArea);