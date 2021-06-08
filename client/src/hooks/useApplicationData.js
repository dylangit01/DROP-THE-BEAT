import { useEffect, useReducer } from 'react';
import dataReducer, { SET_PLAYLISTS, SET_SONGS } from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    playlists: [],
    loading: true,
  });
  useEffect(() => {
    // Get all playlists and songs for a user (hard-coded)
    // Promise.all([axios.get('/api/playlists'), axios.get('/api/songs')])
    //   .then((all) => {
    //     const [playlistsResponse, songsResponse] = all;
    //     const playlistsData = playlistsResponse.data;
    //     const songsData = songsResponse.data;

    //     // console.log(playlistsData);
    //     // console.log(songsData);

    //     dispatch({ type: SET_PLAYLISTS, playlists: playlistsData });
    //     dispatch({ type: SET_SONGS, songs: songsData });
    //   })
    //   .catch((error) => {
    //     console.log('Error: ', error);
    //   });
    axios({
      method: 'GET',
      url: '/api/songs',
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: SET_PLAYLISTS,
          playlists: data,
        });
      })
      .catch((err) => console.log(err));

    // axios({
    //   method: 'GET',
    //   url: '/api/users',
    // })
    //   .then(({ data }) => {
    //     console.log(data);
    //     dispatch({
    //       type: SET_USERS,
    //       users: data,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
