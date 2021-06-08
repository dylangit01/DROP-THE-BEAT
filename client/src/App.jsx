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
import Home from "./components/Home/Home";
import PlaylistsList from "./components/Game/PlaylistsList/PlaylistsList";
import Join from "./components/Join/Join";
import Game from "./components/Game/Game";

function App () {

  const { state, dispatch } = useApplicationData();
  
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));

  return (
    <Router>
      <div className="App" >

        <nav>
          <Link to="/"> Home </Link>
          <Link to="/playlists"> My playlists </Link>
          <Link to="/game"> My game </Link>
        </nav>
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/playlists" exact>
            <PlaylistsList />
          </Route>
          <Route path="/lobby" exact>
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
