class Brick {
  constructor(x, y, width, height, color, ctx){
    this.x = x
    this.y = y 
    this.width = width
    this.height = height
    this.color = color
    this.ctx = ctx
  }

  clear(){
    this.ctx.clearRect(
      this.x - this.width / 2 - (this.ctx.lineWidth / 2),
      this.y - this.height / 2 - (this.ctx.lineWidth / 2),
      this.width + 2 * (this.ctx.lineWidth / 2),
      this.height + 2 * (this.ctx.lineWidth / 2)
    );
  }

  draw(){
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.rect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    this.ctx.fill();

    this.ctx.lineWidth = 1; 
    this.ctx.strokeRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );

    this.ctx.closePath();
  }
}

class Bricks {
  constructor(ctx){
    this.ctx = ctx
    this.initBricks(ctx)
  }

  initBricks(){
      const colors = ['red', 'yellow', 'green', 'blue'];
      this.brickList = []
      for (let row = 0; row < 8; row++){
        const colorIndex = Math.floor(row / 2) % colors.length;
        const y = 13 + row * 25;
        const rowArr = []
        for (let col = 0; col < 10; col ++){
          const color = colors[colorIndex]
          const x = 40 + col * 80
          rowArr[col] = new Brick(x, y, 80, 25, color, this.ctx)
        }
        this.brickList[row] = rowArr;
        this.drawBricks()
      }
    }

  drawBricks(){
    for (let row of this.brickList){
      for (let brick of row){
        brick.draw()
      }
    }
  } 
  }



