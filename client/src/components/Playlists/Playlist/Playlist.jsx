import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Playlist.scss';
import PlaylistPage from "../../PlaylistPage/PlaylistPage";

export default function Playlist({name, image, rating}) {
  return (
    <div className="playlist">
      <br />
      <img src={image}></img>
      <p> {name} </p>
      <p> {rating} stars</p>
      <Link to="/playlist">Select</Link>
      <Route path="/playlist" exact>
        <PlaylistPage />
      </Route>
    </div>
  );
};