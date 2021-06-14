import './Score.scss';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import MusicNoteIcon from '@material-ui/icons/MusicNote';


export default function Score({ setScore, setWinner, user, players, messages }) {
  const useStyles = makeStyles((theme) => ({
    player: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }));

  const classes = useStyles();

  return (
    <div className='score-box'>

      {/* 1st player */}
      {players[0] && (
        <div className='scoreDetail'>
          <Typography variant='h3'>{players[0].score}</Typography>
          <div className={classes.player} style={{ color: players[0].color }}>
            <MusicNoteIcon />
            {players[0].name}
          </div>
        </div>
      )}

      {/* VS */}
      <Typography variant='h4' className='versus'>VS</Typography>

      {/* 2nd player */}
      {players[1] && (
        <div className='scoreDetail'>
          <Typography variant='h3'>{players[1].score}</Typography>
          <div className={classes.player} style={{ color: players[1].color }}>
            <MusicNoteIcon />
            {players[1].name}
          </div>
        </div>
      )}
    </div>
  );
}
