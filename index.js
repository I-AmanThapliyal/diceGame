if (performance.getEntriesByType("navigation")[0].type === "reload") {//we used this because we need the first page as "refresh page"
    rollDice();
}
//without the above code the game already starts

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;//creating random variable between 0 to 6
    var randomDiceImage = "images/dice" + randomNumber1 + ".png";//concatenating with images/dice
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}
