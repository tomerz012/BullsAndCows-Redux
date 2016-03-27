import React from 'react';

export const Secret = (secretWordLength) => {
  const WordLength = secretWordLength
  return (
    <div>
    Can you guess the {WordLength} letter word I'm thinking of?
    </div>
  )
}
