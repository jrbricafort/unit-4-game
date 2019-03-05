//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes


// Chooses a number between 19 - 120.
var computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(computerChoice);

// variables for wins, losses, and players score
var wins = 0;
var losses = 0; 
var playerScore = 0;

// This will give each crystal a random hidden value between 1 - 12. The Math.floor

var crystalValue = [
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1];

console.log(crystalValue);


///////////////////         CRYSTAL ONE         ///////////////////
// For each iteration, we will create an imageCrystal
// var imageCrystal = ["images/green.png","images/orange.png","images/yellow.png", "images/red gem.png"];
var imageCrystalOne = $("<img>");

// First each crystal will be given the class ".crystal-image".
// This will allow the CSS to take effect.
imageCrystalOne.addClass("crystal-image");

// Each imageCrystal will be given a src link to the crystal image
imageCrystalOne.attr("src", "assets/images/green.png");

// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
imageCrystalOne.attr("data-crystalvalue", crystalValue[0]);

// Lastly, each crystal image (with all it classes and attributes) will get added to the page.
$("#crystals").append(imageCrystalOne);


///////////////////         CRYSTAL TWO         ///////////////////
var imageCrystalOne = $("<img>");
imageCrystalOne.addClass("crystal-image");
imageCrystalOne.attr("src", "assets/images/orange.png");
imageCrystalOne.attr("data-crystalvalue", crystalValue[1]);
$("#crystals").append(imageCrystalOne);


///////////////////         CRYSTAL THREE         ///////////////////
var imageCrystalOne = $("<img>");
imageCrystalOne.addClass("crystal-image");
imageCrystalOne.attr("src", "assets/images/yellow.png");
imageCrystalOne.attr("data-crystalvalue", crystalValue[2]);
$("#crystals").append(imageCrystalOne);


///////////////////         CRYSTAL FOUR         ///////////////////
var imageCrystalOne = $("<img>");
imageCrystalOne.addClass("crystal-image");
imageCrystalOne.attr("src", "assets/images/red gem.png");
imageCrystalOne.attr("data-crystalvalue", crystalValue[3]);
$("#crystals").append(imageCrystalOne);

$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    playerScore += crystalValue;
    console.log(playerScore);

    if (playerScore === computerChoice) {
        alert("You win!");
        wins++;
    }

    else if (playerScore >= computerChoice) {
        alert("You guessed " + playerScore + ", you were over by " + (playerScore - computerChoice) + ".");
        losses++;
    }

    var computerChoiceJS = document.getElementById("computerChoiceHTML");
    var newScoreJS = document.getElementById("newScoreHTML");
    var winsJS = document.getElementById("winsHTML");
    var lossesJS = document.getElementById("lossesHTML");

    computerChoiceJS.textContent = "Computer Choice: " + computerChoice;
    newScoreJS.textContent = "Current Score: " + playerScore;
    winsJS.textContent = "Wins: " + wins;
    lossesJS.textContent = "Losses: " + losses;
})

