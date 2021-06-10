import React, { useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { SET_PLAYLIST } from '../../reducer/data_reducer';

// Styling
import './PlaylistPage.scss';
import {
  Typography,
  CardMedia,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import useStyles from './PlaylistPageStyles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

// Need a handleClick function that will store the current playlist ID in the state

// const songs = playlists

export default function PlaylistPage({ playlists, dispatch }) {
  const classes = useStyles();
  const history = useHistory();

  const { id } = useParams();
  const idNum = Number(id);
  const playlist = playlists.find((playlist) => playlist.playlistId === idNum);

  // For songs dropdown menu:
  const songs = playlists[idNum]?.songs;
  const ITEM_HEIGHT = 48;

 const [anchorEl, setAnchorEl] = useState(null);
 const open = Boolean(anchorEl);

 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
   setAnchorEl(null);
 };


  const handlePlaylistClick = (event) => {
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
                <Typography variant='h6'>Difficulty</Typography>
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
                <Typography variant='h6'>Songs</Typography>
                <div>
                  <IconButton aria-label='more' aria-controls='long-menu' aria-haspopup='true' onClick={handleClick}>
                    <ArrowDropDownCircleIcon className={classes.dropdown} />
                  </IconButton>
                  <Menu
                    id='long-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                      },
                    }}
                  >
                    {songs.map((song) => (
                      <MenuItem MenuProps={{ classes: { paper: classes.select } }} key={song.id} onClick={handleClose}>
                        {song.title}
                      </MenuItem>
                    ))}
                  </Menu>
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
