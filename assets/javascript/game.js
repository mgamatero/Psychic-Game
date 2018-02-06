  
  
    
    /*Variables************************************************ */
    var totalWin = 0
    var totalLoss = 0
    var guessesLeft = 9;
    var letterAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "s", "t", "u", "v", "w", "x", "y", "z"]
    var computerLetter = ""
    var guessArray = []
    var userGuess = ""
    /* ********************************************************* */

    // Functions************************************************
    // Restarts game values
    function reinitializeGame(myArr) {
        myArr.length = 0
        guessesLeft = 9
        computerLetter = letterAlphabet[Math.floor(Math.random() * letterAlphabet.length)]
    }
    // ***********************************************************


    // computer's lettr is the value we are trying to guess
    computerLetter = letterAlphabet[Math.floor(Math.random() * letterAlphabet.length)]

    //this gets user's keyboard input
    document.onkeyup = function (event) {
        userGuess = event.key
        userGuess = userGuess.toLowerCase() //set to lowercase

        if (letterAlphabet.includes(userGuess)) {   //if userGuess is valid
            guessArray.push(userGuess)
            guessesLeft--

            // HTML output 
            var updatedScore = "<h3>Wins: " + totalWin + "</h3>" +
                "<br>" +
                "<h3>Losses: " + totalLoss + "</h3>" +
                "<br>" +
                "<h3>Guesses Left: " + guessesLeft + "</h3>" +
                "<br>" +
                "<h3>Your Guesses so far: " + guessArray + "</h3>"

            document.getElementById("HTML").innerHTML = updatedScore


            //logic portion
            if (userGuess === computerLetter) {
                guessArray.push(userGuess)
                totalWin++
                document.getElementById("HTML").innerHTML = updatedScore + "<br><H1>WINNER!!! Letter =" + computerLetter + "</H1>"
                reinitializeGame(guessArray)
            }

            else if (guessesLeft <= 0) {
                guessArray.push(userGuess)
                totalLoss++
                document.getElementById("HTML").innerHTML = updatedScore + "<br><H1>LOSER!!! Letter =" + computerLetter + "</H1>"
                reinitializeGame(guessArray)
            }
        }

        else {
            alert("Please pick letters only!")
        }
    }