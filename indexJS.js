var cvs = document.getElementById('canvas');
var ctx = cvs.getContext("2d");
var snakeW=20;
var snakeH=20;
var score = 0;
var x = 0;

function drawSnake(x,y) {
	ctx.fillStyle="white";
	ctx.fillRect(x*snakeW,y*snakeH,snakeH,snakeW);
	ctx.fillStyle="yellow";
	ctx.strokeRect(x*snakeW,y*snakeH,snakeH,snakeW);
}
function drawSnakeHead(x,y){
	ctx.fillStyle="black";
	ctx.fillRect(x*snakeW,y*snakeH,snakeH,snakeW);
	ctx.fillStyle="yellow";
	ctx.strokeRect(x*snakeW,y*snakeH,snakeH,snakeW);
}

var len = 4;
snake = [];
for(var i=len-1;i>=0;i--){
	snake.push({
		x:i,
		y:0
	})
}
//direction control
var dir="right";
document.addEventListener("keydown",dirControl);

function dirControl(e){
	if(e.keyCode==37&&dir!="right"){dir="left";}
		else if(e.keyCode==38&&dir!="down"){dir="up";}
			else if(e.keyCode==39&&dir!="left"){dir="right";}
				else if(e.keyCode==40&&dir!="up"){dir="down";}
}
function dirControl2(e){
	if(e==37&&dir!="right"){dir="left";}
		else if(e==38&&dir!="down"){dir="up";}
			else if(e==39&&dir!="left"){dir="right";}
				else if(e==40&&dir!="up"){dir="down";}
}
//create food
var food = {
	x:Math.round(Math.random()*(cvs.width/snakeW-2)+1),
	y:Math.round(Math.random()*(cvs.height/snakeH-2)+1)
}
//draw food
function drawFood(x,y){
	ctx.fillStyle="red";
	ctx.fillRect(x*snakeW,y*snakeH,snakeH,snakeW);
	ctx.fillStyle="yellow";
	ctx.strokeRect(x*snakeW,y*snakeH,snakeH,snakeW);	
}
//draw function
function draw(){
	ctx.clearRect(0,0,cvs.width,cvs.height);
	drawSnakeHead(snake[0].x,snake[0].y);
	for(var i=1;i<snake.length;i++){
	var X = snake[i].x;
	var Y = snake[i].y;
	drawSnake(X,Y);
	}
	drawFood(food.x,food.y);
//draw head
var snakeX = snake[0].x;
var snakeY = snake[0].y;
if(snakeX<0 || snakeY<0 || snakeX>cvs.width/snakeW-1 || snakeY>cvs.height/snakeH-1){
	gameOver();
}
for(var i=1;i<snake.length;i++){
	if(snakeX==snake[i].x && snakeY==snake[i].y){
		gameOver();
	}
}
if(dir=="right"){snakeX++;}
	else if(dir=="left"){snakeX--;}
		else if(dir=="up"){snakeY--;}
			else if(dir=="down"){snakeY++;}
if(snakeX==food.x&&snakeY==food.y){
	score += 10;
	document.getElementById('score').innerHTML = score;
	food = {
	x:Math.round(Math.random()*(cvs.width/snakeW-2)+1),
	y:Math.round(Math.random()*(cvs.height/snakeH-2)+1)
};
}			
else{
	snake.pop();
} 
var newHead = {
 	x:snakeX,
 	y:snakeY
 }
 snake.unshift(newHead);
}//end draw
var start;
//function to start the game
 function startGame1(){
 	if (x == 0) {
 		start = setInterval(draw,200);
 		x = 1;
 	}
 }
 function startGame2(){
 	if (x == 0) {
 		start = setInterval(draw,100);
 		x = 1;
 	}
 }
  function startGame3(){
 	if (x == 0) {
 		start = setInterval(draw,75);
 		x = 1;
 	}
 } 
 function pause(){
 	clearInterval(start);
 	x = 0;
 }
 //function for game over
 function gameOver(){
 	clearInterval(start);
 	ctx.clearRect(0,0,cvs.width,cvs.height);
 	document.getElementById("go").innerHTML = "Game Over";
 	document.getElementById("pa").innerHTML = "refresh to play again";
 } 	



