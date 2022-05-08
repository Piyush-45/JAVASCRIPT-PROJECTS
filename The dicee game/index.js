var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.pnj - dice6.pnj

var randomImageSource = "images/" + randomDiceImage; // images/ dice1-- dice2.pnj

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// for second dice
var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/ dice1-- dice2.pnj

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins"
}
else if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML = "match tied"
}
else{
    document.querySelector("h1").innerHTML = "player 2 wins"
}