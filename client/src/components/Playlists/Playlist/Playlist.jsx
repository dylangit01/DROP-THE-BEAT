import React from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";

// Styling
import './Playlist.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Playlist({id, name, image, rating}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 200,
    },
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
      bottom: '0px',
      left: '0px',
      right: '0px',
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

  // return (
  //   <div className="playlist">
      
  //     <br />
  //     <img className="album-cover" src={image} alt={'cover'}></img>
  //     <p> {name} </p>
  //     <p> {rating} stars</p>
  //     <Link to={`${path}/${id}`}>Select</Link>
  //   </div>
  // );
        // eslint-disable-next-line no-lone-blocks


      // <Button className={classes.button} size="small" >
      //     <Link to={`${path}/${id}`}>Select</Link>
      // </Button>

  return (
    <div className="playlist">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.cover}
            image={image}
            title={name}
          />
          <div className={classes.overlay}>
            <Typography variant="subtitle1" className={classes.playlistName}>{name}</Typography>
          </div>
          <Link to={`${path}/${id}`} />
        </CardActionArea>

      </Card>
      <div className="playlist-footer">
        <Button className={classes.button} >
          <Link to={`${path}/${id}`}>Select</Link>
        </Button>
      </div>
    </div>

  );


};