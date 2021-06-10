import React, { useState } from 'react';
// import { SET_PLAYLIST } from '../../../reducer/data_reducer';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

// Styling
import { Typography, CardMedia, FormControl, RadioGroup, FormControlLabel, Radio, IconButton, Menu, Container, Button, } from '@material-ui/core';
import useStyles from './LobbyStyles';
import ArrowDropDownCircleTwoToneIcon from '@material-ui/icons/ArrowDropDownCircleTwoTone';
import { withStyles } from '@material-ui/core/styles';

const StyledLobbyBtnOne = withStyles({
  root: {
    background: 'linear-gradient(45deg, #867ae9 30%, #f25287 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 50,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: 180,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const StyledCodeBtnTwo = withStyles({
  root: {
    background: 'linear-gradient(45deg, #867ae9 30%, #f25287 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 58,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: 70,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function PlaylistPage({ playlist, dispatch, sendMessage, songs, playlistName }) {
  const classes = useStyles();

  // For songs dropdown menu:
  const ITEM_HEIGHT = 48;
  // const [selectedSong, setSelectedSong] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  // For Difficult control:
  const [difficult, setDifficult] = useState('easy');
  const handleDifficulty = (event) => {
    setDifficult(event.target.value);
  };

  // For dropdown menu control:
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    console.log(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setIsActive(true);
    console.log("'START_GAME' and list of songs are sent to backend");
    sendMessage('START_GAME', { songs });
  };

  return (
    <>
      <Container className={classes.root}>
        <div className={classes.img_playOption}>
          <div>
            <Typography className={classes.title} variant='h3'></Typography>
            <CardMedia className={classes.cover} image={playlist.playlistPhoto} title={playlist.playlistName} />
          </div>
          <div>
            <div className={classes.options}>
              <Typography variant='h6'>Difficulty</Typography>
              <div>
                <FormControl component='fieldset'>
                  <RadioGroup aria-label='difficulty' name='difficulty' value={difficult} onChange={handleDifficulty}>
                    <FormControlLabel value='medium' control={<Radio selected />} label='Medium (20 sec)' />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className={classes.songs}>
              <Typography variant='h6'>Songs</Typography>
              <div>
                <IconButton aria-label='more' aria-controls='long-menu' aria-haspopup='true' onClick={handleClick}>
                  <ArrowDropDownCircleTwoToneIcon className={classes.dropdown} />
                </IconButton>
                <Menu
                  id='long-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.0,
                      width: '30ch',
                      backgroundColor: '#666',
                      color: '#fff',
                      lineHeight: 0,
                    },
                  }}
                >
                  {/* {songs.map((song) => (
                      <MenuItem key={song.id} value={song.title} onClick={handleClose}>
                        {`${song.id}. ${song.title} - ${song.artist}`}
                      </MenuItem>
                    ))} */}
                </Menu>
              </div>
            </div>

            <div className={classes.songs}>
              <Typography>{'xxx'}</Typography>
              {/* <CopyToClipboard text={'xxxx'}> */}
              <div>
                <StyledLobbyBtnOne>COPY CODE</StyledLobbyBtnOne>
              </div>
              {/* </CopyToClipboard> */}
            </div>

            <div>
              <div className={classes.btnControl}>
                <StyledCodeBtnTwo type='submit' onClick={(event) => handleSubmit(event)}>
                  Start game
                </StyledCodeBtnTwo>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
