import React from 'react';
import './Chat.scss';

export default function Chat() {
  return(
    <div className="chat-box">
      <h6>Chat box is here</h6>
      <div className="chat-input-box">
        <input className="chat-input" type="text" placeholder="Type your message"></input>
      </div>
    </div>
  )
}