import React from 'react';

// Styling
import './AudioPlayer.scss';
import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    background: "linear-gradient(45deg, #9e66f2 30%, #2162f3 90%)",
    color: "white",
    width: 100,
    margin: theme.spacing(1),
  },
}));

export default function AudioPlayer({song, nextRound, setRound}) {
  const classes = useStyles();

  return (
    <div className="audio-player">
      {/* Audio plays automatically on load, remove controls*/}
      <audio
        id="song-audio"
        autoPlay
        controls
        onEnded={() => setRound(prev => {return {...prev, finished: true}})} //disable guessing, reveal song if not revealed
        // volume={0.5}
        src={song.previewUrl}>
      </audio>

      <Button className={classes.button} endIcon={<SkipNextIcon/>} onClick={nextRound}>Next</Button>
      
    </div>
  );
};