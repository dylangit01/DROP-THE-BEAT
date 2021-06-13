import './Chat.scss';
import soundIcon from '../../../assets/music-play.png';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import { makeStyles } from '@material-ui/styles';

const MessageList = ({ messages, users }) => {
  const useStyles = makeStyles((theme) => ({
    '@keyframes bingo': {
      '0%': {},
      '50%': {},
      '100%': {
        transform: 'scale(1.2, 1.2)',
      },
      '30%': {},
      '80%': {
        transform: 'scale(1, 1)',
      },
    },
    musicIcon: {
      height: '90%',
    },
    bingo: {
      animation: '$bingo 1s ease 0s infinite',
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
          <b style={{ color: msg.msgColor }} className={ msg.msgColor === '#54e346' &&  classes.bingo}>
            {msg.msg}
          </b>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
