function SnakeGame() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.snake = new Snake();
    this.food = new Food();
    this.score = 0;
    this.isGameOver = false;

    this.init = function () {
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.food.generateFood(this.canvas.width, this.canvas.height);
        this.setupControls();
        this.loop();
    };

    this.setupControls = function () {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    this.snake.changeDirection({ x: 0, y: -10 });
                    break;
                case "ArrowDown":
                    this.snake.changeDirection({ x: 0, y: 10 });
                    break;
                case "ArrowLeft":
                    this.snake.changeDirection({ x: -10, y: 0 });
                    break;
                case "ArrowRight":
                    this.snake.changeDirection({ x: 10, y: 0 });
                    break;
            }
        });
    };

    this.loop = function () {
        if (this.isGameOver) {
            this.displayGameOver();
            return;
        }

        this.clearCanvas();
        this.snake.move();
        this.checkCollision();
        this.draw();
        setTimeout(() => this.loop(), 100);
    };

    this.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    this.checkCollision = function () {
        // Verifica se a cobra comeu a comida
        if (this.snake.checkFoodCollision(this.food)) {
            this.score++;
            this.food.generateFood(this.canvas.width, this.canvas.height);
        }

        // Verifica colisão com paredes e próprio corpo
        if (
            this.snake.collideWithWalls(
                this.canvas.width,
                this.canvas.height
            ) ||
            this.snake.collideWithSelf()
        ) {
            this.isGameOver = true;
        }
    };

    this.draw = function () {
        this.snake.draw(this.ctx);
        this.food.draw(this.ctx);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "20px 'Varela Round', sans-serif";
        this.ctx.fillText("Score: " + this.score, 10, 30);
    };

    this.displayGameOver = function () {
        this.ctx.fillStyle = "#f44336";
        this.ctx.font = "30px 'Varela Round', sans-serif";
        const text = "Game Over";
        const metrics = this.ctx.measureText(text);
        const x = (this.canvas.width - metrics.width) / 2;
        const y = this.canvas.height / 2;
        this.ctx.fillText(text, x, y);
    };
}

window.onload = function () {
    const game = new SnakeGame();
    game.init();
};
