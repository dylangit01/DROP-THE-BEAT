import React from 'react';
import './Result.scss';

import Typography from '@material-ui/core/Typography';

export default function Result({ score, winner }) {

  return (
    <div className="result">
      <Typography variant='h4'>Congrats 🎉 {winner} 🎉</Typography>
      <Typography variant='h6'>You are the beatmaker of the game!</Typography>
      <img className="trophy" src="https://github.com/dylangit01/DROP-THE-BEAT/blob/ruby/feature/winner-page/client/public/images/trophy.png?raw=true" alt="trophy" />
    </div>
  )
}