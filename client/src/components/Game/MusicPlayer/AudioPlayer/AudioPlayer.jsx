import React from 'react';
import './AudioPlayer.scss';

export default function AudioPlayer() {
  return (
    <div className="audio-player">
      {/* Audio plays automatically on load, remove controls*/}
      <audio
        autoPlay
        controls
        src="https://p.scdn.co/mp3-preview/ccccb919a088e0d873fe63a3e6d5f8fad7c170d6">
      </audio>
      <button>Next</button>
    </div>
  );
};