window.onload = function () {
    gameMechanics();
};
var guessRemain = 10;
var wins = 0;
var words = ["ryan", "ryan", "ryan", "ryan"];
var chooseWord = words[Math.floor(Math.random() * words.length)];
var blankSpace = [];
//Function picks word then displays length in dashes
var gameMechanics = function () {
    for (var i = 0; i < chooseWord.length; i++) {
        var x = chooseWord.charAt(i);
        if (x === "") {
            blankSpace += x;
        }
        else {
            blankSpace.push(" _ ")
        }
    }
    document.getElementById("space").innerHTML = blankSpace.join("");
    document.getElementById("guessRemain").innerHTML = guessRemain;


    //Function that takes users input and displays it on screen
    document.onkeypress = function () {
        var pressedKey = event.key
        var once = false;
        for ( var j = 0; j < chooseWord.length; j++) {
           var wordSplice = blankSpace.splice(j,j,chooseWord[j]);
           var wordJoin = wordSplice.join(blankSpace);
           var wordFinal = wordJoin;
            if (chooseWord[j] === pressedKey) {
                document.getElementById("space").innerHTML = wordFinal;
                console.log(wordPosition);
            }
           else  if (once === false) {
                once = true;
                guessRemain--;
                document.getElementById("lettersGuessed").innerHTML += pressedKey;
                document.getElementById("guessRemain").innerHTML = guessRemain;
            
            }
        }
        
            //Lose Condition
            if (guessRemain === 0) {
                alert("You Lose. Try Again");
                location.reload();
            }
    }
};


