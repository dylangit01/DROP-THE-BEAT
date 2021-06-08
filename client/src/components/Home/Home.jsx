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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/lobby"> Do you want to join the existing game? </Link> <br />
        <Link to="/login"> Do you want to host a new game? </Link>
        <Route path="/join" exact>
          <Join />
        </Route>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
};