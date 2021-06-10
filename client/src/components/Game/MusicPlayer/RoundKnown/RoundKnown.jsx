import React from 'react';
import './RoundKnown.scss';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cover: {
    width: "30vw",
    height: "auto",
    borderRadius: "12px"
  }
}));


export default function RoundKnown({song}) {

  const classes = useStyles();

  return (
    <div className="round-known">
      {/* <img src={song.albumPhoto} alt="cover" /> */}
      {/* For now, assume someone will always guess song */}
      <img className={classes.cover} src={song.albumPhoto} alt="cover"></img>
    </div>
  );
};