class Brick{
    constructor(x, y, width, height, color, ctx){
        this.x = x
        this.y = y
        this.width = width 
        this.height = height
        this.ctx = ctx
        this.color = color
    }
    draw(){
        this.ctx.fillStyle = this.color
        this.ctx.strokeStyle = 'black'
        this.ctx.fillRect(
        this.x - this.width/2,
        this.y - this.height/2, 
        this.width, 
        this.height)
        this.ctx.strokeRect(
        this.x - this.width/2,
        this.y - this.height/2, 
        this.width, 
        this.height)
    }
    remove(){
        this.ctx.clearRect(
            (this.x - this.width / 2) - 1,
            (this.y - this.height / 2) - 1,
            this.width + 2,
            this.height + 2
          );
    }
}
class Bricks{
    constructor(ctx){
        this.ctx = ctx
        this.init()
    }

    init(){
        this.lst = [] 
        const colors = ['#d42c20', '#d4b320', '#1542d6', '#11ba02']   
        for (let i = 0; i < 8; i++){
            const rows = []
            const cols = []
            for(let j = 0; j < 10; j++){
                const ind = (i < 2) ? 0 : (i === 2 || i === 3) ? 1 : (i === 4 || i === 5) ? 2 : 3
                rows.push(new Brick(80 * (j + 0.5), 26 * (i + 0.5), 80, 26, colors[ind], ctx))
            }
            this.lst.push(rows)        
        }
        return this.lst
    }
}
