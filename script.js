function comparador() {
    return Math.random() - 0.5;
}

function startGame() {
    const cardsN = prompt("Para jogar responda: Quantas cartas você quer na mesa? (Apenas números INTEIROS, PARES e de 4 a 14)");
    if (cardsN !== null) {
        if (cardsN < 4 || cardsN > 14) {
            alert("Insira apenas números de 4 a 14");
            startGame();
        } else if (cardsN % 2 !== 0) {
            alert("Insira apenas números INTEIROS e PARES");
            startGame();
        }
    } else {
        alert("Quando quiser jogar clique em OK.");
        startGame();
    }
    const cardsFront = ["assets/bobrossparrot.gif", "assets/explodyparrot.gif", "assets/fiestaparrot.gif", "assets/metalparrot.gif", "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"];
    const randCardsFront = cardsFront.sort(() => Math.random() - 0.5);
    const gameCards = [];
    for (let i = 0; i < cardsN / 2; i++) {
        gameCards.push(randCardsFront[i]);
        gameCards.push(randCardsFront[i]);
    }
    let randGameCards = gameCards.sort(() => Math.random() - 0.5);
    console.log(randGameCards);
    for (let i = 0; i < cardsN; i++) {
        document.querySelector("ul").innerHTML += `<li class="card" onclick="cardSelection(this)"><div class="back-card"><img src="assets/back.png"></div><div class="front-card"><img src="${randGameCards[i]}"></div></li>`;
    }
}

function cardSelection(card) {
    if (card.classList.value === "card") {
        card.classList.add(".selected1");
        console.log(card.classList);
    }
}