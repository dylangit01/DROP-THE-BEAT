import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DTBContext } from '../../contextAPI/DTBContext';

// Styling
import './PlaylistPage.scss';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


// Icons
import IconButton from '@material-ui/core/IconButton';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LinkIcon from '@material-ui/icons/Link';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const WhiteRadio = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: 'MediumPurple',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: 'white',
    background: 'transparent',
  },
  icon: {
    background: 'linear-gradient(45deg, #9e66f2 30%, #2162f3 90%)',
    marginRight: theme.spacing(1),
    // background: 'transparent',
  },
  mainHeading: {
    display: 'flex',
    alignItems: 'center',
  },
  difficulty: {
    marginLeft: theme.spacing(5),
  },
  divider: {
    background: 'rgba(255, 255, 255, 0.5)',
  },
  gameLink: {
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.8)',
    marginLeft: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    fontSize: theme.spacing(2),
    width: "70%",
    height: '25px',
    outline: 'none',
    border: 'none',
  },
  button: {
    background: "linear-gradient(45deg, #9e66f2 30%, #2162f3 90%)",
    color: "white",
    marginBottom: theme.spacing(3),
  },
}));

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

  // For Difficult control:
  const [difficulty, setDifficulty] = useState('easy');
  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handlePlaylistClick = (event) => {
    history.push('/game/12345')
  };

  return (
    <>
      {playlist && (
        <div className='playlist-page'>
          {/* PLAYLIST DETAILS LEFT SIDE */}
          <div className='playlist-page-left'>
            <Typography variant='h4' gutterBottom>{playlist.playlistName} Playlist</Typography>
            <img src={playlist.playlistPhoto} alt="playlistPhoto"></img>
          </div>

          {/* PLAYLIST DETAILS RIGHT SIDE */}
          <div className='playlist-page-right'>
            <List className={classes.root}>
              {/* Difficulty */}
              <ListItem >
                <ListItemText>
                  <Typography variant='h5' className={classes.mainHeading}>
                    <Avatar className={classes.icon}><TimelapseIcon /></Avatar>
                    <span>Difficulty</span>
                  </Typography>
                  <FormControl component='fieldset' className={classes.difficulty}>
                    <RadioGroup
                      aria-label='difficulty'
                      name='difficulty'
                      value={difficulty}
                      onChange={handleDifficulty}
                    >
                      <FormControlLabel value='easy' control={<WhiteRadio selected />} label='Easy (30 seconds)' />
                      <FormControlLabel value='medium' control={<WhiteRadio />} label='Medium (20 seconds)' />
                      <FormControlLabel value='difficult' control={<WhiteRadio />} label='Difficult (10 seconds)' />
                    </RadioGroup>
                  </FormControl>
                </ListItemText>
              </ListItem>
              <Divider variant="middle" component="li" className={classes.divider} />

              {/* Songs */}
              <ListItem >
                <ListItemText>
                  <Typography variant='h5' className={classes.mainHeading}>
                    <Avatar className={classes.icon}><QueueMusicIcon /></Avatar>
                    <span>Songs</span>
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider variant="middle" component="li" className={classes.divider} />
              
              {/* Game Code */}
              <ListItem >
                <ListItemText>
                  <Typography variant='h5' className={classes.mainHeading}>
                    <Avatar className={classes.icon}><LinkIcon /></Avatar>
                    <span>Game Code</span>
                  </Typography>
                  <div className='game-code-section'>
                    <input type="text" name="gameLink" className={classes.gameLink} value="12345"></input>
                    <IconButton color="inherit" aria-label="copy" component="span"><FileCopyIcon /></IconButton>
                  </div>
                </ListItemText>
              </ListItem>
            </List>

            {/* Start Game Button */}
            <Button variant="contained" className={classes.button} onClick={handlePlaylistClick}>Start Game</Button>
          </div>
        </div>
      )}
    </>
  )
}
