import React, { useState } from 'react';

import './Game.scss';

import Lobby from "./Lobby/Lobby";
import Chat from "./Chat/Chat";
import Score from "./Score/Score";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import TrackList from "./TrackList/TrackList";
import Result from "./Result/Result"; 


export default function Game({playlists, name, emoji}) {

  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [round, setRound] = useState(0);

  return (
    <div className="game">
      <h1>I am a Game page</h1>

      {!isActive && <Lobby setIsActive={setIsActive} />}

      {isActive && !isFinished && (
        <>
          <Chat />
          <Score setScore={setScore} setWinner={setWinner}/>
          <MusicPlayer playlists={playlists}/>
          <TrackList setRound={setRound} isFinished={isFinished}/>
        </>
      )}

      {isFinished && <Result score={score} winner={winner} />}

    </div>

  );
};