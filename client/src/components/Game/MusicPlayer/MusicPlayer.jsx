import React from 'react';
import './MusicPlayer.scss';
// import LoadingRound from './LoadingRound/LoadingRound';
import RoundUnknown from './RoundUnknown/RoundUnknown';
import RoundKnown from './RoundKnown/RoundKnown';
import AudioPlayer from './AudioPlayer/AudioPlayer';

// Hard-coded data for now
const roundStart = true;
const roundEnd = true;

export default function MusicPlayer({ song, nextRound, roundStatus, playlist }) {
  // console.log("song in music player", song);

  return (
    <div className="music-player">
      <h3>{playlist.playlistName} playlist</h3>

      {/* Conditional rendering (displays one of these 3) depending on if a round has started */}

      {/* When the current round for a song has just started - this is stretch */}
      {/* {!roundStart && <LoadingRound />} */}

      {/* When the current song is unknown (hasn't been guessed) */}
      {roundStart && !roundEnd && <RoundUnknown />}

      {/* When a song has been guessed correctly or it's the end of the round */}
      {roundEnd && <RoundKnown song={song} />}

      {/* Audio playing music here and the next song button */}
      <AudioPlayer song={song} nextRound={nextRound}/>

    </div>
  );
}
