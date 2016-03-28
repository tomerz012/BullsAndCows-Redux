import React from 'react';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Center from 'react-center';
import RaisedButton from 'material-ui/lib/raised-button';

// Action creators
import { resetGame } from '../actions'

// Dumb components
import { BCDataList } from '../components/BCData';
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

    const reset = (e) => {
      console.log('Resetting game')
      this.props.resetGame()
    }
    console.log(data)

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
      {isGameEnded === false
      ?<SubmitGuess gameStatus={isGameEnded} submitResponse={submitResponse}/>
      :<RaisedButton label='play again' onClick={reset} primary={true}/>}
      </Center>

      <br/>
      <br/>
      {BCDataList(data)}
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

const mapDispatchToProps = (dispatch) => ({
  resetGame: bindActionCreators(resetGame, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
