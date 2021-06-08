import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Hooks
import useApplicationData from './hooks/useApplicationData';

// Components
import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import Playlists from "./components/Playlists/Playlists";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
import Join from "./components/Join/Join";
import Game from "./components/Game/Game";

function App () {

  const { state, dispatch } = useApplicationData();
  console.log('State' + state)
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));

  return (
    <Router>
      <div className="App" >
        <Navbar />
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/playlists" exact>
            <Playlists playlists={state.playlists}/>
          </Route>

          <Route path="/playlists/:id" exact>
            <PlaylistPage />
          </Route>

          <Route path="/join" exact>
            <Join />
          </Route>

          <Route path="/game" exact>
            <Game />
          </Route>
        </Switch>
      </div >
    </Router>
  );
};

export default App;
