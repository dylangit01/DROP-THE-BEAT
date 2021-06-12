import React, {useState} from 'react';
// import { SET_PLAYLIST } from '../../../reducer/data_reducer';
import Ruby from '../../../assets/Ruby_logo.png'

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
  }
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
  }
})(Button);

export default function Lobby({ playlist, dispatch, sendMessage, songs, numberOfSongs }) {
  const classes = useStyles();

  const [name1, setName1] = useState('RubyOffTheRails');
  const [name2, setName2] = useState('NellyCuteAsBtn');
  // const [room, setRoom] = useState('')

  // console.log(numberOfSongs);

  const handleSubmit = (event, name1, name2) => {
    event.preventDefault();
    console.log("'START_GAME' and list of songs are sent to backend");
    sendMessage('START_GAME', { song:songs[0].title, name1, name2 });
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

            <div className={classes.songs}>
              <Typography variant='h6'>Host: DJ Dylan</Typography>
            </div>

            <div className={classes.players}>
              <Typography variant='h6'>Players:</Typography>
              <Typography variant='h6'>
                <img style={{ width: '20px' }} src={Ruby} alt='' value={'RubyOffTheRails'} onChange={(e)=>setName1(e.target.value)} /> RubyOffTheRails
              </Typography>
              <Typography variant='h6'>
                <img style={{ width: '20px' }} src={Ruby} alt='' value={'NellyCuteAsBtn'} onChange={(e)=>setName2(e.target.value)}/> NellyCuteAsBtn
              </Typography>
            </div>

            <div>
              <div className={classes.btnControl}>
                <StyledCodeBtnTwo type='submit' onClick={(event) => handleSubmit(event, name1, name2)}>
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
