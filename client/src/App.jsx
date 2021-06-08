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
import Playlists from "./components/Playlists/Playlists";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage";
import Join from "./components/Join/Join";
import Game from "./components/Game/Game";

function App () {

  const { state, dispatch } = useApplicationData();
  
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>));

  return (
    <Router>
      <div className="App" >
        {/* Navbar */}
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/playlists"> My playlists </Link>
          <Link to="/game"> My game </Link>
        </nav>
        
        {/* Navigation Views */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/playlists" exact>
            <Playlists />
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
