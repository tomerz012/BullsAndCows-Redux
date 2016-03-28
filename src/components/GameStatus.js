import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export const GameStatus = (status, secretWord) => {
  let message
  let colour

  if (status === 'Congratulations! You won!') {
    status = 'Congratulations! You won!'
    colour = 'success'
  } else if (status === `The answer was: ${secretWord}. Play again? `) {
    status = `The answer was: ${secretWord}. Play again? `
    colour = 'warning'
  } else {
    status = `Can you guess the ${secretWord.length} letter word I'm thinking of?`
    colour = 'info'
  }

  return (
    <ListGroup>
      <ListGroupItem bsStyle={colour}>{status}</ListGroupItem>
    </ListGroup>
  )
}
