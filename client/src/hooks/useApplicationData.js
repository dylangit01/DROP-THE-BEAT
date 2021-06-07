import { useEffect, useReducer } from 'react';
import dataReducer, { SET_USERS } from '../reducer/data_reducer';			// SET_USERS is a constant value
import axios from 'axios';

const useApplicationData = () => {
	// Setup the initial state, but using dispatch to send actions to data_reducer to update the state
	const [state, dispatch] = useReducer(dataReducer, {
		users: [],
		loading: true,
	});

	/**
	 * In below axios call, when receiving the returned data, using "dispatch" with matched type to send the action to data_reducer.js, which will update the global state
	 **/
	useEffect(() => {
		axios({ method: 'GET', url: '/api/users' })
			.then(({ data }) => {
				console.log(data);
				dispatch({ type: SET_USERS, users: data });
			})
			.catch((err) => console.log(err));
	}, []);

	return { state, dispatch };
};

export default useApplicationData;
