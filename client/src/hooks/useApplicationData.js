import { useEffect, useReducer } from 'react';
import dataReducer, { SET_USERS } from '../reducer/data_reducer';			// SET_USERS is a constant value
import axios from 'axios';

const useApplicationData = () => {
	const [state, dispatch] = useReducer(dataReducer, {
		users: [],
		loading: true,
	});

	useEffect(() => {
		axios({ method: 'GET', url: '/api/users', })
			.then(({ data }) => {
				console.log(data);
				dispatch({ type: SET_USERS, users: data });
			})
			.catch((err) => console.log(err));
	}, []);

	return { state, dispatch, };
};

export default useApplicationData;
