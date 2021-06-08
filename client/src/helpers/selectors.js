export function getSongsForPlaylists(playlists, songs) {
  const songsForPlaylists = {};

  if (!playlists[0]) return {};

  // Iterate over each playlistand get the array of song objects for each one
  const songsInPlaylist = playlists[0].playlists.map((playlist) => {
    const playlistId = playlist.id;

    if (!songs[playlistId]) {
      return [];
    }

    // Figure out how to make this not a nested array
    const songsArrayOfObject = songs[playlistId].songs;
    return { ...songsArrayOfObject };
  });

  // Attach array to object
  console.log(songsInPlaylist);

  // console.log(songs);
  // // Find the object in our state.days array who's name matches the provided day
  // const dayObjectFound = days.find((dayData) => dayData.name === day);
  // // Returns an empty array when: the day is not found/the days data is empty || no appointments for the day
  // if (!dayObjectFound || dayObjectFound.appointments.length === 0) return [];
  // // Iterate over appointmentIds array and for each id, return the corresponding appointment object from state.appointments
  // const appointmentIds = dayObjectFound.appointments;
  // const dailyAppointments = appointmentIds.map(
  //   (appointmentId) => appointments[appointmentId]
  // );
  return songsForPlaylists;
}
