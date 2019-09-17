// declare variables
var totalScore = 0;
var randomNumber = 0;
var wins = 0;
var losses = 0;
var randomCrystal1 = 0;
var randomCrystal2 = 0;
var randomCrystal3 = 0;
var randomCrystal4 = 0;
var justwonorlost = "";

function initializeGame() {
    // set variables
    randomCrystal1 = Math.floor(Math.random() * 12) + 1;
    randomCrystal2 = Math.floor(Math.random() * 12) + 1;
    randomCrystal3 = Math.floor(Math.random() * 12) + 1;
    randomCrystal4 = Math.floor(Math.random() * 12) + 1;

    randomNumber = Math.floor(Math.random() * 102) + 19;
    totalScore = 0;
    // display game status
    $("#jewelrandomnumber").text("Random number to match is: " + randomNumber);
    $("#jeweltotalscore").text(totalScore);

    if (justwonorlost === "") {
        $("#jewelscores").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    }
    if (justwonorlost === "won") {
        $("#jewelscores").html("<p>You won!</p><p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    }
    if (justwonorlost === "lost") {
        $("#jewelscores").html("<p>You lost!</p><p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    }
    justwonorlost = "";
}

$(".crystal-image").on("click", function (event) {

    // add the value of the crystal to totalscore
    if (event.target.id === "crystal1") {
        totalScore = totalScore + randomCrystal1;
    }
    if (event.target.id === "crystal2") {
        totalScore = totalScore + randomCrystal2;
    }
    if (event.target.id === "crystal3") {
        totalScore = totalScore + randomCrystal3;
    }
    if (event.target.id === "crystal4") {
        totalScore = totalScore + randomCrystal4;
    }

    // display totalscore

    $("#jeweltotalscore").text(totalScore);

    // compare totalscore to randomnumber

    if (totalScore < randomNumber) {        // keep playing
        return;
    };

    if (totalScore === randomNumber) {      // winner
        wins = wins + 1;
        justwonorlost = "won";
        initializeGame();
    };

    if (totalScore > randomNumber) {        // loser
        losses = losses + 1;
        justwonorlost = "lost";
        initializeGame();
    };

})

initializeGame();