const canvas = document.querySelector("#canvas")
canvas.width = 800
canvas.height = 600
const ctx = canvas.getContext('2d')

const playagain = document.querySelector('#playagain')
const start = document.querySelector('#start')
const paddle = new Paddle(400, 592, 100, 15, ctx)
const bricks = new Bricks(ctx)
const ball = new Ball(400, 300, 4, 4, 10, ctx)


start.addEventListener('click', () => {
    ball.init()

    start.style.display = 'none'


    for (const row of bricks.lst){
        for (const brick of row){
            brick.draw()
        }
    }
    
    paddle.draw()
})


playagain.addEventListener('click', () => {
    ball.remove()
    ball.x = 400
    ball.y = 300
    ball.xv = 4
    ball.yv = 4
    ball.rad = 10
    ball.init()
    playagain.style.display = 'none'

    bricks.init()
    for (const row of bricks.lst){
        for (const brick of row){
            brick.draw()
        }
    }
    paddle.x = 400;
    paddle.y = 592;
    paddle.width = 100;
    paddle.height = 15;
    
    paddle.draw()
})