// export const SET_USERS = 'SET_USERS';
export const SET_PLAYLISTS = 'SET_PLAYLISTS';
export const SET_PLAYLIST = 'SET_SONGS';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYLISTS:
      return { ...state, playlists: action.playlists, loading: false };

    // Set the current playlist id
    case SET_PLAYLIST:
      return { ...state, playlist: action.playlist };

    default:
      return state;
  }
};

export default dataReducer;
