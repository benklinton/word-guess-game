window.onload = function () {
    gameMechanics();
};
var guessRemain = 10;
var wins = 0;
var words = ["ryan", "ryan", "ryan", "ryan"];
var chooseWord = words[Math.floor(Math.random() * words.length)];

//Function picks word then displays length in dashes
var gameMechanics = function () {
    

    var blankSpace = [];
    for (var i = 0; i < chooseWord.length; i++) {
        var x = chooseWord.charAt(i);
        if (x === "") {
            blankSpace += x;
        }
        else {
            blankSpace.push= "_0"
        }
    }
    document.getElementById("space").innerHTML = blankSpace;
    document.getElementById("guessRemain").innerHTML = guessRemain;


    //Function that takes users input and displays it on screen
    document.onkeypress = function () {
        var pressedKey = event.key
        var once = false;
        for ( var j = 0; j < chooseWord.length; j++) {
            
            console.log(chooseWord[j]);
            if (chooseWord[j] === pressedKey) {
                document.getElementById("space").innerHTML += pressedKey;
            }
           else if (once === false) {
                once = true;
                guessRemain--;
                document.getElementById("lettersGuessed").innerHTML += pressedKey;
                document.getElementById("guessRemain").innerHTML = guessRemain;
            
            }
            console.log(once);
        }
        
            //Lose Condition
            if (guessRemain === -1) {
                alert("You Lose. Try Again");
                location.reload();
            }
        }
};
