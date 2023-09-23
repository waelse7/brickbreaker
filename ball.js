class Ball {
    constructor(x, y, xv, yv, rad, ctx){
        this.x = x
        this.y = y
        this.xv = xv
        this.yv = yv
        this.rad = rad
        this.ctx = ctx
        this.direction = 1
    }
    draw(){
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2)
        this.ctx.fillStyle = 'black';
        this.ctx.fill()
        this.ctx.closePath()
    }
    remove(){
        this.ctx.clearRect(
            this.x - this.rad,
            this.y - this.rad,
            this.rad * 2,
            this.rad * 2
          )
        }

    move(){
        this.remove()
        this.x += this.xv * this.direction
        this.y += this.yv
        this.checkCollisionsWithWalls()
        this.checkCollisionsWithPaddle()
        this.checkCollisionsWithBricks()
        this.checkForWin()
        this.draw()
    }
    checkCollisionsWithWalls(){
        if (this.x < 0 || this.x > canvas.width) {
            this.xv = -this.xv
        }
        if (this.y < 0){
            this.yv = -this.yv
        }
        if (this.y > canvas.height) {
            clearInterval(this.interval)
            const resultMessage = document.getElementById("result-message")
            resultMessage.textContent = "You lose"
            resultMessage.style.color = "red"
            playagain.style.display = 'block'
            playagain.style.display = 'block'
        }
    }
    checkCollisionsWithPaddle(){
        if (
            this.y + this.rad > paddle.y - paddle.height / 2 &&
            this.y - this.rad < paddle.y + paddle.height / 2 &&
            this.x + this.rad > paddle.x - paddle.width / 2 &&
            this.x - this.rad < paddle.x + paddle.width / 2
        ) { 
            const pos = this.x - paddle.x;
            if (this.direction === -1) {
                if (pos < 0) {
                    this.xv = -Math.abs(this.xv)
                } else if (pos >= 0) {
                    this.xv = Math.abs(this.xv)
                }
            } else if (this.direction === 1) {
                if (pos < 0) {
                    this.xv = -Math.abs(this.xv)
                } else if (pos >= 0) {
                    this.xv = Math.abs(this.xv)
                }
            }
            this.yv = -this.yv
        }
    }
    checkCollisionsWithBricks(){
        for (let i = 0; i < bricks.lst.length; i++) {
            console.log(bricks.lst.length);
            for (let j = 0; j < bricks.lst[i].length; j++) {
                const brick = bricks.lst[i][j];
            if (
                brick &&
                this.y + this.rad > brick.y - brick.height / 2 &&
                this.y - this.rad < brick.y + brick.height / 2 &
                this.x + this.rad > brick.x - brick.width / 2 &&
                this.x - this.rad < brick.x + brick.width / 2 
            ){
                bricks.lst[i][j].remove()
                bricks.lst[i][j] = null
                this.yv = -this.yv
            }
            }
        }
    }
    checkForWin(){
        for (let i = 0; i < bricks.lst.length; i++) {
            console.log(bricks.lst.length);
            for (let j = 0; j < bricks.lst[i].length; j++) {
                if (bricks.lst[i][j] !== null){
                    return
                }
            }
        const resultMessage = document.getElementById("result-message")
        resultMessage.textContent = "You win"
        resultMessage.style.color = "green"
        playagain.style.display = 'block'
        }
    }
    init(){
        this.interval = setInterval(() => {
            this.move();
          }, 20)
    }
}

