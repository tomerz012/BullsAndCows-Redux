import { SUBMIT_GUESS, GUESS_INVALID, GET_BULLS_AND_COWS, GAME_IS_WON, TRIES_EXCEEDED, RESET } from '../actions'
import _ from 'lodash'

const initialState = {
  secret: _.sample(['hate', 'hair', 'nice', 'fish', 'plan']),
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

export default function BullsAndCows(state = initialState, action) {
  switch(action.type) {
    case GET_BULLS_AND_COWS:
      return Object.assign({}, state, {
        bullsAndCows: {
          bulls: action.payload.getPoints.bulls,
          cows: action.payload.getPoints.cows,
          attempts: action.payload.getPoints.attempts,
          currentTry: action.payload.getPoints.currentTry
        },
        scores: action.payload.scores,

      })

    case GUESS_INVALID:
      return Object.assign({}, state, {
        guessError: action.error,
      })

    case GAME_IS_WON:
      return Object.assign({}, state, {
        gameStatus: action.payload,
        isEnded: true,
      })

    case TRIES_EXCEEDED:
       return Object.assign({}, state, {
         gameStatus: action.payload,
         isEnded: true,
       })

    case RESET:
      return Object.assign({},
        {secret: _.sample(['hate', 'hair', 'nice', 'fish', 'plan']),
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
        isEnded: false})

    default:
      return state
  }
}
