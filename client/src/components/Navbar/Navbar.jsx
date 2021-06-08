import React from 'react';
import { Link } from "react-router-dom";

// Styles
import './Navbar.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    // Black background with 30% opacity
    background: "rgba(0, 0, 0, 0.3)",
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
        <AppBar position="fixed" className={classes.appBar}>
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
                <Button color="inherit"><Link to="/playlists">Playlists</Link></Button>
                <Button color="inherit"><Link to="/join">Join A Game</Link></Button>
              </div>

              {/* Right Navbar Group */}
              <div className="rightNavbarGroup">
                <Button color="inherit"><Link to="/login">Login</Link></Button>
                <Button color="inherit"><ToggleOnIcon /></Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
  );
};