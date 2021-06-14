import './Score.scss';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { makeStyles } from '@material-ui/styles';

export default function Score({ setScore, setWinner, user, players, messages }) {
  const useStyles = makeStyles((theme) => ({
    player: {
      fontSize: '15px',
      fontWeight: '30px',
    },
    mIcon: {
      transform: 'scale(1.8)',
    },
  }));

  const classes = useStyles();

  return (
    <div className='score-box'>
      {/* {players.map((user, idx) => ( */}

      {/* 1st player */}
      {players[0] && (
        <div className='scoreDetail'>
          <div className='iconNum'>
            <MusicNoteIcon className={classes.mIcon} style={{ color: players[0].color, width: '30px' }}></MusicNoteIcon>
            <p className='scoreNum' style={{ color: '#54e346' }}>
              {players[0].score}
            </p>
          </div>
          <p className={classes.player} style={{ color: players[0].color }}>
            {players[0].name}
          </p>
        </div>
      )}

      {/* 2nd player */}
      {players[1] && (
        <div className='scoreDetail'>
          <div className='iconNum'>
            <p className='scoreNum' style={{ color: '#54e346' }}>
              {players[1].score}
            </p>
            <MusicNoteIcon className={classes.mIcon} style={{ color: players[1].color, width: '30px' }}></MusicNoteIcon>
          </div>
          <p className={classes.player} style={{ color: players[1].color }}>
            {players[1].name}
          </p>
        </div>
      )}

      {/* ))} */}
    </div>
  );
}
