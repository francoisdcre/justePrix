var lower;
var higher;
var guess;
var randomNumber;
var attemps = 0;
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function selectNumber() {
    lower = document.getElementById("low").value;
    higher = document.getElementById("high").value;
    randomNumber = getRandomNumber(lower, higher);
}

function gameEnd() {
    document.getElementById("gameOver").style.display = "flex"
    var messageWin = document.getElementById("gameEnd")
    if (guess === randomNumber) {
        messageWin.innerText = "C'est gagné ! Vous avez réussi en " + (attemps + 1) + " essais.";
    } else {
        document.getElementById("gameEnd").innerText = "C'est perdu !"
    }
}

function restart() {
    location.reload();
}

function compareNumber() {
    if (attemps < 12) {
        var statut = document.getElementById("statut");
        guess = document.getElementById("guessNum").value;
        guess = guess * 1;
        console.log(attemps)
        if (guess < randomNumber) {
            statut.innerText = "C'est plus !";
        } else if (guess > randomNumber) {
            statut.innerText = "C'est moins !";
        } else {
            statut.innerText = "C'est gagné !";
            gameEnd();
        }
        attemps += 1;
    } else {
        gameEnd()
    }
    return
}