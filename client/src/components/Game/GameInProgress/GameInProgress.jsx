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
      <h6>GAME IS IN PROGRESS</h6>
      <Chat />
      <Score setScore={setScore} setWinner={setWinner}/>
      <MusicPlayer roundStatus={roundStatus} playlist={playlist} song={song} nextRound={() => nextRound()}/>
      <TrackList songs={playlist.songs}/>
    </div>
  )
}