import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga'
import { guessSubmission } from './sagas/BCSagas'

import BullsAndCows from './containers/BullsAndCows';
import rootReducer from './reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(
  createSagaMiddleware(guessSubmission),
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BullsAndCows />
  </Provider>
  , document.querySelector('.container'));
