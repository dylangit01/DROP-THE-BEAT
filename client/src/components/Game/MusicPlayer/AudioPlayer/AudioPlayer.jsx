import React from 'react';
import './AudioPlayer.scss';

export default function AudioPlayer({song, setRound}) {
  return (
    <div className="audio-player">
      {/* Audio plays automatically on load, remove controls*/}
      <audio
        autoPlay
        controls
        src={song.previewUrl}>
      </audio>
      <button>Next</button>
    </div>
  );
};