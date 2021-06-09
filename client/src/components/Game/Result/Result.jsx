import React from 'react';
import './Result.scss';

export default function Result({ score, winner }) {

  return (
    <div className="chat">
      <h6>The winner is here {winner}</h6>
      <h6>The score is {score}</h6>
    </div>
  )
}