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

const style = {
  margin: 12,
}

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
      {isGameEnded === false
      ?<SubmitGuess gameStatus={isGameEnded} submitResponse={submitResponse}/>
      :<RaisedButton label='play again' onClick={this.props.resetGame} primary={true}/>}
      </Center>

      <Center>
        <RaisedButton label="i give up" primary={true} onClick={this.props.resetGame} style={style}/>
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
