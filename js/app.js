// Generate a random number between 1 and 10
var randomNumber = Math.floor((Math.random() * 10) + 1);
var guess = 0;
var guessRmaining = 10;
var guessMade = 0;
var gameStatus;
var winner = false;

// Input
var input = document.querySelector("#guessField");
var output = document.querySelector("#submitGuess")

// Button
var btn = document.querySelector("button");

// Methods
btn.addEventListener("click", onMouseClick);

function onMouseClick() {
	guess = parseInt(input.value);

	guessRmaining--;
	guessMade++;
	gameStatus = "You have " + guessRmaining +
		" guesses ramaining...";

	// Check if guess is higher
	if (guess > randomNumber) {
		output.innerHTML = "The number you entered is too high. Guess again!</br> " + gameStatus;
		if (guessRmaining < 1) {
			gameEnd();
		}
		// Otherwise, check if guess is too low
	} else if (guess < randomNumber) {
		output.innerHTML = "The number you entered is too low. Guess again!</br> " + gameStatus;
		if (guessRmaining < 1) {
			gameEnd();
		}
	} else if (guess === randomNumber) {
		winner = true;
		gameEnd();
	}
}

function gameEnd() {
	if (winner) {
		output.innerHTML = "Hooray...you got it right!"
	} else {
		output.innerHTML = "The number was " + randomNumber + "</br>Bad luck...TRY AGAIN"
	}
}