import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Styling
import './PlaylistPage.scss';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';

export default function PlaylistPage({playlists}) {

  const { id } = useParams();
  const playlist = playlists.find(playlist => playlist.playlistId == id);

  // map through the songs 

  return (
    <> 
      {playlist && (
        <div className="playlist-page">



          <Typography variant="h3">{playlist.playlistName}</Typography>
          <img className="album-cover" src={playlist.playlistPhoto} alt="cover"></img>
          <p>Difficulty:</p>
          <p>Songs:</p>
          <p>Code:</p>
          <Link to="/game">Start game</Link>
        </div>
      )}
    </>
  );
};