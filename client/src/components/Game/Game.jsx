import React from 'react';
import './Game.scss';

import Lobby from "./Lobby/Lobby";
import Chat from "./Chat/Chat";
import Score from "./Score/Score";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import TrackList from "./TrackList/TrackList";


export default function Game({playlists}) {

  return (
    <div className="game">
      <h1>I am a Game page</h1>
      <Lobby />
      <Chat />
      <Score />
      <MusicPlayer playlists={playlists}/>
      <TrackList />
    </div>

  );
};