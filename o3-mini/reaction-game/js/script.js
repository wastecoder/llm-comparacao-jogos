document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById("gameArea");
    const resultDisplay = document.getElementById("result");
    const restartButton = document.getElementById("restartButton");
    let startTime, endTime;
    let readyToClick = false; // variável para controlar o estado de atirar

    function startGame() {
        // Restaura o estado do jogo
        document.body.style.backgroundColor = "#005eff";
        gameArea.classList.remove("hidden");
        resultDisplay.classList.add("hidden");
        // Configura a área de clique
        gameArea.style.backgroundColor = "#005eff";
        readyToClick = false;
        setTimeout(changeColor, Math.random() * 5000 + 1000); // delay entre 1s e 6s
        console.log("startGame: iniciando jogo, aguardando mudança de cor...");
    }

    function changeColor() {
        console.log(
            "changeColor: alterando cor para indicar que é hora de atirar"
        );
        gameArea.style.backgroundColor = "#cd0000"; // cor alterada para vermelho
        startTime = new Date().getTime();
        readyToClick = true; // já está pronto para clicar
    }

    gameArea.addEventListener("click", () => {
        if (readyToClick) {
            // verifica se já é hora de atirar
            endTime = new Date().getTime();
            const reactionTime = endTime - startTime;
            document.getElementById(
                "reactionTime"
            ).textContent = `${reactionTime} ms`;
            restartButton.style.display = "block";
            // Esconde a área de clique e exibe o quadrado de resultado
            gameArea.classList.add("hidden");
            resultDisplay.classList.remove("hidden");
            // Muda o fundo geral para verde
            document.body.style.backgroundColor = "#006400";
            readyToClick = false;
            console.log("Clique registrado, tempo de reação calculado.");
        }
    });

    restartButton.addEventListener("click", startGame);

    startGame(); // inicia o jogo
});
