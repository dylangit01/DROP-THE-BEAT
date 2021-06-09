import React from 'react';
import './MusicPlayer.scss';
import LoadingRound from './LoadingRound/LoadingRound';
import RoundUnknown from './RoundUnknown/RoundUnknown';
import RoundKnown from './RoundKnown/RoundKnown';

// Hard-coded data for now
const roundStart = true;
const roundEnd = true;

export default function MusicPlayer({ playlists }) {
  return (
    <div className="music-player">
      <h2>Music player is here</h2>

      {/* Conditional rendering (displays one of these 3) depending on if a round has started */}

      {!roundStart && <LoadingRound />}
      {roundStart && !roundEnd && <RoundUnknown />}
      {roundEnd && <RoundKnown />}
      

      {/* Audio playing music here and the next song button */}
      <div className="music-player-footer">
        <h6>Audio bar with next song button is here</h6>
        <button>Next</button>
      </div>
    </div>
  );
}
