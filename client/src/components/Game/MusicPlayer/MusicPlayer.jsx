import React from 'react';
import './MusicPlayer.scss';
import LoadingRound from './LoadingRound/LoadingRound';
import RoundUnknown from './RoundUnknown/RoundUnknown';
import RoundKnown from './RoundKnown/RoundKnown';

// Hard-coded data for now
const roundStart = true;
const roundEnd = true;

export default function MusicPlayer({ playlist }) {
  console.log("playlist in music player", playlist);

  return (
    <div className="music-player">
      <h2>Music player is here</h2>

      {/* Conditional rendering (displays one of these 3) depending on if a round has started */}

      {/* When the current round for a song has just started - this is stretch */}
      {!roundStart && <LoadingRound />}

      {/* When the current song is unknown (hasn't been guessed) */}
      {roundStart && !roundEnd && <RoundUnknown />}

      {/* When a song has been guessed correctly or it's the end of the round */}
      {roundEnd && <RoundKnown />}

      {/* Audio playing music here and the next song button */}
      <div className="music-player-footer">
        <h6>Audio bar with next song button is here</h6>
        <button>Next</button>
      </div>
    </div>
  );
}
