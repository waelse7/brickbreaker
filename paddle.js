class Paddle {
    constructor(x, y, width, height, ctx){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.ctx = ctx
        this.draw()
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
    clear(){
        this.ctx.clearRect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
          );
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
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
        this.clear()
        this.x += 15;
        this.draw()

    }
    moveLeft(){
        this.clear()
        this.x -= 15;
        this.draw()
    }
    setMid(){
        this.clear()
        this.x = 400
        this.draw()
    }

    handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
        this.moveLeft();
    } else if (event.key === 'ArrowRight') {
        this.moveRight();
    }
    }

}