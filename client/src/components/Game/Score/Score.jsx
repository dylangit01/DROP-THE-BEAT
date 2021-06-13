import React from 'react';
import './Score.scss';

export default function Score({ setScore, setWinner, user, users, messages }) {

  return (
    <div className='score-box'>
      {users.map((user, idx) => (
        <div key={idx}>
          <p>{user.name}</p>
          <p>{user.score}</p>
        </div>
      ))}
    </div>
  );
}
