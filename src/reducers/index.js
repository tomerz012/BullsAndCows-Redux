import { combineReducers } from 'redux';
import BullsAndCowsReducer from './BullsAndCows'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  BullsAndCows: BullsAndCowsReducer,
  form: formReducer,
});

export default rootReducer;
