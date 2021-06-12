import './Chat.scss'

const MessageList = (props) => {
  const { messages, users } = props;
  console.log('messages: ', messages)
  console.log('users: ', users)
  return (
    <ul className='message-list'>
      {messages.map((msg, idx) => (
        <li key={idx} className='message-list--item'>
          <b style={{ color: msg.color }}>{msg.name}: </b>
          {msg.msg} ------- score {msg.score}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
