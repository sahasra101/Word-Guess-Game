document.onkeyup = function (event) {
    // Array of words w vacation hotspot theme
    var words = ["rome", "paris", "newyorkcity", "miami", "orlando", "barcelona", "london", "venice", "dubai", "cancun", "tahiti", "maui", "borabora", "yosemite", "grandcanyon", "machupicchu", "amalficoast", "costarica", "greatbarrierreef", "santorini", "yellowstone", "india"];

    console.log(words[0], words[20]); //works

    // variables needed for guesses and to keep track of stats
    var wins = 0;
    var losses = 0;
    var word = ""
    var guessedLetter = "";
    var numbGuessesWrong = 0;
    var numbGuessesLeft = 10;
    var incorrectArray = [];
    var blankWord = []; // blank word array
    var playagain = "";


    //Gaming loop
    //choose random word
    //create unknown word array
    //get user guesses
    //check user guesses
    //if correct replace letter index on unknown array with letter
    //if incorrect: add letter to incorrectArray and reduce numbGuessesLeft
    // if user numbGuessesLeft = 0 then player losses game 
    // if user guesses unknown then congrads you win? would you like to play again
    // keep tally of wins and losses        

    //Gaming loop:
    var gameloop = function () {
        //generate random work from array
        word = words[Math.floor(Math.random() * words.length)];
        console.log("random word: "+word) //check for success

        // generate blank Word Array
        for (var i = 0; i < word.length; i++) {
            blankWord[i] = "*"
        }
        console.log(blankWord.join(" ")) //check for success
        document.getElementById("blankWordTemplate").textContent = blankWord.join(" ");

        //obtain userinput and confirm proper input of letter

        guessedLetter = document.getElementById("yourguesses");

        document.onkeyup = function (event) {
            yourguesses.textContent = event.key;
          };

        //document.onkeyup = function uniKeyCode(event) {
        //    var k = event.uniKeyCode;
        //    console.log(k);

            //evaluate for letter
         //   if (k > 90) || (k < 57) {
         //       alert("Incorrect key! Please pick a letter from a to z!")
         //   } else {
         //       guessedLetter = event.key.toLowerCase();
         //       console.log("userGuess: " + guessedLetter);
         //   }
        }

        //comparing guess with word
        var letterIsMatched = false; //initially

        for (var l = 0; l < word.length; l++) {
            if (word[l] === guessedLetter) {
                //type the letter into the word index
                blankWord[l] = guessedLetter;
                letterIsMatched = true;
            }

            if (!letterIsMatched) {
                if (incorrectArray.includes(guessedLetter)) {
                    alert("You have already guessed this letter!");
                } else {
                    incorrectArray.push(guessedLetter);
                    document.getElementById("badguesses").innerHTML = ("Incorrect letter guesses: " + incorrectArray);
                    console.log("incorrect guesses: " + incorrectArray);
                    document.getElementById("guessesLeft").textContent = numbGuessesLeft--;
                    console.log("guesses left: " + numbGuessesLeft);
                }
            }

            if (numbGuessesLeft = 1) {
                alert("You only have ONE guess left!!");
            }

            if (numbGuessesLeft = 0) {
                alert("You have no more guesses!");
                alert("Please play again!");
                losses++;
                document.getElementById("plosses").textContent = "Losses: " + losses;
                playagain = prompt("Would you like to play again? y(yes) or n(no");
                if (playagain === "y") {
                    gameloop();
                }
                else if (playagain === "n") {
                    alert("Thank you and have a nice day!!");
                    break;
                }
            }

            var done = blankWord.includes("*");
            console.log(done);
            if (done !== true) {
                wins++;
                document.getElementById("pwins").textContent = "Wins: " + wins;
                playagain = prompt("Great Job! You Win!!! Would you like to play again? Y for yes / N for no");
                if (playagain == "y") {
                    gameloop();
                }
                if (playagain == "n") {
                    alert("Thank you for playing! Have a great vacation!");
                    break;
                }
            }

        }
    }    
gameloop();
