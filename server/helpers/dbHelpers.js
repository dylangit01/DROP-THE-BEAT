module.exports = (db) => {
	const getUsers = () => {
		const query = {
			text: 'SELECT * FROM users',
		};

		return db
			.query(query)
			.then((result) => result.rows)
			.catch((err) => err);
	};

	const getUserByEmail = (email) => {
		const query = {
			text: `SELECT * FROM users WHERE email = $1`,
			values: [email],
		};

		return db
			.query(query)
			.then((result) => result.rows[0])
			.catch((err) => err);
	};

	const addUser = (username, email, password) => {
		const query = {
			text: `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
			values: [username, email, password],
		};

		return db
			.query(query)
			.then((result) => result.rows[0])
			.catch((err) => err);
	};

		const getUsersPlaylists = () => {
			const query = {
				text: `SELECT users.id as user_id, username, email, playlists.id as playlist_id, name as playlist_name, image_url, rating
        FROM users
        INNER JOIN playlists
        ON users.id = playlists.user_id`,
			};

			return db
				.query(query)
				.then((result) => result.rows)
				.catch((err) => err);
		};

	// const getUsersPosts = () => {
	// 	const query = {
	// 		text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, title, content
  //       FROM users
  //       INNER JOIN posts
  //       ON users.id = posts.user_id`,
	// 	};

	// 	return db
	// 		.query(query)
	// 		.then((result) => result.rows)
	// 		.catch((err) => err);
	// };

		const getSongs = () => {
			const query = {
				text: 'SELECT * FROM songs',
			};

			return db
				.query(query)
				.then((result) => result.rows)
				.catch((err) => err);
		};
	
		const getPlaylists = () => {
			const query = {
				text: 'SELECT * FROM playlists',
			};

			return db
				.query(query)
				.then((result) => result.rows)
				.catch((err) => err);
		};
	
			const getPlaylistsSongs = (userID) => {
				const query = {
					text: 'SELECT playlists.name as playlist_name, songs.name as song_name FROM playlists JOIN playlists_songs ON playlists.id = playlist_id JOIN songs ON song_id = songs.id WHERE user_id = $1 GROUP BY playlists.id',
					values:[userID]
				};

				return db
					.query(query, values)
					.then((result) => result.rows)
					.catch((err) => err);
			};
	

	return {
		getUsers,
		getUserByEmail,
		addUser,
		getUsersPlaylists,
		getSongs,
		getPlaylists,
		getPlaylistsSongs,
	};
};
