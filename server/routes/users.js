const express = require('express');
const router = express.Router();
const { getPlaylistsByUsers } = require('../helpers/dataHelpers');

module.exports = ({
  getUsers,
  getUserByEmail,
  addUser,
  getUsersPlaylists,
  getPlaylistsSongs,
}) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post('/', (req, res) => {
    const { username, email, password } = req.body;

    getUserByEmail(email)
      .then((user) => {
        if (user) {
          res.json({
            msg: 'Sorry, a user account with this email already exists',
          });
        } else {
          return addUser(username, email, password);
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  /* GET playlists for a user */
  router.get('/:id/playlists', (req, res) => {
    // Currently this gets all the playlists for user 1 hardcoded
    getUsersPlaylists(1)
      .then((usersPlaylists) => {
        const formattedPlaylists = getPlaylistsByUsers(usersPlaylists);
        res.json(formattedPlaylists);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  /* GET songs for a user */
  router.get('/:id/songs', (req, res) => {
    // Currently this gets all the songs for user 1 hardcoded
    getPlaylistsSongs(1)
      .then((playlistsSongs) => {
        // const formattedSongs = getSongsByUsers(playlistsSongs);
        // res.json(formattedSongs);
        res.json(playlistsSongs);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
