import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";

// Components
import Join from "../Join/Join"

// Styles
import './Home.scss';
import Button from '@material-ui/core/Button';


export default function Home() {
  return (
    <div className="home">
        <img className="headphones-img" src="https://github.com/dylangit01/DROP-THE-BEAT/blob/ruby/feature/navbar-home/client/public/images/headphones.png?raw=true" alt="logo" />

        {/* <Link to="/lobby"> Do you want to join the existing game? </Link> <br />
        <Link to="/login"> Do you want to host a new game? </Link>
        <Route path="/join" exact>
          <Join />
        </Route> */}
        <div className="call-to-action">
          <Button color="inherit"><Link to="/playlists">Choose a Playlist</Link></Button>
          <Button color="inherit"><Link to="/join">Join A Game</Link></Button>
        </div>

    </div>
  );
};