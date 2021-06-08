import React from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";

// Styling
import './Playlist.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Rating from '@material-ui/core/Rating'; // HAVE TO INSTALL SOMETHING ELSE FOR RATING - leave as stretch
import Box from '@material-ui/core/Box';

export default function Playlist({id, name, image, rating}) {
  const useStyles = makeStyles((theme) => ({
    cover: {
      height: 200,
      width: 200
    },
    button: {
      background: "linear-gradient(45deg, #9e66f2 30%, #2162f3 90%)",
      color: "white",
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: "100px",
      color: 'white',
      backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
   },
   playlistName: {
    padding: theme.spacing(0.5)
   }
  }));

  const { path } = useRouteMatch();

  const classes = useStyles();

  return (
    <div className="playlist">
      <Card className={classes.root}>
        <Link to={`${path}/${id}`}>
          <CardActionArea>
            <CardMedia
              className={classes.cover}
              image={image}
              title={name}
            />
            <div className={classes.overlay}>
              <Typography variant="subtitle1" className={classes.playlistName}>{name}</Typography>
            </div>
            
          </CardActionArea>
        </Link>
      </Card>
      <div className="playlist-footer">
        {/* <Button className={classes.button} >
          <Link to={`${path}/${id}`}>Select</Link>
        </Button> */}
        {/* <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={rating} readOnly />
        </Box> */}
      </div>
    </div>
  );
};