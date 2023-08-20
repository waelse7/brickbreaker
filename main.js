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

const ball = new Ball(400, 300, 5,5 , 10, ctx)
setInterval(() => {
    ball.update()
}, 20);