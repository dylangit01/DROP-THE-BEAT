import React from 'react';
import './Result.scss';

export default function Result({ score, winner }) {

  return (
    <div className="result">
      <img className="trophy" src="https://github.com/dylangit01/DROP-THE-BEAT/blob/ruby/feature/winner-page/client/public/images/trophy.png?raw=true" alt="trophy" />

      <h6>The winner is here</h6>
      <h6>The score is </h6>
    </div>
  )
}