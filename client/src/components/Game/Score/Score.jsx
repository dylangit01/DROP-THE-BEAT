import React from 'react';
import './Score.scss';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { makeStyles } from '@material-ui/styles';

export default function Score({ setScore, setWinner, user, users, messages }) {
  console.log(users);

  const useStyles = makeStyles((theme) => ({
    // '@keyframes bingo': {
    //   '0%': {},
    //   '50%': {},
    //   '100%': {
    //     transform: 'scale(1.2, 1.2)',
    //   },
    //   '30%': {},
    //   '80%': {
    //     transform: 'scale(1, 1)',
    //   },
    // },
    // musicIcon: {
    //   height: '90%',
    // },
    // bingo: {
    //   animation: '$bingo 1s ease 0s infinite',
    // },
    player: {
      fontSize: '15px',
    },
    mIcon: {
      transform: 'scale(1.8)',
    },
  }));

  const classes = useStyles();

  return (
    <div className='score-box'>
      {users.map((user, idx) => (
        <div key={idx} className='scoreDetail'>
          <div className='iconNum'>
            <MusicNoteIcon className={classes.mIcon} style={{ color: user.color, width: '30px' }}></MusicNoteIcon>
            <p className='scoreNum' style={{color:'#54e346'}} >{user.score}</p>
          </div>
          <p className={classes.player}>{user.name}</p>
          {/* <MusicNoteIcon></MusicNoteIcon> */}
        </div>
      ))}
    </div>
  );
}
