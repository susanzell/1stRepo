// Guess a Number Game created while learning Javascript with Codeacademy


var computerNumber = Math.floor(Math.random()*10+1);
var playerNumber = 0;
var guesses = 0;
console.log(computerNumber);
do {
    var playerNumber = prompt("I'm thinking of a number 1-10, and I won't stop until you tell me what it is. Do your best, puny human:", playerNumber);
    guesses++;
    console.log(playerNumber);
    if (isNaN(playerNumber)) {

            alert("That's a string, not a number! Learn the difference!");
        }
    else if (playerNumber == computerNumber) {
        
            alert("You guessed the number in " + guesses + " attempt/s but you still lost the game.");
            computerNumber = 0;
        }
    
    else if ((playerNumber > computerNumber) && (playerNumber <= 10)) {
            alert("Lower...");
        }
    else if ((playerNumber < computerNumber) && (playerNumber > 0)) {
            alert("Higher...");
        }
    else if (playerNumber == -9) {
            alert("....that's not what I meant, but you are correct. 1 minus 10 is -9. You win this round, meatbag!");
            computerNumber = 0;
        }
    else {
            alert("Are you even trying?! You lose.");
            computerNumber = 0;
        } 
    } while (computerNumber > 0);
    
            
    