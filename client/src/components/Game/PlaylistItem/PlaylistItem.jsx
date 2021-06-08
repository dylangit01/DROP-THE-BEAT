import React from "react";
import "./PlaylistItem.scss"

export default function PlaylistItem(props) {
  return (
    <div className="playlist">
      <p>
        Playlist name: {props.id}
        <br />
      </p>
      <img src={props.playlistPhoto}></img>
    </div>
  )
}