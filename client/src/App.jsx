import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';

// Hooks
// import useApplicationData from './hooks/useApplicationData';

// Components
import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import Playlists from './components/Playlists/Playlists';

import PlaylistPage from './components/PlaylistPage/PlaylistPage';
import Join from './components/Join/Join';
import Game from './components/Game/Game';
import { useEffect, useContext } from 'react';
import { DTBContext } from './contextAPI/DTBContext';

function App() {
  // const { state, dispatch } = useApplicationData();
  // const history = useHistory();

  // USING useEffect & CONTEXT-API TO FETCH PLAYLISTS:
  const {playList, playLists, setPlayLists } = useContext(DTBContext);
  useEffect(() => {
    const fetchPlayLists = async () => {
      try {
        const res = await axios({ method: 'GET', url: '/api/playlists' });
        console.log(res);
        setPlayLists(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPlayLists();
  }, []);

  // Get currently selected playlist if it exists
  // const currentPlaylist = playLists.find((playlist) => playlist.playlistId === state.playlist);

  return (
    <Router>
      <div className='App'>
        {/* Navbar */}
        <Navbar />

        {/* Navigation Routes */}
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/playlists' exact>
            <Playlists playlists={playLists} />
          </Route>

          <Route path='/playlists/:id' exact>
            <PlaylistPage playlists={playLists} />
          </Route>

          <Route path='/join' exact>
            <Join />
          </Route>

          <Route path='/game' exact>
            {playList && <Game playlist={playList} />}
            {/* {!currentPlaylist && history.push(`/`)} */}
            {/* ABOVE DOESN'T WORK?! Want to redirect to home page if there's no playlist selected in the state*/}
          </Route>

          <Route path='*'>
            <h2>404 - Page Not Found</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
