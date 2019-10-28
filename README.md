# Mystery-Crystals-Game

# How to run this app:
This is a game where the computer will pick a random number and you will have to click the crystals until
your score matches the random number. 

1. First you click on any crystals. Take note of the value of that crystal by looking at the new value in the
   total score. 
2. Continue to click on crystals and calculating their value by how much the new value changes. 
3. Figure out how to combine the values of the crystals to match the random number the computer picked. 
4. You can click on the crystals in any order and with as many clicks you need until you either go over the          random number or match the random number. 
5. If you match the number, you win.
6. If you go over the number, you lose. 
7. Then game resets back to a new random number and you can play again.

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
