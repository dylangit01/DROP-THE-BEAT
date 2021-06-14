import React from 'react';

// Styling
import './Lobby.scss';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    marginLeft: theme.spacing(6),
  },
  divider: {
    background: 'rgba(255, 255, 255, 0.4)',
  },
  gameLink: {
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.8)',
    marginLeft: theme.spacing(6),
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
  listItem: {
    marginLeft: theme.spacing(6),
  },
}));

export default function Lobby({ playlist, sendMessage, songs, numberOfSongs, user, users, host, players }) {
  const classes = useStyles();

  return (
    <>
      {playlist && (
        <div className='lobby'>
          {/* PLAYLIST DETAILS LEFT SIDE */}
          <div className='lobby-left'>
            <Typography variant='h4' gutterBottom>{playlist.playlistName} Playlist</Typography>
            <img src={playlist.playlistPhoto} alt="playlistPhoto"></img>
          </div>

          {/* PLAYLIST DETAILS RIGHT SIDE */}
          <div className='lobby-right'>
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
                      value={'easy'}
                    >
                      <FormControlLabel value='easy' control={<WhiteRadio checked />} label='Easy (30 seconds)' />
                    </RadioGroup>
                  </FormControl>
                </ListItemText>
              </ListItem>
              <Divider variant="middle" component="li" className={classes.divider} />

              {/* Songs */}
              <ListItem >
                <ListItemText>
                  <div className="songs-section">
                    <Typography variant='h5' className={classes.mainHeading}>
                      <Avatar className={classes.icon}><QueueMusicIcon /></Avatar>
                      <span>Songs</span>
                    </Typography>
                    <Typography variant='subtitle1' className={classes.listItem}>Number of Songs: {numberOfSongs}</Typography>
                  </div>
                </ListItemText>
              </ListItem>
              <Divider variant="middle" component="li" className={classes.divider} />
              
              {/* Game Code */}
              <ListItem >
                <ListItemText>
                  <Typography variant='h5' className={classes.mainHeading}>
                    <Avatar className={classes.icon}><LinkIcon /></Avatar>
                    <span>Host</span>
                  </Typography>
                  <div className='host'>
                  </div>
                </ListItemText>
              </ListItem>
            </List>

            {/* Start Game Button */}
            <Button variant="contained" className={classes.button}>Start Game</Button>
          </div>
        </div>
      )}
    </>
  )
}
