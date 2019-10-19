// Array of words w vacation hotspot theme
var words = ["rome", "paris", "newyorkcity", "miami", "orlando", "barcelona", "london", "venice", "dubai", "cancun", "tahiti", "maui", "borabora", "yosemite", "grandcanyon", "machupicchu", "amalficoast", "costarica", "greatbarrierreef", "santorini", "yellowstone", "india"];

console.log(words[0], words[20]); //works

// variables needed for guesses and to keep track of stats
var wins = 0;
var losses = 0;
var numbGuessesWrong = 0;
var numbGuessesLeft = 10;
var incorrectArray = [];
var blankWord = []; // blank word array


// Press any key to start javascript
document.onkeyup = function (event) {

    //Gaming loop
    //choose random word
    //create unknown word array
    //get user guesses
    //check user guesses
    //if correct replace letter index on unknown array with letter
    //if incorrect: add letter to incorrectArray and reduce numbGuessesLeft
    // if user numbGuessesLeft = 0 then player losses game 
    ask if want to play again
    // if user guesses unknown then congrads you win? would you like to play again
    // keep tally of wins and losses        

    //Gaming loop:
    var gameloop = function() {
        //generate random work from array
        var word = words[Math.floor(Math.random() * words.length)];
        console.log(word) //check for success

        // generate blank Word Array
        for (var i = 0; i < word.length; i++) {
            blankWord[i] = "*"
        }
        console.log(blankWord.join(" ")) //check for success
        document.getElementById("blankWordTemplate").textContent = blankWord.join(" ");

        //obtain userinput and confirm proper input of letter

        document.onkeyup = function uniKeyCode(event) {
            var k = event.keyCode;

            //evaluate for letter
           if (k>90) || (k<57) {
                alert("Incorrect key! Please pick a letter from a to z!")
           } else {
               var guessedLetter = event.key.toLowerCase()
               console.log("userGuess: " guessedLetter)

           }               

        }

        //   alert("Pick a letter you think is in the unknown vacation hotspot!"); // tell user to pick letter.

        var guessedLetter = prompt("Pick a letter you think is in the unknown vacation hotspot!");

        //  create array of guessed letters to keep track of guesses
        var guessedLetters = []

        // for (var j = 0; j < numbGuesses; j++)
        // guessedLetters[j] = "event.key" + ", "
        // document.onkeyup = function (event) {
        // guessedLetter.textContent = event.key;
        //    };

        // if guessedLetter == word[loop through all indices] {
        // letter replaces underscore in that index
        // elso the letter inputed placed into array of guessed letter
        // else numbGuesses increased by one
        // elso numberGuessesLeft reduced by one

        // when numberGuessesLeft = 0 then prompt("Sorry, you have no more guesses.  Please play again.")


        var letterIsMatched = false;

        for (var l = 0; l < word.length; l++) {
            if (word[l] === guessedLetter) {
                //type the letter into the word index
                //guessedLetter = blankAnswer[l]
                blankWord[l] = guessedLetter;
                letterIsMatched = true;
            }

        }
        if (!letterIsMatched) {

            incorrectArray.push(guessedLetter);
            document.getElementById("guessesLeft").textContent = numbGuessesLeft--;
        }
        document.getElementById("blankWordTemplate").textContent = blankWord.join(" ");
        document.getElementById("badguesses").innerHTML = "Incorrect letter guesses: " + incorrectArray;

        console.log("Incorrect letter guesses: " + incorrectArray)

        var done = blankWord.includes("*");
        console.log(done);

        if (done !== true) {
            wins++
            document.getElementById("pwins").textContent = "Wins: " + wins;
            document.getElementById("plosses").textContent = "Losses: " + losses;

            prompt("Great Job! You Win!!! Would you like to play again? Y for yes / N for no");
            var continueplaying = event.key
            if (continueplaying == "y") {
                refresh()
            }
            if (continueplaying == "n") {
                alert("Thank you for playing! Have a great vacation!");
            }
        }

    }
}