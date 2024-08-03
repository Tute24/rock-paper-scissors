//getting the buttons
let initButton = document.getElementById('init-game')
let rockButton = document.getElementById('rock')
let paperButton = document.getElementById('paper')
let scissButton = document.getElementById('scissors')

//getting the inputs
let playerScore = document.getElementById('scorePlayer')
let opponentScore = document.getElementById('scoreMachine')
let playerChoice = document.getElementById('playerChoice')
let opponentChoice = document.getElementById('opponentChoice')
let resultInput = document.getElementById('result')

//array para o oponent (Math random do PC)

let options = ["ROCK","PAPER","SCISSORS"]

//função do comportamento do jogo
let gameMode = function(event){
    let targetText = event.currentTarget.innerText
    playerChoice.value = targetText
    opponentChoice.value = options[Math.floor(Math.random()*options.length)]
    if(playerChoice.value === "ROCK" && opponentChoice.value==="PAPER"){
        resultInput.value = "Round lost! Play Again!"
        opponentScore.value++
    }else if(playerChoice.value === "ROCK" && opponentChoice.value==="SCISSORS"){
        resultInput.value = "Round won! Play again!"
        playerScore.value++
    } else if(playerChoice.value === "PAPER" && opponentChoice.value==="SCISSORS"){
        resultInput.value = "Round lost! Play Again!"
        opponentScore.value++
    } else if(playerChoice.value === "PAPER" && opponentChoice.value==="ROCK"){
        resultInput.value = "Round won! Play again!"
        playerScore.value++
    } else if(playerChoice.value === "SCISSORS" && opponentChoice.value==="ROCK"){
        resultInput.value = "Round lost! Play Again!"
        opponentScore.value++
    } else if(playerChoice.value === "SCISSORS" && opponentChoice.value==="PAPER"){
        resultInput.value = "Round won! Play again!"
        playerScore.value++
    } else{
        resultInput.value = "It's a draw! Play Again!"
    }

}


//inicialização do jogo

let initGame =function(){
    playerScore.value = 0
    opponentScore.value = 0
    resultInput.value = "Let's Play!"
    playerChoice.value = ""
    opponentChoice.value = ""
    document.querySelectorAll('.gameBtns').forEach(function(element){
        element.addEventListener('click',gameMode)
    })
}

initButton.addEventListener('click',initGame)





