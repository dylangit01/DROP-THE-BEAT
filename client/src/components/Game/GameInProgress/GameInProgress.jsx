import React, { useState } from 'react';

import Chat from "../Chat/Chat";
import Score from "../Score/Score";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TrackList from "../TrackList/TrackList";

import './GameInProgress.scss';

export default function GameInProgress({setScore, setWinner, playlist, nextRound, song}) {

  const [roundStatus, setRoundStatus] = useState("not started");


  return (
    <div className="game-in-progress">
      <div className="left-side">
        <MusicPlayer roundStatus={roundStatus} playlist={playlist} song={song} nextRound={() => nextRound()}/>
        <TrackList songs={playlist.songs}/>
      </div>
      <div className="right-side">
        <Score setScore={setScore} setWinner={setWinner}/>
        <Chat />
      </div>
    </div>
  )
}