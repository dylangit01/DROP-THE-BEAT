import React from 'react';
import './Score.scss';

export default function Score({ setScore, setWinner, user, users, messages }) {
  // setScore(3)
  // let score = 0;
  // const addScore = (e) => {
  //   score += 1;
  //   if (score > 5) {
  //     setWinner("RubyOffRails")
  //     console.log('We have a winner')
  //   }
  // }
  console.log('user info here', users);
  console.log(user);
  return (
    <div className='score-box'>
      {
        users.map((user, idx) => (
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
