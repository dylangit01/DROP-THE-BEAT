import React from 'react';
import './PlaylistPage.scss';
import { useParams, Link } from 'react-router-dom';

export default function PlaylistPage({playlists}) {

  const { id } = useParams();
  const playlist = playlists.find(playlist => playlist.playlistId == id)

  // map through the songs 

  return (

      <div className="playlist-page">
        <h1>I am PlaylistPage</h1>
        <h3>{playlist.playlistName}</h3>
        <img className="album-cover" src={playlist.playlistPhoto} alt="cover"></img>
        <p>Difficulty:</p>
        <p>Songs:</p>
        <p>Code:</p>
        <Link to="/game">Start game</Link>
      </div>

  );
};