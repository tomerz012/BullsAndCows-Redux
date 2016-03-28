import React from 'react';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Center from 'react-center';

// Dumb components
import { BCData } from '../components/BCData';
import { GameStatus } from '../components/GameStatus'

// Smart components
import SubmitGuess from './SubmitGuess'

class App extends Component {
  render() {

    const secretWord = this.props.BullsAndCows.secret
    const submitResponse = this.props.BullsAndCows.guessError
    const status = this.props.BullsAndCows.gameStatus
    const isGameEnded = this.props.BullsAndCows.isEnded
    const data = this.props.BullsAndCows.scores
    const rounds = this.props.BullsAndCows.bullsAndCows

    return (
      <div >
      <br/>
      <Center>
      <h4> Welcome to Bulls and Cows! </h4>
      </Center>
      <br/>

      <Center>
      {GameStatus(status, secretWord)}
      </Center>
      <br/>

      <Center>
      <SubmitGuess gameStatus={isGameEnded} submitResponse={submitResponse}/>
      </Center>

      <br/>
      <br/>
      {BCData(data)}
      </div>
    );
  }
}

App.PropTypes = {
  BullsAndCows: PropTypes.object
}

const mapStateToProps = (state) => ({
  BullsAndCows: state.BullsAndCows,
})

export default connect(mapStateToProps)(App)
