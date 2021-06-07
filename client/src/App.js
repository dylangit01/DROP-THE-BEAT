import logo from './logo.svg';
import './App.css';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, dispatch } = useApplicationData();
  console.log(state.users);
	const userList = state.users.map((user) => (
		<li key={user.id}>{user.username}: {user.email} </li>
	));
	return (
		<div className='App'>
			<h1> Users </h1>
			<ul> {userList} </ul>
		</div>
	);
};

export default App;
