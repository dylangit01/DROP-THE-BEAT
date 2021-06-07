const getPlaylistsByUsers = (usersPlaylists) => {
	const playlistsByUsers = {};

	for (let playlist of usersPlaylists) {
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

module.exports = {
	getPlaylistsByUsers,
};


// const getPostsByUsers = (usersPosts) => {
// 	const postsByUsers = {};

// 	for (let post of usersPosts) {
// 		if (!postsByUsers[post.user_id]) {
// 			postsByUsers[post.user_id] = {
// 				userId: post.user_id,
// 				firstName: post.first_name,
// 				lastName: post.last_name,
// 				email: post.email,
// 				posts: [],
// 			};
// 		}

// 		postsByUsers[post.user_id].posts.push({
// 			title: post.title,
// 			content: post.content,
// 		});
// 	}

// 	return Object.values(postsByUsers);
// };

// module.exports = {
// 	getPostsByUsers,
// };