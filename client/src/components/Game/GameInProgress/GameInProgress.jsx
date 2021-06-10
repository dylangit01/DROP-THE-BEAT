import React, { useState } from 'react';

import Chat from "../Chat/Chat";
import Score from "../Score/Score";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TrackList from "../TrackList/TrackList";

import './GameInProgress.scss';

export default function GameInProgress({ playlist, nextRound, song, round, setRound}) {

  // roundFinished state -> false
  const [roundStatus, setRoundStatus] = useState(false);

  // set to true when audio is done in music player

  return (
    <div className="game-in-progress">
      <div className="left-side">
        {song && <MusicPlayer 
          round={round}
          setRound={setRound}
          playlist={playlist} 
          song={song} 
          nextRound={() => nextRound()}/>}
        <TrackList round={round.number} songs={playlist.songs}/>
      </div>
      <div className="right-side">
        <Score />
        <Chat />
      </div>
    </div>
  )
}