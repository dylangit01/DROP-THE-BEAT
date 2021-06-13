import React from 'react';
import './Score.scss';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

export default function Score({ setScore, setWinner, user, users, messages }) {

  return (
    <div className='score-box'>
      {users.map((user, idx) => (
        <div key={idx} className='scoreDetail'>
          <MusicNoteIcon></MusicNoteIcon>
          <p>{user.name}</p>
          <p>{user.score}</p>
          <MusicNoteIcon></MusicNoteIcon>
        </div>
      ))}
    </div>
  );
}
