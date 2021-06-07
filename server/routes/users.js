const express = require('express');
const router = express.Router();
const { getPlaylistsByUsers } = require('../helpers/dataHelpers');

module.exports = ({
	getUsers,
	getUserByEmail,
	addUser,
	getUsersPlaylists,
	getSongs,
	getPlaylists,
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

	router.get('/:id/playlists', (req, res) => {
		getUsersPlaylists()
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

	// Get songs
	router.get('/songs', (req, res) => {
		getSongs()
			.then((songs) => res.json(songs))
			.catch((err) =>
				res.json({
					error: err.message,
				})
			);
	});

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

	// May not need route for "getPlaylistsSongs" as getUsersPlaylists() seems have same result?
	

	return router;
};
