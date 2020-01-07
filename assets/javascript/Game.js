var alalphebet = ["a","b","c","D","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var left = 50;
var guesses = 50;
var guessessofar = [];
var psychicletters;


var newletter = function() {
    psychicletters = alalphebet[Math.floor(math.random() * alalphebet.length)];
    };

    var sofar = function() {
        document.getElementById("Guesses").innerHTML = "Your Guesses " + guessessofar.join(",");
    };

    var guessesleft = function() {
        document.getElementById("left").innerHTML = "Guesses left:" + left;
    };

    var newGame = function(){
        guessessofar = [];
        left = 50;
        newletter();
        guessesleft();
        sofar();
        
        
    }
    document.onkeyup = function(event) {
        var userguess = event.key;

        left--;
        guessessofar.push(userguess);
        sofar();
        guessesleft();
        if (left > 0) {
            if (userguess == psychicletters) {
                wins++;
                document.getElementById("Wins").innerHTML = "Wins" + wins;
                newGame();
            }
        }
        else if (left ==0) {
            losses++;
            document.getElementById("losses").innerHTML = "losses" + losses;
            newGame();
        }
    };