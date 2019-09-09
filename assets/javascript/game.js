window.onload = function () {
    gameMechanics();
};
var guessRemain = 10;
var wins = 0;
var words = ["beatles", "bleachers", "santana", "killers", "weezer","offspring","queen"];
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
    document.onkeyup = function () {
        var pressedKey = event.key
        var once = false;
        for ( var j = 0; j < chooseWord.length; j++) {
            console.log("start for");
            if (chooseWord[j] === pressedKey) {
                once = true;
                blankSpace[j] = pressedKey
                document.getElementById("space").innerHTML = blankSpace.join("");
                console.log("if");
            }
        }
        if (once === false) {
            guessRemain--;
            document.getElementById("lettersGuessed").innerHTML += pressedKey;
            document.getElementById("guessRemain").innerHTML = guessRemain;
        }
        
            //Lose Condition
            if (guessRemain === 0) {
                alert("You Lose. Try Again");
                location.reload();
            }
            if (blankSpace.join("") === chooseWord) {
                wins++
                document.getElementById("wins").innerHTML = wins;
                alert("You Win")
                gameMechanics();
                newguessRemain =10;
                document.getElementById("guessRemain").innerHTML = newguessRemain;

            }
            
    }
};

