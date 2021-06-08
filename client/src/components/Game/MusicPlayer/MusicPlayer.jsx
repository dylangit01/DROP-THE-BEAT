import React from 'react';
import './MusicPlayer.scss';
import PlaylistsList from "../PlaylistsList/PlaylistsList"

export default function Player(props) {
  return (
    <div className="music-player">
      <h6>Music player is here</h6>
      <PlaylistsList 
        playlists={props.playlists}
      />
    </div>
  )
}