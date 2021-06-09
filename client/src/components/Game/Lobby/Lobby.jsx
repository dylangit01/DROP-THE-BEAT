import React from 'react';
import './Lobby.scss';

export default function Lobby({setIsActive, sendMessage, songs}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    // setIsActive(true);
    console.log("inside handleSubmit");
    
    sendMessage('START_GAME', {songs});
  }

  return (
    <div className="chat">
      <h6>Lobby is here</h6>
      <button type='submit' onClick={(event) => handleSubmit(event)}>Start game</button>
    </div>
  )
}