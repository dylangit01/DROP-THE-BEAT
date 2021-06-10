import React from 'react';
import './Score.scss';

export default function Score({setScore, setWinner}) {

  // setScore(3)
  // let score = 0;
  // const addScore = (e) => {
  //   score += 1;
  //   if (score > 5) {
  //     setWinner("RubyOffRails")
  //     console.log('We have a winner')
  //   }
  // }

  return (
    <div className="score-box">
      <h1 className="score-numbers"> 3 / 2 </h1>
    </div>
  )
}