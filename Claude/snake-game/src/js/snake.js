class Snake {
    constructor() {
        this.size = 10;
        this.body = [
            { x: 200, y: 200 }, // cabeça no centro do canvas
            { x: 190, y: 200 }, // corpo
            { x: 180, y: 200 }, // cauda
        ];
        this.direction = { x: this.size, y: 0 }; // começa movendo para direita
        this.grow = false;
    }

    move() {
        const head = {
            x: this.body[0].x + this.direction.x,
            y: this.body[0].y + this.direction.y,
        };
        this.body.unshift(head);

        if (this.grow) {
            this.grow = false;
        } else {
            this.body.pop();
        }
    }

    changeDirection(newDirection) {
        if (
            newDirection.x !== -this.direction.x &&
            newDirection.y !== -this.direction.y
        ) {
            this.direction = newDirection;
        }
    }

    eat() {
        this.grow = true;
    }

    checkCollision() {
        const head = this.body[0];
        for (let i = 1; i < this.body.length; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }

    draw(ctx) {
        this.body.forEach((segment, index) => {
            if (index === 0) {
                // Cabeça
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(
                    segment.x + this.size / 2,
                    segment.y + this.size / 2,
                    this.size / 2,
                    0,
                    Math.PI * 2
                );
                ctx.fill();

                // Olhos
                ctx.fillStyle = "#111111";
                ctx.beginPath();
                ctx.arc(
                    segment.x + this.size * 0.3,
                    segment.y + this.size * 0.3,
                    2,
                    0,
                    Math.PI * 2
                );
                ctx.arc(
                    segment.x + this.size * 0.7,
                    segment.y + this.size * 0.3,
                    2,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            } else {
                // Corpo com cantos arredondados
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.roundRect(segment.x, segment.y, this.size, this.size, [4]);
                ctx.fill();
            }
        });
    }

    checkFoodCollision(food) {
        const head = this.body[0];
        if (head.x === food.x && head.y === food.y) {
            this.eat(); // chama o método eat() que seta grow = true
            return true;
        }
        return false;
    }

    collideWithWalls(width, height) {
        const head = this.body[0];
        return head.x < 0 || head.x >= width || head.y < 0 || head.y >= height;
    }

    collideWithSelf() {
        const head = this.body[0];
        return this.body
            .slice(1)
            .some((segment) => segment.x === head.x && segment.y === head.y);
    }
}
