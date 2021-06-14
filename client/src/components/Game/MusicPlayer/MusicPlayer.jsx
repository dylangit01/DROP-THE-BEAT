import React from 'react';
// import LoadingRound from './LoadingRound/LoadingRound';
import RoundUnknown from './RoundUnknown/RoundUnknown';
import RoundKnown from './RoundKnown/RoundKnown';
import AudioPlayer from './AudioPlayer/AudioPlayer';

// Styles
import './MusicPlayer.scss';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import { host } from '../../../../../server/db';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '1rem',
  },
}));

export default function MusicPlayer({ song, nextRound, round, setRound, playlist, sendMessage, host, user }) {
  const classes = useStyles();

  return (
    <div className="music-player">
      <Typography variant="h4" className={classes.title}>{playlist.playlistName} Playlist</Typography>

      {/* Conditional rendering (displays one of these 3) depending on if a round has started */}

      {/* When the current round for a song has just started - this is stretch */}
      {/* {!roundStart && <LoadingRound />} */}

      {/* When the current song is unknown (hasn't been guessed) */}
      {!round.finished && <RoundUnknown />}

      {/* When a song has been guessed correctly or it's the end of the round */}
      {round.finished && <RoundKnown song={song} />}

      {/* Audio playing music here and the next song button */}
      {/* CHECK IF MUSIC PLAYS FOR PLAYERS - might need to move if logic inside audio player */}
      <AudioPlayer
        song={song}
        nextRound={nextRound}
        sendMessage={sendMessage}
        setRound={setRound}
        user={user}
        host={host}
      />
    </div>
  );
}
