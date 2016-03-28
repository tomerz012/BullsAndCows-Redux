export const checkNumberOfTries = (getPoints, maxTries, secret) => {
  let status = ''
  // if currentTry is equal to max tries
  if ((getPoints.currentTry === maxTries) && (getPoints.guess !== secret)) {
    status = `The answer was: ${secret}. Play again? `
  } else if (getPoints.attempts === secret) {
    status = 'Congratulations! You won!'
  }
  return status

}

export const checkGuessValidity = (guess, secret,) => {
  let errorResponse
  // valid word length
  if (guess.length !== secret.length ) {
    errorResponse = `Please enter a ${secret.length}-letter word.`
  } else {
    errorResponse = 'OK'
  }
  return errorResponse
}

export const getData = (scoresList, data) => {
  scoresList.push(data)
  return scoresList
}

export const checkGuess = (bullsAndCows, guess, secret) => {
  bullsAndCows.currentTry++
  bullsAndCows.attempts = guess
  //check the guess against the secret word
  for (let i = 0; i < secret.length; i++) {
    for (let j = 0; j < secret.length; j++) {
      // if they match,
      if (guess[i] === secret[j]) {
        // if they are in the same position
        if (i === j) {
          // increment bulls
          bullsAndCows.bulls++
        } else {
          //increment cows
          bullsAndCows.cows++
        }
      }
    }
  }
  return bullsAndCows
}
