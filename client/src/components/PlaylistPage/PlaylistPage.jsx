import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DTBContext } from '../../contextAPI/DTBContext';

// Styling
import './PlaylistPage.scss';

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
    <div className='playlist-page'>
      {playlist && (
        <h1>Hi</h1>
      )}
    </div>
  )
}
