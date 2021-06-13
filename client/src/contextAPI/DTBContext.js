import React, { useState, createContext } from 'react';
import { Children } from 'react';

export const DTBContext = createContext();

export const DTBContextProvider = ({ children }) => {
	const [playLists, setPlayLists] = useState([])
	return (
		<DTBContext.Provider value = {playLists}>
			{children}
		</DTBContext.Provider>
	)

}
