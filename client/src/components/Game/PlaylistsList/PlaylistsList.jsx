import React from 'react';
import PlaylistsItem from '../PlaylistItem/PlaylistItem';
import './PlaylistsList.scss';

export default function PlaylistsList(props) {

  const playlist = props.playlists.map((playlist) => {
    return <PlaylistsItem
              key={playlist.id}
              name={playlist.playlistName}
              image={playlist.playlistPhoto}>
           </PlaylistsItem>
  })

  return (
    <div className="playlists">
      <h1>I am Playlist List</h1>
      <li>
        {playlist}
      </li>
    </div>
  );
};