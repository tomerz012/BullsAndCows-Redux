import React from 'react';
import { Component, PropTypes } from 'react';
import Center from 'react-center';
import { reduxForm } from 'redux-form'

// Action creators
import { submitGuess } from '../actions';

// Material-UI Components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SubmitGuess extends Component {
  static PropTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitGuess: PropTypes.func.isRequired,
  };

  render () {
    const { fields: { guess }, handleSubmit } = this.props
    const isDisabled = this.props.gameStatus

    return (
      <form onSubmit={handleSubmit(this.props.submitGuess)}>
        <Center>
        <TextField
          id='submitGuess'
          hintText="Type your guess here"
          floatingLabelText={this.props.submitResponse}
          disabled={isDisabled}
          {...guess}/>
        </Center>
        <Center>
        <br/>
        <br/>
        <RaisedButton type='submit' disabled={isDisabled} label="submit guess" primary={true} />
        </Center>
      </form>
    )
  }
}

export default reduxForm({
  form: 'submitGuess',
  fields: ['guess'],
}, null, {submitGuess})(SubmitGuess)
