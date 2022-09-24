const refresh = document.querySelector("button");
const dice1 = document.querySelector(".dice__img-1");
const dice2 = document.querySelector(".dice__img-2");
const result = document.querySelector("span");

refresh.addEventListener("click", () => {
    const randomNumber1 = Math.round(Math.random() * 6);
    const randomNumber2 = Math.round(Math.random() * 6);

if (randomNumber1 > randomNumber2) {
    result.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    result.innerHTML = "Player 2 Wins!";
} else if (randomNumber1 === randomNumber2) {
    result.innerHTML = "Tied!";
} else {
    result.innerHTML = "";
}

    switch (randomNumber1) {
        case 1:
            dice1.setAttribute("src", "assets/img/dice1.png");
            break;
        case 2:
            dice1.setAttribute("src", "assets/img/dice2.png");
            break;
        case 3:
            dice1.setAttribute("src", "assets/img/dice3.png");
            break;
        case 4:
            dice1.setAttribute("src", "assets/img/dice4.png");
            break;
        case 5:
            dice1.setAttribute("src", "assets/img/dice5.png");
            break;
        case 6:
            dice1.setAttribute("src", "assets/img/dice6.png");
            break;
    }

    switch (randomNumber2) {
        case 1:
            dice2.setAttribute("src", "assets/img/dice1.png");
            break;
        case 2:
            dice2.setAttribute("src", "assets/img/dice2.png");
            break;
        case 3:
            dice2.setAttribute("src", "assets/img/dice3.png");
            break;
        case 4:
            dice2.setAttribute("src", "assets/img/dice4.png");
            break;
        case 5:
            dice2.setAttribute("src", "assets/img/dice5.png");
            break;
        case 6:
            dice2.setAttribute("src", "assets/img/dice6.png");
            break;
    }
});

