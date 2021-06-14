import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DTBContext } from '../../contextAPI/DTBContext';

// Styling
import './PlaylistPage.scss';
import Typography from '@material-ui/core/Typography';

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

  const handlePlaylistClick = (event) => {
    history.push('/game/12345')
  };

  return (
    <>
      {playlist && (
        <div className='playlist-page'>
          <div className='playlist-page-left'>
            <Typography variant='h4'>{playlist.playlistName} Playlist</Typography>
            <img src={playlist.playlistPhoto} alt="playlistPhoto"></img>
          </div>
          <div className='playlist-page-right'>
            <Typography variant='h4'>Right Side</Typography>
            
          </div>
        </div>
      )}
    </>
  )
}
