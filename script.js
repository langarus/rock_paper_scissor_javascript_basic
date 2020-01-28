
function computerPlay () {
    // this function will give me a random rock paper scissors
    const items = ["Rock", "Paper", "Scissors"]    
    const item = items[Math.floor(Math.random()*items.length)];
    return item;
    };

function printResult (a, b, c) {
    const paragraph = document.querySelector('#result')
    paragraph.textContent = `You chose: ${a}, the pc chose: ${b}. ${c}`
};

function printScore (a,b,c) {
    const paragraph = document.querySelector('#score')
    paragraph.textContent = `You Won: ${a}. You Lost: ${b}. Draws: ${c}`

}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let playerLower = playerSelection.toLowerCase();
    let computerLower = computerSelection.toLowerCase();
    let result = "";

    if (playerSelection == computerSelection) {
        result = "It's a draw"
    }
    result = (playerLower === computerLower) ? "It's a draw" : 
    (playerLower === "rock" && computerLower == "scissors") ? "You Win" : 
    (playerLower === "paper" && computerLower == "rock") ? "You Win" :
    (playerLower === "scissors" && computerLower == "paper") ? "You Win" : 
    "You Lose";
    finalRes = `${result}, You Chose: ${playerLower}, The PC chose: ${computerLower}`
    return result;
}    

function countGames (result) {
    if (result == "You Win") {
        wonMatches += 1
    }else if (result == "You Lose") {
        lostMatches += 1
    }else if (result == "It's a draw"){
        draws +=1
        }
    }

let lostMatches = 0;
let wonMatches = 0;
let draws = 0;
    
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
        const computerResult = computerPlay();
        const userResult = button.id
        let resultFinal = ""
        if (lostMatches == 5 || wonMatches == 5) {
            if (wonMatches == 5) {
                resultFinal = "You Won the Match!"
            }else {
                resultFinal = "You Lost the Match"
            }
            lostMatches = 0;
            wonMatches = 0;
            draws = 0;
        }else{
            resultFinal = playRound(userResult, computerResult)

        }
        // alert(resultFinal)

        countGames(resultFinal)
        printResult(userResult, computerResult, resultFinal);
        printScore(wonMatches, lostMatches, draws);
    });
  });
