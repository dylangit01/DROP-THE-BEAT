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
  const [guesses, setGuesses] = useState([]);
  const [round, setRound] = useState({number: 0, finished: false});  // Might need to change this to an object of rounds
  
  // USER & USERS OBJECT
  // {name, score, emoji?, color?}
  
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
      setGameStatus((prev) => {
        return {...prev, finished: true, winner}
      });
    }

    // Get the current song name if it exists (new JS syntax)
    const currentSongName = song?.title;

    // If there's a connection and a current song
    if (conn && currentSongName && !round.finished) {
      sendMessage('NEXT_ROUND', currentSongName);
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
      conn.on('INITIAL_CONNECTION', (msg) => {
        // console.log(msg);
        const { name, color, users } = msg;
        setUser({ name, color });
        setUsers([...users]);
      });

      conn.on('NEW_USER', (msg) => {
        setUsers((prev) => [...prev, msg]);
      });

      conn.on('SEND_MESSAGE', (msg) => {
        setGuesses((prev) => [...prev, msg]);
      });

      // On start game message from the server
      conn.on('START_GAME', (msg) => {
        setGameStatus((prev) => ({ ...prev, started: true }));
      });

      conn.on('CORRECT_GUESS', (msg) => {
        // Update / reveal song cover & title
        // Update winner's score
        // setMessages()
        // nextRound();
        setRound(prev => ({...prev, finished: true}));
        // setMessages()
        // Okay to do multiple setState calls as long as they don't affect each other
        // updateScore(user);
      })

      conn.on('INCORRECT_GUESS', (msg) => {
        //setMessages
      });

      conn.on('NEXT_ROUND', (msg) => {
        // nextRound();
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
    console.log('Msg sent to backend: ', msg);
    const payload = { ...user, msg };
    conn.emit(type, payload);
  };

  ////////////////////////////////////////
  // NEW ROUND FUNCTION 
  ////////////////////////////////////////
  const nextRound = () => {
    // Update round object by incrementing the round number and resetting the round finished status to false
    // sendMessage to back end
    setRound(prev => {
      return {...prev, number: prev.number + 1, finished: false};
    });
  };

  ////////////////////////////////////////
  // UPDATE SCORE FUNCTION 
  ////////////////////////////////////////
  const updateScore = (user) => {
    // Update score function -> just a function affecting state
    // Checking winner, sending relevant messages to all users
    // Update score of user who scored
    // setUsers(...prev, user.score ++)
    // ADD SNACKBAR NOTIFICATION
  }

  ////////////////////////////////////////
  // GET WINNER FUNCTION 
  ////////////////////////////////////////
  const getWinner = () => {
    const winner = "NellyCuteAsABtn";
    const highestScore = 0;

    // For now, just 2 players
    // users.forEach(user => {
    //   if (user.score > highestScore) {
    //     winner = user.name;
    //     highestScore = user.score;
    //   }
    // })
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
