import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Game.scss';
import Chat from "./Chat/Chat";
import Score from "./Score/Score";
import Player from "./Player/Player";
import TrackList from "./TrackList/TrackList";


export default function Game() {

  const playlists = [
    {
      id: 1,
      name: 'Pandemic',
      imageURL: "https://github.com/dylangit01/DROP-THE-BEAT/blob/main/client/public/images/playlist/beyonce.jpeg?raw=true",
      songs: [1, 2],
      rating: 4,
    },
    {
      id: 2,
      name: 'Christmas',
      imageURL: 'https://github.com/dylangit01/DROP-THE-BEAT/blob/main/client/public/images/playlist/christmas.jpg?raw=true',
      songs: [1, 3],
      rating: 5,
    },
  ];

  return (
    <div className="game">
      <h1>I am a Game page</h1>
      <Chat />
      <Score />
      <Player 
        playlists={playlists}
      />
      <TrackList />
    </div>

  );
};