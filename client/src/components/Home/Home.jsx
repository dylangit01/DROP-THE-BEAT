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
      <h1>I am Home again</h1>
      <Link to="/lobby"> Do you want to join the existing game? </Link> <br />
      <Link to="/login"> Do you want to host a new game? </Link>
      <Route path="/join" exact>
        <Join />
      </Route>
    </div>
  );
};