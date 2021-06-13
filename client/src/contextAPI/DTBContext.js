import React, { useState, createContext} from 'react'

export const DTBContext = createContext();

export const DTBContextProvider = ({ children }) => {
	const [playLists, setPlayLists] = useState([]);
	const [playList, setPlayList] = useState(null)
	return (
		<DTBContext.Provider value= {{playLists, setPlayLists, playList, setPlayList}}>
			{children}
			</DTBContext.Provider>
		)

}