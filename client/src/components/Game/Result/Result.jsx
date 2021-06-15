import React from 'react';

import './Result.scss';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import winnerSound from '../../../assets/winner.mp3';

const useStyles = makeStyles((theme) => ({
  winner: {
    color: 'gold',
  },
  rating: {
    fontWeight: 800,
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stars: {
    cursor: 'pointer',
    transition: 'color 200ms',
  },

}));

export default function Result({ score, winner }) {
  const classes = useStyles();

  return (
    <div className='result'>
      <audio id='winner-audio' autoPlay src={winnerSound}></audio>
      {winner && (
        <Typography variant='h4' gutterBottom>
          Congrats <span className={classes.winner}>{winner}</span>!
        </Typography>
      )}
      {!winner && (
        <Typography variant='h4' gutterBottom>
          <span className={classes.winner}>You're all Winners!</span>
        </Typography>
      )}

      <Typography variant='h6'>You are the beatmaker of the game!</Typography>
      <img
        className='trophy'
        src='https://github.com/dylangit01/DROP-THE-BEAT/blob/ruby/feature/winner-page/client/public/images/trophy.png?raw=true'
        alt='trophy'
      />
      <p className={classes.rating}>RATING</p>
      <div className={classes.stars}>
        {[...Array(5)].map((star) => (
        <label>
          <input type='radio' name='rating' id='' />
          <i className='fas fa-star' style={{cursor: 'pointer', transition: 'color 200ms', margin: '0 3px'}}></i>
        </label>
      ))}
      </div>
      
    </div>
  );
}
