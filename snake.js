window.onload = function(){
	var cvs = document.getElementById("canvas");
	var ctx = cvs.getContext("2d");

	var cvsW = cvs.width;
	var cvsH = cvs.height;

	var snakeW = 10;
	var snakeH = 10;

	var direction = "down";

	function drawSnake(x, y){
		ctx.fillStyle = "#FFF";
		ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);

		ctx.fillStyle = "#000";
	 	ctx.strokeRext(x * snakeW, y * snakeH, snakeW, snakeH);

	 	drawSnake(4,4);
	} 
   //Create our snake object
	var len = 4;
	var snake = [];
	for(var i = len-1; i>=0; i--){
		snake.push(
		{x:i,
		  y:0
		}
	  };
 	}

 	function draw(){
 		 ctx.clearRect(0,0,cvsW, cvsH)
 		for(var i = 0; i< snake.length; i++){
 			var x = snake[i].x;
 			var y = snake[i].y;
 			drawSnake(x,y);

 		}
 		//Snake head
 		var snakeX = snake[0].x;
 		var snakeY = snake[0].y;

     
      //Remove the snake tail
 		snake.pop();

 		snakeX++;

 		if(direction == "left") snakeX--;
 		else if(direction == "up") snakeY--;
 		else if(direction == "right") snakeX++;
 		else if (direction == "down") snakeY++;
     //Create a new head based on the previous head
 		var newHead = {
 			x: snakeX,
 			y: snakeY
 		};

 		snake.unshift(newHead);
 	}

 	setInterval(draw,60);
