let userScore = 0
let computerScore = 0

const winMessage = 'You win!!'
const loseMessage = 'You lose!!'
const drawMessage = 'Draw!!'

function computerPlay () {
  let choices = [
    'rock',
    'paper',
    'scissors'
  ]
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return drawMessage
      case 'paper':
        return loseMessage
      default:
        return winMessage
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        return winMessage
      case 'paper':
        return drawMessage
      default:
        return loseMessage
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        return loseMessage
      case 'paper':
        return winMessage
      default:
        return drawMessage
    }
  } else {
    alert('Invalid entry! You automatically lose this round')
    return loseMessage
  }
}

function game () {
  for (let i = 1; i < 6; i++) {
    let playerSelection = prompt('Please enter your choice: (rock, paper, or scissors)')
    let computerSelection = computerPlay()
    console.log(`This is round ${i}:`)
    let roundResult = playRound(playerSelection, computerSelection)
    console.log(`Computer selects: ${computerSelection}`)
    console.log(roundResult)
    if (roundResult === winMessage) {
      userScore++
    } else if (roundResult === loseMessage) {
      computerScore++
    }
    console.log(`Your total score: ${userScore}`)
    console.log(`Computer's total score: ${computerScore}`)
  }
  if (userScore > computerScore) {
    console.log(`Congrats, you win the game!`)
  } else if (userScore < computerScore) {
    console.log(`Sorry, you lose the game!`)
  } else {
    console.log(`We have a draw. Try again.`)
  }
}

game()
