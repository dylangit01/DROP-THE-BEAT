import React, { useMemo, useState } from 'react';

import './Game.scss';

import Lobby from "./Lobby/Lobby";
import GameInProgress from "./GameInProgress/GameInProgress";

import Result from "./Result/Result"; 


export default function Game({playlist}) {
  const [isActive, setIsActive] = useState(false);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(0);
  
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
  //     console.log("LAST ROUND");
  //   }
  // }, [numberOfRounds, round]);

  const nextRound = () => {
    setRound(prev => prev + 1);
  };

  return (
    <div className="game">
      <h2>{playlist.playlistName} Playlist</h2>

      {!isActive && <Lobby setIsActive={setIsActive} />}

      {/* Might want to make a GameInProgress component that has all these 4 components */}
      {isActive && !isFinished &&
        <GameInProgress 
          setScore={setScore}
          setWinner={setWinner}
          setPlaylist={playlist}
          nextRound={nextRound}
          playlist={playlist}
          song={songs[round]}
        />
      }

      {isFinished && <Result score={score} winner={winner} />}

    </div>

  );
};