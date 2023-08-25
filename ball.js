class Ball {
    constructor(x, y, vx, vy, radius, ctx) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.ctx = ctx;
        this.interval = setInterval(() => {
            this.update();
          }, 20);
        this.gameon = true
        this.direction = 1
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, canvas.wdth, canvas.height);
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }
    clear(){
        this.ctx.clearRect(
            this.x - this.radius,
            this.y - this.radius,
            this.radius * 2,
            this.radius * 2
          );
    }

    displayMessage(message) {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(message, canvas.width / 2 - 75, canvas.height / 2);
      }

      reset() {
        this.x = 400; 
        this.y = 300;
        this.direction = 1
        this.interval = setInterval(() => {
          this.update();
        }, 20);
      }


    update() {
        this.clear()
        paddle.draw()
        this.x += this.vx * this.direction;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) {
            this.vx = -this.vx;
        }

        if (this.y < 0 || this.y > canvas.height) {
            this.vy = -this.vy;
        }
        if (this.y + this.radius > canvas.height) {
            this.displayMessage('You Lose!')
            clearInterval(this.interval)
            playAgainButton.style.display = 'block'
            this.gameon = false
        }
        if (
            this.y + this.radius > paddle.y - paddle.height / 2 &&
            this.y - this.radius < paddle.y + paddle.height / 2 &&
            this.x + this.radius > paddle.x - paddle.width / 2 &&
            this.x - this.radius < paddle.x + paddle.width / 2
        ) {
            this.vy = -this.vy;
            if (this.x > paddle.x) {
                this.direction = 1;
            } else {
                this.direction = -1;
            }
        }
    
        for (let row = 0; row < bricks.brickList.length; row++) {
            for (let col = 0; col < bricks.brickList[row].length; col++) {
            const brick = bricks.brickList[row][col];
            if (
                brick &&
                this.y + this.radius > brick.y - brick.height / 2 &&
                this.y - this.radius < brick.y + brick.height / 2 &&
                this.x + this.radius > brick.x - brick.width / 2 &&
                this.x - this.radius < brick.x + brick.width / 2
            ) {
                bricks.brickList[row][col].clear();
                bricks.brickList[row][col] = null; 
                this.vy = -this.vy;
            }
            }
        }

        this.draw() 
    }
}