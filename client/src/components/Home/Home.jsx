import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";
import './Home.scss';
import Join from "../Join/Join"

export default function Home() {
  return (
    <div className="home">
        <img className="headphones" src="https://github.com/dylangit01/DROP-THE-BEAT/blob/ruby/feature/navbar-home/client/public/images/headphones.png?raw=true" alt="logo" />

        {/* <Link to="/lobby"> Do you want to join the existing game? </Link> <br />
        <Link to="/login"> Do you want to host a new game? </Link>
        <Route path="/join" exact>
          <Join />
        </Route> */}


    </div>
  );
};