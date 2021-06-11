import React, { useState } from 'react';

import Chat from "../Chat/Chat";
import Score from "../Score/Score";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TrackList from "../TrackList/TrackList";

import './GameInProgress.scss';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
// import MuiAlert from '@material-ui/lab/Alert';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export default function GameInProgress({ playlist, nextRound, song, round, setRound}) {
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="game-in-progress">
      <div className="left-side">
        {song && <MusicPlayer 
          round={round}
          setRound={setRound}
          playlist={playlist} 
          song={song} 
          nextRound={() => nextRound()}/>}
        <TrackList round={round} songs={playlist.songs}/>

            {/* THIS IS TEMPORARY, JUST TRYING TO PLAY AROUND WITH NOTIFICATIONS :)  */}
            {/* Displaying winner notification for the round */}
            <button onClick={handleClick(TransitionDown)}>Down</button>

            <Snackbar
              open={open}
              onClose={handleClose}
              TransitionComponent={transition}
              message="I love snacks"
            />
      </div>
      <div className="right-side">
        <Score />
        <Chat />
      </div>


    </div>
  )
}