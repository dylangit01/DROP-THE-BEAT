import React, { useState } from 'react';
import { useParams,  useHistory } from 'react-router-dom';
import { SET_PLAYLIST, SET_DIFFICULT, SET_SELECTED_SONG } from '../../reducer/data_reducer';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Styling
import './PlaylistPage.scss';
import { Typography, CardMedia, FormControl, RadioGroup, FormControlLabel, Radio, IconButton, Menu, MenuItem, Button, Container, TextField, } from '@material-ui/core';
import useStyles from './PlaylistPageStyles';
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
  // const [selectedSong, setSelectedSong] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [code, setCode] = useState('');

  // Handle selected Song
  // const handleSelectedSong = (e) => {
  //   setSelectedSong(e.target.value);
  //   console.log(e.target);
  // }

  // For Difficult control:
  const [difficulty, setDifficulty] = useState('easy');
  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
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

  const handlePlaylistClick = (event) => {
    dispatch({ type: SET_PLAYLIST, playlist: idNum });
    dispatch({ type: SET_DIFFICULT, difficulty: difficulty });
    console.log(difficulty);
    history.push(`/game`);
  };
  // map through the songs

  return (
    <>
      {/* <CssBaseline /> */}
      {playlist && (
        <Container className={classes.root}>
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
                    <RadioGroup aria-label='difficulty' name='difficulty' value={difficulty} onChange={handleDifficulty}>
                      <FormControlLabel value='easy' control={<Radio selected />} label='Easy (10 sec)' />
                      <FormControlLabel value='medium' control={<Radio />} label='Medium (20 sec)' />
                      <FormControlLabel value='difficult' control={<Radio />} label='Difficult (30 sec)' />
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
                    {songs.map((song) => (
                      <MenuItem key={song.id} value={song.title} onClick={handleClose}>
                        {`${song.id}. ${song.title} - ${song.artist}`}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>

              <div className={classes.songs}>
                <Typography>{'xxx'}</Typography>
                <CopyToClipboard text={'xxxx'}>
                  <div>
                    <StyledLobbyBtnOne>COPY CODE</StyledLobbyBtnOne>
                  </div>
                </CopyToClipboard>
              </div>
              <TextField label='CODE' value={code} onChange={(e) => setCode(e.target.value)} fullWidth />

              <div>
                <div className={classes.btnControl}>
                  <StyledCodeBtnTwo onClick={handlePlaylistClick}>START LOBBY</StyledCodeBtnTwo>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
