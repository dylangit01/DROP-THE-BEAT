import React, { useEffect, useMemo, useState } from 'react';

import './Game.scss';

import Lobby from "./Lobby/Lobby";
import Chat from "./Chat/Chat";
import Score from "./Score/Score";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import TrackList from "./TrackList/TrackList";
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
      <h1>{playlist.playlistName} Playlist</h1>

      {!isActive && <Lobby setIsActive={setIsActive} />}

      {/* Might want to make a GameInProgress component that has all these 4 components */}
      {isActive && !isFinished && (
        <>
          <Chat />
          <Score setScore={setScore} setWinner={setWinner}/>
          <MusicPlayer playlist={playlist} song={songs[round]} nextRound={() => nextRound()}/>
          <TrackList setRound={setRound} isFinished={isFinished} songs={playlist.songs}/>
        </>
      )}

      {isFinished && <Result score={score} winner={winner} />}

    </div>

  );
};