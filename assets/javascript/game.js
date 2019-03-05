//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// Chooses a number between 19 - 120.
var computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
console.log(computerChoice);

// variables for wins, losses, and players score
var wins = 0;
var losses = 0;
var playerScore = 0;


// This will give each crystal a random hidden value between 1 - 12

var crystalValue = [
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1];

function initialize() {
    computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    crystalValue[0] = Math.floor(Math.random() * 12) + 1;
    crystalValue[1] = Math.floor(Math.random() * 12) + 1;
    crystalValue[2] = Math.floor(Math.random() * 12) + 1;
    crystalValue[3] = Math.floor(Math.random() * 12) + 1;
}

initialize()
console.log(crystalValue);

///////////////////         CRYSTAL ONE         ///////////////////
// Each crystal will be named imageCrystal#
var imageCrystalOne = $("<img>");

// Each crystal will be given the class ".crystal-image" so it can be referenced via CSS
imageCrystalOne.addClass("crystal-image");

// Each imageCrystal will be assigned the image
imageCrystalOne.attr("src", "assets/images/green.png");

// Each imageCrystal will be given a data attribute called data-crystalValue with an array value.
imageCrystalOne.attr("data-crystalvalue", crystalValue[0]);

// Each crystal image will get added to the page.
$("#crystals").append(imageCrystalOne);


///////////////////         CRYSTAL TWO         ///////////////////
var imageCrystalTwo = $("<img>");
imageCrystalTwo.addClass("crystal-image");
imageCrystalTwo.attr("src", "assets/images/orange.png");
imageCrystalTwo.attr("data-crystalvalue", crystalValue[1]);
$("#crystals").append(imageCrystalTwo);


///////////////////         CRYSTAL THREE         ///////////////////
var imageCrystalThree = $("<img>");
imageCrystalThree.addClass("crystal-image");
imageCrystalThree.attr("src", "assets/images/yellow.png");
imageCrystalThree.attr("data-crystalvalue", crystalValue[2]);
$("#crystals").append(imageCrystalThree);


///////////////////         CRYSTAL FOUR         ///////////////////
var imageCrystalFour = $("<img>");
imageCrystalFour.addClass("crystal-image");
imageCrystalFour.attr("src", "assets/images/red gem.png");
imageCrystalFour.attr("data-crystalvalue", crystalValue[3]);
$("#crystals").append(imageCrystalFour);


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
        playerScore = 0;
        computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        crystalValue = Math.floor(Math.random() * 12) + 1;
    }

    else if (playerScore >= computerChoice) {
        alert("You guessed " + playerScore + ", you were over by " + (playerScore - computerChoice) + ".");
        losses++;
        playerScore = 0;
        computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        crystalValue = Math.floor(Math.random() * 12) + 1;
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


