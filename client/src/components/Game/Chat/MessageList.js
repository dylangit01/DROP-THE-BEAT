import './Chat.scss';

const MessageList = ({ messages, users }) => {
  console.log('messages: ', messages);
  console.log('users: ', users);

  const getUsernameForMsg = (users, msg) => {
    const user = users.find((user) => user.id === msg.id);
    if (user) {
      return user.name;
    }
  };

  return (
    <ul className='message-list'>
      {messages.map((msg, idx) => (
        <li key={idx} className='message-list--item'>
          <b style={{ color: msg.color }}>{getUsernameForMsg(users, msg)}: </b>
          {msg.msg} ------- score {msg.score}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
