import React, { useEffect, useMemo, useState } from 'react';

import './Game.scss';

import {io} from 'socket.io-client';

import Lobby from "./Lobby/Lobby";
import GameInProgress from "./GameInProgress/GameInProgress";
import Result from "./Result/Result"; 


export default function Game({playlist}) {
  const [conn, setConn] = useState(undefined);
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(0);
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

  useEffect(() => {
    const connection = io('http://localhost:3001');
    setConn(connection);
  }, []);

  // When something changes in the conn
  useEffect(() => {
    // BACK FROM SERVER (conn.on = waiting for msg)
    if (conn) {
      console.log("Socket io connection initialized");

      // On start game
      conn.on('START_GAME', (msg) => {
        console.log('msg received from the server on START_GAME: ', msg);
        setIsActive(true);
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
    console.log('Msg sent to backend: ', msg);
    conn.emit(type, msg);
  };

  const nextRound = () => {
    setRound(prev => prev + 1);
  };

  return (
    <div className="game">
      <h2>{playlist.playlistName} Playlist</h2>

      {!isActive && <Lobby setIsActive={setIsActive} sendMessage={sendMessage} songs={songs} />}

      {/* Might want to make a GameInProgress component that has all these 4 components */}
      {isActive && !isFinished &&
        <GameInProgress 
          setScore={setScore}
          setWinner={setWinner}
          setPlaylist={playlist}
          nextRound={nextRound}
          playlist={playlist}
          song={currentSong}
        />
      }

      {isFinished && <Result score={score} winner={winner} />}

    </div>

  );
};