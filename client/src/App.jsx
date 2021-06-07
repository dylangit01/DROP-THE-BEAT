import logo from './logo.svg';
import './App.css';
import useApplicationData from './hooks/useApplicationData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";

function App () {

  const {
        state,
        dispatch
    } = useApplicationData();
      const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));



  return (
    <Router>
      <div className="App" >

        <nav>
          <Link to="/playlists"> My playlists </Link>
        </nav>
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/playlists" exact>
            <Playlists />
          </Route>
        </Switch>
        <ul> {userList} </ul>
      </div >
    </Router>

  );
};

export default App;
