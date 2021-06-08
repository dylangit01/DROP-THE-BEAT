import React from "react";
import "./PlaylistItem.scss"

export default function PlaylistItem(props) {
  return (
    <div className="playlist">
      <p>
        Playlist name: {props.name}
        <br />
      </p>
      <img src={props.image}></img>
    </div>
  )
}