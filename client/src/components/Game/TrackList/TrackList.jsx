import React from 'react';
import './TrackList.scss';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

export default function TrackList({round, songs}) {

  // setRound(10)
  // const round = 10;
  // if (round === numberOfRounds) {
  //   isFinished =true
  // }

  const albumCovers = songs.map((song) => {

    // get song's index
    const index = songs.indexOf(song);
    // const currentSong = 3;

    const isCurrent = () => {
      if (index === round) {
        return "tracklist-album-cover--current"
      } else if (index > round) {
        return "tracklist-album-cover--next"
      } else {
        return "tracklist-album-cover--prev"
      }
    }


    return (
      <div key={song.id} className={`tracklist-album-cover ${isCurrent()}`}>
        <img src={song.albumPhoto} alt="cover"></img>
        <HelpOutlineOutlinedIcon className="question-mark"/>
      </div>
    )
  })

  
  return (
    <div className="tracklist">
      {albumCovers}
    </div>
  );
}