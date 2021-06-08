const express = require('express');
const router = express.Router();

module.exports = ({ getSongs }) => {
  // Get songs
  router.get('/', (req, res) => {
    getSongs(1)
      .then((songs) => res.json(songs))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
