import React, { useEffect, useMemo, useState } from 'react';

import './Game.scss';

import {io} from 'socket.io-client';

import Lobby from "./Lobby/Lobby";
import GameInProgress from "./GameInProgress/GameInProgress";
import Result from "./Result/Result"; 


export default function Game({playlist}) {
  const [conn, setConn] = useState(undefined);
  const [gameStatus, setGameStatus] = useState({started: false, finished: false, winner: null}); // ASK IF THERE'S A WAY TO STORE STATUS LIKE THIS
  // const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState({}); // Specific to person using website
  const [users, setUsers] = useState([]); // All users connected through socket

  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(0);  // Might need to change this to an object of rounds
  const [currentSong, setCurrentSong] = useState({});
  
  // Keep track of the number of rounds for a game based on the number of songs in the selected playlist
  const numberOfRounds = playlist.songs.length;
  const songs = playlist.songs;
  
  // isFinished is not state but computed based on state (similar to useEffect but it returns a value)
  const isFinished = useMemo(() => {
    // Last round
    if (round === numberOfRounds) {
      // check highest score for winner and set winner
      return true;
    }

    return false;
  }, [numberOfRounds, round]);

  // useEffect(() => {
  //   if (round === numberOfRounds) {
  //     // check highest score for winner and set winner
  //     setGameStatus((prev) => {
  //       return {...prev, finished: true}
  //     });
  //   }
  // }, [numberOfRounds, round])

  // On initial socket connection
  useEffect(() => {
    const connection = io('http://localhost:3001');
    setConn(connection);
  }, []);

  // RECEIVING MESSAGES FROM THE SERVER
  useEffect(() => {
    // BACK FROM SERVER (conn.on = waiting for msg)
    if (conn) {
      console.log("initialized");

      // On start game message from the server
      conn.on('START_GAME', (msg) => {
        console.log(msg);
        setGameStatus((prev) => {
          return {...prev, started: true}
        });
        setCurrentSong(msg.song);
      })
      
      conn.on('GUESS', () => {

      })

      conn.on('END_GAME', () => {

      })

    }
  }, [conn]);

  // SEND MSG TO SERVER
  const sendMessage = (type, msg) => {
    console.log(msg);
    conn.emit(type, msg);
  };

  // Move to the next round by incrementing the round number
  const nextRound = () => {
    setRound(prev => prev + 1);
  };

  return (
    <div className="game">
      <h2>{playlist.playlistName} Playlist</h2>

      {/* PRE-GAME LOBBY */}
      {!gameStatus.started && <Lobby sendMessage={sendMessage} songs={songs} />}

      {/* GAME IN PROGRESS */}
      {/* song={currentSong} <----- this was what Vasily was passing down to props but using another method for now*/}
      {gameStatus.started && !isFinished &&
        <GameInProgress 
          setScore={setScore}
          setWinner={setWinner}
          setPlaylist={playlist}
          nextRound={nextRound}
          round={round}
          numberOfRounds={numberOfRounds}
          playlist={playlist}
          song={songs[round]}
        />
      }

      {/* GAME-END RESULT */}
      {isFinished && <Result score={score} winner={winner} />}

    </div>

  );
};