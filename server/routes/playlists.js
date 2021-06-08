const express = require('express');
const router = express.Router();

module.exports = ({ getPlaylists }) => {
  // Get playlists
  router.get('/', (req, res) => {
    getPlaylists(1)
      .then((playlists) => res.json(playlists))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
