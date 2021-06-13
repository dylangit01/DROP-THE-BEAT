import './Chat.scss';
import soundIcon from '../../../assets/music-play.png'
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import { makeStyles } from '@material-ui/styles';

const MessageList = ({ messages, users }) => {
  const useStyles = makeStyles((theme) => ({
    musicIcon: {
      height: '90%',
      

      
      // display: 'flex',
      // justifyContent: 'column',

    },
  }));


  const getUsernameForMsg = (users, msg) => {
    const user = users.find((user) => user.id === msg.id);
    if (user) {
      return user.name;
    }
  };

  const classes = useStyles();

  return (
    <ul className='message-list'>
      {messages.map((msg, idx) => (
        <li key={idx} className='message-list--item'>
          <MusicNoteRoundedIcon style={{ color: msg.color }} className={classes.musicIcon}></MusicNoteRoundedIcon>
          <b style={{ color: msg.color }}>{getUsernameForMsg(users, msg)}: &nbsp; </b>
          <b>{msg.msg}</b> ------- score {msg.score}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
