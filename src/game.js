import Snake, {isEqual} from './snake.js';
import Food from "./food.js";


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const snake = new Snake(ctx, canvas.width / 30 - 2);
const food = new Food(ctx, canvas.width / 30 - 2);

function drawGame() {
  clearScreen();
  food.draw();
  snake.update();
  snake.draw();
  snake.kill();

  if(isEqual(snake.body[0], food.coordinates)) {
    snake.grow();
    food.update();
  }

  setTimeout(drawGame, 1000 / snake.speed);
}

window.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37:
      if(snake.direction.x === 1) break;
      snake.direction = { x: -1, y: 0 };
      break;
    case 38:
      if(snake.direction.y === 1) break;
      snake.direction = { x: 0, y: -1 };
      break;
    case 39:
      if(snake.direction.x === -1) break;
      snake.direction = { x: 1, y: 0 };
      break;
    case 40:
      if(snake.direction.y === -1) break;
      snake.direction = { x: 0, y: 1 };
      break;
  }
});

function clearScreen() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawGame();