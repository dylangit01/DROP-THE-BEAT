import React from 'react';
import './RoundKnown.scss';

export default function RoundKnown({song}) {

  return (
    <div className="round-known">
      <img src={song.albumPhoto} alt="cover" />
    </div>
  );
};