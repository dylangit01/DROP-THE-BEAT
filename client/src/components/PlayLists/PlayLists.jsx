import React from 'react'
import useApplicationData from './hooks/useApplicationData';

const PlayLists = () => {
	const { state, dispatch } = useApplicationData();
	console.log(state.playlists);
	const playlist = state.playlists.map((playlist) => <li key={playlist.id}>{playlist}</li>);
	return (
		<div className='App'>
			<h1> Users </h1>
			<ul> {playlist} </ul>
		</div>
	);
}

export default PlayLists
