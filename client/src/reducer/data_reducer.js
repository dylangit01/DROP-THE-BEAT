export const SET_USERS = 'SET_USERS';
export const SET_PLAYLISTS = 'SET_PLAYLISTS';
export const SET_SONGS = 'SET_SONGS';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users, loading: false };
    case SET_PLAYLISTS:
      return { ...state, playlists: action.playlists };
    case SET_SONGS:
      return { ...state, songs: action.songs };
    default:
      return state;
  }
};

export default dataReducer;
