import React from 'react';
import './Score.scss';

export default function Score({setScore, setWinner}) {

  // setScore(3)

  let score = 0;
  const addScore = (e) => {
    score += 1;
    if (score > 5) {
      setWinner("RubyOffRails")
      console.log('We have a winner')
    }
  }

  return (
    <div className="score">
      <h6>Score board is here</h6>
      <button onClick={(e) => addScore(e)}>Click 6 times to console.log</button>
    </div>
  )
}