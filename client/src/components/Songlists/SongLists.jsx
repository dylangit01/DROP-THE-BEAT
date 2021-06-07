import React from 'react'
import useApplicationData from './hooks/useApplicationData';

const SongLists = () => {
	const { state, dispatch } = useApplicationData();
	console.log(state.songs);
		const songList = state.songs.map((song) => (
			<li key={song.id}>
				{song}
			</li>
		));
		return (
			<div className='App'>
				<h1> Users </h1>
				<ul> {songList} </ul>
			</div>
		);
}

export default SongLists
