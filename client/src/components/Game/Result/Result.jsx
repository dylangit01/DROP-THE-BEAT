import React from 'react';


import './Result.scss';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  winner: {
    color: "gold",
  },
}));

export default function Result({ score, winner }) {
  const classes = useStyles();

  return (
    <div className="result">
      <Typography variant='h4' gutterBottom>Congrats <span className={classes.winner}>{winner}</span>!</Typography>
      <Typography variant='h6'>You are the beatmaker of the game!</Typography>
      <img className="trophy" src="https://github.com/dylangit01/DROP-THE-BEAT/blob/ruby/feature/winner-page/client/public/images/trophy.png?raw=true" alt="trophy" />
    </div>
  )
}