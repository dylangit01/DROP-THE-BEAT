import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Styling
import './PlaylistPage.scss';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles((theme) => ({
  root: {
    width:'fit-content',
  },
  cover: {
    height: 400,
    width: 400
  }
}));


export default function PlaylistPage({playlists}) {
  const classes = useStyles();

  const { id } = useParams();
  const playlist = playlists.find(playlist => playlist.playlistId == id);

  // map through the songs 

  return (
    <> 
      {playlist && (
        <div className="playlist-page">
          <Typography variant="h3">{playlist.playlistName}</Typography>

          <Card className={classes.root}>
            
            <CardMedia
              className={classes.cover}
              image={playlist.playlistPhoto}
              title={playlist.playlistName}
            />
          </Card>

          <img className="album-cover" src={playlist.playlistPhoto} alt="cover"></img>
          <p>Difficulty:</p>
          <p>Songs:</p>
          <p>Code:</p>
          <Link to="/game">Start game</Link>
        </div>
      )}
    </>
  );
};