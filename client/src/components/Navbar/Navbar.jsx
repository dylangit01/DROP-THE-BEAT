import React from 'react';
import { Link } from "react-router-dom";

// Styles
import './Navbar.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black",
    opacity: "50%" 
  },
  musicButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <nav>
        <h1>I am Navbar</h1>
        <Link to="/"> Home    </Link>
        <Link to="/playlists"> My playlists    </Link>
        <Link to="/game"> My game    </Link>
      </nav> */}
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <div className="mainNavbarGroup">
              {/* Left Navbar Group */}
              <div className="leftNavbarGroup">
                <MusicNoteIcon fontSize="large" />
                <Button>
                  <Typography variant="h6" className={classes.title}>
                    <Link to="/">DROP THE BEAT</Link>
                  </Typography>
                </Button>
              </div>

              {/* Right Navbar Group */}
              <div className="rightNavbarGroup">
                <Button color="inherit">Login</Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
  );
};