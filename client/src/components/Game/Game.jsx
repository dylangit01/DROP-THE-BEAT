import React, { useEffect, useState } from 'react';

import './Game.scss';

import { io } from 'socket.io-client';

import Lobby from './Lobby/Lobby';
import GameInProgress from './GameInProgress/GameInProgress';
import Result from './Result/Result';

export default function Game({ playlist }) {
  const [conn, setConn] = useState(undefined);
  const [gameStatus, setGameStatus] = useState({started: false, finished: false, winner: null}); // ASK IF THERE'S A WAY TO STORE STATUS LIKE THIS
  const [user, setUser] = useState({}); // Specific to person using website
  const [users, setUsers] = useState([]); // All users connected through socket
  const [guesses, setGuesses] = useState([]); //add boolean correct: true/false 
  const [round, setRound] = useState({number: 0, finished: false});  // Might need to change this to an object of rounds
  
  // Keep track of the number of rounds for a game based on the number of songs in the selected playlist
  const songs = playlist.songs;
  const song = songs[round.number];
  const numberOfRounds = songs.length;

  ////////////////////////////////////////////////////
  // UPDATES AT THE END OF EVERY ROUND
  ////////////////////////////////////////////////////
  useEffect(() => {
    // Checking if it's the last round
    if (round.number === numberOfRounds) {
      // check highest score for winner and set winner
      const winner = getWinner();
      setGameStatus((prev) =>  ({...prev, finished: true, winner}));
    }
  }, [numberOfRounds, round]);

  ////////////////////////////////////////
  // ON INITIAL SOCKET CONNECTION
  ////////////////////////////////////////
  useEffect(() => {
    const connection = io('http://localhost:3001');
    setConn(connection);
  }, []);

  ////////////////////////////////////////
  // RECEIVING MESSAGES FROM THE SERVER
  ////////////////////////////////////////
  useEffect(() => {
    // BACK FROM SERVER (conn.on = waiting for msg)
    if (conn) {
      // Received only by one user on connecting to socket
      conn.on('INITIAL_CONNECTION', (msg) => {
        const { id, name, color, score, users } = msg;
        // console.log("initial connection msg", msg)
        setUser({ id, name, color, score });
        setUsers([...users]);
      });

      // Received by all users except user who connected
      conn.on('NEW_USER', (msg) => {
        // console.log('new user msg ', msg)
        setUsers((prev) => [...prev, msg]);
      });

      // Received only by one user who requested name change
      conn.on('CHANGE_NAME', (msg) => {
        const { name, users } = msg;
        setUser((prev) => ({...prev, name})); 
        setUsers([...users]);
      });

      // Received by all users except user who requested name change
      conn.on('USER_NAME_CHANGE', (msg) => {
        const { users } = msg;
        setUsers([...users]);
      });

      ////////////////////////////////////////
      // EVENTS RECIEVED BY ALL USERS
      ////////////////////////////////////////

      // On start game message from the server
      conn.on('START_GAME', (msg) => {
        setGameStatus((prev) => ({ ...prev, started: true }));
      });

      conn.on('CORRECT_GUESS', (msg) => {
        // Update winner's score
        setGuesses((prev) => [...prev, msg]);
        setUser(prev => ({ ...prev, score: msg.score }))
        // setUsers(prev => ([...prev, { name: msg.name, score: msg.score }]))
        setUsers([...msg.users]);
        setRound(prev => ({...prev, finished: true}));
        // ADD SNACKBAR NOTIFICATION
        // Okay to do multiple setState calls as long as they don't affect each other
      })

      conn.on('INCORRECT_GUESS', (msg) => {
        setGuesses((prev) => [...prev, msg]);
      });

      conn.on('NEXT_ROUND', (msg) => {
        // Update round state to next round and set the round finished status to false
        setRound(prev => {
          return {...prev, number: prev.number + 1, finished: false};
        });
      });

      conn.on('END_GAME', (msg) => {

      });

      conn.on('DISCONNECT_USER', (msg) => {
        setUsers((prev) => {
          const copy = [...prev];
          const names = copy.map((user) => user.name);
          const index = names.indexOf(msg.name);
          if (index !== -1)
            // if found
            copy.splice(index, 1);
          return copy;
        });
      });
    }
  }, [conn]);

  ////////////////////////////////////////
  // SEND MESSAGE TO SERVER
  ////////////////////////////////////////
  const sendMessage = (type, msg) => {
    const payload = { ...user, msg };
    console.log("payload ", payload)
    conn.emit(type, payload);
  };


  ////////////////////////////////////////
  // NEW ROUND FUNCTION 
  ////////////////////////////////////////
  const nextRound = () => {
    // Get the current song name if it exists (new JS syntax)
    const nextRound = round.number + 1;
    const currentSongName = songs[nextRound]?.title;

    // Send message to socket to notify all users it's the next round and update the next song name
    sendMessage('NEXT_ROUND', currentSongName);
  };

  ////////////////////////////////////////
  // GET WINNER FUNCTION 
  ////////////////////////////////////////
  const getWinner = () => {
    let winner = "";
    let highestScore = 0;

    // Assume only 2 players
    users.forEach(user => {
      if (user.score > highestScore) {
        winner = user.name;
        highestScore = user.score;
      } else if (user.score === highestScore) {
        winner = ""; // this means it's a tie or no one scored
      }
    })
    return winner;
  }

  return (
    <div className='game'>
      {/* PRE-GAME LOBBY */}
      {!gameStatus.started && (
        <Lobby
          playlist={playlist}
          sendMessage={sendMessage}
          songs={songs}
          numberOfSongs={numberOfRounds}
          playlistName={playlist.playlistName}
          user={user}
          users={users}
        />
      )}

      {/* GAME IN PROGRESS */}
      {gameStatus.started && !gameStatus.finished && (
        <GameInProgress
          nextRound={nextRound}
          round={round}
          setRound={setRound}
          numberOfRounds={numberOfRounds}
          playlist={playlist}
          song={song}
          user={user}
          users={users}
          messages={guesses}
          sendMessage={sendMessage}
        />
      )}

      {/* GAME-END RESULT */}
      {gameStatus.finished && <Result winner={gameStatus.winner} playlistName={playlist.playlistName} />}
    </div>
  );
}
