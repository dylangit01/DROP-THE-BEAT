import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DTBContext } from '../../contextAPI/DTBContext';

// Styling
import './PlaylistPage.scss';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TimelapseIcon from '@material-ui/icons/Timelapse';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: 'white',
    background: 'transparent',
  },
  icon: {
    backgroundColor: 'pink',
  }
}));

export default function PlaylistPage({ dispatch, gameLink }) {
  // const classes = useStyles();
  const history = useHistory();

  const { id } = useParams();
  const idNum = Number(id) - 1;

  // Using ContextAPI to set PlayList
  const { playlists, playlist, setPlaylist } = useContext(DTBContext);

  useEffect(() => {
    setPlaylist(playlists[idNum]);
  }, [playlists, idNum, setPlaylist]);

  const classes = useStyles();

  const handlePlaylistClick = (event) => {
    history.push('/game/12345')
  };

  return (
    <>
      {playlist && (
        <div className='playlist-page'>
          <div className='playlist-page-left'>
            <Typography variant='h4' gutterBottom>{playlist.playlistName} Playlist</Typography>
            <img src={playlist.playlistPhoto} alt="playlistPhoto"></img>
          </div>
          <div className='playlist-page-right'>
            <Typography variant='h4'>Right Side</Typography>
            <List className={classes.root}>
              <ListItem >
                <ListItemAvatar >
                  <Avatar className={classes.icon}>
                    <TimelapseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                <Typography variant='h6'>Difficulty</Typography>

                </ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
      )}
    </>
  )
}
