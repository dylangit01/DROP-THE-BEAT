import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DTBContext } from '../../contextAPI/DTBContext';

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
  Button,
  Container,
} from '@material-ui/core';
import useStyles from './PlaylistPageStyles';
import ArrowDropDownCircleTwoToneIcon from '@material-ui/icons/ArrowDropDownCircleTwoTone';
import { withStyles } from '@material-ui/core/styles';

const StyledLobbyBtnOne = withStyles({
  root: {
    background: 'linear-gradient(45deg, #867ae9 30%, #2162f3 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 50,
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: 180,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const StyledCodeBtnTwo = withStyles({
  root: {
    background: 'linear-gradient(45deg, #867ae9 30%, #2162f3 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 58,
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: 70,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

// Need a handleClick function that will store the current playlist ID in the state

export default function PlaylistPage({ dispatch, gameLink }) {
  const classes = useStyles();
  const history = useHistory();

  const { id } = useParams();
  const idNum = Number(id) - 1;
  // Using ContextAPI to set PlayList
  const { playlists, playlist, setPlaylist } = useContext(DTBContext);

  useEffect(() => {
    setPlaylist(playlists[idNum]);
  }, [playlists, idNum, setPlaylist]);

  // For songs dropdown menu:
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);

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
  };

  const handlePlaylistClick = (event) => {
    history.push('/game/12345')
  };

  return (
    <>
      {/* <CssBaseline /> */}
      {playlist && (
        <Container className={classes.root}>
          <div className={classes.img_playOption}>
            <div>
              <Typography className={classes.title} variant='h4'>
                {playlist.playlistName} Playlist
              </Typography>
              <CardMedia className={classes.cover} image={playlist.playlistPhoto} title={playlist.playlistName} />
            </div>
            <div>
              <div className={classes.options}>
                <Typography variant='h6'>Difficulty</Typography>
                <div>
                  <FormControl component='fieldset'>
                    <RadioGroup
                      aria-label='difficulty'
                      name='difficulty'
                      value={difficulty}
                      onChange={handleDifficulty}
                    >
                      <FormControlLabel value='easy' control={<Radio />} label='Easy (30 sec)' />
                      <FormControlLabel value='medium' control={<Radio />} label='Medium (20 sec)' />
                      <FormControlLabel value='difficult' control={<Radio selected />} label='Difficult (10 sec)' />
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
                        backgroundColor: 'rgba(30, 30, 30, 1)',
                        color: '#fff',
                        lineHeight: 0,
                      },
                    }}
                  >
                    {playlist.songs.map((song) => (
                      <MenuItem key={song.id} value={song.title} onClick={handleClose}>
                        {`${song.title} - ${song.artist}`}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>

              <div className={classes.songs}>
                <Typography variant='h6'>{gameLink}12345</Typography>
                <div>
                  <StyledLobbyBtnOne>COPY CODE</StyledLobbyBtnOne>
                </div>
              </div>
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
