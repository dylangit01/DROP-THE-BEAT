import React from 'react';
import './TrackList.scss';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

export default function TrackList({setCurrentSong, setRound, isFinished, songs}) {

  // setRound(10)
  const round = 10;
  if (round === 10) {
    isFinished =true
  }

  const albumCovers = songs.map((song) => {

    // get song's index
    const index = songs.indexOf(song);
    const currentSong = 3;

    const isCurrent = () => {
      if (index === currentSong) {
        return "tracklist-album-cover--current"
      } else if (index > currentSong) {
        return "tracklist-album-cover--next"
      } else {
        return "tracklist-album-cover--prev"
      }
    }


    return (
      <div className={`tracklist-album-cover ${isCurrent()}`}>
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