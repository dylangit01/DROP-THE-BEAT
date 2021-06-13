import React from 'react';

import Chat from "../Chat/Chat";
import Score from "../Score/Score";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import TrackList from "../TrackList/TrackList";
import './GameInProgress.scss';
import MessageInput from '../Chat/MessageInput/index'

  
export default function GameInProgress({ playlist, nextRound, song, round, setRound,user, users, messages, sendMessage, host, players}) {

  return (
    <div className='game-in-progress'>
      <div className='left-side'>
        {song && (
          <MusicPlayer
            round={round}
            setRound={setRound}
            playlist={playlist}
            song={song}
            nextRound={() => nextRound()}
            sendMessage={sendMessage}
            user={user}
            host={host}
            players={players}
          />
        )}
        <TrackList round={round} songs={playlist.songs} />


      </div>
      <div className='right-side'>
        <Score {...{ user, players, messages }} />
        <Chat {...{ user, users, messages }} />
        <MessageInput onSubmit={sendMessage} />
      </div>
    </div>
  );
}