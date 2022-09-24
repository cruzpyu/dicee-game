const refresh = document.querySelector("button");
const dice1 = document.querySelector(".dice__img-1");
const dice2 = document.querySelector(".dice__img-2");
const result = document.querySelector("span");

refresh.addEventListener("click", () => {
  const randomNumber1 = Math.round(Math.random() * 5 + 1);
  const randomNumber2 = Math.round(Math.random() * 5 + 1);

  document
    .querySelectorAll("img")[0]
    .setAttribute("src", "./assets/img/dice" + randomNumber1 + ".png");
  document
    .querySelectorAll("img")[1]
    .setAttribute("src", "./assets/img/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    result.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    result.innerHTML = "Player 2 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    result.innerHTML = "Tied!";
  } else {
    result.innerHTML = "";
  }
});
