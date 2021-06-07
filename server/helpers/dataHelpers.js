const getPlaylistsByUsers = (usersPlaylists) => {
  const playlistsByUsers = {};

  for (const playlist of usersPlaylists) {
    if (!playlistsByUsers[playlist.user_id]) {
      playlistsByUsers[playlist.user_id] = {
        userId: playlist.user_id,
        username: playlist.username,
        email: playlist.email,
        playlists: [],
      };
    }

    playlistsByUsers[playlist.user_id].playlists.push({
      name: playlist.playlist_name,
      image: playlist.image_url,
      rating: playlist.rating,
      songs: [],
    });
  }

  return Object.values(playlistsByUsers);
};

module.exports = {
  getPlaylistsByUsers,
};
