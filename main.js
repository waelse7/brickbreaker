const canvas = document.getElementById('canvas');
canvas.height = 600;
canvas.width = 800;


const ctx = canvas.getContext('2d');
const paddle = new Paddle(400, 585, 100, 20, ctx)
const bricks = new Bricks(ctx)

paddle.moveLeft()
bricks.drawBricks()

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === 'ArrowLeft') {
    paddle.moveLeft();
  } else if (event.key === 'ArrowRight') {
    paddle.moveRight();
  }
}

function resetGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.reset();
  
  bricks.initBricks();
  playAgainButton.style.display = 'none';
}
const ball = new Ball(400, 300, 4, 4 , 10, ctx)
