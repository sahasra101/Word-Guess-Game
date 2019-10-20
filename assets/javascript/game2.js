// Array of words w vacation hotspot theme
var words = ["rome", "paris", "newyorkcity", "miami", "orlando", "barcelona", "london", "venice", "dubai", "cancun", "tahiti", "maui", "borabora", "yosemite", "grandcanyon", "machupicchu", "amalficoast", "costarica", "greatbarrierreef", "santorini", "yellowstone", "india"];

// variables needed for guesses and to keep track of stats
var wins = 0;
var losses = 0;
var word = "";
var guessedLetter = "";
var numbGuessesWrong = 0;
var numbGuessesLeft = 10;
var incorrectArray = [];
var blankWord = []; // blank word array
var playagain = "";

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    prepGame();
}

function prepGame() {
    console.log(`We are inside the function startGame`);
    document.getElementById("guessesLeft").textContent = numbGuessesLeft;
    document.getElementById("plosses").textContent = losses;
    document.getElementById("pwins").textContent = wins;
    
    pickWord();
}

function pickWord() {
    console.log(`We are inside the function to pick a random word`);
    word = words[Math.floor(Math.random() * words.length)];
    console.log("random word picked: " + word) //check for success
    makeBlanks(word);
}

function makeBlanks(word) {
    console.log(`Inside the function to show Blanks for: ${word}`);
    // Makes the blankWord array
    for (var i = 0; i < word.length; i++) {
        blankWord[i] = "*"
    }
    showBlanks(blankWord);
}

function showBlanks(word){
    // Display blankWord array on the screen
    document.getElementById("blankWordTemplate").textContent = word.join(" ");
    playGame(word);
}

function playGame(blankWord) {
    console.log(`Inside function to play game`);
    document.onkeyup = function uniKeyCode(event) {
        var x = event.keyCode;
        if (x > 90 || x < 65) {
            alert("You pressed an incorrect key. Please choose a letter from a to z.");
        } else {
            var guessedLetter = event.key.toLowerCase();
            displayGuessedLetter(guessedLetter);
            checkLetterForMatch(guessedLetter, blankWord, incorrectArray);
        }
    }
}

function displayGuessedLetter(letter) {
    console.log(`Inside function to display guessed letter: ${letter}`);
    document.getElementById("guessedletter").textContent = letter;
}

function checkLetterForMatch(letter, blankArray) {
    console.log(`Inside function to check if the letter ${letter} matches a letter from the random word`);
    //comparing guess with word
    var letterIsMatched = false; //initially

    //looping through each letter of the word
    for (var l = 0; l < word.length; l++) {
        if (word[l] === letter) {
            letterIsMatched = true;
            blankArray[l] = letter;
            showBlanks(blankArray);
        } 
    }

    if (!letterIsMatched) {
        console.log(`Below is incorrectArray:`);
        console.log(incorrectArray);
        incorrectArray.push(letter);
        displayIncorrectLetters(incorrectArray);
        wrongLetter();
    }
}

function displayIncorrectLetters(incorrectArray){
    document.getElementById("badguesses").innerHTML = incorrectArray;
}


function wrongLetter(){
    numbGuessesLeft--;
    if (numbGuessesLeft === 0){
        loseGame();
    } else {
    document.getElementById("guessesLeft").textContent = numbGuessesLeft;
    }
}

function loseGame() {
    losses++;
    incorrectArray = [];
    numbGuessesLeft = 10;
    alert(`You have lost.`);
    prepGame();
}