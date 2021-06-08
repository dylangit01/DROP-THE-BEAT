import React from 'react';
import './Playlists.scss';
import Playlist from "./Playlist/Playlist"

export default function Playlists({playlists}) {
  const playlist = playlists.map((playlist) => {
    return <Playlist 
              key={playlist.playlistId}
              name={playlist.playlistName}
              image={playlist.playlistPhoto}
              rating={playlist.playlistRating}>
          </Playlist>
  })
  return (
    <div className="playlists">
      <h1>Playlists Page</h1>
      <li>{playlist}</li>
    </div>
  );
};