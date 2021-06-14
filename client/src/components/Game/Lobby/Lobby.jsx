import React from 'react';
// import Ruby from '../../../assets/Ruby_logo.png'
import UserList from '../Chat/UserList';

// Styling
import {
  Typography,
  CardMedia,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
  Button,
} from '@material-ui/core';
import useStyles from './LobbyStyles';
import { withStyles } from '@material-ui/core/styles';
import './Lobby.scss';

const StyledLobbyBtnOne = withStyles({
  root: {
    background: 'linear-gradient(45deg, #867ae9 30%, #2162f3 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: 320,
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
})(Button);

export default function Lobby({ playlist, sendMessage, songs, numberOfSongs, user, users, host, players }) {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("'START_GAME' and list of songs are sent to backend");
    sendMessage('START_GAME', { song: songs[0].title });
  };

  const changeName = (e) => {
    e.preventDefault();
    const newName = e.target.name.value;
    sendMessage('CHANGE_NAME', newName);
    e.target.name.value = '';
  };

  return (
    <>
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
                  <RadioGroup aria-label='difficulty' name='difficulty' value={'medium'}>
                    <FormControlLabel value='medium' control={<Radio />} label='Medium (20 sec)' />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className={classes.songs}>
              <Typography variant='h6'>Number of Songs: {numberOfSongs}</Typography>
            </div>

            {host && (
              <>
                <div className={classes.songs}>
                  <Typography variant='h6'>Host: DJ Dylan</Typography>
                </div>
                <div className={classes.players}>
                  <Typography variant='h6'>Players:</Typography>
                  <UserList {...{ players, user }} />
                </div>
              </>
            )}

            {user.id !== host.id && (
              <div className={classes.changeName}>
                <Typography variant='h6'>Change your name:</Typography>

                <form className='change-name-form' onSubmit={(e) => changeName(e)}>
                  <input className='name-input' type='text' name='name' placeholder='Type your name here'></input>
                  <StyledLobbyBtnOne type='submit' className='change-btn' onSubmit={(event) => changeName(event)}>
                    Change
                  </StyledLobbyBtnOne>
                </form>
              </div>
            )}

              {host && user.id === host.id && (
            <div>
                <div className={classes.btnControl}>
                <StyledCodeBtnTwo type='submit' onClick={(event) => handleSubmit(event)}>
                  Start game
                </StyledCodeBtnTwo>
              </div>
            </div>
              )}
          </div>
        </div>
      </Container>
    </>
  );
}
