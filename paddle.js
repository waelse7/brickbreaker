class Paddle {
    constructor(x, y, width, height, ctx){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.ctx = ctx
        this.draw()
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.rect(
          this.x - this.width / 2,
          this.y - this.height / 2,
          this.width,
          this.height
        );
        this.ctx.fill();
        this.ctx.closePath();
    }
    moveRight(){
        this.x += 5;
        this.draw()

    }
    moveLeft(){
        this.x -= 5;
        this.draw()
    }
}