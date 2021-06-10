import React from 'react';
import './Lobby.scss';

export default function Lobby({ setIsActive, sendMessage, songs, playlistName}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    // setIsActive(true);
    console.log("'START_GAME' and list of songs are sent to backend");
    
    sendMessage('START_GAME', {songs});
  }

  return (
    <div className="chat">
      <h6>Hello, Players!</h6>
      <p> we are about to play with {playlistName} playlist!</p>
      <button type='submit' onClick={(event) => handleSubmit(event)}>Start game</button>
    </div>
  )
}