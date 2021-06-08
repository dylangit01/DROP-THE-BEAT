import React from 'react';
import {
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './Playlist.scss';
import PlaylistPage from "../../PlaylistPage/PlaylistPage";

export default function Playlist({id, name, image, rating}) {

  const {path} = useRouteMatch();

  return (
    <div className="playlist">
      <br />
      <img src={image} alt={'cover'}></img>
      <p> {name} </p>
      <p> {rating} stars</p>
      <Link to={`${path}/${id}`}>Select</Link>
    </div>
  );
};