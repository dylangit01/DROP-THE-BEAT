import React, { useEffect, useMemo, useState } from 'react';

import './Game.scss';

import { io } from 'socket.io-client';

import Lobby from './Lobby/Lobby';
import GameInProgress from './GameInProgress/GameInProgress';
import Result from './Result/Result';

export default function Game({ playlist }) {
  const [conn, setConn] = useState(undefined);
  const [gameStatus, setGameStatus] = useState({ started: false, finished: false, winner: null }); // ASK IF THERE'S A WAY TO STORE STATUS LIKE THIS
  // const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState({}); // Specific to person using website
  const [users, setUsers] = useState([]); // All users connected through socket
  const [messages, setMessages] = useState([]);

  // USERS OBJECT
  // {name, score, emoji}

  // Update score function -> just a function affecting state
  // Checking winner, sending relevant messages to all users
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState('');
  const [round, setRound] = useState(0); // Might need to change this to an object of rounds
  const [currentSong, setCurrentSong] = useState({});

  // Keep track of the number of rounds for a game based on the number of songs in the selected playlist
  const numberOfRounds = playlist.songs.length;
  const songs = playlist.songs;

  // isFinished is not state but computed based on state (similar to useEffect but it returns a value)
  // const isFinished = useMemo(() => {
  //   // Last round
  //   if (round === numberOfRounds) {
  //     // check highest score for winner and set winner
  //     return true;
  //   }

  //   return false;
  // }, [numberOfRounds, round]);

  useEffect(() => {
    // Checking for the end of the game
    if (round === numberOfRounds) {
      // check highest score for winner and set winner
      setGameStatus((prev) => {
        return { ...prev, finished: true };
      });
    }
  }, [numberOfRounds, round]);

  // On initial socket connection
  useEffect(() => {
    const connection = io('http://localhost:3001');
    setConn(connection);
  }, []);

  // RECEIVING MESSAGES FROM THE SERVER
  useEffect(() => {
    // BACK FROM SERVER (conn.on = waiting for msg)
    if (conn) {
      conn.on('INITIAL_CONNECTION', msg => {
        console.log(msg);
        const { name, color, users } = msg;
        setUser({ name, color });
        setUsers([...users]);
      })

        conn.on('NEW_USER', (msg) => {
          setUsers((prev) => [...prev, msg]);
        });

        conn.on('SEND_MESSAGE', (msg) => {
          setMessages((prev) => [...prev, msg]);
        });

      // On start game message from the server
      conn.on('START_GAME', (msg) => {
        console.log(msg);
        setGameStatus((prev) =>  ({...prev, started: true })
        );
        // setCurrentSong(msg.song);
      });

      conn.on('CORRECT_GUESS', (msg) => {
        // Update / reveal song cover & title
        // Update winner's score
        // setWinner for round
        // setMessages (with a different color or something)
      });

      conn.on('INCORRECT_GUESS', (msg) => {
        //setMessages
      });

      conn.on('END_GAME', () => {});
    }
  }, [conn]);

  // SEND MSG TO SERVER
  const sendMessage = (type, msg) => {
    console.log('Msg sent to backend: ', msg);
    conn.emit(type, msg);
  };

  // Move to the next round by incrementing the round number
  const nextRound = () => {
    setRound((prev) => prev + 1);
    const currentSongName = songs[round].name;
    sendMessage('NEXT_ROUND', currentSongName);
    //sendmessage to server that it's a new round with the new song title
  };

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
      {/* song={currentSong} <----- this was what Vasily was passing down to props but using another method for now*/}
      {gameStatus.started && !gameStatus.finished && (
        <GameInProgress
          setScore={setScore}
          setWinner={setWinner}
          setPlaylist={playlist}
          nextRound={nextRound}
          round={round}
          numberOfRounds={numberOfRounds}
          playlist={playlist}
          song={songs[round]}
          user={user}
          users={users}
          messages={messages}
          sendMessage={sendMessage}
        />
      )}

      {/* GAME-END RESULT */}
      {gameStatus.finished && <Result score={score} winner={winner} playlistName={playlist.playlistName} />}
    </div>
  );
}
