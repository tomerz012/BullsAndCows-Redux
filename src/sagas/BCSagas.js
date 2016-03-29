import { call, take, select, put } from 'redux-saga/effects'
import { SUBMIT_GUESS, submitGuess, guessInvalid, getScore, triesExceeded, gameIsWon } from '../actions'
import { getBullsAndCows, getSecret, getScoreList, getMaxTries } from '../selectors'
import { checkGuess, checkGuessValidity, getData, checkNumberOfTries } from '../helpers'

export function *guessSubmission()  {
  while (true) {
    // wait for SUBMIT_GUESS from user
    const guess = yield take(SUBMIT_GUESS)
    const playerGuess = guess.guess.guess
    const bullsAndCows = yield select(getBullsAndCows)
    const scoreList = yield select(getScoreList)
    const secret = yield select(getSecret)
    const maxTries  = yield select(getMaxTries)

    // call helper function to check guess
    const errorResponse = yield call(checkGuessValidity, playerGuess, secret)
    yield put(guessInvalid(errorResponse))

    // If response was OK
    if (errorResponse === 'OK') {
      // Update Bulls and Cows
      const getPoints = yield call(updateBC, bullsAndCows, playerGuess, secret, scoreList)
      // Check if max tries exceeded or game is won
      yield call(checkGameStatus, getPoints, maxTries, secret)
    }
  }
}

function *updateBC (bullsAndCows, playerGuess, secret, scoreList) {
  const getPoints = yield call(checkGuess, bullsAndCows, playerGuess, secret)
  const scores = yield call(getData, scoreList, getPoints)
  yield put(getScore({getPoints, scores}))
  return getPoints
}

function *checkGameStatus (getPoints, maxTries, secret) {
  const gameStatus = yield call(checkNumberOfTries, getPoints, maxTries, secret)
  if (gameStatus === `The answer was: ${secret}. Play again? `) {
    yield put(triesExceeded(gameStatus))
  } else if (gameStatus === 'Congratulations! You won!') {
    yield put(gameIsWon(gameStatus))
  }

}
