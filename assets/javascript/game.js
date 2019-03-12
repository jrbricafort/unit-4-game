// Chooses a number between 19 - 120.
var computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// variables for wins, losses, and players score
var wins = 0;
var losses = 0;
var playerScore = 0;


// This will give each crystal a random hidden value between 1 - 12
var crystalValue = [
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1,
    Math.floor(Math.random() * 12) + 1]

console.log("Computer wants: " + computerChoice);
console.log("Crystals are worth: " + crystalValue);


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
imageCrystalFour.attr("class", "crystal-image");

imageCrystalFour.attr("src", "assets/images/red gem.png");
imageCrystalFour.attr("data-crystalvalue", crystalValue[3]);
$("#crystals").append(imageCrystalFour);
console.log(this)

// This code runs whenever a crystal is clicked
$(".crystal-image").on("click", function () {

    // Converts the crystalValue to an integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    playerScore += crystalValue;
    console.log(playerScore);

    // Win condition
    if (playerScore === computerChoice) {
        alert("Congratulations! Play again?");
        wins++;
        playerScore = 0;
        computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        // $("#crystals").empty();

        crystalValue = [
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1];

        imageCrystalOne.attr("data-crystalvalue", crystalValue[0]);
        imageCrystalTwo.attr("data-crystalvalue", crystalValue[1]);
        imageCrystalThree.attr("data-crystalvalue", crystalValue[2]);
        imageCrystalFour.attr("data-crystalvalue", crystalValue[3]);

        console.log("Computer wants: " + computerChoice);
        console.log("Crystals are worth: " + crystalValue);

    }

    // Loss condition
    else if (playerScore > computerChoice) {
        alert("You guessed " + playerScore + ", you were over by " + (playerScore - computerChoice) + ". Try again?");
        losses++;
        playerScore = 0;
        computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

        crystalValue = [
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1,
            Math.floor(Math.random() * 12) + 1];
        imageCrystalOne.attr("data-crystalvalue", crystalValue[0]);
        imageCrystalTwo.attr("data-crystalvalue", crystalValue[1]);
        imageCrystalThree.attr("data-crystalvalue", crystalValue[2]);
        imageCrystalFour.attr("data-crystalvalue", crystalValue[3]);

        console.log("Computer wants: " + computerChoice);
        console.log("Crystals are worth: " + crystalValue);
    }

    var computerChoiceJS = $("#computerChoiceHTML");
    var newScoreJS = $("#newScoreHTML");
    var winsJS = $("#winsHTML");
    var lossesJS = $("#lossesHTML");

    computerChoiceJS.textContent = "Computer Choice: " + computerChoice;
    newScoreJS.textContent = "Current Score: " + playerScore;
    winsJS.textContent = "Wins: " + wins;
    lossesJS.textContent = "Losses: " + losses;
})


