class Food {
    constructor() {
        this.size = 10;
        this.x = 0;
        this.y = 0;
    }

    generateFood(canvasWidth, canvasHeight) {
        this.x =
            Math.floor(Math.random() * (canvasWidth / this.size)) * this.size;
        this.y =
            Math.floor(Math.random() * (canvasHeight / this.size)) * this.size;
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(
            this.x + this.size / 2,
            this.y + this.size / 2,
            this.size / 2,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
}
