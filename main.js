const playAgainButton = document.getElementById("playAgainButton");
playAgainButton.style.display = 'none';
const canvas = document.getElementById('canvas');
canvas.height = 600;
canvas.width = 800;


const ctx = canvas.getContext('2d');
const paddle = new Paddle(400, 585, 100, 20, ctx)
const bricks = new Bricks(ctx)
const ball = new Ball(400, 300, 4, 4 , 10, ctx)


function resetGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.reset();
  paddle.setMid();
  bricks.initBricks();
  playAgainButton.style.display = 'none';
}

playAgainButton.addEventListener('click', function() {
  if (!ball.gameon){
    resetGame()
  }
});
