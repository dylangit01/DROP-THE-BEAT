const MessageList = (props) => {
  return (
    <ul className='message-list'>
      {props.messages.map((msg) => (
        <li className='message-list--item' key={msg.id}>
          <b style={{ color: msg.color }}>{msg.name}:</b>
          {msg.msg}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
