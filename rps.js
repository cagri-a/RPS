
//Computer makes it choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

//Score variables
let computerSc = 1;
let yourSc = 1;

//Variables that i used as an argument
let s1 = 'rock';
let s2 = 'paper';
let s3 = 'scissors';

//DOM assignments
let youSlt = document.querySelector("#youSelect");
let compSlt = document.querySelector("#compSelect");


const whoWin = document.querySelector("#whoWins")

let round = document.querySelector("#playRound");

const yourDv = document.querySelector("#playerDiv");
const computerDv = document.querySelector("#computerDiv");

const yourScore = document.querySelector('#playerSpn');
const computerScore = document.querySelector('#computerSpn');


//Buttons
const rockSl = document.querySelector('#rockBtn');

rockSl.addEventListener("click", function () {
    game_mech(s1, null, null);
});


const paperSl = document.querySelector('#paperBtn');

paperSl.addEventListener("click", function () {
    game_mech(null, s2, null);
});


const scissorsSl = document.querySelector('#scissorsBtn');

scissorsSl.addEventListener("click", function () {
    game_mech(null, null, s3);
});


let reStart = document.querySelector(".restart");

//Function that runs the game
function game_mech(a, b, c) {

    let computerSelection = computerPlay();

   if (a && computerSelection == 'scissors') {
        youSlt.textContent = "YOU:" + " " + "✊🏻";
        compSlt.textContent = "ROBOT:" + " " + "✌🏻";
        whoWin.textContent = "You won!";
        yourScore.textContent = yourSc++;

    } else if (a && computerSelection == 'paper') {
        youSlt.textContent = "YOU:" + " " + "✊🏻";
        compSlt.textContent = "ROBOT:" + " " + "✋🏻";
        computerScore.textContent = computerSc++;
        whoWin.textContent = "Computer won!";

    } else if (a && computerSelection == 'rock') {
        youSlt.textContent = "YOU:" + " " + "✊🏻";
        compSlt.textContent = "ROBOT:" + " " + "✊🏻";
        whoWin.textContent = "Tie!";
    }

    if (b && computerSelection == 'rock') {
        youSlt.textContent = "YOU:" + " " + "✋🏻";
        compSlt.textContent = "ROBOT:" + " " + "✊🏻";
        whoWin.textContent = "You won!";
        yourScore.textContent = yourSc++;

    } else if (b && computerSelection == 'scissors') {
        youSlt.textContent = "YOU:" + " " + "✋🏻";
        compSlt.textContent = "ROBOT:" + " " + "✌🏻";
        computerScore.textContent = computerSc++;
        whoWin.textContent = "Computer won!";

    } else if (b && computerSelection == 'paper') {
        youSlt.textContent = "YOU:" + " " + "✋🏻";
        compSlt.textContent = "ROBOT:" + " " + "✋🏻";
        whoWin.textContent = "Tie!";
    }

    if (c && computerSelection == 'paper') {
        youSlt.textContent = "YOU:" + " " + "✌🏻";
        compSlt.textContent = "ROBOT:" + " " + "✋🏻";
        whoWin.textContent = "You won!";
        yourScore.textContent = yourSc++;

    } else if (c && computerSelection == 'rock') {
        youSlt.textContent = "YOU:" + " " + "✌🏻";
        compSlt.textContent = "ROBOT:" + " " + "✊🏻";
        computerScore.textContent = computerSc++;
        whoWin.textContent = "Computer won!";

    } else if (c && computerSelection == 'scissors') {
        youSlt.textContent = "YOU:" + " " + "✌🏻";
        compSlt.textContent = "ROBOT:" + " " + "✌🏻";
        whoWin.textContent = "Tie!";
    }

    system();
    re_create();
}

//Functions that finish the game & start the game back again.
function system() {

    if (yourSc == 6 && computerSc < 6) {
        whoWin.textContent = "CONGRATS! You won the game!🎉";
        rockSl.disabled = true;
        paperSl.disabled = true;
        scissorsSl.disabled = true;

    } else if (computerSc == 6 && yourSc < 6) {
        whoWin.textContent = "SORRY, Computer won the game 🤖";
        rockSl.disabled = true;
        paperSl.disabled = true;
        scissorsSl.disabled = true;
    }
}


function re_create() {

    if (yourSc == 6 || computerSc == 6) {

        reStart.textContent = "PLAY AGAIN";
        reStart.addEventListener("click", function () {
            window.location.reload();
        });

    }

}
