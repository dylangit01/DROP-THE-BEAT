import React from 'react';
import './RoundKnown.scss';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cover: {
    height: 400,
    width: 400,
    borderRadius: "12px"
  }
}));

export default function RoundKnown({song}) {
  const classes = useStyles();

  return (
    <div className="round-known">
      {/* For now, assume someone will always guess song */}
      <h6>SONG - KNOW When a song is guessed or no one guesses (display album and details)</h6>
      <img src={song.albumPhoto} alt="cover" />

    </div>
  );
};