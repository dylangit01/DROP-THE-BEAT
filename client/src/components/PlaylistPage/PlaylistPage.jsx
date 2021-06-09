import React from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { SET_PLAYLIST } from '../../reducer/data_reducer'

// Styling
import './PlaylistPage.scss'
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@material-ui/core'
import useStyles from './PlaylistPageStyles'

// Need a handleClick function that will store the current playlist ID in the state

export default function PlaylistPage({ playlists, dispatch }) {
  const classes = useStyles()
  const history = useHistory()

  const { id } = useParams()
  const idNum = Number(id)
  const playlist = playlists.find((playlist) => playlist.playlistId === idNum) // How to fix this to ===?

  const handleClick = (event) => {
    dispatch({ type: SET_PLAYLIST, playlist: idNum })
    history.push(`/game`)
  }
  // map through the songs

  return (
    <>
      {/* <CssBaseline /> */}
      {playlist && (
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h3' align='center'>
              {playlist.playlistName}
            </Typography>
          </Container>
          <Container className={classes.cardGrid} maxWidth='md'>
            <Grid container spacing={5}>
              <Grid item>
                <Card className={classes.card}>
                  <CardMedia className={classes.cover} image={playlist.playlistPhoto} title={playlist.playlistName} />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>

        // <div className="playlist-page">
        //

        //   <Card className={classes.root}>

        //     <CardMedia
        //       className={classes.cover}
        //       image={playlist.playlistPhoto}
        //       title={playlist.playlistName}
        //     />
        //   </Card>

        //   <img className="album-cover" src={playlist.playlistPhoto} alt="cover"></img>
        //   <p>Difficulty:</p>
        //   <p>Songs:</p>
        //   <p>Code:</p>
        //   {/* <Link to="/game">Start game</Link> */}
        //   <button onClick={(event) => handleClick(event)}>START GAME - UPDATE STATE WITH PLAYLIST ID</button>
        // </div>
      )}
    </>
  )
}
