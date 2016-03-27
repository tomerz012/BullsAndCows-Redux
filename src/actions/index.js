export const SUBMIT_GUESS = 'SUBMIT_GUESS'
export const GUESS_INVALID = 'GUESS_INVALID'
export const GET_BULLS_AND_COWS = 'GET_BULLS_AND_COWS'

export const getScore = (payload) => {
  return {
    type: GET_BULLS_AND_COWS,
    payload,
  }
}

export const submitGuess = (guess) => {
  return {
    type: SUBMIT_GUESS,
    guess,
  }
}

export const guessInvalid = (error) => {
  return {
    type: GUESS_INVALID,
    error
  }
}
