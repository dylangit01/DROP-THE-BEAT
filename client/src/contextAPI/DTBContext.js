import React, { useState, createContext} from 'react'

export const DTBContext = createContext();

export const DTBContextProvider = ({ children }) => {
	const [playlists, setPlaylists] = useState([]);
	const [playlist, setPlaylist] = useState(null)
	return (
		<DTBContext.Provider value= {{playlists, setPlaylists, playlist, setPlaylist}}>
			{children}
			</DTBContext.Provider>
		)

}