import React, { useState } from 'react';

import Chat from "../Chat/Chat";
import Score from "../Score/Score";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TrackList from "../TrackList/TrackList";

import './GameInProgress.scss';

export default function GameInProgress({ playlist, nextRound, song, round, setRound}) {

  return (
    <div className="game-in-progress">
      <div className="left-side">
        {song && <MusicPlayer 
          round={round}
          setRound={setRound}
          playlist={playlist} 
          song={song} 
          nextRound={() => nextRound()}/>}
        <TrackList round={round} songs={playlist.songs}/>
      </div>
      <div className="right-side">
        <Score />
        <Chat />
      </div>
    </div>
  )
}