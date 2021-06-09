import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Styles
import './Home.scss';
import Button from '@material-ui/core/Button';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

const useStyles = makeStyles((theme) => ({
  button: {
    background: "linear-gradient(45deg, #9e66f2 30%, #2162f3 90%)",
    color: "white",
    width: 200
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="home">
      <img className="headphones-img" src="https://github.com/dylangit01/DROP-THE-BEAT/blob/ruby/feature/navbar-home/client/public/images/headphones.png?raw=true" alt="headphones" />
        <div className="call-to-action">
          <div>
            <p>Want to host a game?</p>
            <Button variant="contained" className={classes.button} endIcon={<QueueMusicIcon />}><Link to="/playlists">Select a Playlist</Link></Button>
          </div>
          <div>
            <p>Have a game code?</p>
            <Button variant="contained" className={classes.button} endIcon={<ExitToAppOutlinedIcon />}><Link to="/join">Join A Game</Link></Button>
          </div>
        </div>

    </div>
  );
};