import React, { useState, createContext } from 'react';

export const DTBContext = createContext();

export const DTBContextProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [playlist, setPlaylist] = useState(null);
  const [players, setPlayers] = useState([]);
  const [host, setHost] = useState([])
  return (
    <DTBContext.Provider value={{ playlists, setPlaylists, playlist, setPlaylist, players, setPlayers, host, setHost }}>
      {children}
    </DTBContext.Provider>
  );
};
