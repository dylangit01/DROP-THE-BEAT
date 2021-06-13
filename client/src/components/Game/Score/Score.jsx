import React from 'react';
import './Score.scss';

export default function Score({ setScore, setWinner, user, users, messages }) {

  console.log('user info here', users);
  console.log(user);
  return (
    <div className='score-box'>
      {users.map((user, idx) => (
        <>
          {/* <p>{user.id}</p> */}
          <p>{user.name}</p>
          <p>{user.score}</p>
        </>
      ))}
    </div>
  );
}
