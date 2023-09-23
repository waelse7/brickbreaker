class Paddle {
  constructor(x, y, width, height, ctx){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.ctx = ctx
      document.addEventListener('mousemove', this.handleMouseMovements.bind(this))
  }
  draw(){
      this.ctx.fillStyle = 'black'
      this.ctx.fillRect(
          this.x - this.width/2,
          this.y - this.height/2, 
          this.width, 
          this.height
          )
  }
  remove(){
      this.ctx.clearRect(
          (this.x - this.width/2) - 1,
          (this.y - this.height/2) - 1, 
          this.width + 2, 
          this.height + 2
        )
  }


  handleMouseMovements(event) {
      this.mouseX = event.clientX - canvas.offsetLeft
      this.mouseY = event.clientY - canvas.offsetTop
      this.update()
    }
  
    update() {
      this.remove()
      
      this.x += (this.mouseX - this.x) * 0.1
      this.x = Math.max(this.width/2, Math.min(this.x, canvas.width - this.width/2))
      
      this.draw()
      requestAnimationFrame(this.update.bind(this))
    }
}