const express = require('express');
const router = express.Router();
const { getPlaylistsByUsers } = require('../helpers/dataHelpers');

module.exports = ({ getUsersPlaylists }) => {
  router.get('/', (req, res) => {
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

  return router;
};
