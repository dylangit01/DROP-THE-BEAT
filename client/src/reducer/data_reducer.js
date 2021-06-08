// export const SET_USERS = 'SET_USERS';
export const SET_PLAYLISTS = 'SET_PLAYLISTS';
// export const SET_SONGS = 'SET_SONGS';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_PLAYLISTS:
      return { ...state, playlists: action.playlists, loading: false };

    default:
      return state;
  }
};

export default dataReducer;
