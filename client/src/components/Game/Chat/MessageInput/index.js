import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './index.scss'
const MessageInput = (props) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    props.onSubmit('SEND_MESSAGE',evt.target.message.value);
    evt.target.message.value = '';
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      background: 'linear-gradient(45deg, #9e66f2 30%, #2162f3 90%)',
      color: 'white',
      width: 120,
      height: 40,
      position: 'absolute',
      right: 0,
      borderRadius: '10'
    },
    input: {
      color: '#fff',
    },
  }));

  const classes = useStyles();

  return (
    <form onSubmit={onSubmit} noValidate autoComplete='off' className='messageInput'>
      <div className='chat-input-box'>
        <input className='chat-input' type='text' name='message' placeholder='Type your message' />
        <Button className={classes.button} type='submit'>
          Send!
        </Button>
      </div>
    </form>
  );
};

export default MessageInput;
