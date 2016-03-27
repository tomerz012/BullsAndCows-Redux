import React from 'react';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Center from 'react-center';

// Dumb components
import { Secret } from '../components/Secret';
import { BCData } from '../components/BCData';

// Smart components
import SubmitGuess from './SubmitGuess'

import { ListGroup } from 'react-bootstrap'

class App extends Component {
  render() {

    const secretWordLength = this.props.BullsAndCows.secret.length
    const submitResponse = this.props.BullsAndCows.guessError
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
      {Secret(secretWordLength)}
      </Center>

      <br/>

      <Center>
      <SubmitGuess submitResponse={submitResponse}/>
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
