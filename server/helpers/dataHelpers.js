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
    });
  }

  return Object.values(playlistsByUsers);
};

const getSongsByPlaylists = (usersSongs) => {
  const songsByPlaylists = {};

  for (const song of usersSongs) {
    if (!songsByPlaylists[song.playlist_id]) {
      songsByPlaylists[song.playlist_id] = {
        playlistId: song.playlist_id,
        songs: [],
      };
    }

    songsByPlaylists[song.playlist_id].songs.push({
      userId: song.user_id,
      title: song.title,
      artist: song.artist,
      spotifyId: song.spotify_id,
      albumPhoto: song.album_photo,
      previewUrl: song.previewUrl,
    });
  }

  return songsByPlaylists;
};

module.exports = {
  getPlaylistsByUsers,
  getSongsByPlaylists,
};
