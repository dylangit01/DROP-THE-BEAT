import React, { useState } from 'react';
import './Lobby.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Game from "../Game/Game";

export default function Lobby() {

  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");

  return (
    <div className="lobby">
      <h1>Lobby and players form is here</h1>
      <form>
        <label for="name"> Enter your name:
          <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Type your name"
          value={name}
          onSubmit={event => setName(event.target.value)}
          />
        </label> <br /> <br />
        <label for="emoji"> Choose your emoji:
          <select 
          id="emoji" 
          name="emoji" 
          value={emoji}
          onSubmit={event => setEmoji(event.target.value)}
          >
            <option value="monkey">&#128053;</option>
            <option value="octopus">&#128025;</option>
            <option value="ruby">&#128142;</option>
            <option value="worm">&#128027;</option>
            <option value="bug">&#128030;</option>
          </select>
        </label> <br /> <br />
        <input type="submit" value="Join the game" /> <br />
      </form> <br />
      <Link to="/game">Join game</Link>
      <Route path="/game" exact>
        <Game 
        name={name}
        />
      </Route>
    </div>
  )
}