# Mystery-Crystals-Game
This is a game where the computer will pick a random number for you to match. 
You click on the crystals, which each have a different random value, and you have to figure out how to combine the values of those to match the random number the computer picked. 
The values of the crystals are hidden from you until you click on it. You can click on the crystals in any order and with as many clicks you need until you either go over the number or match the number. You have to figure out the values of each crystal based on the total score. 
If you match the number, you win.
If you go over the number, you lose. 
Then game resets back to a new random number and you can play again.

**Motivation:** Embrace the math functions in JavaScript. 

**Code Style:** Tab

**Tech/Framework:** HTML5, CSS3, JavaScript, JQuery

**Features:** beveled buttons, reset, updates wins/losses for multiple games

**Code Example:**
```javascript
    //display game status
    $("#jewelrandomnumber").text("Random number to match is: " + randomNumber);
    $("#jeweltotalscore").text(totalScore);

    if (justwonorlost === "") {
        $("#jewelscores").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    }
    if (justwonorlost === "won") {
        $("#jewelscores").html("<p>You won!<br />Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    }
    if (justwonorlost === "lost") {
        $("#jewelscores").html("<p>You lost!<br />Wins: " + wins + "</p><p>Losses: " + losses + "</p>");
    }
    justwonorlost = ""; 
```
**Screenshot:**

 ![Crystals Game](https://github.com/looksue/Crystals-Game/blob/master/assets/images/screenshot.png)

**Link to Project:** https://looksue.github.io/Crystals-Game/
