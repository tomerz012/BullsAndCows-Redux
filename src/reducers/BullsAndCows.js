import { SUBMIT_GUESS, GUESS_INVALID, GET_BULLS_AND_COWS, GAME_IS_WON, TRIES_EXCEEDED, RESET } from '../actions'

const initialState = {
  secret: 'cat',
  bullsAndCows: {
    bulls: 0,
    cows: 0,
    currentTry: 0,
    attempts: '',
  },
  scores: [],
  maxTries: 10,
  guessError: '',
  gameStatus: '',
  isEnded: false,
}

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_BULLS_AND_COWS:
      return {
        ...state,
        bullsAndCows: {
          bulls: action.payload.getPoints.bulls,
          cows: action.payload.getPoints.cows,
          attempts: action.payload.getPoints.attempts,
          currentTry: action.payload.getPoints.currentTry},
        scores: action.payload.scores,

      }

    case GUESS_INVALID:
      return {
        ...state,
        guessError: action.error,
      }

    case GAME_IS_WON:
      return {
        ...state,
        gameStatus: action.payload,
        isEnded: true,
      }

    case TRIES_EXCEEDED:
       return {
         ...state,
         gameStatus: action.payload,
         isEnded: true,
       }

    case RESET:
      return {
        secret: 'cat',
        bullsAndCows: {
          bulls: 0,
          cows: 0,
          currentTry: 0,
          attempts: '',
        },
        scores: [],
        maxTries: 10,
        guessError: '',
        gameStatus: '',
        isEnded: false,
      }
  }
  return state
}
