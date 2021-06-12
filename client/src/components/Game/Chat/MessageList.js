import './Chat.scss';

const MessageList = ({ messages, users }) => {
  console.log('messages: ', messages);
  console.log('users: ', users);

  const getUsernameForMsg = (users, msg) => {
    //   if (users.id === messages.id) {
    //     const xxx = users.find(user => user.name).name
    //     console.log(xxx);
    //     return xxx
    //   }
    //   return
    // }
    const user = users.find((user) => user.id === msg.id);
    if (user) {
      return user.name;
    }
  };

  return (
    <ul className="message-list">
      {messages.map((msg, id) => (
        <li key={id} className="message-list--item">
          <b style={{ color: msg.color }}>{getUsernameForMsg(users, msg)}: </b>
          {/* <b style={{ color: msg.color }}>{msg.name}: </b> */}
          {/* This old way should work and should be good because you don't need the extra step since each msg has the attached name to it :) */}
          {msg.msg} ------- score {msg.score}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
