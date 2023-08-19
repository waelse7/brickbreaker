class Ball {
    constructor(x, y, vx, vy, radius, ctx) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) {
            this.vx = -this.vx;
        }

        if (this.y < 0 || this.y > canvas.height) {
            this.vy = -this.vy;
        }
        this.draw() 
    }
}