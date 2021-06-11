

const MessageInput = (props) => {
	
  const onSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit(evt.target.message.value);
    evt.target.message.value = '';
  };

  return (
    <form onSubmit={onSubmit} className='messageInput'>
      <div className='chat-input-box'>
        <input className='chat-input' type='text' placeholder='Type your message'></input>
        <button>Send!</button>
      </div>
    </form>
  );
};

export default MessageInput;
