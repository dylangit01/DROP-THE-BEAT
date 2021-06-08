import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Styles
import './Home.scss';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    background: "linear-gradient(45deg, #9e66f2 30%, #21CBF3 90%)",
    color: "white",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="home">
      <img className="headphones-img" src="https://github.com/dylangit01/DROP-THE-BEAT/blob/ruby/feature/navbar-home/client/public/images/headphones.png?raw=true" alt="logo" />

        {/* <Link to="/lobby"> Do you want to join the existing game? </Link> <br />
        <Link to="/login"> Do you want to host a new game? </Link>
        <Route path="/join" exact>
          <Join />
        </Route> */}
        <div className="call-to-action">
          <div>
            <p>Want to host a game?</p>
            <Button variant="contained" style={{width: '200px'}} className={classes.button}><Link to="/playlists">Select a Playlist</Link></Button>
          </div>
          <div>
            <p>Have a game code?</p>
            <Button variant="contained" style={{width: '200px'}} className={classes.button}><Link to="/join">Join A Game</Link></Button>
          </div>
        </div>

    </div>
  );
};