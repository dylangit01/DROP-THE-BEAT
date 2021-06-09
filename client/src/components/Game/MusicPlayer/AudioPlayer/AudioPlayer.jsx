import React from 'react';

// Styling
import './AudioPlayer.scss';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

export default function AudioPlayer({song, nextRound}) {
  const classes = useStyles();

  return (
    <div className="audio-player">
      {/* Audio plays automatically on load, remove controls*/}
      <audio
        autoPlay
        controls
        src={song.previewUrl}>
      </audio>
      <IconButton aria-label="next-song" className={classes.margin} onClick={nextRound}>
          <PlayCircleFilledIcon fontSize="large" />
      </IconButton>
    </div>
  );
};