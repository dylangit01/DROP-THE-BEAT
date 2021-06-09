import React from 'react';
import './TrackList.scss';

export default function TrackList({setRound, isFinished}) {

  // setRound(10)
  const round = 10;
  if (round === 10) {
    isFinished =true
  }

  return (
    <div className="TrackList">
      <h6>The list of track is down here</h6>
    </div>
  )
}