// First Dice Throw

var randomNumber1 = Math.round(Math.random() * 5 + 1);

document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");


// Second Dice Throw

var randomNumber2 = Math.round(Math.random() * 5 + 1);

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Determine and Display Winner

if (randomNumber1 === randomNumber2)
    document.querySelector("h1").innerHTML = "Draw!";
else if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
else
    document.querySelector("h1").innerHTML = "Player 2 Wins!";