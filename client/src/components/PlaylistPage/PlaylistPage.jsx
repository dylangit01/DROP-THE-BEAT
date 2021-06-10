import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { SET_PLAYLIST } from '../../reducer/data_reducer';

// Styling
import './PlaylistPage.scss';
import { Typography,  CardMedia,  FormControl,  RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import useStyles from './PlaylistPageStyles';

// Need a handleClick function that will store the current playlist ID in the state

// const songs = playlists

export default function PlaylistPage({ playlists, dispatch }) {
  const classes = useStyles();
  const history = useHistory();



  const { id } = useParams();
  const idNum = Number(id);
  const playlist = playlists.find((playlist) => playlist.playlistId === idNum); 
  const songs = playlists[idNum]?.songs

  const handleClick = (event) => {
    dispatch({ type: SET_PLAYLIST, playlist: idNum });
    history.push(`/game`);
  };
  // map through the songs

  return (
    <>
      {/* <CssBaseline /> */}
      {playlist && (
        <div className={classes.root}>
          <div className={classes.img_playOption}>
            <div>
              <Typography className={classes.title} variant='h3'>
                {playlist.playlistName}
              </Typography>
              <CardMedia className={classes.cover} image={playlist.playlistPhoto} title={playlist.playlistName} />
            </div>
            <div>
              <div className={classes.options}>
                <Typography  variant='h6'>
                  Difficulty
                </Typography>
                <div>
                  <FormControl component='fieldset'>
                    <RadioGroup aria-label='gender' name='gender1'>
                      <FormControlLabel value='female' control={<Radio />} label='Easy (10 sec)' />
                      <FormControlLabel value='male' control={<Radio />} label='Medium (20 sec)' />
                      <FormControlLabel value='other' control={<Radio />} label='Difficult (30 sec)' />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className={classes.songs}>
              
                <Typography variant='h6'>
                  Songs
                </Typography>
                <div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        // <div className="playlist-page">
        //

        //   <Card className={classes.root}>

        //     <CardMedia
        //       className={classes.cover}
        //       image={playlist.playlistPhoto}
        //       title={playlist.playlistName}
        //     />
        //   </Card>

        //   <img className="album-cover" src={playlist.playlistPhoto} alt="cover"></img>
        //   <p>Difficulty:</p>
        //   <p>Songs:</p>
        //   <p>Code:</p>
        //   {/* <Link to="/game">Start game</Link> */}
        //   <button onClick={(event) => handleClick(event)}>START GAME - UPDATE STATE WITH PLAYLIST ID</button>
        // </div>
      )}
    </>
  );
}
