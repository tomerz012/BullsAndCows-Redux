import { combineReducers } from 'redux';
import BullsAndCows from './BullsAndCows'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  BullsAndCows,
  form: formReducer,
});

export default rootReducer;
