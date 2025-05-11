const cards = [
    "🍎",
    "🍌",
    "🍇",
    "🍉",
    "🍊",
    "🍓",
    "🍍",
    "🍒",
    "🍎",
    "🍌",
    "🍇",
    "🍉",
    "🍊",
    "🍓",
    "🍍",
    "🍒",
];

let cardElements = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCards = 0;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    const board = document.getElementById("game-board");
    board.innerHTML = ""; // Limpa o tabuleiro ao reiniciar
    cardElements = [];
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    matchedCards = 0;
    shuffle(cards);
    cards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.cardValue = card;

        // Cria o conteúdo da carta (emoji)
        const content = document.createElement("span");
        content.classList.add("card-content");
        content.textContent = card;
        cardElement.appendChild(content);

        cardElement.addEventListener("click", flipCard);
        board.appendChild(cardElement);
        cardElements.push(cardElement);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add("flipped");
    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch =
        firstCard.dataset.cardValue === secondCard.dataset.cardValue;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedCards += 2;
    resetBoard();
    if (matchedCards === cards.length) {
        setTimeout(() => alert("Você ganhou!"), 500);
    }
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

document.addEventListener("DOMContentLoaded", createBoard);

// Adiciona funcionalidade ao botão de reinício
document.getElementById("restartButton").addEventListener("click", createBoard);
