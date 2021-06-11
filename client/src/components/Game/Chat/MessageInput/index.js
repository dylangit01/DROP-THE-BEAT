
const MessageInput = (props) => {
	
  const onSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit('SEND_MESSAGE',evt.target.message.value);
    evt.target.message.value = '';
  };

  return (
    <form onSubmit={onSubmit} className='messageInput'>
      <div className='chat-input-box'>
        <input className='chat-input' type='text' name='message' placeholder='Type your message' />
        <button>Send!</button>
      </div>
    </form>
  );
};

export default MessageInput;
