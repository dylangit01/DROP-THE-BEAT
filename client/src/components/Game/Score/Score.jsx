import React from 'react';
import './Score.scss';

export default function Score({ setScore, setWinner, user, players, messages }) {

  return (
    <div className='score-box'>
      {
        players.map((user, idx) => (
          <>

            {/* <p>{user.id}</p> */}
            <p>{user.name}</p>
            <p>{user.score}</p>
          </>
        ))
        // <>
        // <p>{user.name}</p>
        //   <p>{user.score}</p>
        //   </>
      }

      {/* <h2>Scores:</h2>
      <h1 className="score-numbers"> 3 / 2 </h1> */}
    </div>
  );
}
