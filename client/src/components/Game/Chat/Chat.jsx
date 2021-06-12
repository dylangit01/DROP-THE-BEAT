import React from 'react';
import './Chat.scss';
import MessageList from './MessageList';
// import UserList from './UserList';

export default function Chat(props) {
  const { user, users, messages } = props;
  return (
    <>
      <div className='chat-layout'>
        {/* <div className='chat-user'>
          <UserList {...{ user, users }} />
        </div> */}
        <div className='chat-msg'>
          <MessageList messages={messages} users={users} user={user} />
        </div>
      </div>
    </>
  );
}
