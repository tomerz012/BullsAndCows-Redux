import React from 'react';
import { Table } from 'react-bootstrap';

const BCData = (BCData) => {
  return BCData.map((score) => {
    const bulls = score.bulls
    const cows = score.cows
    const currentTry = score.currentTry
    const guesses = score.attempts
    return (
          <tr>
            <td>{currentTry}</td>
            <td>{bulls}</td>
            <td>{cows}</td>
            <td>{guesses}</td>
          </tr>
    )

  })
}

export const BCDataList = (data) => {
  return (
    <Table>
    <thead>
        <tr>
          <th>Try#</th>
          <th>Bulls</th>
          <th>Cows</th>
          <th>Guess</th>
        </tr>
      </thead>
      <tbody>
      {BCData(data)}
      </tbody>
    </Table>
  )
}
