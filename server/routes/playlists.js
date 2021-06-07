const express = require('express');
const router = express.Router();

module.exports = ({ getPlaylists }) => {
	// Get playlists
	router.get('/playlists', (req, res) => {
		getPlaylists()
			.then((playlists) => res.json(playlists))
			.catch((err) =>
				res.json({
					error: err.message,
				})
			);
	});

	return router;
};

	